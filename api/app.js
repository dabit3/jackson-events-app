import express from 'express'

var app = express()
import api from './api'

app.use('/api', api)
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(3001, () => {
	console.log('My app running on port 3000...')
})