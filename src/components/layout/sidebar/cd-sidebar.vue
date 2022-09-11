<template>
  <aside
    class="cd-fixed cd-left-0 cd-top-0 cd-w-[94px] cd-h-full cd-bg-grey-light cd-flex cd-flex-col cd-p-4 cd-items-center"
  >
    <router-link :to="{ name: 'home' }">
      <div class="logo cd-w-[64px] cd-h-[64px] cd-flex-shrink-0 cd-bg-blue-50">Logo</div>
    </router-link>
    <cd-sidebar-menu />
  </aside>
</template>
