<script setup lang="ts">
const open = ref(false)
const { resume } = useAppConfig()
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

const print = () => {
  open.value = false
  setTimeout(() => window.print(), 200)
}

const openUrl = (url?: string) => {
  if (!url) return

  open.value = false
  window.open(url, '_blank')
}

const handleOpenChange = () => {
  open.value = !open.value
}
</script>

<template>
  <p class="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
    Press
    <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
      <span class="text-xs">⌘</span>K
    </kbd>
    to open the command menu
  </p>
  <UiButton
    variant="outline"
    size="icon"
    class="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
    @click="handleOpenChange"
  >
    <Icon name="ph:command" class="my-6 size-6" />
  </UiButton>
  <UiCommandDialog v-model:open="open">
    <UiCommandInput placeholder="Type a command or search..." />
    <UiCommandList>
      <UiCommandEmpty>No results found.</UiCommandEmpty>
      <UiCommandGroup heading="Actions">
        <UiCommandItem
          @select="print()"
          value="print"
        >
          <Icon name="ph:printer-duotone" class="mr-2 h-4 w-4" />
          <span>Print</span>
        </UiCommandItem>
      </UiCommandGroup>
      <UiCommandGroup heading="Links">
        <UiCommandItem
          v-if="resume?.personalWebsiteUrl"
          @select="openUrl(resume.personalWebsiteUrl)"
          value="personal-website"
        >
          <Icon name="ph:globe-duotone" class="mr-2 h-4 w-4" />
          <span>Peronsal Website</span>
        </UiCommandItem>
        <UiCommandItem
          v-if="resume.contact.social"
          v-for="({ name, icon, url }) in resume.contact.social"
          :key="url"
          @select="openUrl(url)"
          :value="name"
        >
          <Icon :name="icon" class="mr-2 h-4 w-4" />
          <span>{{name}}</span>
        </UiCommandItem>
      </UiCommandGroup>
      <UiCommandSeparator />
    </UiCommandList>
  </UiCommandDialog>
</template>
