const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector("cart-items-container");
const navbar = document.querySelector(".navbar");

//!buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click" ,function (){
    
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){

        if( 
            !e.composedpath ().includes(searchBtn) && 
            !e.composedpath ().includes(searchForm)
            ){

        searchForm.classList.remove("active");
    }
    });
});
cartBtn.addEventListener("click" ,function (){
    
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){

        if( 
            !e.composedpath ().includes(cartBtn) && 
            !e.composedpath ().includes(cartItem)
            ){

        cartItem.classList.remove("active");
    }
    });
});
menuBtn.addEventListener("click" ,function (){
    
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){

        if( 
            !e.composedpath ().includes(menuBtn) && 
            !e.composedpath ().includes(navbar)
            ){

        navbar.classList.remove("active");
    }
    });
});