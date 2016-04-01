<template>

  <div id="cat-modal" class="ui small modal">
    <i class="close icon"></i>
    <div class="header">
      Add a new category
    </div>
    <div class="content">

      <form class="ui form">
        <div class="field">
          <label>Category name</label>
          <input v-model="catName" type="text" placeholder="Enter a category name...">
        </div>
        <div class="field">
          <label>Category color</label>
          <select v-model="catColor" class="ui simple dropdown">
            <option value="">Select a color</option>
            <option v-for="color in categoryColors"
              value="{{color}}">
              {{color | capitalize}}
            </option>
          </select>
        </div>
      </form>

    </div>
    <div class="actions">
      <div @click="addCategory" class="ui purple inverted button">Save</div>
    </div>
  </div>

</template>

<script>
  import store from '../store'

  export default {

    data () {
      return {
        catName: '',
        catColor: '',
        categoryColors: ['red', 'orange', 'yellow', 'olive', 'green',
          'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']
      }
    },

    methods: {

      addCategory () {
        var newCategory = {}
        newCategory[this.catName] = this.catColor
        store.addCategory(newCategory)
        $('#cat-modal').modal('hide')
      }

    },

    events: {

      'add-category': function () {
        this.catName = this.catColor = ''
        $('#cat-modal').modal('show')
      }

    }

  }
</script>
