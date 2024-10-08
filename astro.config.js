import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import starlightTypeDoc from "starlight-typedoc";

export default defineConfig({
  site: "https://docs.toolcog.com",
  integrations: [
    starlight({
      title: "Toolcog",
      description: "AI Framework for Tool Augmented Generation (TAG)",
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/knapped-obsidian.svg",
      },
      customCss: ["./src/styles/theme.css"],
      expressiveCode: {
        themes: ["github-dark-high-contrast", "github-light-high-contrast"],
        useStarlightUiThemeColors: true,
      },
      editLink: {
        baseUrl: "https://github.com/toolcog/toolcog-docs/edit/main",
      },
      social: {
        github: "https://github.com/toolcog/toolcog",
        "x.com": "https://x.com/toolcog",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      sidebar: [
        {
          label: "Get Started",
          items: [
            {
              slug: "intro/repl",
              label: "REPL",
            },
            {
              slug: "intro/compiler",
              label: "Compiler",
            },
            {
              slug: "intro/framework",
              label: "Framework",
            },
          ],
        },
        {
          label: "Tool Augmented Generation",
          items: [
            {
              slug: "framework/why-tag",
            },
            {
              slug: "framework/llm-tools",
            },
            {
              slug: "framework/generative-functions",
            },
            {
              slug: "framework/idiomatic-indexes",
            },
            {
              slug: "framework/ai-agents",
            },
            {
              slug: "framework/rag-tag",
            },
          ],
        },
        {
          label: "Runtime Configuration",
          items: [
            {
              slug: "runtime/model-plugins",
            },
            {
              slug: "runtime/agent-context",
            },
            {
              slug: "runtime/embedded-indexes",
            },
            {
              slug: "runtime/manifest-overrides",
            },
          ],
        },
        {
          label: "Application Integration",
          items: [
            {
              slug: "integration/javascript-engines",
            },
            {
              slug: "integration/web-servers",
            },
            {
              slug: "integration/serverless-functions",
            },
            {
              slug: "integration/event-processors",
            },
          ],
        },
        {
          label: "LLM Toolkits",
          items: [
            {
              slug: "toolkits/anatomy",
            },
            {
              slug: "toolkits/system-services",
            },
            {
              slug: "toolkits/user-interaction",
            },
            {
              slug: "toolkits/sdk-wrappers",
            },
            {
              slug: "toolkits/rest-bridges",
            },
            {
              slug: "toolkits/query-engines",
            },
            {
              slug: "toolkits/event-sources",
            },
          ],
        },
        {
          label: "Autonomous Agents",
          items: [
            {
              slug: "agents/actors",
            },
            {
              slug: "agents/communication",
            },
            {
              slug: "agents/self-scheduling",
            },
            {
              slug: "agents/pub-sub-drivers",
            },
            {
              slug: "agents/flocking-and-swarming",
            },
            {
              slug: "agents/human-in-the-loop",
            },
          ],
        },
        {
          label: "API",
          items: [
            {
              label: "Framework",
              collapsed: true,
              items: [
                {
                  slug: "api/core/module",
                },
                {
                  slug: "api/runtime/module",
                },
              ],
            },
            {
              label: "Plugins",
              collapsed: true,
              items: [
                {
                  slug: "api/anthropic/module",
                },
                {
                  slug: "api/openai/module",
                },
              ],
            },
            {
              label: "Adapters",
              collapsed: true,
              items: [
                {
                  slug: "api/node/module",
                },
                {
                  slug: "api/node/loader/module",
                },
                {
                  slug: "api/node/register/module",
                },
              ],
            },
            {
              label: "Libraries",
              collapsed: true,
              items: [
                {
                  slug: "api/compiler/module",
                },
                {
                  slug: "api/compiler/cli/module",
                },
                {
                  slug: "api/repl/module",
                },
                {
                  slug: "api/util/module",
                },
                {
                  slug: "api/util/async/module",
                },
                {
                  slug: "api/util/cache/module",
                },
                {
                  slug: "api/util/emit/module",
                },
                {
                  slug: "api/util/json/module",
                },
                {
                  slug: "api/util/queue/module",
                },
                {
                  slug: "api/util/task/module",
                },
                {
                  slug: "api/util/timer/module",
                },
                {
                  slug: "api/util/tty/module",
                },
                {
                  slug: "api/util/tui/module",
                },
              ],
            },
          ],
        },
      ],
      plugins: [
        starlightBlog({
          authors: {
            chris: {
              name: "Chris Sachs",
            },
            brad: {
              name: "Brad Johnson",
            },
          },
        }),
        starlightTypeDoc({
          output: "api",
          pagination: true,
          typeDoc: {
            entryPointStrategy: "packages",
            entryFileName: "module",
            outputFileStrategy: "modules",
            excludeScopesInPaths: true,
            mergeReadme: true,
          },
          entryPoints: [
            "./repos/toolcog/packages/framework/compiler",
            "./repos/toolcog/packages/framework/compiler/cli",
            "./repos/toolcog/packages/framework/core",
            "./repos/toolcog/packages/framework/repl",
            "./repos/toolcog/packages/framework/runtime",
            "./repos/toolcog/packages/framework/util",
            "./repos/toolcog/packages/framework/util/async",
            "./repos/toolcog/packages/framework/util/cache",
            "./repos/toolcog/packages/framework/util/emit",
            "./repos/toolcog/packages/framework/util/json",
            "./repos/toolcog/packages/framework/util/queue",
            "./repos/toolcog/packages/framework/util/task",
            "./repos/toolcog/packages/framework/util/timer",
            "./repos/toolcog/packages/framework/util/tty",
            "./repos/toolcog/packages/framework/util/tui",
            "./repos/toolcog/packages/plugins/anthropic",
            "./repos/toolcog/packages/plugins/openai",
            "./repos/toolcog/packages/adapters/node",
            "./repos/toolcog/packages/adapters/node/loader",
            "./repos/toolcog/packages/adapters/node/register",
            "./repos/toolcog/packages/toolcog",
          ],
          tsconfig: "./repos/toolcog/tsconfig.json",
        }),
      ],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
