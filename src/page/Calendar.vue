<template>
    <div class="page">
      <iheader title="日历"></iheader>
      <icalendar></icalendar>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
