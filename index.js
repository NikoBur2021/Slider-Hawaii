const number = document.querySelector('.number')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const pictures = document.querySelector('.pictures')
const miniatures = document.querySelector('.miniatures')

pictures.children[0].style.display = 'block'


let num = 0
let quant = pictures.children.length-1


for(let i=0; i<pictures.children.length; i++){
    let mini = pictures.children[i].src
    miniatures.innerHTML += `<img data-index="${i}" src="${mini}">`
}
miniatures.children[num].classList.add('border')


miniatures.onclick=(event)=>{
     miniatures.children[num].classList.remove('border')
     pictures.children[num].style.display = 'none'
     num = +event.target.dataset.index
     pictures.children[num].style.display = 'block'
    miniatures.children[num].classList.add('border')
}

number.innerHTML = num





prev.onclick=()=>{
    pictures.children[num].style.display = 'none'
    if(num === 0){
        num = quant
    }else{
        num--
    }
    pictures.children[num].style.display = 'block'
    number.innerHTML = num
}

next.onclick=()=>{
    pictures.children[num].style.display = 'none'
    if(num === quant){
        num = 0
    }else{
        num++
    }
    pictures.children[num].style.display = 'block'
    number.innerHTML = num
}
