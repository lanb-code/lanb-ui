<template>
  <div class="calendar">
        <ol class="weeks">
          <li
            :key="week.id"
            v-for="week in weeks"
          >
            {{week}}
          </li>
        </ol>
        <ol 
          :key="row.id"
          v-for="row in days"
          class="days"
        >
          <li 
            :key="col.id" 
            :class="{not_this_month: !isThisMonth(col._d)}" 
            v-for="col in row"
          >
            <i class="iconfont icon-close"></i>
            <span class="dayLabel">
              {{col._d.getDate()}}
            </span>
            <span v-if="isToday(col._d)" class="red"></span>
          </li>
        </ol>
    </div>
</template>

<script>
import moment from 'moment'
import Month from 'calendar-months'
export default {
  name: 'icalendar',
  data () {
    return {
      days: [],
      day: '',
      month: {},
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },
  methods: {
    isThisMonth (date) {
      return this.month.containsDay(moment(date))
    },
    isToday (date) {
      return false
    }
  },
  created () {
    this.month = Month.create(moment())
    this.days = this.month.calendarWeeks()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.calendar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

ol {
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
}

ol > li {
  width: 14.2857%;
  text-align: right;
}

/* .calendar .weeks ol {} */
.calendar ol.weeks li {
  padding: 0.5em 1em;
}

.calendar > ol.days {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}

.calendar > ol.days > li {
  border-right: 0.5px solid #c7c7cc;
  border-top: 0.5px solid #c7c7cc;
  position: relative;
  transition: all 0.5s;
}

.calendar > ol.days > li:nth-child(7n) {
  border-right: none;
}

.calendar > ol.days > li:hover:not(.not_this_month) {
  background-color: #f5f5f5;
}

.not_this_month {
  color: #c3c3c3;
}
</style>
