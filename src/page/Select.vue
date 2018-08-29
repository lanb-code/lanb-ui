<template>
  <div>
    <iheader title="选择下拉"></iheader>
    <div class="select">
      <iselect :url="url" value="testId" name="testName" tip="--请选择选项--"></iselect>
      <div style="margin-top: 5px;">覆盖测试</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '?url=http://localhost:1234/test/queryPage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {
  padding: 10px;
}
</style>
