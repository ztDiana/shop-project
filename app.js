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

// function scrollShowModal(event) {
//         if(window.pageYOffset>= document.body.clientWidth/2){
//                 open();
//         }    
// }
// window.addEventListener("scroll", scrollShowModal,{once:true})

// closeModal_btn.addEventListener("click", function(){
//         modal.remove()
// });
// modal.addEventListener("click", function(e){
//         if(e.target===modal){
//                 modal.remove() 
//         }
// })

