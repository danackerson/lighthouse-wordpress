module.exports = {
  ci: {
    collect: {
        url: ['https://semaphoreci.com', 'https://semaphoreci.com/blog'],
        numberOfRuns: 5
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.9}],
        'categories:accessibility': ['warn', {minScore: 0.9}],
        'categories:seo': ['warn', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.9}]
        }
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports'
    },
  },
};
