const images = document.querySelectorAll(".gallery-item")
const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector(".lightbox-img")
const caption = document.querySelector(".caption")

const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const closeBtn = document.querySelector(".close")

let index = 0
let slideshow


images.forEach((img,i)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"

lightboxImg.src = img.src

caption.textContent = img.dataset.caption

index = i

startSlide()

})

})


function showImage(){

lightboxImg.src = images[index].src

caption.textContent = images[index].dataset.caption

}


nextBtn.onclick = function(){

index++

if(index >= images.length){

index = 0

}

showImage()

}


prevBtn.onclick = function(){

index--

if(index < 0){

index = images.length - 1

}

showImage()

}


closeBtn.onclick = function(){

lightbox.style.display="none"

clearInterval(slideshow)

}


/* Keyboard navigation */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display === "flex"){

if(e.key === "ArrowRight") nextBtn.click()

if(e.key === "ArrowLeft") prevBtn.click()

if(e.key === "Escape") closeBtn.click()

}

})


/* Auto slideshow */

function startSlide(){

clearInterval(slideshow)

slideshow = setInterval(()=>{

index++

if(index >= images.length){

index = 0

}

showImage()

},3000)

}


/* Filter images */

function filterImages(category){

images.forEach((img)=>{

if(category === "all"){

img.style.display="block"

}

else if(img.classList.contains(category)){

img.style.display="block"

}

else{

img.style.display="none"

}

})

}