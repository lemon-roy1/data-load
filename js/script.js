function addLoadData() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => createLoad(data.products))
}
function createLoad(items) {
    items.map(item => {
        console.log(item);
        const createId = document.getElementById('loadData')
        const ul = document.createElement('ul')
        ul.classList =

            ul.innerHTML =`
            <div class="card border-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-primary" style="--bs-text-opacity: .5;">name : ${item.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-warning">price : ${item.price}</h6>
                    <p class="card-text">Description: ${item.description}</p>
                </div>
            </div>
            `


        createId.appendChild(ul)
    })

}
// <li>${item.title}</li>
{/* <li></li> */ }
