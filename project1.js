// const input-badge=document.querySelector('.inputbadge')
// console.log(input-badge.value)


// const spa=document.querySelector('.rounded-pill')
// const inputbadge=spa.firstElementChild;
// console.log(inputbadge.value)

// <<<------------------------------For Add to Cart---------------------------------------->>>

// const cart=document.getElementById('cart')
// const notify=document.getElementById('notification')

// cart.addEventListener('click',() => {
//     const notify = document.getElementById('notification')
//     // console.log(notify.value);
//     if(notify.value >= 20){
//         notify.value=20;
//     }
//     else
//     {
//         notify.value=parseInt(notify.value) + 1;
//     }
    
// })

// const cart1=document.getElementById('cart')
    
// const cart = (noti) => {
//     var notify=document.getElementById(noti);
//     // this.cart1.style.pointerEvents='none';
//     if(notify.value >= 20){
//                 notify.value=20;
//             }
//             else
//             {
//                 notify.value=parseInt(notify.value) + 1;
//             }

        
// }





// <<<------------------------------For Add & remove---------------------------------------->>>
const notify=document.getElementById('notification')
console.log(notify.value)


const addition = (addremove) => {
    var inputval =document.getElementById(addremove);
    // console.log(inputval.value);
    if(inputval.value >= 5){
        inputval.value=5;
    }
    else
    {
        inputval.value=parseInt(inputval.value) + 1;
        notify.value=parseInt(notify.value) + 1;
    }
   
}


const subtraction = (addremove) => {
    var inputval =document.getElementById(addremove);
    // console.log(inputval.value);
    if(inputval.value <= 0){
        inputval.value=0;
    }
    else
    {
        inputval.value=parseInt(inputval.value) - 1;
        notify.value=parseInt(notify.value) - 1;
    }
   
}


const buy=document.getElementById('buymow')
// const buy=document.querySelectorAll('#buymow')
buy.addEventListener('click' ,(e) => {
    buy.style.background='green';
})


