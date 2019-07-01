const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
	userName: {
		type: String,
		required: true
	},
	postText: {
		type: String,
		required: true,
	},
	timePost: {
		type: String,
		required: true,
	},
});

module.exports = Post = mongoose.model('Post', PostSchema);