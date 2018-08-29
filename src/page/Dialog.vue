<template>
  <div>
    <iheader title="对话框"></iheader>
    <idialog :show.sync="show">
      <div>测试</div>
      <div>测试</div>
      <div>测试</div>
      <div>测试</div>
      <div>测试</div>
      <div>测试</div>
    </idialog>
    <ibutton @click.native="click" text="按钮"></ibutton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    click (e) {
      this.show = true
    }
  }
}
</script>

<style scoped>
</style>
