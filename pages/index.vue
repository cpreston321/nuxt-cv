<script setup lang="ts">
const { resume } = useAppConfig()

defineRouteRules({
  isr: true,
})
</script>

<template>
  <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
    <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ resume.name }}</h1>
          <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            {{ resume.about }}
          </p>
          <p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a v-if="resume.location.link" class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" :href="resume.location.link" target="_blank">
              <Icon name="ph:globe-duotone" size="12" />
              {{ resume.location.label }}
            </a>
            <span v-else class="inline-flex gap-x-1.5 align-baseline leading-none">
              <Icon name="ph:globe-duotone" size="12" />
              {{ resume.location.label }}
            </span>
          </p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            <UiButton v-if="resume?.contact?.email" class="size-8" variant="outline" size="icon" as-child>
              <a :href="`mailto:${resume.contact.email}`">
                <span class="sr-only">Contact via email</span>
                <Icon name="ph:envelope-duotone" size="20"/>
              </a>
            </UiButton>
            <UiButton v-if="resume?.contact?.tel" class="size-8" variant="outline" size="icon" as-child>
              <a :href="`tel:${resume.contact.tel}`">
                <span class="sr-only">Contact via telephone</span>
                <Icon name="ph:phone-duotone" size="20"/>
              </a>
            </UiButton>
            <UiButton v-if="resume?.contact?.social && Array.isArray(resume.contact.social)" v-for="social in resume.contact.social" :key="social.name" class="size-8" variant="outline" size="icon" as-child>
              <a :href="social.url">
                <span class="sr-only">{{ social.name }}</span>
                <Icon :name="social.icon" size="20" />
              </a>
            </UiButton>
          </div>
          <div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            <a v-if="resume.contact.email" :href="`mailto:${resume.contact.email}`">
              <span class="underline">{{ resume.contact.email }}</span>
            </a>
            <a v-if="resume.contact.tel" :href="`tel:${resume.contact.tel}`">
              <span class="underline">{{ resume.contact.tel }}</span>
            </a>
          </div>
        </div>

        <UiAvatar class="size-28 rounded-md">
          <UiAvatarImage :alt="resume.name" :src="resume.avatar.url" format="webp" :width="256" :height="256" />
          <UiAvatarFallback>{{ resume.avatar.initials }}</UiAvatarFallback>
        </UiAvatar>
      </div>

      <UiSection id="about">
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground">
          {{ resume.summary }}
        </p>
      </UiSection>

      <UiSection id="work" v-if="resume.work && Array.isArray(resume.work)">
        <h2 class="text-xl font-bold">Work Experience</h2>
        <UiCard v-for="work in resume.work" :key="work.company">
          <UiCardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a class="hover:underline" :href="work.link">
                  {{ work.company }}
                </a>

                <span v-if="work.badges && Array.isArray(work.badges)" class="inline-flex gap-x-1">
                  <UiBadge v-for="badge in work.badges" :key="badge" variant="secondary" class="align-middle text-xs">{{ badge }}</UiBadge>
                </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">{{ work.start }} - {{ work.end }}</div>
            </div>

            <h4 class="font-mono text-sm leading-none">
              {{ work.title }}
            </h4>
          </UiCardHeader>
          <UiCardContent class="mt-2 text-xs">
            {{ work.description }}
          </UiCardContent>
        </UiCard>
      </UiSection>

      <UiSection id="education" v-if="resume.education && Array.isArray(resume.education)">
        <h2 class="text-xl font-bold">Education</h2>
        <UiCard v-for="education in resume.education" :key="education.school">
          <UiCardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {{ education.school }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">{{ education.start }} - {{ education.end }}</div>
            </div>
          </UiCardHeader>
          <UiCardContent class="mt-2">{{ education.degree }}</UiCardContent>
        </UiCard>
      </UiSection>

      <UiSection id="skills" v-if="resume.skills && Array.isArray(resume.skills)">
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
          <UiBadge v-for="skill in resume.skills" :key="skill">{{ skill }}</UiBadge>
        </div>
      </UiSection>

      <UiSection id="projects" v-if="resume.projects && Array.isArray(resume.projects)" class="print-force-new-page scroll-mb-16">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
          <ProjectCard
            v-for="project in resume.projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :tags="project.techStack"
            :link="'link' in project ? project.link.href : undefined"
          />
        </div>
      </UiSection>
    </section>
    
    <CommandMenu />
  </main>
</template>

<style scoped>
@media print {
  @page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
  }

  #projects h2 {
    margin-top: .25in;
  }

  .print-force-new-page {
    page-break-before: always;
  }
}
</style>
