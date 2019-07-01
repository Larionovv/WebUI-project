const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewsSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true,
	},
});

module.exports = News = mongoose.model('News', NewsSchema);