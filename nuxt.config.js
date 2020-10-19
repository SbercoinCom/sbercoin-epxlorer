import webpack from 'webpack'

export default {
  head: {
    titleTemplate: '%s - Обозреватель блоков блокчейна Sbercoin.com',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'}
    ]
  },
  css: [
    'styles/styles.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '@/styles/common.less',
    '@/styles/card.less',
    '@/styles/info-table.less',
    '@/icons/style.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type)
    }
  },
  build: {
    extend(config, {isServer}) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.sbercoininfoAPIBase': JSON.stringify(process.env.SBERINFO_API_BASE
          || process.env[isServer ? 'SBERINFO_API_BASE_SERVER' : 'SBERINFO_API_BASE_CLIENT']
          || 'http://localhost:7001/'),
        'process.env.sbercoininfoWSBase': JSON.stringify(process.env.SBERINFO_WS_BASE
          || process.env.SBERINFO_API_BASE_WS
          || '//localhost:7001/'),
        'process.env.network': JSON.stringify(process.env.SBER_NETWORK || 'mainnet')
      }))
    },
	publicPath: '/dist',
    extractCSS: true,
    postcss: {
      features: {
        customProperties: false
      }
    }
  },
  serverMiddleware: ['~/middleware/ip.js'],
  plugins: [
    '~/plugins/components.js',
    '~/plugins/i18n.js',
    '~/plugins/sbercoin-utils.js',
    {src: '~/plugins/websocket.js', ssr: false}
  ]
}
