fetch('https://api.waifu.pics/many/sfw/waifu', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  })
})
  .then(response => response.json())
  .then(data => {
    Array.from(document.querySelectorAll('.waifu').forEach((elmt, index) => {
      elmt.innerHTML = `<img src=${data.files[index]}  alt="Ahara project by Waifu.pics" />`
    }))
  })
  fetch('https://api.waifu.pics/many/sfw/neko', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  })
})
  .then(response => response.json())
  .then(data => {
    Array.from(document.querySelectorAll('.neko').forEach((elmt, index) => {
      elmt.innerHTML = `<img src=${data.files[index]} alt="Ahara project by Waifu.pics" />`
    }))
  })
  fetch('https://api.waifu.pics/many/sfw/awoo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  })
    .then(response => response.json())
    .then(data => {
      Array.from(document.querySelectorAll('.awoo').forEach((elmt, index) => {
        elmt.innerHTML = `<img src=${data.files[index]} alt="Ahara project by Waifu.pics" />`
      }))
    })



    var url = `https://api.waifu.im/search/?is_nsfw=false&selected_tags=waifu&gif=false&orientation=PORTRAIT&many=true&full=false`
    fetch(url)
        .then(res => res.json())
        .then(data => {
          Array.from(document.querySelectorAll('.waifu2').forEach((elmt, index) => {
            elmt.innerHTML = `<img src=${data.images[index].url} lt="Ahara project by Waifu.im"/>`
          }))
  })
  var url = `https://api.waifu.im/search/?is_nsfw=false&selected_tags=maid&gif=false&orientation=PORTRAIT&many=true&full=false`
  fetch(url)
      .then(res => res.json())
      .then(data => {
        Array.from(document.querySelectorAll('.maid').forEach((elmt, index) => {
          elmt.innerHTML = `<img src=${data.images[index].url} />`
        }))
})
var url = `https://api.waifu.im/search/?is_nsfw=false&selected_tags=uniform&gif=false&orientation=PORTRAIT&many=true&full=false`
fetch(url)
    .then(res => res.json())
    .then(data => {
      Array.from(document.querySelectorAll('.uniform').forEach((elmt, index) => {
        elmt.innerHTML = `<img src=${data.images[index].url} lt="Ahara project by Waifu.im"/>`
      }))
})

