<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
      <el-menu-item index="1" :route="{name:'search'}">
        <i class="el-icon-search"></i>
        <span slot="title">Search</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">Edit</span>
        </template>
        <el-menu-item index="2-1" :route="{name:'edit'}">Industries</el-menu-item>
        <el-menu-item index="2-2" :route="{name:'edit'}">Solutions</el-menu-item>
        <el-menu-item index="2-3" :route="{name:'edit'}">Users</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
