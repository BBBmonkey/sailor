<template>
  <div>
    <el-autocomplete
      v-model="industry"
      :fetch-suggestions="searchIndustriesAsync"
      placeholder="Choose industry"
    ></el-autocomplete>
    <el-autocomplete
      v-model="solution"
      :fetch-suggestions="searchSolutionsAsync"
      placeholder="Choose solution"
    ></el-autocomplete>

    <div class="search-results">
      <SalePrev v-for="prev in filteredPosts" :key="prev.key" :sale="prev"/>
    </div>
  </div>
</template>

<script>
import SalePrev from './salePrev';

export default {
  components: { SalePrev },

  data() {
    return {
      industries: [],
      solutions: [],
      industry: '',
      solution: '',
      timeout: null,
      salesPrevs: [
        {
          key: '1',
          industry: 'Water',
          solution: 'Breathing bags',
          story: 'These breathing bags are great for using under water',
        },
        {
          key: '2',
          industry: 'Chemicals',
          solution: 'Breathing bags',
          story: 'These breathing bags are great for using with Chemicals',
        },
        {
          key: '3',
          industry: 'Water',
          solution: 'Water heater',
          story: 'This Water heater is great for using with water',
        },
      ],
    };
  },

  computed: {
    filteredPosts() {
      const x = this.salesPrevs.filter(
        prev =>
          prev.industry.includes(this.industry) &&
          prev.solution.includes(this.solution),
      );
      return x;
    },
  },

  methods: {
    loadIndustries() {
      return [
        { value: 'aaa', link: 'https://github.com/vuejs/vue' },
        { value: 'bbb', link: 'https://github.com/ElemeFE/element' },
        { value: 'Water', link: 'https://github.com/babel/babel' },
        { value: 'Chemicals', link: 'https://github.com/babel/babel' },
      ];
    },

    loadSolutions() {
      return [
        { value: 'Breathing bags', link: 'https://github.com/vuejs/vue' },
        { value: 'Water heater', link: 'https://github.com/ElemeFE/element' },
        { value: 'Water', link: 'https://github.com/babel/babel' },
        { value: 'Chemicals', link: 'https://github.com/babel/babel' },
      ];
    },

    searchIndustriesAsync(queryString, cb) {
      const links = this.industries;
      const results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },

    searchSolutionsAsync(queryString, cb) {
      const links = this.solutions;
      const results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },

    createFilter(queryString) {
      return link =>
        link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    },
  },
  mounted() {
    this.industries = this.loadIndustries();
    this.solutions = this.loadSolutions();
  },
};
</script>

<style scoped>
.search-results {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
