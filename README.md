# Front-end Technical Documentation

`By: Kosalvireak Kheoun`

# Table of content

| Content                                                                                                       | Description                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [project setup](https://github.com/rongroeung/cr-website/tree/development?tab=readme-ov-file#project-setup)   | inilize development enviroment |
| [commit message](https://github.com/rongroeung/cr-website/tree/development?tab=readme-ov-file#commit-message) | convention for commit message  |
| [text size](https://github.com/rongroeung/cr-website/tree/development?tab=readme-ov-file#text-styling)        | global class for text style    |

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

(for analyze code)

```sh
npm run lint
```

### Commit Message

```
feat (new feature)
fix (bug fix)
docs (changes to documentation)
style (formatting, missing semi colons, etc; no code change)
refactor (refactoring production code)
```

### Text Styling

> For normal paragraph text

```
text-sm md:text-lg
```

> For heading text

```
text-2xl md:text-4xl xl:text-5xl
```
