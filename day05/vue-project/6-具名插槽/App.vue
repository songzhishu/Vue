<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <div>
          <h3>友情提示</h3>
          <span class="close">✖️</span>
        </div>
      </template>
      <template v-slot:content> </template>
      <template v-slot:footer>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyDialog,
  },
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>