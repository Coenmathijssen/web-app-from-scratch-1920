// Sort data functions
function sort (data) {
  return data.sort((a, b) => a.name.localeCompare(b.name))
}

function sortReverse (data) {
  return data.sort((a, b) => b.name.localeCompare(a.name))
}

function search (data) {
  const input = document.getElementById('search')
  let filteredData = data.filter(beer => {
    return beer.name.indexOf(input.value) > -1
  })
  return filteredData
}

module.exports = { sort, sortReverse, search }
