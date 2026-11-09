# Troubleshooting

> This guide contains general troubleshooting information.

Source: https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/troubleshooting/


This guide contains general troubleshooting information.

## Error: Get "http://localhost/api/v1/namespaces/...": dial tcp [::1]:80: connect: connection refused

Set `KUBECONFIG` and `KUBE_CONFIG_PATH` variables to the location of the `kubeconfig` file. The default location is `~/.kube/config`.

## pkg/util/store:driver (driver error)

The Things Stack runs Kubernetes jobs to initialize and migrate Postgres. This error can occur if the The Things Stack is accessed either before these jobs are run or if the jobs failed to execute. Check the status of the jobs for more details on what went wrong.

