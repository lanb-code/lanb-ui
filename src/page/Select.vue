<template>
  <iselect :url="url" value="testId" name="testName" tip="--请选择选项--"></iselect>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      url: '?url=http://localhost:1234/test/queryPage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
