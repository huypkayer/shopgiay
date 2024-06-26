const imageSmall = document.querySelectorAll('.nikedetails_image img');
const imageMain = document.querySelector('.main-image');
for (let index = 0; index < imageSmall.length; index++) {
    imageSmall[index].addEventListener('click',()=>{
        imageMain.src = imageSmall[index].src
        for (let a = 0; a < imageSmall.length; a++) {
            imageSmall[a].classList.remove('active')
            
        }
        imageSmall[index].classList.add('active')
    })
}