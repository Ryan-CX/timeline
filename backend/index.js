const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');
const PORT = 3001;

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('MongoDB connected');
	})
	.catch((e) => console.log(e));

app.get('/', (req, res) => {
	res.send('hehe');
});

// use the router created above
app.use('/pins', pinRoute);
app.use('/users', userRoute);

app.listen(process.env.PORT || PORT, () => {
	console.log('backend is running');
});
