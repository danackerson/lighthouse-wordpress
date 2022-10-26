const fs = require("fs");
// const { describe, it } = require("node:test");
//const { default: test } = require("node:test");

const reportFile = "reports/manifest.json";

const report = JSON.parse(fs.readFileSync(reportFile));
const summary = report[0].summary;

// assertions
//console.log(report.summary.performance);

describe('Performance', () => {
    it('should be at least 90%', () => {
        expect(summary.performance).toBeGreaterThanOrEqual(0.9);
    });
});

describe('Accessibility', () => {
    it('should be at least 90%', () => {
        expect(summary.accessibility).toBeGreaterThanOrEqual(0.9);
    });
});

describe('SEO', () => {
    it('should be at least 90%', () => {
        expect(summary.accessibility).toBeGreaterThanOrEqual(0.9);
    });
});


// test("Performance is 90%", () => {
//     expect(report[0].summary.performance).toBeGreaterThanOrEqual(0.9);
// })

// describe('addition', () => {
//     describe('positive numbers', () => {
//       it('should add up', () => {
//         expect(1 + 2).toBe(3);
//       });
//     });
//   });


// {
//     url: 'https://semaphoreci.com/',
//     isRepresentativeRun: true,
//     htmlPath: '/Users/tom/r/demos/lighthouse-wordpress/reports/semaphoreci_com-_-2022_10_26_12_58_56.report.html',
//     jsonPath: '/Users/tom/r/demos/lighthouse-wordpress/reports/semaphoreci_com-_-2022_10_26_12_58_56.report.json',
//     summary: {
//       performance: 0.46,
//       accessibility: 0.93,
//       'best-practices': 0.92,
//       seo: 0.95,
//       pwa: 0.4
//     }
//   }
// ]