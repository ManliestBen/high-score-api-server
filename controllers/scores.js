import { Score } from "../models/score.js"

async function index(req, res) {
  try {
    let scores = await Score.find({game: req.query.game})
    res.json(scores) 
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

async function create(req, res) {
  try {
    let score = await Score.create(req.body)
    res.json(score)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}

export {
  index,
  create
}