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
      const shortened_url = service.get_shortened_url(full_url)
      service.save_doc(full_url, shortened_url)
      console.log(`full_url: ${full_url} successfully converted to shortened_url: ${shortened_url}`)
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