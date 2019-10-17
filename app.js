// const balloonElement = document.getElementbyId(balloon); 

const balloonElement=document.querySelector('p');
document.addEventListener('keyup', handler)

function handler(event) {
    if (event.code == 'KeyI'){
        let fontSizeStr = window.getComputedStyle(balloonElement).getPropertyValue('font-size')
        let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
        let size = parseInt(numberStr, 10)

        if (size > 60) {
            alert('💥');
            document.removeEventListener('keyup', handler)
        } else {
            let fontSize = (size+10)+'px'
            balloonElement.style.fontSize=fontSize;
        }
    }
    else if (event.code =='KeyD') {
        let fontSizeStr = window.getComputedStyle(balloonElement).getPropertyValue('font-size')
        let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
        let size = parseInt(numberStr, 10)
    
        if (size <= 0) {
            alert('Done');
            document.removeEventListener('keyup', handler)
        } else {
            let fontSize = (size-10)+'px'
            balloonElement.style.fontSize=fontSize;
        }
    }
}

