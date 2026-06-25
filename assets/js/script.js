const btnContrast = document.getElementById("btnContrast");

btnContrast.addEventListener("click" , changeContrast)

function changeContrast(){
    let body = document.getElementsByTagName("body")

    body[0].classList.toggle("high-contrast")
}