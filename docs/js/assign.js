export function data (data) {
  // Select container
  const container = document.getElementsByClassName('beer-list')[0]
  container.innerHTML = ""
  data.forEach((item, i) => {
    container.insertAdjacentHTML('afterbegin', `
    <a href="#${data[i].id}" class="beer">
      <article>
        <img src="${(data[i].labels ? data[i].labels.large : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png')}" alt="beer label" class="beer-image">
        <h2 class="beer-title">${data[i].name}</h2>
        <ul class="meta">
          <li class="abv">${(data[i].abv === undefined ? 'alc. -%' : `alc.${data[i].abv} %`)}</li>
          <li class="created">${data[i].createDate.slice(0, -9)}</li>
        </ul>
        <p class="beer-desc">${data[i].description === undefined ? 'No description available' : data[i].description.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,30}\b/g)[0] + '...'}</p>
      </article>
    </a>`)
  })
}

module.exports = { data }
