import { Schema } from 'mongoose'

const schema = new Schema(
  {
    full_url: String,
    _id: String
  }, 
  {
    versionKey: false,
    timestamps: true
  }
)

export default schema