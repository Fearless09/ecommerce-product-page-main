//Image Slider

function thumbchange(num) {
    var thumb = 'images/image-product-' + num +'.jpg';
    document.getElementById("mainImg").src = thumb;
};

function next(num) {
    var thumb = 'images/image-product-' + (num) +'.jpg';
    document.getElementById("mainImg").src = thumb;
    num = parseInt(num) + 1;
};


//Next and Previous Button
let previousBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');
let pnum;

pnum = 5;
previousBtn.addEventListener('click',()=>{
    
    pnum -= 1;
    if (pnum < 1) {
        pnum = 5;
        return pnum;
    }
    
    return thumbchange(pnum);
    
});

pnum = 0;
nextBtn.addEventListener('click',()=>{
    
    pnum += 1;
    if (pnum > 4) {
        pnum = 0;
        return pnum;
    }
    
    return thumbchange(pnum);
    
});



//Counter Button and Add to cart button with cart badge

let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');
let qty = document.querySelector('#inputbox');
let cartBtn = document.querySelector('#addcart');
let badgeBtn = document.querySelector('#badge');

let quantityBtn = document.querySelector('#quantity');
let price = document.querySelector('h2');
let cartprice = document.querySelector('#price');
let carttotal = document.querySelector('#total');

let description = document.querySelector('.fall');
let cartdescription =document.querySelector('#carttitle');

let cartimg = document.querySelector('.cartimg');
let productimg = document.querySelector('#mainImg');

let cartdelete = document.querySelector('#deletecart');


plusBtn.addEventListener('click',()=>{
    qty.value = parseInt(qty.value) + 1;
});

minusBtn.addEventListener('click',() => {
    if (qty.value <= 0){
        qty.value = 0;
        console.log("Your oder can not be less than 0");
    }
    else {
        qty.value = parseInt(qty.value) - 1;
    };
});





cartBtn.addEventListener('click',() => {
    badgeBtn.value = qty.value;
    if (badgeBtn.value > 0) {
        document.getElementById("badge").style.visibility = "visible";
    }

    else {
        document.getElementById("badge").style.visibility = "hidden";
    }

    //Cart Box Value
    quantityBtn.textContent = 'x ' + qty.value;
    cartprice.textContent = price.textContent;
    cartdescription.textContent = description.textContent
    carttotal.textContent = ("$" + (125.00 * qty.value));
    cartimg.src =productimg.src;

    if (qty.value <= 0) {
        document.querySelector('.empty').style.opacity = "1";
        document.querySelector('.cartdescription').style.opacity = "0";
        document.querySelector('.checkout').style.opacity = "0";     
    } else {
        document.querySelector('.empty').style.opacity = "0";
        document.querySelector('.cartdescription').style.opacity = "1";
        document.querySelector('.checkout').style.opacity = "1";
    }

    

    

    
});


// Cart Delete Button
cartdelete.addEventListener('click', () => {
     
    qty.value = parseInt(qty.value) - 1;
    badgeBtn.value = qty.value;
    quantityBtn.textContent = 'x ' + badgeBtn.value;
    carttotal.textContent = ("$" + (125.00 * badgeBtn.value));

    console.log("Delete " + badgeBtn.value);

    if (qty.value <= 0){

        qty.value = 0;
        
        document.querySelector('.empty').style.opacity = "1";
        document.querySelector('.cartdescription').style.opacity = "0";
        document.querySelector('.checkout').style.opacity = "0";
        document.querySelector('#badge').style.visibility = "hidden";
    }
          

    
});







//Menu Button
function closemenu() {
    document.getElementById("menu").style.visibility = "hidden";
}

function openmenu() {
    document.getElementById("menu").style.visibility = "visible";
}


//Cart Box

function opencart() {
    if (document.getElementById("cartbox").style.visibility = "hidden") {
        document.getElementById("cartbox").style.visibility = "visible";
        console.log("Visible");
        
    }
    else { 
        document.getElementById("cartbox").style.visibility = "hidden";
        console.log("Close");
    }
}

function closecart() {
    document.getElementById("cartbox").style.visibility = "hidden";
}





