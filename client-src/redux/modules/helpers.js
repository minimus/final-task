export function getInfo(data) {
  const majorData = [
    ['vendor', 'Производитель'],
    ['vendorcode', 'Модель'],
    ['country_of_origin', 'Страна происхождения'],
    ['weight', 'Вес'],
  ]
  const majorParams = [
    'Тип',
    'Комплектация',
    'Цвет',
  ]
  const info = []
  const params = []

  majorData.forEach((el) => {
    const [value, name] = el
    if (data[value]) info.push({ name, value: data[value] })
  })

  majorParams.forEach((value) => {
    const param = data.param.find(el => el.name === value)
    if (param) params.push({ name: param.name, value: param.keyValue })
  })

  info.unshift(...params)

  if (data.dimensions) {
    info.push({
      name: 'Размеры',
      value: data.dimensions
        .split('/')
        .map(e => parseFloat(e))
        .join(' x '),
    })
  }

  return info
}

export function prepareFacets(data) {
  const facets = [...data.facets]
  const majorFacetsKeys = ['Страна бренда', 'Цвет', 'Год выпуска']
  const majorFacets = []

  majorFacetsKeys.forEach((facetKey) => {
    const item = facets.find(e => e.facet === facetKey)
    if (item) {
      majorFacets.push(item)
      facets.splice(facets.findIndex(e => e.facet === facetKey), 1)
    }
  })

  const out = [...data.vendor, ...data.country, ...majorFacets, ...facets]

  out.reduce((prev, cur) => {
    if (!cur.facet.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/)) prev.push(cur)
    return prev
  }, [])

  /* while (true) {
   const idx = out.findIndex(e => e.facet.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/))
    if (idx > -1) out.splice(idx, 1)
    else break
  }*/

  for (let i = 0; i < out.length; i += 1) {
    out[i].id = `f${i + 1}`
    out[i].view = (out[i].facet === 'Цвет') ? 'color' : 'standard'
    while (true) {
      const idx = out[i].values
        .findIndex(e => ((typeof e === 'string') ? !!e.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/) : false))
      if (idx > -1) out[i].values.splice(idx, 1)
      else break
    }
  }

  return out
}

export function removeGarbage(items = []) {
  const out = []

  items.forEach((val) => {
    if (!val.match(/\d{4}-\d{2}-\d{2}[tT]\d{2}:\d{2}:\d{2}.\d{3}[zZ]/)) { out.push(val) }
  })

  return out
}
