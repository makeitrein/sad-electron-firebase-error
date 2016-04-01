# Building a Bookmarking App with Electron, VueJs, and Firebase


This code is for the tutorial on building a Bookmarking App with Electron, VueJs, and Firebase.

Check out the full tutorial on [coligo](http://coligo.io/bookmarking-app-electron-vuejs-firebase/)

### Enter the URL to your Firebase App in **app/store/index.js**

```javascript
const db = new Firebase("https://YOUR_FIREBASE_APP.firebaseio.com/")
```

### Install the dependencies

```bash
npm install
```

### Run the build

```bash
webpack
```

### Launch the app

```bash
npm start
```
