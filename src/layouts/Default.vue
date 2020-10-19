<template>
  <div class="layout">
    <header class="header">
      <strong>

      </strong>
      <nav class="nav">

      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  height: 0;
}

.nav__link {
  margin-left: 0;
}
</style>
