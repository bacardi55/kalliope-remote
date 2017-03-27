# kalliope-remote

An simple "Single Page Application" writen in emberJS to launch [Kalliope](https://github.com/kalliope-project/kalliope) synapses and orders.

![Kalliope sample](Doc/assets/homepage.png)

## Introduction

This EmberJS app will retrive data from the [Kalliope API](https://github.com/kalliope-project/kalliope/blob/dev/Docs/rest_api.md) and let you fire your synapses from the web page.

It also let you run text order via a simple input form (at the top of the page), to enter the same order you would say vocally to kalliopé, eg: "what time is it".

![kalliope text order](Doc/assets/text_order.png)


You can also send a direct audio order via the web app, by clicking on the red record button (at the top of the page):

![kalliope record order](Doc/assets/audio_order.png)

The button will then change to a stop button, click on it when you finished your order:

![kalliope record order](Doc/assets/audio_order_stop.png)

What is does know:
* List all synapse
* Allow synapse without arguments in their order (no {{ query }} or similar).
* Disable "launch" button for orders with arguments.
* Allow full text orders
* Leverage the local browser storage to allow "ignoring" synapse to only list needed ones.

What is next to do:
* Record an audio order to be sent to kalliopé
* Enable using dynamic order (with an input form)


**For this app to work, you need to enable CORS request for your host (or all) in your [Kalliopé settings.yml](https://github.com/kalliope-project/kalliope/blob/dev/Docs/settings.md)**


# kalliope-ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

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

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
