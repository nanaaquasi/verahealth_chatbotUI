<template>
    <div class="overlay">
        <!-- Error Icon -->
        <i class="material-icons error-icon" aria-hidden="true">error</i>

        <!-- Error Description -->
        <p class="error-description">{{error}}</p>
    </div>
</template>

<style lang="sass" scoped>
.overlay
    text-align: center
    margin-top: 20px
    width: 100%

.error-icon
    font-size: 58px
    color: var(--text)
    margin-bottom: 30px

.error-description
    font-size: 16px
    color: var(--text)
    background-color: var(--element-background)
    padding: 10px 0
    border-radius: 16px
   
    // overflow: scroll
</style>

<script>
export default {
    name: 'Error',
    props: {
        error: {
            type: String,
            default: null
        }
    }
}
</script>