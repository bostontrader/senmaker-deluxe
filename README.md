# Welcome to senmaker-deluxe

## Introduction
The purpose of **senmaker-deluxe** is to help its users create grammatically correct English compositions. With **senmaker-deluxe** the user can select vocabulary words from the dictionary, assemble them into larger parts of speech such as phrases and clauses, and configure the various elements of grammar along the way.

The fun doesn't end with mere phrases and clauses. With **senmaker-deluxe** the user can continue to assemble larger parts of speech such as sentences, paragraphs, and finally compositions.

## Getting Started ##
npm install

npm test

npm start

## Dependencies ##

**senmaker-deluxe** uses React for the UI and hence requires:

* react
* react-dom

**senmaker-deluxe** also uses:

* bulma - For styling.
* engcore - A system for representing and managing English parts of speech.
* freezer-js - State management.
* react-select - Where the UI uses select controls, this is useful.
* react-sortable-tree - Where the UI uses a tree view control, this is useful.

## devDependencies

**senmaker-deluxe** uses webpack and the weback development server.  Hence the need for webpack and webpack-dev-server.

**senmaker-deluxe** uses ES2015 source code as well as a few additional fancy language features.  We have chosen babel for our transpiling needs. This gives rise to the need to use:

* babel-core
* babel-loader - Webpack needs this to connect to babel.
* babel-preset-es2015 - Need this generally for ES2015 syntax.
* babel-preset-react - Need this in order to use JSX syntax.
* babel-preset-stage-0 - Random bits of new ES syntax.

We use Webpack, sass, and scss, so we need a blizzard of loaders for all this:

* css-loader
* file-loader
* node-sass
* postcss-loader
* sass-loader
* style-loader

For testing we use Jest so we therefore need:

* jest
* babel-jest
* react-test-renderer

And because Jest will choke on scss we need:

* jest-css-modules
