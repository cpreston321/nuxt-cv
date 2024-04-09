# Minimalist CV Template

A Nuxt & Vue port of [Bartosz Jarocki's CV web app](https://github.com/BartoszJarocki/cv) that renders a minimalist CV with a print-friendly layout.

## Setup

1. Change the `app.config.ts` file to match your CV details.

```ts
export default defineAppConfig({
  resume: {
    name: 'John Doe',
    initials: 'JD',
    location: 'Indianpolis, IN, USA (UTC-5)',
    locationLink: 'https://www.google.com/maps/place/Indianapolis,+IN,+USA',
    about: 'Full Stack Product Engineer & Technical Lead, focused on enriching the product and developer experience.',
    summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    avatarUrl: 'https://gravatar.com/avatar/c864b873c45b1607be2c70cb792b0850?s=200&d=retro&r=pg',
    personalWebsiteUrl: '#',
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
