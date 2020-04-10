# Kirby Previews

Add some missing structure previews in the panel.

![screenshot](https://user-images.githubusercontent.com/14079751/50736950-dcab0080-11c3-11e9-9548-02a04cdacaaf.jpg)

> This plugin is completely free and published under the MIT license. However, if you are using it in a commercial project and want to help me keep up with maintenance, please consider [making a donation of your choice](https://www.paypal.me/sylvainjule) or purchasing your license(s) through [my affiliate link](https://a.paddle.com/v2/click/1129/36369?link=1170).

<br/>

## 1. Installation

Download and copy this repository to ```/site/plugins/previews```

Alternatively, you can install it with composer: ```composer require sylvainjule/previews```

<br/>

## 2. Setup

That's it, no need for additional config. This plugin currently provides those field-previews :

- Multiselect
- Structure
- Tags
- Toggle
- [Color](https://github.com/TimOetting/kirby-color)
- [Colors](https://github.com/hananils/kirby-colors)
- [Color-palette](https://github.com/sylvainjule/kirby-color-palette)
- [Locator](https://github.com/sylvainjule/kirby-locator)

<br/>

## 3. Add / edit a preview

- Clone the repo
- `cd` to your newly created folder (named `kirby-previews`, or whatever you have chosen)
- Please read the [pluginkit guidelines](https://github.com/getkirby/pluginkit/tree/4-panel), and install `parcel` as explained.

From there, adding a new preview might only take a few minutes:

- Start by running the plugin in dev mode to benefit from hot-reload while working on your preview (`npm run dev`)
- Create a new preview under `src/components` (check the existing previews for how to structure content).
- Add your preview CSS in `src/assets/styles.scss`
- Register you new preview in `src/index.js` (check the existing previews for how to do this).
- Build the plugin (`npm run build`)
- Create a pull request

> You **must** run the build process before pushing the repo, else the hot-reload code will prevent it to work in any install.

<br/>

## 4. License

MIT
