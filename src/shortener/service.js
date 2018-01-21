import Base62 from 'base62'

import Model from './model'

const service = {
  hash_code: s => {
    let h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return Base62.encode(Math.abs(h));
  },
  save_doc: (full_url, _id) => {
    const model = new Model({
      full_url: full_url,
      _id: _id
    })
    console.log(model)
    model.save()
  }
}

export default service