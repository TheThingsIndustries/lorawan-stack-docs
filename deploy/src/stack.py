#!/bin/python3
import os
os.environ["TROPO_REAL_BOOL"] = "True"  # Before we import troposphere
from collections import OrderedDict
from config import *
import yaml
from troposphere import ecs, logs, iam, secretsmanager, ec2, elasticloadbalancingv2 as elb2


def make_service_template():
    template = make_template("Docs service template for thethingsindustries.com")

    def import_value(project, name):
        if project not in PROJECTS:
            raise ValueError
        return T.ImportValue(f'tticom-{project}-{name}')

    service_params = {
        "dev": {
            "TaskDesiredCount": 1,
        },
        "prod": {
            "TaskDesiredCount": T.Ref("TaskDesiredCount"),
        },
    }

    for name, type, default, description in [
        ("DockerImage", "String", "thethingsindustries/thethingsindustries:docs", "Docker image"),
        ("CPU", "String", "256", "CPU limit of a container"),
        ("Memory", "String", "512", "Memory limit of a container"),
        ("TaskDesiredCount", "Number", 2, "Number of container instances to run (prod only)"),
    ]:
        if type == "String":
            if default == '':
                param = T.Parameter(name, AllowedPattern=".+", Type=type)
            else:
                param = T.Parameter(name, AllowedPattern=".+", Default=default, Type=type)
        elif type == "Boolean":
            param = T.Parameter(name, AllowedValues=["true", "false"], Default=default, Type="String")
        else:
            param = T.Parameter(name, Default=default, Type=type)
        template.add_parameter(param)
        template.set_parameter_label(param, description)

    execution_role = T.iam.Role("TaskExecutionRole",
                                AssumeRolePolicyDocument={
                                    "Statement": [{
                                        "Effect": "Allow",
                                        "Principal": {"Service": ["ecs-tasks.amazonaws.com"]},
                                        "Action": ["sts:AssumeRole"]
                                    }]
                                },
                                Policies=[iam.Policy("SecretsPolicy",
                                                     PolicyName="docs-execution",
                                                     PolicyDocument={
                                                         "Version": "2012-10-17",
                                                         "Statement": [
                                                             {
                                                                 "Action": [
                                                                     "secretsmanager:GetSecretValue",
                                                                 ],
                                                                 "Effect": "Allow",
                                                                 "Resource": [import_value(p, "DockerLogin") for p in
                                                                              PROJECTS],
                                                             },
                                                             {
                                                                 "Action": [
                                                                     "logs:CreateLogStream",
                                                                     "logs:DescribeLogStreams",
                                                                     "logs:PutLogEvents",
                                                                 ],
                                                                 "Effect": "Allow",
                                                                 "Resource": [import_value(p, "LogGroupArn") for p in
                                                                              PROJECTS],
                                                             },
                                                         ]
                                                     })],
                                RoleName="docs-ExecutionRole",
                                )
    template.add_resource(execution_role)

    task_definitions = {
        project: T.ecs.TaskDefinition("TaskDefinition" + project.capitalize(),
                                      ContainerDefinitions=[
                                          T.ecs.ContainerDefinition(
                                              Image=T.Ref("DockerImage"),
                                              LogConfiguration=T.ecs.LogConfiguration(
                                                  LogDriver="awslogs",
                                                  Options={
                                                      "awslogs-group": f'tticom-{project}-LogGroup',
                                                      "awslogs-region": T.Ref("AWS::Region"),
                                                      "awslogs-stream-prefix": "docs-" + project,
                                                  },
                                              ),
                                              Name="docs",
                                              PortMappings=[
                                                  T.ecs.PortMapping(ContainerPort=80, Protocol="tcp")],
                                              RepositoryCredentials=T.ecs.RepositoryCredentials(
                                                  CredentialsParameter=import_value(project,
                                                                                    "DockerLogin"),
                                              ),
                                          )
                                      ],
                                      Cpu=T.Ref("CPU"),
                                      ExecutionRoleArn=T.Ref(execution_role),
                                      Family="docs-" + project,
                                      Memory=T.Ref("Memory"),
                                      NetworkMode="awsvpc",
                                      RequiresCompatibilities=["FARGATE"],
                                      ) for project in PROJECTS
    }
    template.add_resources(task_definitions.values())

    ecs_cluster = T.ecs.Cluster("ECSTaskCluster",
                                ClusterName="docs-cluster",
                                )
    template.add_resource(ecs_cluster)

    services = {
        project: T.ecs.Service("ECSService" + project.capitalize(),
                               Cluster=T.Ref(ecs_cluster),
                               DesiredCount=service_params[project]["TaskDesiredCount"],
                               HealthCheckGracePeriodSeconds=60,
                               LaunchType="FARGATE",
                               LoadBalancers=[T.ecs.LoadBalancer(
                                   ContainerName="docs",
                                   ContainerPort=80,
                                   TargetGroupArn=import_value(project, "DocsTargetGroup"),
                               )],
                               Metadata={  # https://github.com/aws-cloudformation/cfn-python-lint/issues/1706
                                   "cfn-lint": {
                                       "config": {
                                           "ignore_checks": ["E3002"]
                                       }
                                   }
                               },
                               NetworkConfiguration=T.ecs.NetworkConfiguration(
                                   AwsvpcConfiguration=T.ecs.AwsvpcConfiguration(
                                       AssignPublicIp="ENABLED",
                                       SecurityGroups=[import_value(project, "AppSecurityGroup")],
                                       Subnets=[import_value(project, "SubnetAZ" + az) for az in AVAILABILITY_ZONES]
                                   )
                               ),
                               ServiceName="docs-" + project,
                               TaskDefinition=T.Ref(task_definitions[project]),
                               ) for project in PROJECTS
    }
    template.add_resources(services.values())
    return template


def print_template(template, name):
    dictionary = template.to_dict()
    ordered_dictionary = OrderedDict()
    for key in ["AWSTemplateFormatVersion", "Description", "Metadata", "Parameters", "Conditions", "Resources",
                "Outputs"]:
        if key in dictionary:
            ordered_dictionary[key] = dictionary[key]
    for key in dictionary.keys():
        if key not in ordered_dictionary:
            ordered_dictionary[key] = dictionary[key]
    with open(f"{name}.yaml", 'w') as file:
        for key, value in ordered_dictionary.items():
            yaml.dump({key: value}, file, default_flow_style=False, allow_unicode=True)


print_template(make_service_template(), "service")
