<template>
  <div class="table">
    <itable :toolBar="true" id="itable" :checkbox="true" :data.sync="data" :url="url" :ok.sync="ok" :thead="thead" :paging="true" :rownumbers="true">
      <!-- 自定义操作部分     -->
      <template slot="oper" slot-scope="props">
        <router-link to="/iselect">投运1</router-link>
      </template>
    </itable>
    <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      thead: [
        {
          field: 'testId',
          title: '测试ID'
        },
        {
          field: 'testName',
          title: '测试名'
        },
        {
          field: null,
          title: '操作',
          name: 'oper'
        }
      ],
      url: '?url=http://localhost:1234/test/queryPage',
      data: [],
      ok: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  padding: 10px;
}
</style>
