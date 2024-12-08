/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      home: 'aws',
      name: 'sst-minimal-template',
      providers: {
        aws: {
          profile: 'aws-profile',
          region: 'us-east-1',
        },
      },
      removal: input?.stage === 'production' ? 'retain' : 'remove',
    }
  },
  async run() {
    await import('./infra/index.js')
    return {}
  },
})
