export async function fetchData () {
  const corsFix = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'https://sandbox-api.brewerydb.com/v2/beers/'
  const key = '73685041c0bfbe5aa327c0c735d3bb0c'

  const response = await fetch(`${corsFix}${apiUrl}?key=${key}`)
  const data = await response.json()
  console.log('Retrieved data, status:', data.status)
  const dataClean = data.data
  return dataClean
}
