import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./infrastructure/router"

//console.log('PORT from environment:', process.env.PORT);
//PARA CAMBIAR PUERTO USAR docker run --privileged -e PORT=300? -p 300:300? apiwhatsappts:latest
//o tambien solo cambiar el puerto en  la bariable port, recordar que toca hacer "npm run build" para guardar cambios



const port = process.env.PORT || 3002
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('tmp'))
app.use(`/`,routes)

app.listen(port, () => console.log(`Ready...${port}`))