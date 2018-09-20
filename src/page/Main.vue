<template>
  <div class="page">

        <iheader title="主页"></iheader>
        <main class="main tup-list">
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
        </main>
        <footer>
          <a href="#">
            <span class="iconfont icon-index"></span>
            <p>Home</p>
          </a>
          <a href="#">
            <span class="iconfont icon-selected"></span>
            <p>More</p>
          </a>
          <a href="#">
            <span class="iconfont icon-wo"></span>
            <p>My</p>
          </a>
        </footer>
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
.page {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
}

header {
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #96bda8;
  min-height: 40px;
  line-height: 40px;
}

header a {
  color: #ffffff;
  font-size: 14px;
}

main {
  /* background-color: yellowgreen; */
  height: 100%;
}

footer {
  border-top: 1px solid #c0bfc4;
  width: 100%;
  display: flex;
}

footer a {
  font-size: 10px;
  color: #999;
  text-align: center;
  flex: 1;
  padding: 10px;
  background-color: #f7f7fa;
}

footer p {
  margin: 8px;
}

footer a:hover {
  color: #96bda8;
}

.main {
  padding: 10px;
}
</style>
