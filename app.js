document.querySelector("#Generate-again").addEventListener('click',flipCard)
document.querySelector("#url-form").addEventListener('submit',generateQrCode)

function flipCard(e) {
    e.preventDefault();
    var cardWrapper = document.querySelector('.card-wrapper');
    // rotates card-wrapper in each call
    cardWrapper.style.transform = cardWrapper.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
}

function generateQrCode(e) {
    e.preventDefault();

    const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let url = document.querySelector('#input-url').value;
    // conditon to check blank space submits
    if(url.trim()===""){
       document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector('#qr-code').src = api+url; 
        flipCard(e);
    }  
}





