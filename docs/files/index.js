
function getUrlParam (name) {
  const results = new RegExp('[?&]' + name + '=(\\w+\\.[a-z]+(?:#[a-z_\\d\\-]+)?)', 'i').exec(
    window.location.href
  )


  if (results === null) {
    return undefined
  } else {
    if (results[1] && decodeURIComponent(results[1]).trim() !== '') {
      return decodeURIComponent(results[1]).trim()
    } else {
      return undefined
    }
  }
}


function LoadPage() {

  const page = getUrlParam('page')

  if (page) {
    document.getElementById('content').src = page
  }

}