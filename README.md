# Lighthouse Benchmarks Example for WordPress Site

This demo runs Lighthouse CI on https://semaphoreci.com

## Requirements

Node v12 or v14

Install dependencies:

```bash
$ npm install
```

## Configure

Main config file is located at `lighthouserc.js`. You can set URLs to scan and error thresholds.

A more detailed audit file can be found at `audit.test.js`. You can do more interesting things there.

## Run locally

```bash
npm start
npm run audit
```

## Continuous Integration

The demo includes a Semaphore CI/CD pipeline.

SCREENSHOT

## Licence

MIT