/* eslint-disable no-console */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.NEXT_PUBLIC_SERVER_DOMAIN
const port = parseInt(process.env.NEXT_PUBLIC_SERVER_PORT)
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    })
        .once('error', (err) => {
            console.error(err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`Ready on http://${hostname}:${port}`)
        })
})
