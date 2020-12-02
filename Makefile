# Copyright © 2020 The Things Network Foundation, The Things Industries B.V.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

GO = go
HUGO = $(GO) run -tags extended github.com/gohugoio/hugo
YARN_DEPS = doc/themes/the-things-stack/node_modules
FREQUENCY_PLAN_URL ?= \
https://raw.githubusercontent.com/TheThingsNetwork/lorawan-frequency-plans/master/frequency-plans.yml
FREQUENCY_PLAN_DEST = doc/data/frequency-plans.yml
DOC_ROOT = doc
PUBLIC_DEST = ../public # Relative to DOC_ROOT
INTERNAL_DEST = ../internal # Relative to DOC_ROOT
ENVIRONMENT ?= gh-pages
HUGO_BASE_URL ?= https://thethingsstack.io

.PHONY: default
default: server

.PHONY: clean.internal
clean.internal:
	cd $(DOC_ROOT) && rm -rf $(INTERNAL_DEST)

.PHONY: clean.public
clean.public:
	cd $(DOC_ROOT) && rm -rf $(PUBLIC_DEST)

.PHONY: clean.deps
clean.deps:
	rm -rf $(FREQUENCY_PLAN_DEST)
	rm -rf $(YARN_DEPS)

.PHONY: build.internal
build.internal: deps
	$(HUGO) --source $(DOC_ROOT) --destination $(INTERNAL_DEST)

.PHONY: build.public
build.public: deps
	$(HUGO) --source $(DOC_ROOT) --destination $(PUBLIC_DEST) --baseURL $(HUGO_BASE_URL) --environment $(ENVIRONMENT)

.PHONY: server
server: deps
	$(HUGO) server -s $(DOC_ROOT) --environment $(ENVIRONMENT)

.PHONY: new
new:
	$(HUGO) new --kind section-bundle -s $(DOC_ROOT) $(filter-out $@,$(MAKECMDGOALS))
%:
	@:

.PHONY: deps
deps: hooks $(FREQUENCY_PLAN_DEST) | go.deps js.deps

$(FREQUENCY_PLAN_DEST):
	curl -o $(FREQUENCY_PLAN_DEST) $(FREQUENCY_PLAN_URL)

.PHONY: go.deps
go.deps:
	go mod download

.PHONY: js.deps
js.deps: $(YARN_DEPS)

$(YARN_DEPS):
	@if ! [ -x "$$(command -v yarn)" ]; then\
		echo "Installing yarn";\
			curl -o- -L https://yarnpkg.com/install.sh | bash;\
	fi
	yarn --cwd doc/themes/the-things-stack/

.PHONY: hooks
hooks:
ifeq (,$(wildcard .git/hooks/commit-msg))
	go run .hooks/install-hooks.go
endif

.PHONY: init
init: deps
