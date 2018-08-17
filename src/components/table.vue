<template>
  <transition-group name="fade">
    <div v-if="toolBar" key="crud" style="margin-bottom: 5px;">
      <ibutton key="add" text="新增"></ibutton>
      <ibutton key="delete" text="删除"></ibutton>
      <ibutton key="update" text="修改"></ibutton>
    </div>
    <table class="tup-table" :id="id + '_table'" :key="1" v-if="ok">
      <thead>
        <tr>
          <th v-if="checkbox">
            <input type="checkbox" value="" @click="selectAll" />
          </th>
          <th v-if="rownumbers">序号</th>
          <th :key="col.field" v-for="col in thead">{{col.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="clickMethod(index, col)" :key="col.field" v-for="(col, index) in data">
          <td v-if="checkbox">
            <input ref="checkbox" type="checkbox" :value="col" />
          </td>
          <td v-if="rownumbers">{{index+1}}</td>
          <td :key="th" v-for="th in thead" v-if="th.field != null && th.formatter != null">{{th.formatter(col[th.field])}}</td>
          <td v-else-if="th.field != null">{{col[th.field]}}</td>
          <td v-else-if="th.field == null">
            <!-- 插销,自定义操作部分 -->
            <slot :name="th.name"></slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="paging" :key="2" class="paging-box">
      <ibutton @click.native="prePage" text="上一页"></ibutton>
      <input class="tup-input" type="text" :value="page" />
      <ibutton @click.native="nextPage" text="下一页"></ibutton>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'itable',
  props: {
    id: {
      type: String,
      default: ''
    }, // 表格唯一id

    /* eslint-disable */
    thead: {
      type: Array,
      default: []
    }, // 字段配置

    rows: {
      type: Number,
      default: 10
    }, // 每页行数

    url: {
      type: String,
      default: ""
    }, // 请求地址

    paging: {
      type: Boolean,
      default: false
    }, // 是否分页

    rownumbers: Boolean, // 是否显示行号

    ok: {
      type: Boolean,
      default: false
    }, // 是否显示,过渡效果

    /* eslint-disable */
    data: {
      type: Array,
      default: []
    }, // 数据

    // parm: {
    //     type: [String, Object],
    //     default: '&rows=10&page=1'
    // }, //防止初始化需要参数

    // page: {
    //     type: Number,
    //     default: 1
    // }, //页码

    checkbox: {
      type: Boolean,
      default: false
    }, // 是否显示选择框

    toolBar: {
      type: Boolean,
      default: false
    },

    /* 事件配置 */

    dblclick: {
      type: Function,
      default: function(index, col) {
        console.log("dblclick");
        // console.log('index:' + index + '\r\ncol:' + JSON.stringify(col));
      }
    },

    click: {
      type: Function,
      default: function(index, col) {
        console.log("click");
        // console.log('index:' + index + '\r\ncol:' + JSON.stringify(col));
      }
    }
  },

  data() {
    return {
      total: 0, // 最大行数

      page: 1, // 当前页码

      parm: "&rows=10&page=1",

      checkAll: false // 是否选中所有
    };
  },

  computed: {
    maxPage() {
      return Math.floor(this.total / this.rows);
    },

    pageInfo() {
      return "&page=" + this.page + "&rows=" + this.rows;
    },

    // 当前数据
    currData() {
      var total = this.data.length;
      if (total < this.rows) return this.data;
      else {
        var start = (this.page - 1) * this.rows;
        var stop = this.page * this.rows;
        return this.data.slice(start, stop);
      }
    }
  },
  methods: {
    selectAll() {
      if (this.checkAll) {
        // $(this.$refs.checkbox).removeAttr('checked')
        console.log(this.$refs.checkbox);
        /* eslint-disable */
        $(this.$refs.checkbox).prop("checked", false);
        this.checkAll = false;
      } else {
        /* eslint-disable */
        $(this.$refs.checkbox).prop("checked", true);
        this.checkAll = true;
      }
    },

    // 双击事件
    dblclickMethod(index, col) {
      this.dblclick(index, col);
    },

    // 单击事件
    clickMethod(index, col) {
      this.click(index, col);
    },

    // 加载数据
    loadData() {
      this.$emit('update:ok', false);
      /* eslint-disable */
      $.ajax({
        url: this.url,
        type: 'get',
        data: this.pageInfo,
        dataType: 'json',
        success: (result) =>  {
          var data = result.rows || result
          this.$emit('update:data', data)
          this.$emit('update:ok', true)
          this.total = result.total || 0
        },
        error: function(result) {
        }
      });
    },

    // 上一页
    prePage() {
      if (this.page - 1 <= 0) return;
      this.page = this.page - 1;
      this.loadData();
    },

    // 下一页
    nextPage() {
      if (this.page + 1 > this.maxPage + 1) return;
      this.page = this.page + 1;
      this.loadData();
    }
  },

  mounted() {
    if (this.url !== "") {
      this.loadData();
    } else {
      this.$emit("update:ok", true);
    }
  }
};
</script>

<style scoped>
.paging-box {
  margin-top: 5px;
}
</style>
