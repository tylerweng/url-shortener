import Model from './model'

const service = {
  get_shortened_url: full_url => {
    return ""
  },
  save_doc: (full_url, shortened_url) => {
    const model = new Model({
      full_url: full_url,
      shortened_url, shortened_url,
      timestamp: Date.now()
    })
    model.save()
  }
}

export default service