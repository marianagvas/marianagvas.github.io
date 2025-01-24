# Development
Use `npm` though `yarn` should work for local deployment, though `npm`'s [package-lock.json](package-lock.json) should be used.
```bash
# first steps
npm run install
npm run dev

# build and test locally
npm run build
npm run preview
```

### Project structure
1. all static images are organised in the [public](public/) folder;
1. the dynamic content of the website is managed inside the [src/data.js](src/data.js) file (see structure below)



### data.js structure
This file contains an exported variable `data` that describes the website content. Each child object of this page describes one page that matches the `/its-url-value`