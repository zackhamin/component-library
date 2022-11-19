# cc component-library

## Getting started

## Description

A design system example following atomic design

## Usage

Run storybook

`npm run storybook`

publish package - useful for npm link to an existing project

`npm run publish`

Create a new component

` npm run component:create`


## Icons

Add all SVG icons to the icons/assets directory.

Icons are automatically converted into React components using SVGR. Run `npm run svgr` whenever a new svg is added to the dir.

Ensure that all icons added use the currentColor attribute instead of a hex color so that the icon will inherit the color from CSS.

There are custom templates for each svgr component and the index file to use named exports rather than the default export provided by default. These template files are located in the root svgr dir.


### Bundle Size

These changes should not be breaking changes and all apps using the component library should continue work as before.

All components can be imported in exactly the same way as before.

`import { Button, FormControl } from "components";`


