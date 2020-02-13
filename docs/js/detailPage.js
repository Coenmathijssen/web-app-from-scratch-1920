function matchItem (data, id) {
  const foundItem = data.filter(found => { return found.id === id })
  return foundItem[0]
}

function appear (data) {
  let image = document.getElementById('detail-image')
  let title = document.getElementById('detail-title')
  let abv = document.getElementById('detail-abv')
  let created = document.getElementById('detail-created')
  let type = document.getElementById('detail-type')
  let organic = document.getElementById('detail-organic')
  let production = document.getElementById('detail-production')
  let description = document.getElementById('detail-description')

  if (data.labels) {
    image.src = data.labels.large
  } else {
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  }

  title.textContent = data.name

  if (data.abv === undefined) {
    abv.textContent = 'alc. -%'
  } else {
    abv.textContent = 'alc. ' + data.abv + '%'
  }
  created.textContent = data.createDate.slice(0, -9)

  if (data.style) {
    type.textContent = data.style.shortName
    description.textContent = data.style.description
  } else {
    type.textContent = 'No name available'
    description.textContent = 'No description available'
  }

  if (data.isOrganic === 'N') {
    organic.src = './cross.f1a68627.svg'
  } else {
    organic.src = './check.74abe2b1.svg'
  }

  if (data.isRetired !== 'N') {
    production.src = './cross.f1a68627.svg'
  } else {
    production.src = './check.74abe2b1.svg'
  }

  const detail = document.getElementsByClassName('detail')[0]
  detail.classList.add('visible')
}

module.exports = { matchItem, appear }
