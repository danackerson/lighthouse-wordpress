module.exports = {
  ci: {
    collect: {
        url: ['https://semaphoreci.com'],
        numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.4}],
        'categories:accessibility': ['error', {minScore: 0.4}],
        'categories:seo': ['error', {minScore: 0.4}]
        }
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports'
    },
  },
};
