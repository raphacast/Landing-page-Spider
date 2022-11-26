let foto01 = document.querySelector(".photo-game")
let foto02 = document.querySelector(".miranha02")
let foto03 = document.querySelector(".miranha03")
let foto04 = document.querySelector(".miranha04")
let foto05 = document.querySelector(".miranha05")
let butaocard = document.querySelector(".card",':before');
foto02.addEventListener('click', () =>  {
  foto01.classList.add('miranha02')
  
  foto01.classList.remove('miranha03')
  foto01.classList.remove('miranha04')
  foto01.classList.remove('miranha05')
})
foto03.addEventListener('click', () =>  {
  foto01.classList.add('miranha03')
  foto01.classList.remove('miranha02')
  foto01.classList.remove('miranha04')
  foto01.classList.remove('miranha05')
})
foto04.addEventListener('click', () =>  {
  foto01.classList.add('miranha04')
  foto01.classList.remove('miranha02')
  foto01.classList.remove('miranha03')
  foto01.classList.remove('miranha05')
})
foto05.addEventListener('click', () =>  {
  foto01.classList.add('miranha05')
  foto01.classList.remove('miranha02')
  foto01.classList.remove('miranha04')
  foto01.classList.remove('miranha03')
})

butaocard.addEventListener('click', ()=>{
  if (document.querySelector('.centralizar').style.display == 'flex'){
    document.querySelector('.centralizar').style.display = 'none'
  }else{
    document.querySelector('.centralizar').style.display = 'flex'
  }
})


