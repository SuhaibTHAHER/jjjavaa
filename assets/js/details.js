async function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    
    const data = response.data.recipe;
    document.querySelector(".title").textContent = data.title;

    console.log(data)
    const res = data.ingredients.map(function (ingredient) {
        return `
        <li>${ingredient}</li>

        `;
        
    }).join("");
    document.querySelector(".list").innerHTML = res;
}

getData();





//document.querySelector(".title").textContent = data.title;
 // document.querySelector("img").src = data.image_url;
