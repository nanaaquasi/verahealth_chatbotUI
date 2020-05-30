<template>
  <main id="app" class="container">
    <Device>
      <router-view></router-view>
    </Device>
  </main>
</template>

<style lang="sass">
@import '@/Style/Theme.sass'

*,
*::before,
*::after
  margin: 0
  padding: 0

  &:focus
    border: none

body
  margin: 0
  padding: 0
  height: 100%
  font-family: 'Visby Cf'
  font-display: swap
  background-color: var(--background)
  overflow: hidden
  display: grid
  place-items: center
  place-content: center

.container
  width: 500px
  height: 100%
  margin: 0 auto
  padding: 4px
</style>

<script>
import Device from "../Components/Parts/Device";
export default {
  name: "App",
  components: {
    Device
  }
};
</script>
