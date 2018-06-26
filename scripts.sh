
live-server public
yarn global add babel-cli
yarn init
yarn add babel-preset-react
yarn add babel-preset-env

OLD : babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
NEW : npx babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

yarn run dev-server : local dev, webpack in charge of bundle.js in memory
yarn run build : production, generating a physical bundle.js file with our app