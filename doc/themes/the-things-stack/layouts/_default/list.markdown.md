{{- $desc := partial "llms/description.html" . -}}
# {{ .Title }}
{{ with $desc }}
> {{ . }}
{{ end }}
Source: {{ .Permalink }}

{{ partial "llms/body.html" . }}
{{- with .Pages }}

## Pages in this section

{{ range .ByWeight -}}
- [{{ .Title }}]({{ .Permalink }}index.md){{ with partial "llms/description.html" . }}: {{ . }}{{ end }}
{{ end }}
{{- end }}
