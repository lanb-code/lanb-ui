<template>
  
  <header>
    <a @click="back"><span class="iconfont icon-left"></span></a>
    <a href="#">{{title}}</a>
    <a><span class="iconfont icon-gengduo"></span></a>
  </header>

</template>

<script>
export default {
  name: 'iheader',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data () {
    return {}
  },
  methods: {
    back() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #96bda8;
  min-height: 40px;
  line-height: 40px;
}

header a {
  color: #ffffff;
  font-size: 14px;
}
</style>
