export async function fetchData (endpoint) {
  const corsFix = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'https://sandbox-api.brewerydb.com/v2/'
  const key = '73685041c0bfbe5aa327c0c735d3bb0c'

  if (window.localStorage.getItem('data') === null) {
    const response = await fetch(`${corsFix}${apiUrl}${endpoint}/?key=${key}`)
    const data = await response.json()
    console.log('Recieved data from fetch, status:', data.status)
    const dataClean = data.data
    window.localStorage.setItem('data', JSON.stringify(dataClean))
    return dataClean
  } else {
    const dataClean = JSON.parse(window.localStorage.getItem('data'))
    console.log('Data received from local storage')
    return dataClean
  }
}

module.exports = { fetchData }
