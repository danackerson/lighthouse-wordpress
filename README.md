# Lighthouse Benchmarks Example for WordPress Site

This demo runs Lighthouse CI on https://semaphoreci.com

## Requirements

Node v12 or v14

Install dependencies:

```bash
$ npm install
```

## Configure

Main config file is located at `lighthouserc.js`. You can set URLs to scan and error thresholds that cause the command to fail.

Alternatively, instead of setting thresholds on `lighthouserc.js`, you can run/tweak the more detailed audit test script `audit.test.js`. This allows for more fine-grained settings and produces a JUnit-compatible output with integrates into Semaphore test results.

## Run locally

```bash
npm start
npm run audit
```

## Continuous Integration

The demo includes a Semaphore CI/CD pipeline.

SCREENSHOT

You can view the Lightout HTML reports in the Artifacts tab:

SCREENSHOT

SCREENSHOT

The pipeline uses test reports integration to generate a more user friendly experience.

SCREENSHOT

## Licence

MIT