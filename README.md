# Lighthouse Benchmarks Example for WordPress Site

[![Build Status](https://ackerson.semaphoreci.com/badges/lighthouse-wordpress/branches/master.svg?key=ccaa486f-dfa8-460e-b440-3a2f23f2b5de)](https://ackerson.semaphoreci.com/projects/lighthouse-wordpress)

This demo runs Google's [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) to benchmark a WordPress site.

## Requirements

- Node v12 or better.
- Google Chrome.
- [Semaphore CI/CD](https://semaphoreci.com/).
- A GitHub or Bitbucket account.

Install dependencies:

```bash
$ npm install
```

## Configure

Main config file is located at `lighthouserc.js`. You can set URLs to scan and error thresholds that cause the command to fail.

Alternatively, instead of setting thresholds on `lighthouserc.js`, you can run/tweak the more detailed audit test script `audit.test.js`. This allows for more fine-grained settings and produces a JUnit-compatible output with integrates into Semaphore test results.

## Run locally

Scan site:

```bash
$ npm start
```

Analyze report files and export JUnit manifest.

```bash
$ npm run audit
```

## Continuous Integration

The demo includes a [Semaphore CI/CD](https://semaphoreci.com/) pipeline.

![CI/CD pipeline with scan and audit job](./screenshots/report-blog.jpg)

You can view the Lighthouse HTML reports in the Artifacts tab:

![Artifact tabs in Semaphore](./screenshots/project-artifacts.jpg)

All the past reports can be reviewed directly from the artifacts:

![Blog Lighthouse report](./screenshots/report-blog.jpg)

The pipeline uses [test reports](https://docs.semaphoreci.com/essentials/test-summary/) integration to generate a more user friendly experience.

![Test summary showing all tests results in one dashboard](./screenshots/test-summary.jpg)

## Licence

MIT
