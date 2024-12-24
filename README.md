
`By: Kosalvireak Kheoun`

# Table of contents for Admin

| Content                                            | Description                                |
| -------------------------------------------------- | ------------------------------------------ |
| [Website Admin and Eligibility](#crossroads-admin) | For Admin User                             |
| [Special Page](#special-page)                      | Page with different structure of data      |
| [Auto render content](#auto-render-content)        | Content that render without need of coding |

# Table of contents for Developer

| Content                                 | Description                            |
| --------------------------------------- | -------------------------------------- |
| [Application Architecture](#architechture) | Application Architecture of website |
| [Project Setup](#project-setup)         | Initialize development environment     |
| [Project Plugin](#project-plugin)       | Essential dependency for project       |
| [Folder Structure](#folder-structure)   | Project structure                      |
| [Global Styling](#global-styling)       | Global class for text, image size      |
| [Global Properties](#global-properties) | Global css, variable, mixin, component |

## Crossroads Admin

We allow the website admin to make changes to most of the data viathe admin site https://crossroadscambodia.church/admin

### Key terms admin must know

#### Data structure

```
content: {
    id: ,                 required
    title: '',            required
    kh_title: '',         required
    sub_title: '',        optional
    kh_sub_title: '',     optional
    create_time: '',     optional
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
    note: '',               for additional note to each image
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

structure of the entire content id `XXYYYZZZ`

`XX` : Page Id

`YYY` : Section Id

`ZZZ` : Content Id

    e.g 03002002 mean: page 03 ( page church-board), section 002, and content 002

Page Id

    01: home,
    02: about,
    03: church-board,
    04: pastoral-team,
    05: milestone,
    06: ministries,
    07: campus-ministry,
    08: sunday-fellowship,
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

We can find `content_id` that belong to any text in `DevTools` by `Ctrl + Shift + i` or `Right click > Inspect` we need to know this id to update content in admin panel

![Content Id image](/src/assets/img/content_id.png)

### Available functions are [Update content](#update-content) , [Add new content](#add-new-content-for-developer-only)

#### Update content

( delete description, media, youtube and add new description, media, youtube )

#### Add new content

Some page need to add new code to handle new content. Some page will automatically push new content to current UI ( PastoralTeam Page, Milestone Page, Contact Page, etc ).

## Special Page

### [Give Page](#https://crossroadscambodia.church/get-involved/give)

Video are changeable and store in media.url of content_id `#19002001`

We can't use normal youtube URL. We need to get embedded url

    Youtube video > Share > Embed > Copy only url

e.g. https://www.youtube.com/embed/7QTDW1hW2ck?si=Grn_CRvssTqOBiPw

### Paypal

--updated-- Currently we simply use paypal button

https://www.paypal.com/mep/dashboard > Pay links & buttons > Payment Button > Create It

![Content Id image](/src/assets/img/paypal.png)

## Deprecated

    We use paypal embeded button in our give page and it need `cliend_id`

    so `client_id` store in title field of `content_id` `19003001`

    QR code image for give page store in `media[0].url` field of the same object

### Sunday Sermons

`Video Publish Date` must follow this format `17 June 2024` or `18 February 2024` if not, sort by `latest` or `newest` doesn't work

## Auto render content

We support add new content to some page listed below, newest content display below previous content.

We require to know the previous content id: An id contain leading id and last 3 digits id

leading id `XXYYY` can't be change, we only increase 3 digits `ZZZ`.

e.g latest content is `04002004` new content id must be `04002005`

Below is a leading 5 digits id of each section of pages

[PastoralTeam Page](#https://crossroadscambodia.church/about/pastoral-team)

This page has 3 parts namely Senior Pastors, Full-Time Co-Workers, Part-Time Co-Workers

    Senior Pastors          : 04002
    Full-Time Co-Workers    : 04003
    Part-Time Co-Workers    : 04004

[Milestone Page](#https://crossroadscambodia.church/about/milestone)

    Milestone               : 05002

[Ministries Page](#https://crossroadscambodia.church/ministries)

    Ministries               : 06002

[Campus Ministry Page](#https://crossroadscambodia.church/ministries/campus-ministry)

    Campus Ministry          : 07002

[Volunteer Page](#https://crossroadscambodia.church/get-involved/volunteer)

    opportunities item      : 18003

[News Page](#https://crossroadscambodia.church/news)

    News                    : 20002

[Sunday Sermons Page](#https://crossroadscambodia.church/news/sunday-sermons)

    SundaySermons           : 21002

[Events Page](#https://crossroadscambodia.church/news/events)

    Events                  : 22002

[Contact Page](#https://crossroadscambodia.church/contact)

    Contact                 : 24002


## Architechture

[drawio](#https://drive.google.com/file/d/1Okoszd_MMkYCFDu9LlS1LtYLB2lnyEUd/view?usp=sharing)


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
    |   ├── admin               // components used in admin page
    |   ├── ...                 // all user's components
    ├── lang
    |   ├── en
    |   ├── kh
    ├── layouts
    |   ├── ...                 // components for layout
    ├── router
    |   ├── index.js
    ├── util
    |   ├── constant.js
    |   ├── mixin.js
    ├── views
    |   ├── admin              // admin views
    |   ├── ...                // user views
    └── App.vue
    └── main.js

## Global Styling

### text and background color

Below are the color that being use in project. Please refer to `main.css`

    --primary-color: #f5a807;
    --secondary-color: #021b4b;
    --sub-primary-color: #f5aa07c5;
    --sub-secondary-color: #01153a;

    --color-cr-gray-darker: #1f2937;
    --color-cr-gray-dark: #6b7280;
    --color-cr-gray-light: #f4f5f7;
    white: #FFFFFF

### Image Sizing

`md = 770px`
`sm = 320px`

Util class

`cr-img-md-16-9` ratio `16/9` used in news, event

`cr-img-md-3-2` ratio `3/2` used in content section, milestone. home page


### Text Styling

> For normal paragraph text

    text-sm leading-6 md:leading-8 md:text-lg

> For heading text

    text-3xl md:text-4xl xl:text-5xl

### Description

most of the description are render in html format `v-html` so we can easy style using html tag

    <b> Hello </b> Admin

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

    app.config.globalProperties.$backendUrl = 'http://38.47.39.132:7001/'

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
    import ComingSoon from '@/components/components/ComingSoon.vue'

    app.component('ComingSoon', ComingSoon)

We simply access without import & register in component

`<ComingSoon />`
