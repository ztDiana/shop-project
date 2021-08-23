let productsCountEl=document.querySelector(".products-count")
console.log(productsCountEl);

let addToCartBtns=document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

addToCartBtns.forEach(item => ( item.addEventListener("click",function(){
        productsCountEl.textContent=+productsCountEl.textContent+1
})
)
)

// homework 
let like=document.querySelectorAll(".like")
console.log(like)

like.forEach(item => (item.addEventListener("click", function(){
        item.classList.toggle("clicked-like")
})
)
)