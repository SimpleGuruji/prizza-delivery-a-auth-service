import app from './app'
import { Config } from './config/index'

const startServer = () => {
    const port = Config.PORT

    try {
        app.listen(port, () => console.log(`Server running  on port ${port}.`))
    } catch (error) {
        console.error('Error starting server', error)
        process.exit(1)
    }
}

startServer()

console.log(Config.NODE_ENV)
console.log(Config.PORT)
