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

let closeStopEvent=closeModal_btn.addEventListener("click",function(event){
        event.cancelBubble
})


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

function ShowModalByScroll() {
        if (window.pageYOffset>=document.body.scrollHeight/2) {
                open()
                window.removeEventListener("scroll",ShowModalByScroll)
        }
};
window.addEventListener("scroll",ShowModalByScroll)

// change product quantity
let product_quantity=document.body.querySelectorAll(".product-quantity")
console.log(product_quantity);

product_quantity.forEach(item => item.style.marginBottom="20px" )

let decrement_buttons=document.body.querySelectorAll(".decrement-button")[0];

console.log(decrement_buttons);

let increment_buttons=document.body.querySelectorAll(".increment-button")[0];
console.log(increment_buttons);

let quantityInput=document.body.querySelectorAll(".product-quantity input")[0];
let quantityValue= quantityInput.value;
console.log(quantityValue);

let a=Array.prototype.slice.call(document.body.querySelectorAll(".product-quantity input"))

        //         for (let i = 0; i < quantityInput.length; i++) {
        //                 console.log(quantityInput[i].value)
        //         }
        // }

function increasequantityInput() {
      let currentValue=+quantityInput.value
        let nextValue=currentValue+1;
        quantityInput.value=nextValue;
        quantityInput.removeAttribute("disabled")
        if(nextValue<=1){
                decrement_buttons.disabled=true;
        }
        else if(nextValue>=5){
                increment_buttons.disabled=true
        }
        else{ decrement_buttons.disabled=false;}
}

increment_buttons.addEventListener("click", increasequantityInput);


function minusquantityInput() {
        let currentValue=+quantityInput.value;
        let nextValue=currentValue-1;
          quantityInput.value=nextValue;
          if(nextValue<2){
                  decrement_buttons.disabled=true;
          }
          else if (nextValue<=5) {
                increment_buttons.removeAttribute("disabled")}
          else{ decrement_buttons.disabled=false;}
  }
  decrement_buttons.addEventListener("click", minusquantityInput)