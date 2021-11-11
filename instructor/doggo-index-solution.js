let myHeader = document.querySelector('#title')
myHeader.style.textAlign = "left"

let myDogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < myDogImages.length; i++) {
    myDogImages[i].style.borderRadius = "50px"
}

document.querySelector('footer').style.borderStyle = "dashed"