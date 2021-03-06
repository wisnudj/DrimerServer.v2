const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const history = new Schema({
  userHistory: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  drinkWater: {
    type: Number
  },
  stepDay: {
    type: Number
  },
  dayWeather: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  drinkTime: [{
    type: String
  }]
})

const historySchema = mongoose.model('Histories',history)

module.exports = historySchema;
