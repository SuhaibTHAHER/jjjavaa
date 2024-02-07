async function getData(){
    const response = await axios.get("https://forkify-api.herokuapp.com/api/search?q=kebab") 
    const data = response.data.recipes;
    const res = data.map(function(ele){
        return `<div class="product">
    <img src="${ele.image_url}" alt="">
        <h3>${ele.title}</h3>
        <p>${ele.publisher}</p>
        <a href="details.html?id=${ele.recipe_id}">Details</a>`
   }).join("")
    document.querySelector(".row").innerHTML = res
}
getData()
//const data = response.data.data.recipes ;