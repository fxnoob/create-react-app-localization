# Create React App localization 

> Load app in a regional languages without loading all the translation files.

> Easy to use Context Api.

> Cli scripts to generate and delete translations files.

## Commands

### Generate locale

````
yarn generate:locale

````

### Delete locale 

````
yarn delete:locale

````

## How to use translations

App catches `hl` get query parameter from the url. if not found it fallbacks to browser locale otherwise default locale is set to `en`(English).

In `index.js` app is wrapped in `LanguageProvider` context.

````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from "./contexts/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
````

Now you can use `useLanguage` context api in the children component. it contains `t` function which takes `key` as parameter and return translated text based upon the locale.


`App.js`

````
import logoSrc from './logo.svg';
import './App.css';
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { t } = useLanguage();
  const logo = t("logo"); // logo
  const edit = t("edit"); // edit
  const and = t("and"); // and
  const saveToReload = t("saveToReload"); //  save to reload
  const learnReact = t("learnReact"); //  Learn React

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoSrc} className="App-logo" alt={logo} />
        <p>
          {edit} <code>src/App.js</code> {and} {saveToReload}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {learnReact}
        </a>
      </header>
    </div>
  );
}

export default App;
````

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
