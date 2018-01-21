import { Schema } from 'mongoose'

const schema = new Schema(
  {
    full_url: String,
    shortened_url: String,
    timestamp: Date
  }, 
  {
    versionKey: false
  }
)

export default schema