<template>
    <div>
        <input type="text" class="tup-input __datetime_input" placeholder="请选择时间..." autocomplete="off" ref="__datetime_input" readonly="readonly" v-model="day" @focus="focus" @blur="blur" />
        <div class="__datetime" v-if="show">
            <div class="__datetime_title" ref="__datetime_title">{{month.year}}&nbsp;{{month.month + 1}}</div>
            <div class="__datetime_body" ref="__datetime_body">
                <table class="tup-table __datetime_table" ref="__datetime_table">
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="row.id" v-for="row in data">
                            <td :key="col.id" :class="{__not_this_month: !isThisMonth(col._d)}" @mousedown="selectDay(col._d)" v-for="col in row">
                              {{col._d.getDate()}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import Month from 'calendar-months'
var df = require('date-formatter')
export default {
  name: '',
  data () {
    return {
      show: false,
      data: [],
      day: '',
      month: {}
    }
  },
  methods: {
    blur: function (e) {
      this.show = false
    },
    focus: function (e) {
      this.show = true
      this.$nextTick(() => {
        let width = this.$refs.__datetime_table.offsetWidth
        this.$refs.__datetime_title.style.width = width + 'px'
      })
    },
    selectDay: function (date) {
      if (!this.isThisMonth(date)) return
      this.day = df(date, 'YYYY-MM-DD')
      this.show = false
    },
    isThisMonth (date) {
      return this.month.containsDay(moment(date))
    }
  },
  created () {
    this.month = Month.create(moment())
    this.data = this.month.calendarWeeks()
  }
}
</script>

<style scoped>
.__datetime {
  position: absolute;
}

.__datetime_input {
  transition: all 0.5s;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}

.__datetime_input:hover,
.__datetime_input:focus {
  border: 1px solid #57a3f3;
  cursor: pointer;
}

.__datetime_title {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  -webkit-box-shadow: 1px 1px 1px 1px #dcdcdc;
  box-shadow: 1px 1px 1px 1px #dcdcdc;
  background-color: rgb(250, 250, 250);
}

.__datetime_table td {
  text-align: center;
}

.__datetime_table td:hover {
  cursor: pointer;
  background-color: rgb(250, 250, 250);
}

.__not_this_month {
  color: #d2d2d2;
  cursor: not-allowed !important;
  background-color: #ffffff !important;
}
</style>
