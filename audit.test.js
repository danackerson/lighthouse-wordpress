const fs = require("fs");
// const { describe, it } = require("node:test");
//const { default: test } = require("node:test");

const reportFile = "reports/manifest.json";

const report = JSON.parse(fs.readFileSync(reportFile));

report.forEach(r => {
    let summary = r.summary;
    describe('Performance', () => {
        it('should be at least 40%', () => {
            expect(summary.performance).toBeGreaterThanOrEqual(0.4);
        });
    });
    
    describe('Accessibility', () => {
        it('should be at least 40%', () => {
            expect(summary.accessibility).toBeGreaterThanOrEqual(0.4);
        });
    });
    
    describe('SEO', () => {
        it('should be at least 40%', () => {
            expect(summary.accessibility).toBeGreaterThanOrEqual(0.4);
        });
    });
    
});
