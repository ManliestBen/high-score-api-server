import mongoose from "mongoose"
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  game: String,
  score: Number,
  player: String
}, {
  timestamps: true
})

const Score = mongoose.model('Score', scoreSchema)

export {
  Score
}