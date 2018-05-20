
live-server public
yarn global add babel-cli
yarn init
yarn add babel-preset-react
yarn add babel-preset-env
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch