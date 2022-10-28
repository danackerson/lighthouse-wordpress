const fs = require("fs");
const reportFile = "reports/manifest.json";
const report = JSON.parse(fs.readFileSync(reportFile));

report.forEach(r => {
    let summary = r.summary;
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
    
});
