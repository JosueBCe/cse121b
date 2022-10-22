/* 
=============  Description of Project ==================
Describe your project idea. What will be built? What will it do? etc.

My Project will be a website that fetch data from a e-commerce API. (https://fakestoreapi.com/)
It will display the price, a catalog image, description of the product and another 
product's characterisits. 
It will be possible to sort by name order and it will filter about the kind of product

Describe how this project will make use of the required elements—especially
the requirement for use of fetch, objects, modules, or array functions.
1) It will include a header, main and footer (HTML)
2) It will be styled with responsive design (CSS: Small, medium and Large)
3) Javascript
    1) It will fetch the data values
    2) It will process all the subfunctions in a main function 
    3) the subfunctions will be 
        a) Output HTML : <div> 
                        <h3>${data.Name}</h3>  
                        <h4>${data.location}</h4>
                        <h4>${data.dedicated}</h4>
                        <img src=${data.imageUrl} alt="${data.attribute}"">
                            <div>
                                <ul>
                                   <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                    <li>${data.charact}</li> 
                                </ul>
                            </div>
                        </div> 
        
        b) Sort By Name: output.sort(sorting())
        c) Filter by kind of product, min and max price : 
            1) process input 
            2) order the output 
            3) Make the output of the filtered list.
        4) Some functions will use await and async funtionallity. 
        5) I will strech with some functionality extra ( it's a surprise )
*/