module.exports = {
  ci: {
    collect: {
        url: ['https://semaphoreci.com'],
        numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}]
        }
    },
    upload: {
      // target: 'temporary-public-storage',
      target: 'filesystem',
      outputDir: 'reports'
    },
  },
};
