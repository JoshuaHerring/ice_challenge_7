
async function retrieve(){

    let element = document.getElementById("list")
    let response = await fetch("https://api.inaturalist.org/v1/identifications")
    let data = await response.json()
    result = data.results;
    for(i = 0; i < 21; i++)
   {
    let child = document.createElement("li");
    child.style.color = "red"
    child.innerHTML = result[i].user.login;
    element.appendChild(child)
    console.log(result[i].user.login)
   }
}

retrieve();