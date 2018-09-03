<template>
    <input class="tup-btn" :value="text" type="button" />
</template>

<script>
export default {
  name: 'ibutton',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
