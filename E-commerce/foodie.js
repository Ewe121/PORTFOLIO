let Product = document.querySelector('.product')

let productSecond = document.querySelector('.secondProduct')

let All = document.querySelector('.All')

let Breakfast = document.querySelector('.Breakfast')

let Lunch = document.querySelector('.Lunch')

let Dinner = document.querySelector('.Dinner')

let SoftDrink = document.querySelector('.SoftDrink')

let Biscuit = document.querySelector('.Biscuit')

let Swallow = document.querySelector('.Swallow')

let lunchProduct = document.querySelector('.lunchProduct')

let BiscuitProduct = document.querySelector('.BiscuitProduct')

let DrinkProduct = document.querySelector('.DrinkProduct')

let Drink = document.querySelector('.softDrink')

let love = document.querySelectorAll('.love')

let circle = document.querySelector('.circle')

// let heartmi = document.querySelector('.heartmi')

let viewsidelove = document.querySelector('.viewsidelove')
// let xmark = document.querySelector('.xmark')

Breakfast.addEventListener("click", Break)

function Break(){
    Product.style.display = "none"
    productSecond.style.display = "block"
    BiscuitProduct.style.display = "none"
    lunchProduct.style.display = "none"
    DrinkProduct.style.display = "none";
}

All.addEventListener("click", all)

function all(){
    productSecond.style.display = "block"
    Product.style.display = "block"
}

Lunch.addEventListener("click", lunch)

function lunch(){
    Product.style.display = "none"
    productSecond.style.display = "none"
    BiscuitProduct.style.display = "none"
    lunchProduct.style.display = "block"
    DrinkProduct.style.display = "none";
}

Biscuit.addEventListener("click", biscuit)

function biscuit(){
    Product.style.display = "none"
    productSecond.style.display = "none"
    lunchProduct.style.display = "none"
    BiscuitProduct.style.display = "block"
    DrinkProduct.style.display = "none";
}

Drink.addEventListener("click", drink)

function drink(){
    Product.style.display = "none"
    productSecond.style.display = "none";
    lunchProduct.style.display = "none";
    BiscuitProduct.style.display = "none";
    DrinkProduct.style.display = "block";
}

// love.addEventListener("click", lovee)

// let count = 0
// love.forEach(element => {
//     element.addEventListener("click", lovee)
   
// })
// function lovee(e){
//     // count = count + 1
//     // circle.textContent = count;
//     // e.target.style.background = "blue"
//     // console.log("hghggg");
//     //  circle.textContent = "i am happy"
//     // element.classList.toggle('active');

//     // if (loveIcon.classList.contains('active')) {
//     //     //         // Increment the wishlist count
//     //             count++;
//     //           } else {
//     //             // Decrement the wishlist count if removed from wishlist
//     //             count--;
//     //           }
        
//         //       // Update the count displayed in the circle
//             //    const circle = document.querySelector('.circle');
//             //   circle.textContent = count;
 
//             }

// //  

// //   Select all the heart icons
//   const loveIcons = document.querySelectorAll('.love');

//   // Initialize a counter for the wishlist count
//   let wishlistCount = 0;

//   // Add a click event listener to each heart icon
//   loveIcons.forEach((loveIcon, index) => {
//     loveIcon.addEventListener('click', (e) => {
//       // Toggle the 'active' class on the heart icon
//       loveIcon.classList.toggle('active');

//       // Check if the heart icon is now active (in the wishlist)
//       if (loveIcon.classList.contains('active')) {
//         // Increment the wishlist count
//         wishlistCount++;
        
        
//       } else {
//         // Decrement the wishlist count if removed from wishlist
//         wishlistCount--;
//       }
//       circle.textContent = wishlistCount;
//       // let name = e.target.parentNode.parentNode.children[1].innerText
//       // let name = e.target.parentNode.parentNode.children[1].innerText
//       let namex = document.querySelector('.pdname').innerText;
//       let price = document.querySelector('.pdprice').innerText;
//       // let price = e.target.parentNode.parentNode.children[3].innerText


//       // console.log(name);
//       // console.log(price);
//       viewsidelove.innerHTML += namex

//       viewsidelove.innerHTML += price

//       // Update the count displayed in the circle
//     //   const circle = document.querySelector('.circle');

//     //   You can also update the wishlist view here (e.g., add/remove the product from the actual wishlist)
//     //   Example: You can use the index of the clicked heart icon to identify the corresponding product card
//     //   and perform actions accordingly.
    
//     xmark.addEventListener("click", xmk)
//     function xmk() {
//       viewsidelove.style.display = "none"; // Hide the viewsidelove element
//       xmark.style.display = "none"; // Hide the xmk button
//     }
    
//   });
// });

// heartmi.addEventListener("click", hrtmi)

// function hrtmi(){
//   viewsidelove.style.display = "block"
// } 

// // xmark.addEventListener("click", xmk)
// //  function xmk(){
//   //    viewsidelove.style.display = "none"
//   //    xmark.style.display = "none"
  
//   //   }
  
//   // xmark.addEventListener("click", xmk)
//   // function xmk() {
//   //   viewsidelove.style.display = "none"; // Hide the viewsidelove element
//   //   xmark.style.display = "none"; // Hide the xmk button
//   // }

 

//  let pdname = document.querySelector('.pdname')

//  let pdprice = document.querySelector('.pdprice')


let count = 0;

// Select all the heart icons
const loveIcons = document.querySelectorAll('.love');

// Initialize a counter for the wishlist count
let wishlistCount = 0;

// Add a click event listener to each heart icon
loveIcons.forEach((loveIcon, index) => {
  loveIcon.addEventListener('click', (e) => {
    // Toggle the 'active' class on the heart icon
    loveIcon.classList.toggle('active');

    // Check if the heart icon is now active (in the wishlist)
    if (loveIcon.classList.contains('active')) {
      // Increment the wishlist count
      wishlistCount++;
    } else {
      // Decrement the wishlist count if removed from wishlist
      wishlistCount--;
    }
    circle.textContent = wishlistCount;

    // Get product name and price
    let namex = document.querySelector('.pdname').innerText;
    let price = document.querySelector('.pdprice').innerText;

    // Add product name and price to viewsidelove
    viewsidelove.innerHTML += namex + price;
    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    // nameCell.textContent = e.target.parentNode.querySelector('.name').textContent;
    nameCell.textContent = document.querySelector('.pdname').innerText;

    let descCell = row.insertCell(1);
    // descCell.textContent = e.target.parentNode.querySelector('.desc').textContent;
    descCell.textContent = document.querySelector('.pdprice').innerText;

   
    let actionCell = row.insertCell(3);
    actionCell.innerHTML = '<button>Delete</button>';
    

    actionCell.querySelector('button').addEventListener('click', () => {
        table.deleteRow(row.rowIndex);

    
  });
});

// Attach the xmk click event listener
const xmark = document.querySelector('.xmark');
xmark.addEventListener("click", xmk);

function xmk() {
  viewsidelove.style.display = "none"; // Hide the viewsidelove element
  xmark.style.display = "none"; // Hide the xmk button
}

// Attach the hrtmi click event listener
const heartmi = document.querySelector('.heartmi');
heartmi.addEventListener("click", hrtmi);

function hrtmi() {
  viewsidelove.style.display = "block"; // Show the viewsidelove element
}
}
)

// let parentElement = document.querySelector('.circle')

// const che =document.createElement("div")

// che.textContent = e.target.parentNode.querySelector('.name').textContent;

// parentElement.appendChild(che);
