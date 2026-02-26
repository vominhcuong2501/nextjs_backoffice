# Starter for Next JS 15+, Tailwind CSS 3 and TypeScript

🚀 Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js (app routing), TypeScript, ESLint, Prettier, Husky, Lint-Staged, React Testing Library, PostCSS, Tailwind CSS.

## :rocket: Features

Developer experience first:

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Absolute Imports using `@` prefix
- Nextjs custom layouts
- [T3 env](https://env.t3.gg/) Manage your environment variables with ease
- Message convention for git

## :information_source: How To Use

## 🚀 Deploy to production

You can see the results locally in production mode with:
=> Check pm2 status (pm2 logrotate)

```shell
./init_pm2.sh
mv

```

```shell
pnpm start
```

## To production: pm2 start ecosystem.config.js

## :gear: Generating components

## : .fttemplates: Generating components

Install VsCode Extension
https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure

```bash
pnpm generate Button
```

Result (if you chose an atom component):

```
└── components
        └── Button
          ├── index.ts
          ├── Button.stories.tsx
          ├── Button.test.tsx
          └── Button.tsx
```

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-awesome-contribution`;
3. Commit your changes: `git commit -m 'feat: Add some awesome contribution'`;
4. Push to the branch: `git push origin my-awesome-contribution`.

## License

Licensed under the MIT License, Copyright © 2025

## NOTE:

- git config --global core.autocrlf false
- postman: https://documenter.getpostman.com/view/24032459/2sB2cShPYi#bd960ebf-0f59-404b-b276-8ba2204adf8b

---

## LINUX DEPLOY

cp deploy.sh.example-sandbox deploy.sh
cp .env.example .env

// Sua noi dung file env, sua port

# sed -i 's/\r$//' deploy.sh

# chmod +x deploy.sh

./deploy.sh

vi .env

vao mode sua file: nhan i

thoat mode nhan esc

luu nhan => :wq
