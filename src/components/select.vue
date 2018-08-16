<template>
  <select class="tup-select">
    <template v-if="ok">
      <option value="">{{tip}}</option>
      <option :key="col" v-for="col in data" :value="getValue(col)">{{getName(col)}}</option>
    </template>
  </select>
</template>

<script>
export default {
  name: 'iselect',
  props: {
    url: String,
    value: String,
    name: String,
    tip: String
  },
  data () {
    return {
      data: [],
      ok: false
    }
  },
  methods: {
    loadData () {
      var self = this
      /* eslint-disable */
      $.ajax({
        url: this.url,
        type: 'post',
        dataType: 'json',
        success (result) {
          if (typeof result.rows !== 'undefined') self.data = result.rows
          else self.data = result
          self.ok = true
        },
        error: function (result) {}
      })
    },
    getValue (col) {
      if (this.value == null) return col['value']
      else return col[this.value]
    },
    getName (col) {
      if (this.name == null) return col['name']
      else return col[this.name]
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style scoped>
</style>
