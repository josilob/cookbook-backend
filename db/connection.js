const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookbooks_db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

mongoose.Promise = Promise;

module.exports = mongoose;
