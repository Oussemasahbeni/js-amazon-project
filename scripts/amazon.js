// an array represet a list
// this is called a data structure
// const products= [{
//     image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         count:87,
//         stars:4.5
//     },
//     priceCents:1090,  // we save price in cents cause floats sometimes can not be precise


// },
// {
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name:' Intermediate Size Basketball',
//     rating:{
//         count:127,
//         stars:4
//     },
//     priceCents:2095,  

// },
// {
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name:' Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         count:56,
//         stars:4.5
//     },
//     priceCents:799,  

// },
// {
//     image:'images/products/black-2-slot-toaster.jpg',
//     name:' 2 slot toaster-Black',
//     rating:{
//         count:2197,
//         stars:5
//     },
//     priceCents:1899
// }
// ]


// products coming from products.js file
let productsHtml='';
products.forEach((product)=>
{
    productsHtml+=`
        <div class="product-container">
            <div class="product-image-container">
            <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name   limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            $${(product.priceCents /100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
            Add to Cart
            </button>
        </div>`;
}
);

//data-product-id is an html attribut , it has to start with data-

const productsGrid=document.querySelector('.js-products-grid');
productsGrid.innerHTML=productsHtml;

const addToCart=document.querySelectorAll('.js-add-to-cart'); // we use querySelectorAll cause we have multiple add buttons


addToCart.forEach((button)=>{

    button.addEventListener('click',()=>{
    //   const productId=button.dataset.productId;
      const {productId}=button.dataset; // we used distructing in this because the variable and property got the same name    
        // dataset give us all the data attached to the html element
        let matchingItem;

        cart.forEach((item)=>{
            if(productId===item.productId){
                matchingItem=item;  
                
            }
        });

        const selectElement=Number(document.querySelector(`.js-quantity-selector-${productId}`).value);


        
        const addElement= document.querySelector(`.js-added-${productId}`);
        let timeoutID;
        addElement.classList.add('opacity1');
        timeoutID=setTimeout(()=>{
            addElement.classList.remove('opacity1');
            clearTimeout(timeoutID);

        },2000);
        
        console.log(productId);
        console.log(selectElement);
        if(matchingItem){
            matchingItem.quantity++;
        }
        else{
            cart.push({
                // productId:productId,
                productId,  // shorthand shotcuts
                quantity:selectElement
            })
        }
    let cartQuantity=0;
   
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    
    });
    document.querySelector('.js-quantity').innerHTML=cartQuantity;
    });   
});
