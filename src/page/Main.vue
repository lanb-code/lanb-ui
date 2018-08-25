<template>
    <div class="main tup-list">
        <ul>
            <li>
                <router-link to="/itable">表格</router-link>
            </li>
            <li>
                <router-link to="/idialog">对话框</router-link>
            </li>
            <li>
                <router-link to="/iautocomplete">自动完成</router-link>
            </li>
            <li>
                <router-link to="/iselect">选择下拉</router-link>
            </li>
            <li>
                <router-link to="/ibutton">按钮</router-link>
            </li>
            <li>
                <router-link to="/idatetime">时间组件</router-link>
            </li>
            <li>
                <router-link to="/itab">选项卡</router-link>
            </li>
            <li>
                <router-link to="/icalendar">日历</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.main {
    padding: 10px;
}
</style>
