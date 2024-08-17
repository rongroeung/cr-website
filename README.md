# Development Branch

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
text-sm md:text-base
```

> For heading text
```
text-2xl md:text-4xl xl:text-5xl
```


### Conventional order of CSS properties

```
element {
  /* I. Microcosm of All Properties */
  content:           /* What it is. */
  display:           /* Where or whether it is. */
  position:              /* Relationships to others. */

  /* A. Content Properties † */
  background-image:   /* 1. Internal content styling ... */
  background- ...
  border:
  opacity:

  font-family:       /* 2. Typographic styling ...*/
  font- ...
  text- ...
  color:

  /* B. Display Properties */
  box-sizing:            /* Ordered by Box Model ...*/
  height:
  width:
  max- ...
  padding:
  margin:

  /* C. Relational Properties */
  float:
  order:
  z-index:

  /* D. State Properties */
  cursor:
  animation:
  transition:
}

```
