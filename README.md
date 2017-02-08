# kalliope-remote
An emberJS SinglePageApp to launch [Kalliope](https://github.com/kalliope-project/kalliope) synapses

![Kalliope sample](http://files.penchetoiettous.se/kalliopeember.png)

## Introduction

This EmberJS app will retrive data from the [Kalliope API](https://github.com/kalliope-project/kalliope/blob/dev/Docs/rest_api.md) and let you fire your synapses from the web page.

For this app to work, you need to look at the patch for Kalliope API [here](https://github.com/kalliope-project/kalliope/issues/155) before the API gets actually fixed.

What is does know:
* List all synapse
* Allow synapse without arguments in their order (no {{ query }} or similar).
* Disable "launch" button for orders with arguments.
* Leverage the local browser storage to allow "ignoring" synapse to only list needed ones.

What is next to do:
* Enable using dynamic order (with an input form)


This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Contribution

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd kalliope-ember`
* `npm install`
* `bower install`

### Configuration

* You need to edit the config/environment.js to indicate the URL, port and credentials to connect to your API.

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build` (development)
* `ember build --environment production` (production)

#### Deploying

Specify what it takes to deploy your app.

### Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
