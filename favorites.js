let favButtons = document.getElementsByClassName("favv");
let favoritesCount = document.getElementById("favorites-count");

let productss = [
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


// Load favorites from local storage on page load
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Update the favorites count on page load
updateFavoritesCount();

// Add event listeners to favorite buttons
for (let i = 0; i < favButtons.length; i++) {
  favButtons[i].addEventListener("click", function() {
    // Retrieve the book's details
    let selectedProduct = productss[i];

    // Check if the book is already in favorites
    let index = favorites.findIndex(item => item.tag === selectedProduct.tag);

    if (index === -1) {
      // Book is not in favorites, add it
      favorites.push(selectedProduct);
      alert("Added to favorites!");
    } else {
      // Book is already in favorites, remove it
      favorites.splice(index, 1);
      alert("Removed from favorites!");
    }

    // Update the favorites count
    updateFavoritesCount();

    // Save updated favorites to local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
}

function updateFavoritesCount() {
  favoritesCount.innerText = favorites.length;
}



// Retrieve favorites from local storage on page load
let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

// Display favorite products
let favoritesList = document.getElementById("favorites-list");

if (favoritesList) {
    favoriteProducts.forEach((favorite, index) => {
      let li = document.createElement("li");
      let name = document.createElement("p");
      name.textContent = favorite.name;
      let img = document.createElement("img");
      img.src = `./images/${favorite.tag}.jpg`;
      img.alt = favorite.name;
      li.appendChild(name);
      li.appendChild(img);
  
      let addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.addEventListener("click", function() {
        // Implement the functionality to add the item to the cart
        // You can access the selected favorite product using the 'favorite' variable
        // For example: addToCart(favorite);
      });
  
      li.appendChild(document.createElement("br")); // Add line break after the image
      li.appendChild(addToCartBtn);
  
      favoritesList.appendChild(li);
  
      // Add a <br> tag after every four images
      if ((index + 1) % 4 === 0) {
        favoritesList.appendChild(document.createElement("br"));
      }
    });
  } else {
    console.log("Favorites list element not found.");
  }
  
  
  


