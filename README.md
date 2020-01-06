<div align="center">
  <image src="icon.png" height="256" width="256">
  <h2>Fav Bookmark Manager</h2>
  <hr />
</div>

Open source bookmark manager extension for Chrome. Intergrates with Github Gist.

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/fav-bookmark-manager/gammmbkeceiljlgijimbhhgkfmiejnkl)

### Building from Source

Node, npm and yarn are all required to run the project.

1. `yarn` to install deps

2. `yarn dev` will bundle the app in development

3. Open Chrome/Chromium. Go to `chorme://extensions`

4. Load unpacked extension

5. Load the `build` folder generated in the root project

### Other Scripts

```
   - build
      yarn clean:prod && NODE_ENV=production webpack --mode production --config webpack.prod.js
   - build:firefox
      NODE_ENV=development webpack --mode development --config ./webpack/firefox.js --watch
   - clean
      rm -rf './build'
   - clean:firefox
      rm -rf ./firefox
   - dev
      NODE_ENV=development webpack --mode development --config webpack.dev.js --watch
   - lint
      eslint 'app/**/*.js'
   - prettier
      prettier --config ./.prettierrc --write 'app/**/*.js'
   - start:firefox
      web-ext run --source-dir ./firefox/ --verbose
```

## Building for Production

Run `yarn build:prod` to build the extension to the build/ folder

### Packing the extension

Open chrome and navigate to `chrome://extensions`. There toggle "Developer Mode" if not already toggled.
Finally click "Pack extension" and select the `build` folder as the directory and then `buildkey.pem` as the keyfile

## Firefox

```

yarn build:firefox # Build JS bundle for Firefox

yarn start:firefox  # Start the development server (using `web-ext`)

```

The extension should then open on Firefox.

## Redux Devtools

Because redux devtools extension does not work with chrome extensions, we use a DevTools panel instead to display the redux store.
It should already be open when you load the app on the right.

### Contributing

PR's and contributions are welcome.

## Roadmap

- Release Schedule of some sort
- Build system
- Other niceties
