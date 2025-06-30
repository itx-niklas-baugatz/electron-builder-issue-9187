how to reproduce:
npm install
npm run app:dist
\dist\win-unpacked\resources> npx @electron/asar extract app.asar ./asarpck -> asar contains node_modules works correct!

delete dist, node_modules and package-lock.json

yarn install
yarn run app:dist
\dist\win-unpacked\resources> npx @electron/asar extract app.asar ./asarpck -> asar does not contains node_modules
