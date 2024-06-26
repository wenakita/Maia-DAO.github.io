module.exports = {
  mySidebar: [
    'governance',
    {
      type: 'category',
      label: 'Governance',
      items: ['governance-overview', 'governance-severity', 'governance-process', 'governance-actions'],
    },
    'process',
    {
      type: 'category',
      label: 'Process',
      items: ['process-overview', 'process-phases'],
    },
    'phases',
    {
      type: 'category',
      label: 'Phases',
      items: ['phases-request', 'phases-temperature', 'phases-proposal'],
    },
    'actions',
    {
      type: 'category',
      label: 'Actions',
      items: ['actions-overview', 'actions-treasury', 'actions-gauges'],
    },
    'treasury',
    {
      type: 'category',
      label: 'Treasury',
      items: ['treasury-overview'],
    },
    'gauges',
    {
      type: 'category',
      label: 'Gauges',
      items: ['gauges-overview', 'gauges-manage'],
    },
    'manage',
    {
      type: 'category',
      label: 'Manage',
      items: ['manage-gauges', 'manage-factories'],
    },
    {
      type: 'autogenerated',
      dirName: '.', // generate sidebar slice from the docs folder (or versioned_docs/<version>)
    },
  ],
}
