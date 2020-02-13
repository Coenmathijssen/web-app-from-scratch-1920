import detailPage from './detailPage.js'
import API from './API.js'
const routie = require('./modules/routie.js')


function renderDetailPage (data) {
  routie({
    ':id': (id) => {
      const foundItem = detailPage.matchItem(data, id)
      detailPage.appear(foundItem)

      fetchData(`beer/${id}/breweries`).then(data => {
        console.log(data.data[0])
      })
    },
    'about': () => {
      console.log('about')
    }
  })
}

async function fetchData (endpoint) {
  const corsFix = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'https://sandbox-api.brewerydb.com/v2/'
  const key = '73685041c0bfbe5aa327c0c735d3bb0c'

  const response = await fetch(`${corsFix}${apiUrl}${endpoint}/?key=${key}`)
  const data = await response.json()
  return data
}

module.exports = { renderDetailPage }
