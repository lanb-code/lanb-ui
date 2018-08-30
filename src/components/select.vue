<template>
  <div v-if="ok">
    <div class="select">
      <input v-model="selectName" type="text" value="" :placeholder="tip" readonly="readonly" class="select__input" ref="select__input" @mousedown="mousedown" @blur="blur" />
      <div class="select__dropdown" ref="select__dropdown">
        <div class="dropdown__item" :key="getValue(col)" v-for="col in data" :value="getValue(col)" @mousedown="clickItem(col)">{{getName(col)}}</div>
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
      let width = this.$refs.select__input.offsetWidth
      this.$refs.select__dropdown.style.width = width + 'px'
      this.$refs.select__dropdown.style.display = 'block'
    },
    blur (e) {
      this.$refs.select__dropdown.style.display = 'none'
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

.select__input {
  padding: 9px;
  border: 0px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.select__dropdown {
  position: absolute;
  display: none;
  z-index: 1001;
  background-color: #ffffff;
  border: 0px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.dropdown__item {
  padding: 9px;
}

.dropdown__item:hover {
  background-color: rgb(250, 250, 250);
}
</style>
