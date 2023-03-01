const rotatorList = Array.from(document.querySelectorAll(".rotator__case"));

/* function changeRotator() {

		let currentIndex = rotatorList.findIndex(
           (rotatorList) => rotatorList.classList.contains("rotator__case_active"))
            
        if (currentIndex == -1) {
            currentIndex = 0
        }

        nextActiveRotator = (currentIndex + 1) % rotatorList.length
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

function showNext() {

    let currentIndex = rotatorList.findIndex(
        (rotatorCase) => rotatorCase.classList.contains("rotator__case_active")
    )

    if (currentIndex == -1) {
        currentIndex = 0
    }
    nextActiveElem = (currentIndex + 1) % rotatorList.length

    nextElemSpeed = getSpeed(rotatorList[nextActiveElem])
    nextElemColor = getColor(rotatorList[nextActiveElem])
    currentElemColor = getColor(rotatorList[currentIndex])
    setAttrsToNext(rotatorList[currentIndex], currentElemColor);

    setTimeout(() => {
        rotatorList[currentIndex].classList.remove("rotator__case_active")
        setAttrsToNext(rotatorList[nextActiveElem], nextElemColor);
        showNext();
    }, nextElemSpeed)
}

showNext()