import Vue from 'vue'

// auto register components
const requireComponent = require.context('./components', true, /\.vue$/)
requireComponent.keys().forEach(
  (filePath) => {
    let componentName = requireComponent(filePath).default.name
    Vue.component(componentName, requireComponent(filePath).default)
  }
)
