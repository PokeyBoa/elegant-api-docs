# elegant-api-docs
An elegant and simple OpenAPI Documentation project based on `VuePress` + `MarkDown`

## Hint

> Through the capabilities provided by `vuepress`,
> This is an online web document that can be quickly built by focusing on writing markdown documents. 
> We use it to build project manuals and OpenAPI documents.

- Imitation of the API interface document layout of the Feishu open platform
- Since it is written in standard `MarkDown` (HTML), it is easy to integrate your own projects

## Directory tree

- List the key file contents. If it is deeply integrated, it is recommended to learn about vuepress

```shell
.
├── .gitignore
├── README.md
├── docs
│   ├── .vuepress
│   │   ├── client.ts
│   │   ├── config.ts            // configuration management
│   │   └── public
│   ├── index.md
│   ├── infra
│   │   ├── assets
│   │   │   └── images
│   │   ├── note
│   │   │   ├── 01.md
│   │   │   ├── 02.md
│   │   │   └── 03.md
│   │   ├── open-api             // your api docs
│   │   │   ├── access-token.md
│   │   │   ├── create-project.md
│   │   │   ├── delete-project.md
│   │   │   ├── list-project.md
│   │   │   ├── overview.md
│   │   │   ├── query-project.md
│   │   │   └── update-project.md
│   │   └── project.md
│   └── zh
├── package.json
└── yarn.lock
```


## How to run

- Run the perl script in the root path of the project

```shell
➜  elegant-api-docs git:(master)  ./start.pl
1. Build Environment
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 1.55s.

2. Startup project
yarn run v1.22.19
$ vuepress dev docs --config docs/.vuepress/config.ts
✔ Initializing and preparing data - done in 175ms
Port 8080 is in use, trying another one...

  vite v3.1.8 dev server running at:

  ➜  Local:   http://localhost:8081/docs/
```


## Web screenshot

- API documentation style

![image](https://user-images.githubusercontent.com/58482090/204122243-fa30e236-def4-42c6-bd7e-e1439a6617ce.png)

- A multi-level request body display example

![image](https://user-images.githubusercontent.com/58482090/204122379-38b3b34b-59b1-4c7e-82a8-41a36e28eceb.png)

- Standard and unified response body format, as well as troubleshooting suggestions

![image](https://user-images.githubusercontent.com/58482090/204122566-7169fe0b-48b3-44f6-84f9-df75a5e15fda.png)


