function myFunction(event) { 
    let allDivs = document.querySelectorAll(".choose div").forEach((e) => {
        e.classList.remove("active");
    });
    event.target.classList.add("active");
    let result = document.getElementById("result");
    result.textContent = `You selected ${event.target.innerHTML} out of 5`;
}

function replace(){
    document.getElementById("rating").style.display = "none";
    document.getElementById("thx").style.display = "flex";

}