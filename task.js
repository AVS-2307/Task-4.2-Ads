const rotatorList = Array.from(document.querySelectorAll(".rotator__case"));
const rotator = Array.from(document.getElementsByClassName('rotator'));
/* function changeRotator() {

		let currentIndex = rotatorList.findIndex(
           (rotatorList) => rotatorList.classList.contains("rotator__case_active"))
            
        if (currentIndex == -1) {
            currentIndex = 0
        }

        let nextActiveRotator = (currentIndex + 1) % rotatorList.length
        rotatorList[currentIndex].classList.remove("rotator__case_active")
        rotatorList[nextActiveRotator].classList.add("rotator__case_active")

};

setInterval(changeRotator, 1000); */

// реализация со сменой цвета и корости переключения

function getSpeed(rotatorCase) {
    speed = rotatorCase.dataset.speed
    return speed
}
function getColor(rotatorCase) {
    color = rotatorCase.dataset.color
    return color
}

function setAttrsToNext(item, color) {
    item.classList.add("rotator__case_active")
    item.style.color = color
}

/* function showNext() {

    let currentIndex = rotatorList.findIndex(
        (rotatorCase) => rotatorCase.classList.contains("rotator__case_active")
    )

    if (currentIndex == -1) {
        currentIndex = 0
    }
    let nextActiveElem = (currentIndex + 1) % rotatorList.length

    nextElemSpeed = getSpeed(rotatorList[nextActiveElem])
    nextElemColor = getColor(rotatorList[nextActiveElem])
    currentElemColor = getColor(rotatorList[currentIndex])
    setAttrsToNext(rotatorList[currentIndex], currentElemColor);

    setTimeout(() => {
        rotatorList[currentIndex].classList.remove("rotator__case_active")
        setAttrsToNext(rotatorList[nextActiveElem], nextElemColor);
        showNext();
    }, nextElemSpeed)
} */

function showNext() {
    
        rotator.forEach(elem => {
            for (let child of elem.children) {
                //пробежались по всем потомкам rotator
                if (child.classList.contains('rotator__case_active') == true) {
                    child.classList.remove('rotator__case_active');
                    if (child.nextElementSibling) {
                        child.nextElementSibling.classList.add('rotator__case_active');
                        break;
                    } else {
                        elem.firstElementChild.classList.add('rotator__case_active');
                        break;
                    }
                }
            }
        });        
}


setInterval(showNext, 1000);
//showNext()