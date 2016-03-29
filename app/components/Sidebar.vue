<template>
  <div>
    <div id="categories">
      <div id="cat-header">
        <h2><i class="bookmark icon"></i>Bookmark | coligo</h2>
      </div>
      <div class="container">
        <h2>Categories
          <span class="clickable right-float">
            <i @click="addCategory" class="add icon"></i>
          </span>
        </h2>
        <div class="ui list">
          <div class="item clickable">
            <div class="content">
              <a class="ui grey empty circular label"></a>
              <span @click="categorySelected('')">All</span>
            </div>
          </div>
          <div v-for="(name, color) in categories" class="item clickable">
            <div class="content">
              <a class="ui {{ color }} empty circular label"></a>
              <span @click="categorySelected(name)"
                :class="{selected: selectedCategory === name}">
                {{ name }}
              </span>
              <i v-if="name !== 'Uncategorized'" class="remove icon right-float"
                @click="deleteCategory(name)">
              </i>
            </div>
          </div>
        </div>
        <button @click="addBookmark"
          class="ui grey inverted basic icon circular button right-float">
          <i class="icon add"></i>
        </button>
      </div>
    </div>
    <category-modal></category-modal>
    <bookmark-modal :categories="categories"></bookmark-modal>
  </div>
</template>


<script>
  import store from '../store'
  import CategoryModal from './CategoryModal.vue'
  import BookmarkModal from './BookmarkModal.vue'

  export default {

    data () {
      return {
        selectedCategory: ''
      }
    },

    props: ['categories'],

    components: {
      CategoryModal,
      BookmarkModal
    },

    methods: {

      addBookmark () {
        this.$broadcast('add-bookmark')
      },

      addCategory () {
        this.$broadcast('add-category')
      },

      deleteCategory (category) {
        store.deleteCategory(category)
      },

      categorySelected (category) {
        this.selectedCategory = category
        this.$dispatch('category-selected', category)
      }

    }

  }
</script>

<style>
  .selected {
    color: #87568D;
  }

  #categories {
    background-color: #353E43;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 100%;
    overflow: hidden;
    color: #8F9497;
  }

  #categories div.list {
    margin-left: 30px;
    font-family: 'Raleway', sans-serif;
  }

  #categories .item {
    padding-bottom: 7px !important;
  }

  #categories h2 {
    margin-top: 20px;
    margin-left: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
  }

  #cat-header {
    background-color: #4A5557;
    height: 60px;
    position: relative;
  }

  #cat-header h2 {
    font-family: 'Raleway', sans-serif !important;
    font-weight: 300;
    font-size: 20px;
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }

  #categories h2 .bookmark.icon,
  #categories h2 .add.icon {
    color: #87568D;
  }

  .clickable {
    opacity: 1;
    transition: opacity .25s ease-in-out;
  }

  .clickable:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  #categories button {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  .container {
    margin: 15px;
  }

  i.remove.icon {
    opacity: 0;
    transition: opacity .25s ease-in-out;
  }

  div.content:hover i.remove.icon {
    opacity: 1;
  }
</style>
