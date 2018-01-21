import mongoose from 'mongoose'

import schema from './schema'

const Model = mongoose.model('Model', schema)

export default Model