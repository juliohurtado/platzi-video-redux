import api from '../api'

import { normalize, schema } from 'normalizr'

//const media = new schema.Entity(key, dfinicion del esquema, opciones)
const media = new schema.Entity('media', {}, {
  processStrategy: (value, parent, key) => ({ ...value, category: parent.id })
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category)}


const normalizedDate = normalize(api, categories)

export default normalizedDate