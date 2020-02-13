export function data (data) {
  data.forEach((beer, i) => {
    // Select container
    const container = document.getElementsByClassName('beer-list')[0]

    // Create elements and add classes
    let link = document.createElement('a')
    link.classList.add('beer')
    let newArticle = document.createElement('article')
    let image = document.createElement('img')
    image.classList.add('beer-image')
    let title = document.createElement('h2')
    title.classList.add('beer-title')
    let ul = document.createElement('ul')
    ul.classList.add('meta')
    let abv = document.createElement('li')
    abv.classList.add('abv')
    let created = document.createElement('li')
    created.classList.add('created')
    let desc = document.createElement('p')
    desc.classList.add('beer-desc')

    // Fill evry created element with the right data
    newArticle.setAttribute('id', data[i].id)
    link.href = '#' + data[i].id

    if (data[i].labels) {
      image.src = data[i].labels.large
    } else {
      image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    }

    // Delete the time from the date
    title.textContent = data[i].name

    if (data[i].abv === undefined) {
      abv.textContent = 'alc. -%'
    } else {
      abv.textContent = 'alc. ' + data[i].abv + '%'
    }
    created.textContent = data[i].createDate.slice(0, -9)

    // Append everything
    container.appendChild(link)
    link.appendChild(newArticle)
    newArticle.appendChild(image)
    newArticle.appendChild(title)
    ul.appendChild(abv)
    ul.appendChild(created)
    newArticle.appendChild(ul)

    if (data[i].description === undefined) {
      desc.textContent = 'No description available'
      newArticle.appendChild(desc)
    } else {
      let text = data[i].description.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,30}\b/g)[0] + '...'
      desc.textContent = text
      newArticle.appendChild(desc)
    }
  })
}

module.exports = { data }
