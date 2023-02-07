const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
module.exports = database = () => {
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('Database Connected successful'))
		.catch('Connect to fail....');
};
