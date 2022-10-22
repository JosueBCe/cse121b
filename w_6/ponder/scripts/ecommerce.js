date = new Date()

let day = date.getDay()

let message = ""

if (day >= 1 && day <= 5) {
    message = "Hang in there!"
} else {
    message = "Woohoo!  It is the weekend!"
}

let message2 = ""

switch (day) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
}

console.log(message2)

document.querySelector('#message1').innerText = message

document.querySelector('#message2').innerText = message2;

/*  ======================== ORDER BY : PRICE, CATEGORY AND NAME ============================== */

let toHtml = {}
const sortByBtn = document.querySelector("#sortBy")
const searchProduct = document.querySelector("#searchproduct")
const orderByCategory = document.querySelector("#OrderByCategory")

let jsondata = "";
let apiUrl = "https://fakestoreapi.com/products"

// 1) fetch data 
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}
/* ====================== MAIN FUNCTION =================================== */
async function main() {
    let outputHtml = document.querySelector("#catalog")
    let jsondata = await getJson(apiUrl)

    // 2) display data
    outputHtml.innerHTML = output(jsondata)

    // WHEN USER CLICKS THE SEARCH BUTTON: 
    searchProduct.addEventListener("click", () => {
        let data = jsondata
        // 3) sort data (name ascending/descending)
        data = sortBy(data)
        // 4) filter data by Price
        data = filterByPrice(data)
        // 4) filter data by CATEGORY
        data = filterByCategory(data)
        // Render Updated Data to the HTML 
        console.log(data)
        data.length > 0 ? outputHtml.innerHTML = output(data) : outputHtml.innerHTML = "We don't have products for this search"
    })

}


/* ================= FILTER PRODUCTS BY CATEGORY ======================= */

const filterByCategory = (data) => {
    let value = orderByCategory.options[orderByCategory.selectedIndex].value;
    let category = data.filter(e => e.category == value)
    return category
}


/* ================= FILTER PRODUCTS BY PRICE MIN/MAX ====================*/

const filterByPrice = (data) => {
    reset()
    const minPrice = Number(document.getElementById('min').value);
    const maxPrice = Number(document.getElementById('max').value);
    if (maxPrice > minPrice) {
        return data.filter(e => e.price >= minPrice && e.price <= maxPrice);
    } else {
        return data.filter(e => e.price >= minPrice)
    }
}


/* =================== SORT PRODUCTS: NAME DESC/ASCEND ====================*/

const sortBy = (arr) => {
    reset()
    let value = sortByBtn.options[sortByBtn.selectedIndex].value;
    if (value == "nameDescending") {
        return sortProducts(arr, "Asc")
    } else {
        return sortProducts(arr)
    }
}

const sortProducts = (list, option) => {
    if (option == "Asc") {
        let sortedList = list.sort(compareAsc);
        return sortedList;
    } else {
        let sortedList = list.sort(compareDesc);
        return sortedList;
    }
}

/* It's part in the process of sorting data in Ascending order (used to sort data in name descending )
with the sortProducts function
*/

const compareAsc = (a, b) => {
    let num = 0
    let a1 = a.title.toLowerCase();
    let b1 = b.title.toLowerCase();
    a1 < b1 ? num = 1 : a1 > b1 ? num = -1 : num = 0
    return num
}

/* It's part in the process of sorting data in Descending order (used to sort data in name descending )
with the sortProducts function
*/

const compareDesc = (a, b) => {
    let num = 0
    let a1 = a.title.toLowerCase();
    let b1 = b.title.toLowerCase();
    a1 > b1 ? num = 1 : a1 < b1 ? num = -1 : num = 0

    return num
}

/* ================ RESET THE VALUE OF THE #CATALOG (HTML) ================================*/
const reset = () => {
    document.querySelector('#catalog').innerHTML = ""
}

/* ======================== OUTPUT: STRUCTURES DATA IN A HTML FORM ================================== */
const output = (arr) => {
    html = arr.map(e =>
            `<div class="product-image">
        <img src=${e.image} alt="${e.attribute}"">
        </div>
        <div class="product-description"> 
        <h3>${e.title}</h3>  
        <h4>Price: ${e.price}</h4>
        <h4>${e.description}</h4>
        <h4> Rating: ${e.rating.rate}</h4>
        </div>
    `).toString()
        .replaceAll(",", " ")
    return html
}

/* CALLING MAIN FUNCTION */
main()



<<<<<<< HEAD




/* ====================== REMAINING ======================== */
/*     <div>
                                <ul>
                                   <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                </ul>
                            </div>
                        </div> */

/* ======================= COMMENTS AND PLANNING =================================== */
/* STRUCTURE 
TECHNOLOGY 
ACCESSORIES
CLOTHE
DIV => category 
div => image div => Description  
*/
/* 
(0) fetch data 
1)  Put data in an arrray
2) in event listeners go changing the data 
    outputHtml
    sort name 
    filter price
    fitler category 
    outputHtml
 */