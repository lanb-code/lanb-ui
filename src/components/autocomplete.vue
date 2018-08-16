<template>
  <div>
    <input class="tup-input search" v-model="key" @input="input" @keyup.enter="enter" @blur="blur" />
    <ul class="list" v-if="show">
      <li class="list-item" :key="data.value" v-for="data in list" @click="click" :class="{matched: data.matched}">
        {{data.value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'iautocomplete',
  data () {
    return {
      show: false,
      key: '',
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
  },
  methods: {
    blur (e) {},
    click (e) {
      var target = e.target
      var value = target.innerText
      if (value !== '') {
        this.key = value
        this.show = false
      }
    },
    enter (e) {
      console.log(e.target.value)
    },
    input (e) {
      if (this.key === '') {
        this.show = false
        return
      }
      var matchCoun = 0

      for (let i = 0; i < this.list.length; i++) {
        this.list[i].matched = false
        var data = this.list[i]
        if (data.value.indexOf(this.key) !== -1) {
          matchCoun++
          this.list[i].matched = true
        }
      }

      if (matchCoun > 0) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.search {
  width: 100px;
}

.list {
  background-color: #ffffff;
  position: fixed;
  margin-top: 1px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  width: 118px;
}

.matched {
  background-color: #333333;
  color: #ffffff;
}

.list-item {
  list-style-type: none;
  padding: 8px;
}

.list-item:hover {
  background-color: #333333;
  color: #ffffff;
}
</style>
