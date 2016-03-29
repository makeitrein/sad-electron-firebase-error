<template>
  <div @click="openLink" class="item">
    <div class="content">
      <i @click.stop="deleteBookmark" class="icon remove right-float"></i>
      <a class="header">{{title}}</a>
      <div class="description">
        {{url}}
        <a class="ui {{categoryColor}} tiny label right-float">{{category}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { shell } from 'electron'
  import store from '../store'

  export default {
    props: ['id', 'title', 'url', 'category', 'categoryColor'],

    methods: {
      deleteBookmark () {
        store.deleteBookmark(this.id)
      },

      openLink () {
        shell.openExternal(this.url)
      }
    }

  }
</script>

<style>
  #links-container .list .item {
    padding: 15px;
  }

  .item .description {
    margin-top: 5px;
  }

  i.remove.icon {
    opacity: 0;
    transition: opacity .25s ease-in-out;
  }

  div.content:hover i.remove.icon {
    opacity: 0.5;
  }
</style>
