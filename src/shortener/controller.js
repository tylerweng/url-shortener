import model from './model'
import service from './service'
import status_codes from '../status_codes'

const controller = {
  index: (req, res) => {
    model.find({})
    .limit(req.query.limit === undefined ? 0  : Number(req.query.limit))
    .lean().exec((err, doc) => {
      res.json(doc)
    })
  },
  redirect: (req, res) => {
    model.findById(req.params._id)
    .lean().exec((err, doc) => {
      if (doc === null) {
        res.status(404).send(status_codes[404])
      } else {
        res.redirect(doc.full_url)
      }
    })
  },
  findAllByFullUrl: (req, res) => {
    model.find(
      {
        full_url: {
          $regex: req.params.full_url,
          $options: 'i'
        }
      }
    )
    .limit(req.query.limit === undefined ? 0 : Number(req.query.limit))
    .lean().exec((err, doc) => {
      if (doc.length === 0) {
        res.status(404).send(status_codes[404])
      } else {
        res.json(doc)
      }
    })
  },
  post: (req, res) => {
    try {
      const full_url = req.body.full_url
      const _id = service.hash_code(full_url)
      console.log(_id)
      service.save_doc(full_url, _id)
      console.log(`full_url: ${full_url} successfully converted to _id: ${_id}`)
      res.status(200).send(status_codes[200])
    } catch (err) {
      console.log(`Error making post request caused by: ${err}`)
      console.log("req.body reproduced below")
      console.log(req.body)
      res.status(400).send(status_codes[404])
    }
  }
}

export default controller