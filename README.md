# react-basics

Objectives:
* Gather all the commonly used components (buttons, selects, etc) in a single library.
* Use the Emotion library for the styling.
* Code the component in an optimal structure using typescript, testing with jest and storybook.
* Create components with intuitive props to easily fit the project's needs
* Create components with enought props to enable their customization

Styling:
By default, this library only use emotion for styling. However, you can enable normal css by
uncommenting the postcss package (and it's import statement) in rollup.config.js.

Upgrade the package version:
1. Change the package version to a higher number in the package.json
2. Run `npm run rollup` and `npm publish` from the computer where you have the `~/.npmrc` file

Use latest version
To use the new version, in your project where you import this library, use: 
1. `npm view @5daigle/react-basics version` or pluralise `version(s)` to get a list of all versions available.
2. `npm install @5daigle/react-basics@VERSION_NUMBER`


Sources: 
* Create a TypeScript React library: 
  * https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
  * https://www.smashingmagazine.com/2020/09/component-library-react-emotion/


- Add Tests and storybook from first link
- Copy storybook settings from Oli
- Add emotion in peerDependencies, set emotion with second link
- Use emotion to style the components by following the second link
- Create a version 1.0.1 by following the first link
- Test the import in Oli

