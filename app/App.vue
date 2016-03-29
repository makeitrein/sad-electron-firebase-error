<template>
  <div id="app">
    <sidebar
      :categories="categories"
      v-on:category-selected="setSelectedCategory">
      <!-- bind 'selected-category event to the event handler setSelectedCategory' -->
    </sidebar>
    <bookmark-list
      :bookmarks="bookmarks | filterByCategory selectedCategory"
      :categories="categories">
    </bookmark-list>
  </div>
</template>

<script>
  import store from './store'
  import Sidebar from './components/Sidebar.vue'
  import BookmarkList from './components/BookmarkList.vue'
  import { filterByCategory } from './filters'

  export default {

    components: {
      Sidebar,
      BookmarkList
    },

    data () {
      return {
        categories: {},
        bookmarks: {},
        selectedCategory: ''
      }
    },

    filters: {
      filterByCategory
    },

    created () {
      store.on('bookmarks-updated', this.updateListings)
    },

    methods: {
      updateListings (categories, bookmarks) {
        this.categories = categories
        this.bookmarks = bookmarks
      },

      setSelectedCategory (category) {
        this.selectedCategory = category;
      }

    }

  }
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
body {
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  height: 100%;
  max-height: 100%;
}

.right-float {
  float: right;
}
</style>
