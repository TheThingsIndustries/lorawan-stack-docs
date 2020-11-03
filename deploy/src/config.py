#!/bin/python3
import troposphere as T

AVAILABILITY_ZONES = ['a', 'b', 'c']
PROJECTS = ["dev", "prod"]


def make_template(description):
    template = T.Template()
    template.set_version("2010-09-09")
    template.set_description(description)
    template.add_resources = lambda resources: [template.add_resource(resource) for resource in resources]
    return template
