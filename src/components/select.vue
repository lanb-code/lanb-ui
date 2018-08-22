<template>
  <div v-if="ok">
    <div class="__select">
      <input v-model="selectName" type="text" value="" :placeholder="tip" readonly="readonly" class="__select_input" ref="__select_input" @mousedown="mousedown" @blur="blur" />
      <div class="__select_dropdown" ref="__select_dropdown">
        <div class="__dropdown_item" :key="getValue(col)" v-for="col in data" :value="getValue(col)" @mousedown="clickItem(col)">{{getName(col)}}</div>
      </div>
    </div>
  </div>
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
      selectName: '',
      ok: false
    }
  },
  methods: {
    loadData () {
      /* eslint-disable */
      $.ajax({
        url: this.url,
        type: 'get',
        dataType: 'json',
        success: (result) => {
          if (typeof result.rows !== 'undefined') this.data = result.rows
          else this.data = result
          this.ok = true
        },
        error: function (result) { }
      })
    },
    getValue (col) {
      if (this.value == null) return col['value']
      else return col[this.value]
    },
    getName (col) {
      if (this.name == null) return col['name']
      else return col[this.name]
    },
    mousedown (e) {
      let width = this.$refs.__select_input.offsetWidth
      this.$refs.__select_dropdown.style.width = width + 'px'
      this.$refs.__select_dropdown.style.display = 'block'
    },
    blur (e) {
      this.$refs.__select_dropdown.style.display = 'none'
    },
    clickItem (col) {
      this.selectName = col[this.name]
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style scoped>
.tup-select {
  display: none;
}

.__select_input {
  padding: 9px;
  border: 0px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.__select_dropdown {
  position: absolute;
  display: none;
  border: 0px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.__dropdown_item {
  padding: 9px;
}

.__dropdown_item:hover {
  background-color: #333333;
  color: #ffffff;
}
</style>
