import { Schema } from 'mongoose'

const schema = new Schema(
  {
    full_url: String,
    shortened_url: String
  }, 
  {
    versionKey: false,
    _id: true,
    timestamps: true
  }
)

export default schema