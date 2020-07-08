# Copyright © 2019 The Things Network Foundation, The Things Industries B.V.
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
FREQUENCY_PLAN_URL = https://raw.githubusercontent.com/TheThingsNetwork/lorawan-frequency-plans/master/frequency-plans.yml
FREQUENCY_PLAN_DEST = doc/data/frequency-plans.yml
PUBLIC_DEST = public
INTERNAL_DEST = internal
ENVIRONMENT = gh-pages

.PHONY: default
default: build.internal

.PHONY: clean.internal
clean.internal:
	rm -rf $(INTERNAL_DEST)

.PHONY: clean.public
clean.public:
	rm -rf $(PUBLIC_DEST)

.PHONY: build.internal
build.internal: $(INTERNAL_DEST) deps
	$(HUGO) -d $(INTERNAL_DEST)

.PHONY: build.public
build.public: $(PUBLIC_DEST) deps
	$(HUGO) -s "./doc" -d $(PUBLIC_DEST) -b $(HUGO_BASE_URL) --environment $(ENVIRONMENT)

.PHONY: server
server: deps
	$(HUGO) server -s "./doc" --environment $(ENVIRONMENT)

.PHONY: deps
deps: frequency-plan-deps | $(YARN_DEPS)

.PHONY: frequency-plan-deps
frequency-plan-deps:
	curl -o $(FREQUENCY_PLAN_DEST) $(FREQUENCY_PLAN_URL)

$(YARN_DEPS):
	@if ! [ -x "$$(command -v yarn)" ]; then\
		echo "Installing yarn";\
	    curl -o- -L https://yarnpkg.com/install.sh | bash;\
	fi
	yarn --cwd doc/themes/the-things-stack/
