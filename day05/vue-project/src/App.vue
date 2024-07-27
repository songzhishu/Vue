<template>
  <div>
    <MyTable :data="list">
      <template #btn="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <template #btn="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "./components/MyTable.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张小花", age: 18 },
        { id: 2, name: "孙大明", age: 19 },
        { id: 3, name: "刘德忠", age: 17 },
      ],
      list2: [
        { id: 1, name: "赵小云", age: 18 },
        { id: 2, name: "刘蓓蓓", age: 19 },
        { id: 3, name: "姜肖泰", age: 17 },
      ],
    };
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      console.log("点击删除" + id);
      this.list = this.list.filter((item) => item.id !== id);
    },
    show(row) {
      console.log(row);
    },
  },
};
</script>
