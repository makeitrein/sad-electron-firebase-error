import { EventEmitter } from 'events'
import Firebase from 'firebase'

// ENTER YOUR FIREBASE URL BELOW
const db = new Firebase("https://YOUR_FIREBASE_APP.firebaseio.com/")
const categoriesRef = db.child('categories')
const bookmarksRef = db.child('bookmarks')
const store = new EventEmitter()

let categories = {}
let bookmarks = {}

db.on('value', (snapshot) => {
  var bookmarkData = snapshot.val()
  if (bookmarkData) {
    categories = bookmarkData.categories
    bookmarks = bookmarkData.bookmarks
    store.emit('data-updated', categories, bookmarks)
  }
})

store.addCategory = (category) => {
  categoriesRef.update(category)
}

store.deleteCategory = (catName) => {
  // first check if an 'Uncategorized' category exists, if not, create it
  if (!('Uncategorized' in categories)) {
    categoriesRef.update({'Uncategorized': 'white'})
  }

  for (var key in bookmarks) {
    if (bookmarks[key].category === catName) {
      bookmarksRef.child(key).update({category: 'Uncategorized'})
    }
  }
  categoriesRef.child(catName).remove()
}

store.addBookmark = (bookmark) => {
  bookmarksRef.push(bookmark)
}

store.deleteBookmark = (bookmarkId) => {
  bookmarksRef.child(bookmarkId).remove()
}

export default store
