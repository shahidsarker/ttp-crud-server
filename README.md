# ExpressJS - Starter Code

To start up dev server with nodemon:

```shell
// Mac/Linux
npm run dev
// Windows
npm run dev_windows
```

You can either:

- [Fork and/or clone this repo as a starting point](#Clone-repo)
- [Use Express Generator and refactor your code](#Express-Generator)

## Clone repo

Clone the repo and set up with your own GitHub account

## Express Generator

You can use this Express Generator command, indicating the directory to build your project in instead of `my-app`:

```shell
npx express-generator --no-view --git my-app
```

It will not set a template engine (no need since you're creating an API). It will also create a `.gitignore` file for you.

Move into the directory and install dependencies

```shell
cd my-app
npm install
```

This is a good point to initialize a git repository and make your initial commit.

Install these dependencies via `npm install`

```shell
npm i compression dotenv helmet pgtools sequelize
```

## Nodemon

I recommend installing `nodemon`

```shell
npm i -g nodemon
```

Add the following to the list of scripts in `package.json`:

```json=
"dev": "nodemon ./bin/www"
```

Nodemon will automatically reload the server when file changes are detected.

```shell
npm run dev
```
