# Chrome Extension Template
---------------------------

A starter template for building chrome-extensions.

## TypeScript
-------------

To enable TypeScript in this project install the relevant dependencies

```
npm install --save-dev typescript @types/chrome
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