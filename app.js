let productsCountEl=document.querySelector(".products-count")

let addToCartBtns=document.querySelectorAll(".btn-add-to-cart");

addToCartBtns.forEach(item => ( item.addEventListener("click",function(){
        productsCountEl.textContent=+productsCountEl.textContent+1
})
)
)

// homework 
let like=document.querySelectorAll(".like")


like.forEach(item => (item.addEventListener("click", function(){
        item.classList.toggle("clicked-like")
})
)
)
//modal block

let more_details_btn=document.querySelectorAll(".btn-more-details");
let modal=document.querySelector(".modal");
let closeModal_btn=document.querySelector(".btn-close");

more_details_btn.forEach(item=> 
        item.addEventListener("click", function (){     
                document.body.appendChild(modal)
                modal.classList.add("show")
                modal.classList.remove("hide")
                
         })
        );
closeModal_btn.addEventListener("click", close);



function open(){
                modal.classList.add("show")
                modal.classList.remove("hide")
                
         };
function close(){
        modal.classList.remove("show")
        modal.classList.add("hide")
         };

modal.addEventListener("click", function(e){
        if(e.target===modal){
                close();      
        }
})
window.addEventListener("scroll",function(){
        if(window.pageYOffset>= document.body.clientWidth/2){
                open()
        }
})

console.log(document.body.clientWidth)
console.log(document.body.clientHeight)
closeModal_btn.addEventListener("click", function(){
        modal.remove()
});
modal.addEventListener("click", function(e){
        if(e.target===modal){
                modal.remove() 
        }
})