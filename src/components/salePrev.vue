<template>
  <div class="sale-prev">
    <header>
      <div class="industry">{{ this.sale.industry }}</div>
      <div class="solution">{{ this.sale.solution }}</div>
    </header>
    <div class="story">{{ this.sale.story }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: 'I want cookies',
    };
  },

  props: ['sale'],
};
</script>

<style scoped>
.sale-prev {
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: #fff;
  box-shadow: 1px 2px #e4e4e4;
  width: 200px;
  height: 300px;
  padding: 10px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.story {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
