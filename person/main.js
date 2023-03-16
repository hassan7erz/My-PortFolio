let namePerson = document.getElementById("namePerson");
let agePerson = document.getElementById("agePerson");
let submit = document.getElementById("submit");
let showPerson = document.getElementById("show");

let mode = "create";
let tmp;

let dataName;
if(localStorage.person != null){
    dataName = JSON.parse(localStorage.person)
}else{
    dataName = [];
}

submit.onclick =  function () {
    let newPerson = {
        namePer: namePerson.value,
        agePer: agePerson.value,
    }
    

    if (newPerson.namePer != "" && newPerson.agePer != ""){
        if(mode == "create"){
            dataName.push(newPerson);
        }else{
            dataName[tmp] = newPerson;
            submit.innerHTML = "Create";
            mode = "create";
        }
        clearInputs();
    }

    localStorage.setItem("person", JSON.stringify(dataName))
    showData();
    

}

// clear inputs
function clearInputs(){
    namePerson.value = "";
    agePerson.value = "";
}


// show data
function showData() {
    let show = "";
    for(let i = 0; i < dataName.length; i++){
        show += `
            <div id="info">
                <div>
                    <p>${dataName[i].namePer}</p>
                    <p>${dataName[i].agePer}</p>
                </div>
                <div>
                    <button onclick="updateData(${i})" id="update">update</button>
                    <button onclick="deleteData(${i})" id="delete">delete</button>
                </div>
            </div>
        `;
    }
    showPerson.innerHTML = show;
}
showData()

// delete data
function deleteData(i){
    dataName.splice(i,1);
    localStorage.person = JSON.stringify(dataName);
    showData()
}

// update data
function updateData(i){
    namePerson.value = dataName[i].namePer;
    agePerson.value = dataName[i].agePer;
    submit.innerHTML = "Update";
    tmp = i;
    mode = "update";
}

