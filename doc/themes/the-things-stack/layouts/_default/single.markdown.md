{{- $desc := partial "llms/description.html" . -}}
# {{ .Title }}
{{ with $desc }}
> {{ . }}
{{ end }}
Source: {{ .Permalink }}

{{ partial "llms/body.html" . }}
