import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => ({
        locale: req.headers['accept-language'].split(',')[0],
        // aqui o correto seria buscar essa informação via cookies
        // pois o usuário poderia setar o locale que ele quisesse
        // locale: 'pt-BR'
        // locale: 'en-US'
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
