# Official SwiFT Website

This repository hosts the source code of the website for a popular Rocket League team, [SwiFT Freestyling](https://www.youtube.com/channel/UCOkURq_NNFeVfhA6v5JfVCg).

The repository maintains a dev-master branch pattern to separate production-ready and development builds of the website. The `master` branch will host all source code being deployed to the web server, whereas the `dev` branch will host work-in-progress builds not yet deployed. When contributing to the repository, please create pull requests on the `dev` branch until they are fit to be merged onto the `master` at a later date.

This project is created using [ReactJS](https://reactjs.org) (front-end) and [Express](https://expressjs.com) (back-end).

## Local Website

If you're interested in viewing the website locally, due to the framework used, it's not as easy as opening the `index.html` and expecting a copy of the website in your browser. Instead, you must use the build scripts provided by the ReactJS framework.

To run the website locally, follow the steps below:
- Install [Node Package Manager (NPM)](https://npmjs.com)
- Clone the GitHub repository using git, `git clone https://github.com/2008Choco/SwiFT-Website.git`
- Be sure you're on the branch you wish to run locally, either `master` or `dev`.
  - By default, you will be on `master`, but you may switch with `git checkout dev`
- Open a command line terminal in the root website directory and, using NPM, run `npm install` to install all dependencies
- Once all dependencies are installed, run `npm start` to start a local development server. Your browser will be opened to localhost on port 3000
  - See "Available Scripts" -> `npm start` for more information on the start script

## Contributing

If you would like to make a contribution, please do so on the `dev` branch. Changes will be merged into the master branch when they are deemed stable. It is encouraged that you test your changes using the above listed instructions before making a pull request and that your PR is as detailed as possible.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.