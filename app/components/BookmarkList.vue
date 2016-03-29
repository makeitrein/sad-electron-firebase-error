<template>
  <div id="links-container">
    <div id="toolbar">
      <div class="ui inverted icon fluid input">
        <input v-model="query" type="text" placeholder="Filter your links...">
        <i class="search icon"></i>
      </div>
    </div>
    <div class="ui relaxed divided selection list">
      <bookmark v-for="(id, bookmark) in bookmarks | filterByTitle query"
        :id="id"
        :title="bookmark.title"
        :url="bookmark.url"
        :category="bookmark.category"
        :category-color="categories[bookmark.category]">
      </bookmark>
    </div>
  </div>
</template>

<script>
  import Bookmark from './Bookmark.vue'
  import { filterByTitle } from '../filters'

  export default {

    data () {
      return {
        query: ''
      }
    },

    props: ['bookmarks', 'categories'],

    components: {
      Bookmark
    },

    filters: {
      filterByTitle
    }

  }

</script>

<style>
  #links-container {
    position: fixed;
    top: 0;
    left: 300px;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: #D4D9DA;
    color: #5F676A;
  }

  #links-container .list {
    margin-top: 0px;
  }

  #toolbar {
    background-color: #D4D9DA;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #C2C7CA;
    height: 60px;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
