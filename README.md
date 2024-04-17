# Minimalist CV Template

A Nuxt & Vue port of [Bartosz Jarocki's CV web app](https://github.com/BartoszJarocki/cv) that renders a minimalist CV with a print-friendly layout.

## Setup

<!-- automd:pm-x name="giget" args='gh:cpreston321/nuxt-cv/template cv-site' separate no-version-->

```sh
# npm
npx giget gh:cpreston321/nuxt-cv/template cv-site
```

```sh
# pnpm
pnpm dlx giget gh:cpreston321/nuxt-cv/template cv-site
```

```sh
# bun
bunx giget gh:cpreston321/nuxt-cv/template cv-site
```

<!-- /automd -->

> [!NOTE]
> Change the `app.config.ts` file to match your CV details.

```ts
export default defineAppConfig({
  resume: {
    name: 'John Doe',
    avatar: {
      initials: 'JD',
      url: 'https://gravatar.com/avatar/c864b873c45b1607be2c70cb792b0850?s=200&d=retro&r=pg',
    },
    location: {
      label: 'Indianapolis, IN, USA (UTC-5)',
      link: 'https://www.google.com/maps/place/Indianapolis,+IN,+USA',
    },
    about: 'Full Stack Product Engineer & Technical Lead, focused on enriching the product and developer experience.',
    summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    contact: {
      email: 'johndoe@example.com',
      tel: '+9998109999',
      social: [
        {
          name: 'GitHub',
          url: 'https://github.com',
          icon: 'ph:github-logo-duotone',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com',
          icon: 'ph:linkedin-logo-duotone',
        },
      ],
    },
    education: [
      {
        school: 'Example University',
        degree: 'Bachelor of Science in Computer Science',
        start: '2018',
        end: '2020',
      },
      {
        school: 'Example University 2',
        degree: 'Associate of Science in Computer Science',
        start: '2015',
        end: '2018',
      },
    ],
    work: [
      {
        company: 'example-work.com',
        link: 'https://example.com',
        title: 'Software Engineer',
        start: '2022',
        end: 'Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
        badges: ['Go', 'TypeScript'],
      },
    ],
    skills: ['JavaScript', 'TypeScript'],
    projects: [
      {
        title: 'example.com',
        techStack: ['vue'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
        link: {
          label: 'Example.com',
          href: 'https://example.com',
        },
      },
    ],
  }
})
```

## Config

<!-- automd:jsdocs src="./nuxt.schema.ts" -->

### `appConfig`

#### `resume`

Resume configuration

##### `about`

- **Type**: `string`

A short description about you

##### `avatar`

Your avatar image url and initials

###### `initials`

- **Type**: `string`

###### `url`

- **Type**: `string`

##### `contact`

Your contact information

###### `email`

- **Type**: `string`

###### `social`

- **Type**: `array`

Social media links and icons that leverage https://icones.js.org/ library

###### `tel`

- **Type**: `string`

##### `education`

- **Type**: `array`

Education information

##### `location`

Your location and link

###### `label`

- **Type**: `string`

###### `link`

- **Type**: `string`

##### `name`

- **Type**: `string`

Your first and last name

##### `personalWebsiteUrl`

- **Type**: `string`

URL to your personal website

##### `projects`

- **Type**: `array`

Projects that you have worked on.

##### `skills`

- **Type**: `array`

Skills tags

##### `summary`

- **Type**: `string`

A brief summary about you

##### `work`

- **Type**: `array`

Work experience

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
