<template>
    <div>
        <input type="text" class="tup-input" v-model="day" @click="click" />
        <div class="__datetime" v-if="show">
            <div class="__datetime_title">{{month.year}}&nbsp;{{month.month + 1}}</div>
            <div class="__datetime_body">
                <table class="tup-table">
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
                            <td :key="line.id" :class="{__not_this_month: !isThisMonth(line._d)}" @click="clickDay(line._d)" v-for="line in row">
                              {{line._d.getDate()}}
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
    click: function (date) {
      this.show = true
    },
    clickDay: function (date) {
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
  width: 224px;
  margin-left: 10px;
}
.__datetime_title {
  text-align: center;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  -webkit-box-shadow: 1px 1px 1px 1px #dcdcdc;
  box-shadow: 1px 1px 1px 1px #dcdcdc;
  background-color: rgb(250, 250, 250);
}

.__not_this_month {
  color: #d2d2d2;
}
</style>
