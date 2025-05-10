import vituum from 'vituum'

export default {
  base: '/2024-p2b-web-projekt-daniel-kostan/',
    plugins: [
      vituum({
        pages: {
          normalizeBasePath: true
        }, 
        imports: {
            paths: ['./src/styles/*/**', './src/scripts/*/**']
        }
      })
    ],
  }