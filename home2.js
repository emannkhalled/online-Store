

let carts = document.getElementsByClassName("cart-btn");




let products = [
    {
        tag: "book1",
        name: "Finance coorporate",
        price: 200,
        inCart: 0

    },
    {
        tag: "book2",
        name: "The Spanish Love Deception",
        price: 350,
        inCart: 0

    },
    {
        tag: "book3",
        name: "Trusted lies",
        price: 300,
        inCart: 0

    },
    {
        tag: "book4",
        name: "Politics of environment",
        price: 100,
        inCart: 0

    },
    {
        tag: "book5",
        name: "Pride and prejudice",
        price: 100,
        inCart: 0

    },
    {
        tag: "book6",
        name: "Rich dad",
        price: 500,
        inCart: 0

    },
    {
        tag: "book7",
        name: "Dear eva",
        price: 150,
        inCart: 0

    },
    {
        tag: "book8",
        name: "Twilight",
        price: 320,
        inCart: 0

    },
    
    {
        tag: "book9",
        name: "The river between",
        price: 390,
        inCart: 0

    },
    {
        tag: "book10",
        name: "Pride and prejudice",
        price: 100,
        inCart: 0

    },
    {
        tag: "book11",
        name: "My lady's money",
        price: 390,
        inCart: 0

    },
    {
        tag: "book12",
        name: "The alchemist",
        price: 300,
        inCart: 0

    },
];



for (let i = 0; i < carts.length; i++) {

    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })

}

  


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.getElementById("cart-count").textContent = productNumbers;
    }

}


function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementById("cart-count").textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.getElementById("cart-count").textContent = 1;
    }

    setItems(product);

}






function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }


        cartItems[product.tag].inCart ++;;
    }else{

        product.inCart = 1;
        cartItems = {
           [product.tag]: product
       }
   
    
    }
    alert("added to cart")

    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product){
    //console.log("the products price is ", product.price);
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cartCost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price );
    }else{
        localStorage.setItem("totalCost", product.price);

    }


}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let productsContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

console.log(cartItems);
    if(cartItems && productsContainer){
        productsContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productsContainer.innerHTML += `
            
            <div class = "products">
                <div >
    
                <span class = "each-name">${item.name}</span> <br> <br>
                <img width = "150px"  src = "./images/${item.tag}.jpg">
                
            </div>
            <div class = "price each-price" >
                ${item.price},00
            </div>
                <div class = "quantity each-quantity" >
                <span>${item.inCart}</span>
            </div>
            <div class = "total each-total">${item.inCart * item.price},00EGP</div>

            `;
            
            
            
        });


        productsContainer.innerHTML += `
        
        <div class = "basketTotalContainer >
            <h4 class = "basketTotalTitle >Basket Total: <h3>${cartCost},00EGP</h3></h4>
        </div>
        

        `;



        

    }



  
  
  
 
}







onLoadCartNumbers();
displayCart();
