<template>
  <main>
    <Header />
    <Hero />
    <!-- Kind of {children} from React -->
    <slot />
  </main>
</template>

<style lang="scss">
@import "@/assets/general.scss";
</style>
