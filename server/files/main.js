function hide_anchor_link(el) {
  let a = el.getElementsByTagName('A')[0]
  a.style.visibility='hidden'
}

function show_anchor_link(el) {
  let a = el.getElementsByTagName('A')[0]
  a.style.visibility='visible'
}


document.addEventListener('DOMContentLoaded', () => {

  //Удаляем из ссылки вещи вроде "?page=preface.html#author"
  let loc = document.location.href.replace(/\?.*$/, '').replace(/#[^#]+$/, '')

  //Меняем "preface.html" на index.html...
  let href = loc.replace(/([^/]+)$/, 'index.html?page=$1')
  let spans = document.getElementsByClassName('anchor')
  for (const s of spans) {
  
    h2 = s.getElementsByTagName('H2')[0]
    h2.setAttribute('class', 'anchorlink')
      
    let a = s.getElementsByTagName('A')[0]
    let name = a.getAttribute('name')      
    a.setAttribute('class', 'hide')
    a.setAttribute('href', `${href}#${name}`)
    a.setAttribute('target', `_blank`)
    let svg = ` <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>`
    a.innerHTML = svg
    let div = document.createElement("div")
    div.setAttribute('onmouseover', 'show_anchor_link(this)')
    div.setAttribute('onmouseleave', 'hide_anchor_link(this)')
    div.innerHTML = h2.outerHTML + a.outerHTML
    s.innerHTML = div.outerHTML

  }

})

