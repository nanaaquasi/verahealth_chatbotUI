<template>
  <main id="app" class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
@import '@/Style/Theme.sass'

body
    margin: 0
    padding: 0
    font-family: 'Visby Cf'
    font-display: swap
    background-color: var(--background)

.container
    max-width: 500px
    margin-left: auto
    margin-right: auto
    padding: 12px
    position: relative
</style>


<script>
export default {
  name: "App"
};
</script>