import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/page/Table'
import Select from '@/page/Select'
import Dialog from '@/page/Dialog'
import Autocomplete from '@/page/Autocomplete'
import Button from '@/page/Button'
import Datetime from '@/page/Datetime'
import Main from '@/page/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/itable',
      name: 'Table',
      component: Table
    },
    {
      path: '/iselect',
      name: 'Select',
      component: Select
    }, {
      path: '/idialog',
      name: 'Dialog',
      component: Dialog
    }, {
      path: '/iautocomplete',
      name: 'Autocomplete',
      component: Autocomplete
    }, {
      path: '/ibutton',
      name: 'Button',
      component: Button
    },
    {
      path: '/idatetime',
      name: 'Datetime',
      component: Datetime
    }
  ]
})
