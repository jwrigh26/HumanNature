# UniMath

## Prerequisites

### Install Node LTS

Install from [Node.js](https://nodejs.org/en/) Website.

### Install Project Dependencies

`npm install`

## Building and Running the Project

### Running the Project for Development

To run the project, you need to run a npm script. Run the one that corresponds to the master
data service you'd like to run against.

**Development**

`npm run start`

**Local**

`npm run start-local`

### Create a Production Build

`npm run build`

The built files will appear in the `build` directory.

#### Running the Project from Production Build

`npm run run-from-build`

### Viewing the project

Open [http://localhost:8080](http://localhost:8080) in your browser, once you have started a server (see "Running the Project for Development" and "Running the Project from Production Build" above for instructions on how to start a server).

## ESLint and Prettier

ESLint and prettier are used to provide a consistent code style. ESLint handles detecting errors in our code base while Prettier handles code formatting. For ESLint, we're using a version based on Airbnb that we've been modifying to fit our style.

Simply run `npm run format` before you commit to ensure your files are in the right coding style.

### VS Code Setup

If you're using VS Code (or any other editor with plugin support for prettier/eslint), you can install a Prettier extension and ESLint extension.  For Prettier, you can simply turn on format on save for javascript and scss.  For ESLint, you can simply turn on lint fix on save.  With those in combination, you can ensure that your files follow our coding style.

## Testing

- Run all test specs `npm test`
- Run all tests when any files change `npm test --watch`

## Directory Structure

`src`: All source files should go in this directory.
You should only put global/build related files at the root.

`src/assets`: Any assets, such as images or files for download.

`src/components`:
Top level: React.js components that can be used between modules. Generally, these components shouldn't rely on Redux state.
Folders: React.js components in folders named to a component refer to files for that component

`src/helpers`: Any helper modules.  These are purely code - no React.js.

`src/styles`: Any global styles.

### Redux Items
Will update with slice and thunk best practices

## [CSS Modules](https://www.javascriptstuff.com/what-are-css-modules/)

Use CSS modules wherever possible.

CSS modules are:

> CSS files in which all class names and animation names are scoped locally by default.

Import a SCSS module like:

    import 'styles.module.scss';

Finding a SCSS module uses the file name to determine if it is one.

### If you need to add CSS globally

Import the SCSS like:

    import 'styles.scss';

