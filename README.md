# Front-end Technical Documentation

`By: Kosalvireak Kheoun`

# Table of content

| Content                                 | Description                            |
| --------------------------------------- | -------------------------------------- |
| [Website Admin](#crossroads-admin)      | For Admin User                         |
| [Project Setup](#project-setup)         | Initialize development environment         |
| [Project Plugin](#project-plugin)       | Essential dependency for project       |
| [Folder Structure](#folder-structure)   | Project structure                      |
| [Commit Message](#commit-message)       | Convention for commit message          |
| [Text Sizing](#text-styling)            | Global class for text size             |
| [Global Properties](#global-properties) | Global css, variable, mixin, component |

## Crossroads Admin

We allow website admin to make change to most of the data via admin panel https://crossroadscambodia.church/admin

### Key terms admin must know

#### Data structure
```
content: {
    id: ,                 required
    title: '',            required
    kh_title: '',         required
    sub_title: '',        optional
    kh_sub_title: '',     optional
    description: [],      optional
    media: [],            optional
    youtube: []           optional
}
```

```
description: {
    text: '',               English description
    kh_text: '',            Khmer description
}
```

```
media: {
    url: '',                image url
    name: '',               description image (use for <img alt="..."/>)
}
```

```
youtube: {
    title: '',              video's title
    video_url: '',          video's link
    duration: '',           video's duration
    publish_date: '',       video post data
    thumbnail_url: '',      video thumbnail image url
    thumbnail_name: ''      describe thumbnail image  (use for <img alt="..."/>)
}
```

#### Content Id

It represent a section id and a content object id `XXYYYZZZ`

`XX` : Page Id

`YYY` : Section Id

`ZZZ` : Item Id (item inside content)

    i.e 03002002, 12005001

Page Id

    01: home,
    02: about,
    03: church-board,
    04: pastoral-team,
    05: milestone,
    06: ministries,
    07: campus-ministry,
    08: worship-ministry,
    09: sport-ministry,
    10: mission,
    11: church-outreach,
    12: micro-enterprise-project,
    13: certificate-in-ministry-leadership,
    14: sponsor-a-child,
    15: get-involved,
    16: short-term-missions,
    17: professional-equipper,
    18: volunteer,
    19: give,
    20: news,
    21: sunday-sermons,
    22: events,
    23: church-news,
    24: contact

We can find `content_id` belong to specific section by open `DevTools` by `Ctrl + Shift + i` or `Right click > Inspect` we need to know this id to update content in admin panel

![Content Id image](/src/assets/img/content_id.png)

#### Give Page

Give Page https://crossroadscambodia.church/get-involved/give

Video are changeable and store in media.url of content_id #19002001

We can't use normal youtube URL. We need to get embedded url by

    Youtube video > Share > Embed > Copy only url

i.e. https://www.youtube.com/embed/7QTDW1hW2ck?si=Grn_CRvssTqOBiPw

Url must include `/embed/`

----
### Admin Eligibility

Available functions are  [Update content](#update-content) , [Add new content](#add-new-content-for-developer-only)

#### Update content

( delete description, media, youtube and add new description, media, youtube )

#### Add new content [For Developer Only](#add-new-content-for-developer-only)

Some page need to add new code to handle new content. Some page will automatically push new content to current UI ( PastoralTeam Page, Milestone Page, Contact Page, etc ).

## Auto render content

New content consider as an item  `ZZZ` <==  `XXYYYZZZ`

When add new item ( auto render content ) to a section we must know exactly what id we currently on. leading id `XXYYY` can't be change, we only change item id `ZZZ` we render ascending order thus check existing content before add new.

Below is a leading 5 digits id of each section of pages

[PastoralTeam Page](#https://crossroadscambodia.church/about/pastoral-team)

This page has 3 parts namely Senior Pastors, Full-Time Co-Workers, Part-Time Co-Workers

    Senior Pastors          : 04002
    Full-Time Co-Workers    : 04003
    Part-Time Co-Workers    : 04004

[Milestone Page](#https://crossroadscambodia.church/about/milestone)

    Milestone   : 05002

[News Page](#https://crossroadscambodia.church/news)

    News        : 20002

[Contact Page](#https://crossroadscambodia.church/contact)

    Contact         : 24002

## Project Setup

    npm install

### Compile and Hot-Reload for Development

    npm run dev

### Compile and Minify for Production

    npm run build

### Lint with [ESLint](https://eslint.org/)

(for analyze code)

    npm run lint

## Project plugin

    VueJs (Option API) for entire structure.
    Vue Router for manage route.
    Vite for development server.
    Tailwind CSS for base styling.
    Flowbite for Tailwind UI components.
    Axios for http request to back-end.
    Vue-i18n for front-end localization. (support English and Khmer)

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

    feat (new feature)
    fix (bug fix)
    docs (changes to documentation)
    style (formatting, missing semi colons, etc; no code change)
    refactor (refactoring production code)

## Text Styling

> For normal paragraph text

    text-sm leading-6 md:leading-8 md:text-lg

> For heading text

    text-3xl md:text-4xl xl:text-5xl

### Text bold

used this website to generate bold text, and simply copy and paste to admin form

    https://lingojam.com/BoldTextGenerator

## Global Properties

### Css class

Try to use class from Tailwinds CSS, but for some cases that will be used in many places or could modify consider create a custom class.

#### Centralize all styling including custom styling and utility class

`src/assets/css/main.css`

Dev must create custom class according to each section i.e

    /* Display section */

    .flex-important {
      display: flex !important;
    }

    /* Height and Width section */

    .max-w-34 {
      max-width: 34rem;
    }

#### Extend custom colors, height, width, from Tailwind CSS

Since we have main.css for custom styling, Dev should only extend colors... Global css is easire to search and debugge then Extended CSS.

`tailwind.config.js`

    colors: {
      primary: '#f5a807',
      secondary: '#021b4b',
      'cr-gray':'#f4f5f7',
      'sub-primary': '#f5aa07c5',
      'sub-secondary': '#01153a'
    },

#### Scope style

`<style scoped></style>`

Each .vue file has it's local style. Make use of it for specific component without affect other components. It's make component has the same look across application.

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

### Variables

We sometimes tent to create a global variable to use across application so that when something need to change we only need to change in one place.

`src/main.js`

    // Register data //
    import fallbackData from '@/util/fallbackData'

    app.config.globalProperties.$backendUrl = 'http://38.47.39.132:7001/'
    app.config.globalProperties.$fallbackData = fallbackData

We simply access global variable by keyword `this.`

`const buildUrl = this.$backendUrl`

### Mixins

We create global mixin to use across different application.

Inside mixin there are data, methods, computed ... just like .vue component

`src/main.js`

    // Register mixin //
    import { fetchDataMixin } from '@/util/mixin'

    app.mixin(fetchDataMixin)

We simply access mixin without import & register in component

`const response = await this.getContentById('01002001')`

### Components

When register a component as global component any where can use without import and register in component tag.

`src/main.js`

    // Register global component //
    import ComingSoon from './components/ComingSoon.vue'

    app.component('ComingSoon', ComingSoon)

We simply access without import & register in component

`<ComingSoon />`
