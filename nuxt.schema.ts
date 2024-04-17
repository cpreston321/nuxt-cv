export default defineNuxtSchema({
  appConfig: {
    /**
     * Resume configuration
     */
    resume: {
      $schema: {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        type: 'object',
        required: [
          'name',
          'avatar',
          'location',
          'about',
          'contact',
          'summary',
        ],
        properties: {
          /**
           * Your name
           * 
           * @example 'John Doe'
           */
          name: { type: 'string', description: 'Your first and last name' },

          /**
           * Your initials
           * 
           * @example ```json
           * {
           *  "initials": "JD",
           *  "url": "https://gravatar.com/avatar/c864b873c45b1607be2c70cb792b0850?s=200&d=retro&r=pg"
           * }
           * ```
           */
          avatar: { 
            type: 'object',
            required: ['initials'],
            description: 'Your avatar image url and initials',
            properties: {
              initials: { type: 'string' },
              url: { type: 'string' },
            } 
          },

          /**
           * Your location
           * 
           * @example ```json
           * {
           * "label": "Indianapolis, IN, USA (UTC-5)",
           * "link": "https://www.google.com/maps/place/Indianapolis,+IN,+USA"
           * }
           * ```
           */
          location: { 
            type: 'object',
            required: ['label'],
            description: 'Your location and link',
            properties: {
              label: { type: 'string' },
              link: { type: 'string' },
            }
          },

          /**
           * A short description about you
           * 
           * @example 'Full Stack Product Engineer & Technical Lead, focused on enriching the product and developer experience.'
           */
          about: { type: 'string', description: 'A short description about you' },

          /**
           * A brief summary about you
           * 
           * @example 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
           */
          summary: { type: 'string', description: 'A brief summary about you' },

          /**
           * URL to your personal website
           * 
           * @example 'https://personalwebsite.com'
           */
          personalWebsiteUrl: { type: 'string', description: 'URL to your personal website'},

          /**
           * Contact information
           */
          contact: {
            type: 'object',
            description: 'Your contact information',
            properties: {
              /**
               * Your email address
               * 
               * @example 'johndoe@example.com'
               */
              email: { type: 'string' },

              /**
               * Your telephone number
               * 
               * @example '+9998109999'
               */
              tel: { type: 'string' },

              /**
               * Social media links
               * 
               * @example ```json
               * [
               *  {
               *   "name": "GitHub",
               *   "url": "https://github.com",
               *   "icon": "ph:github-logo-duotone",
               *  }
               * ]
               * ```
               */
              social: {
                type: 'array',
                description: 'Social media links and icons that leverage https://icones.js.org/ library',
                items: {
                  type: 'object',
                  required: ['name', 'url', 'icon'],
                  properties: {
                    name: { type: 'string' },
                    url: { type: 'string' },
                    icon: { type: 'string' },
                  },
                },
              },
            },
          },

          /**
           * Education information
           * 
           * @example ```json
           * [
           * {
           *  "school": "Example University",
           * "degree": "Bachelor of Science in Computer Science",
           * "start": "2018",
           * "end": "2020"
           * }
           * ]
           * ```
           */
          education: {
            type: 'array',
            description: 'Education information',
            items: {
              type: 'object',
              required: ['school', 'degree', 'start', 'end'],
              properties: {
                school: { type: 'string' },
                degree: { type: 'string' },
                start: { type: 'string' },
                end: { type: 'string' },
              },
            },
          },

          /**
           * Work experience
           * 
           * @example ```json
           * [
           * {
           * "company": "example-work.com",
           * "link": "https://example.com",
           * "title": "Software Engineer",
           * "start": "2022",
           * "end": "Present",
           * "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
           * "badges": ["Go", "TypeScript"]
           * }
           * ]
           */
          work: {
            type: 'array',
            description: 'Work experience',
            items: {
              type: 'object',
              required: ['company', 'link', 'title', 'start', 'end', 'description'],
              properties: {
                company: { type: 'string' },
                link: { type: 'string' },
                title: { type: 'string' },
                start: { type: 'string' },
                end: { type: 'string' },
                description: { type: 'string' },
                badges: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
            },
          },

          /** 
           * Skills
           * 
           * @example ['JavaScript', 'TypeScript']
           */
          skills: {
            type: 'array',
            description: 'Skills tags',
            items: { type: 'string' },
          },

          /**
           * Projects
           * 
           * @example ```json
           * [
           * {
           * "title": "example.com",
           * "techStack": ["vue"],
           * "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
           * "link": {
           * "label": "Example.com",
           * "href": "https://example.com"
           * }
           * }
           */
          projects: {
            type: 'array',
            description: 'Projects that you have worked on.',
            items: {
              type: 'object',
              required: ['title', 'techStack', 'description', 'link'],
              properties: {
                title: { type: 'string' },
                techStack: {
                  type: 'array',
                  items: { type: 'string' },
                },
                description: { type: 'string' },
                link: {
                  type: 'object',
                  required: ['label', 'href'],
                  properties: {
                    label: { type: 'string' },
                    href: { type: 'string' },
                  },
                },
              },
            },
          },
        }
      },
    },
  }
})
