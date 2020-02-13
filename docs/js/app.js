// Importing polyfill to make async functions work in Parcel
import 'babel-polyfill'

// Importing all functions
import API from './API.js'
import Assign from './assign.js'
import Router from './router.js'
import Map from './map.js'

// Starting initiziation
init()

// Initialize map
// Map.init()

function init () {
  API.fetchData('beers').then(data => {
    console.log('We got dem data: ', data)

    // Assign data to overview
    Assign.data(data)

    // Render detailpage on click with router
    Router.renderDetailPage(data)
  })
}

// Toggle classes
const close = document.getElementsByClassName('close')[0]
close.addEventListener('click', detailDisappear)

function detailDisappear () {
  const detail = document.getElementsByClassName('detail')[0]
  detail.classList.remove('visible')
}
