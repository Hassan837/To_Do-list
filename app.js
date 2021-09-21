
let addButton = document.querySelector("#addInput");
let toDoContainer = document.querySelector("#toDoContainer");
let addInput = document.querySelector("#inputField");

//funtion for not runnig empty input
function inputLength(){
	return addInput.value.length;
} 


// funtion for the adding task
addButton.addEventListener("click", function () {
    if (inputLength() > 0){
    var paragraph = document.createElement('p')
    paragraph.innerText = addInput.value;
    paragraph.style.fontSize = "50px";
    toDoContainer.appendChild(paragraph);


    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    paragraph.appendChild(dBtn);
    addInput.value = "";
    }

    else{
        alert ("kindly give some Task");
    }

    // funtion for remove the task
    dBtn.addEventListener("click", function () {
        toDoContainer.removeChild(paragraph)
    });


})