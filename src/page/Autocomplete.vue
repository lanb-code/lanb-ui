<template>
  <div>
    <iheader title="自动完成"></iheader>
    <div class="autocomplete">
    <iautocomplete :list="list"></iautocomplete>
    <div style="margin-top: 10px;">覆盖测试</div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      list: [
        {
          value: '中文'
        },
        {
          value: 'aaaa'
        },
        {
          value: 'aa'
        },
        {
          value: 'bbb'
        },
        {
          value: 'ccc'
        }
      ]
    }
  }
}
</script>

<style scoped>
.autocomplete {
  padding: 10px;
}
</style>
