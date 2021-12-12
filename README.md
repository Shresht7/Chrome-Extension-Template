# Chrome Extension Template
---------------------------

A starter template for building chrome-extensions.

## TypeScript
-------------

To enable TypeScript in this project install the dependency

```
npm install --save-dev typescript
```

Initialize `tsconfig.json` using

```
tsc --init
```

Rename all files with `.js` extension to `.ts` extension. 

>Note: Also update the file-extensions in `.esbuild.config.js`

TypeScript away!

## React
--------

To enable React in this project install the relevant dependencies

```
npm install react react-dom
```

Create React components with `.jsx` or `.tsx` extensions.

```jsx
import React from 'react'

const App = () => <h1>Hello World</h1>

export default App
```

Create a root div in `index.html` for React to target.

```html
    <body>
        <div id='root'></div>
    </body>
```

Update `script.js` to render the React component in the root div. (rename `script.js` to `script.jsx` to support jsx syntax)

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

Update references (i.e. file extensions) in `.esbuild.config.js`

## Svelte
---------

To enable Svelte in the project, install the `esbuild-svelte` plugin

```
npm install --save-dev esbuild-svelte
```

Enable the svelte plugin in `.esbuild.config.js`

```js
const sveltePlugin = require('esbuild-svelte')

//  ...

const config = {
    //  ...
    plugins: [sveltePlugin()]
    //  ...
}

```

Create a svelte component `.App.svelte`

```html
<script>
    let name = 'Rich'
</script>

<h1>Hello {name}!</h1>

<style>
    h1 {
        color: red;
    }
</style>
```

Import the component in `script.js`

```js
import App from './App.svelte'

new App({
    target: document.body
})
```

### + TypeScript

Install svelte-preprocess

```
npm install --save-dev svelte-preprocess
```

Enable preprocess in `.esbuild.config.js`

```js
const sveltePreprocess = require('svelte-preprocess')

const config = {
    // ...
    plugins: [
        sveltePlugin({
            preprocess: sveltePreprocess()
        })
    ]
    //  ...
}
```

Update svelte components to use TypeScript

```html
<script lang='ts'>
    let name: string = 'Rich'
</script>

<h1>Hello {name}!</h1>
```