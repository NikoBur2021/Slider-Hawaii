const number = document.querySelector('.number')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const pictures = document.querySelector('.pictures')
const miniatures = document.querySelector('.miniatures')


for(let i =0; i< pictures.children.length; i++){
    let url = pictures.children[i].src
    miniatures.innerHTML += `<img data-index="${i}" src="${url}">`
}
pictures.children[0].style.display  = 'block'
miniatures.children[0].classList.add('current')

let num = 0
let quantity = pictures.children.length-1

number.textContent = num

miniatures.onclick=(event)=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display  = 'none'
    num = event.target.dataset.index
    pictures.children[num].style.display  = 'block'
    miniatures.children[num].classList.add('current')
}

prev.onclick=()=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display  = 'none'
    if(num === 0){
        num = quantity
    }else{
        num--
    }
    pictures.children[num].style.display  = 'block'
    number.textContent = num
    miniatures.children[num].classList.add('current')
}

next.onclick=()=>{
    miniatures.children[num].classList.remove('current')
    pictures.children[num].style.display  = 'none'
    if(num === quantity){
        num = 0
    }else{
        num++
    }
    pictures.children[num].style.display  = 'block'
    miniatures.children[num].classList.add('current')
    number.textContent = num
}
