const mongoose = require('mongoose')

const companySchema = new mongoose.Schema(

	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		logo: {
			type: String,
		},
		averageRating: {
			type: Number,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
)


module.exports = mongoose.model('Company', companySchema)

