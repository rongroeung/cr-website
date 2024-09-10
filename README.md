# Front-end Technical Documentation

`By: Kosalvireak Kheoun`

# Table of content

| Content                                 | Description                            |
| --------------------------------------- | -------------------------------------- |
| [Project Setup](#project-setup)         | Inilize development enviroment         |
| [Project Plugin](#project-plugin)       | Essential dependency for project       |
| [Folder Structure](#folder-structure)   | Project structure                      |
| [Commit Message](#commit-message)       | Convention for commit message          |
| [Text Sizing](#text-styling)            | Global class for text size             |
| [Global Properties](#global-properties) | Global css, variable, mixin, component |

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

## Project plugin

```
  VueJs (Option API) for entire structure.
  Vue Router for manage route.
  Vite for development server.
  Tailwind CSS for base styling.
  Flowbite for Tailwind UI components.
  Axios for http request to back-end.
  Vue-i18n for front-end localization. (support English and Khmer)
```

## Folder structure

    src
    ├── assets
    |   ├── css
    |   |   ├── reset.css
    |   |   ├── main.css
    |   ├── icon
    |   ├── img
    ├── components
    ├── lang
    |   ├── en
    |   ├── kh
    ├── layouts
    ├── router
    ├── util
    |   ├── constant.js
    |   ├── fallbackData.js
    |   ├── mixin.js
    └── views
    └── App.vue
    └── main.js

## Commit Message

```
feat (new feature)
fix (bug fix)
docs (changes to documentation)
style (formatting, missing semi colons, etc; no code change)
refactor (refactoring production code)
```

## Text Styling

> For normal paragraph text

```
text-sm md:text-lg
```

> For heading text

```
text-3xl md:text-4xl xl:text-5xl
```

## Global Properties

### Css class

Try to use class from Tailwinds CSS, but for some cases that will be used in many places or could modify consider create a custom class.

#### Centralize all styling including custom styling and utility class

`src/assets/css/main.css`

Dev must create custom class according to each section i.e

```
/* Display section */

.flex-important {
  display: flex !important;
}

/* Height and Width section */

.max-w-34 {
  max-width: 34rem;
}
```

#### Extend custom colors, height, width, from Tailwind CSS

Since we have main.css for custom styling, Dev should only extend colors... Global css is easire to search and debugge then Extended CSS.

`tailwind.config.js`

```
colors: {
  primary: '#f5a807',
  secondary: '#021b4b',
  'cr-gray':'#f4f5f7',
  'sub-primary': '#f5aa07c5',
  'sub-secondary': '#01153a'
},
```

#### Scope style

`<style scoped></style>`

Each .vue file has it's local style. Make use of it for specific component without affect other components. It's make component has the same look across application.

```
<style scoped>
.cr-button {
  color: white;
}
.cr-button-hover:hover {
  color: var(--secondary-color);
  background-color: var(--text-color);
  transition: 0.3s;
}
</style>

```

### Variables

We sometimes tent to create a global variable to use across application so that when something need to change we only need to change in one place.

`src/main.js`

```
// Register data //
import fallbackData from '@/util/fallbackData'

app.config.globalProperties.$backendUrl = 'http://38.47.39.132:7001/'
app.config.globalProperties.$fallbackData = fallbackData
```

We simply access global variable by keyword `this.`

`const buildUrl = this.$backendUrl`

### Mixins

We create global mixin to use across different application.

Inside mixin there are data, methods, computed ... just like .vue component

`src/main.js`

```
// Register mixin //
import { fetchDataMixin } from '@/util/mixin'

app.mixin(fetchDataMixin)
```

We simply access mixin without import & register in component

`const response = await this.fetchData('01002001')`

### Components

When register a component as global component any where can use without import and register in component tag.

`src/main.js`

```
// Register global component //
import ComingSoon from './components/ComingSoon.vue'

app.component('ComingSoon', ComingSoon)
```

We simply access without import & register in component

`<ComingSoon />`
