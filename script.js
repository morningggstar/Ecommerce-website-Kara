let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})






let home = document.getElementById("home")
let shopss = document.getElementById("shopss")
let blog = document.getElementById("blog")
let about = document.getElementById("about")
let cont = document.getElementById("contact")
let carticon = document.getElementById("carticon")

let mainhome = document.querySelector(".mainhome")
let main = document.querySelector(".main")
let box = document.querySelector(".box")
// let customer = document.querySelector(".customer")
let read = document.querySelector(".read")
let contact = document.querySelector(".contact")

let cartsection = document.querySelector(".cartsection")

function homes() {
    home.style.color= "blue"
    shopss.style.color= "white"
    blog.style.color= "white"
    about.style.color= "white"
    cont.style.color= "white"


    mainhome.style.display="block"
    // main.style.display="none"
    // shop.style.display="none"
    // customer.style.display="none"
    // read.style.display="none"

}
function shops() {
    home.style.color= "white"
    shopss.style.color= "blue"
    blog.style.color= "white"
    about.style.color= "white"
    cont.style.color= "white"


    main.style.display="none"
    box.style.display="block"
    // customer.style.display="none"
    read.style.display="none"
    contact.style.display="none"


}
// function abouts() {
//     home.style.color= "black"
//     shopss.style.color= "black"
//     blog.style.color= "black"
//     about.style.color= "blue"
//     cont.style.color= "black"


//     main.style.display="none"
//     box.style.display="none"
//     customer.style.display="block"
//     read.style.display="none"
//     contact.style.display="none"


// }
function blogs() {
    home.style.color= "white"
    shopss.style.color= "white"
    blog.style.color= "blue"
    about.style.color= "white"
    cont.style.color= "white"


    main.style.display="none"
    box.style.display="none"
    // customer.style.display="none"
    read.style.display="inline"
    contact.style.display="none"


}
function contacts() {
    home.style.color= "white"
    shopss.style.color= "white"
    blog.style.color= "white"
    about.style.color= "white"
    cont.style.color= "blue"

    main.style.display="none"
    box.style.display="none"
    // customer.style.display="none"
    read.style.display="none"
    contact.style.display="flex"

}






// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");
// let carticon = document.getElementById("carticon")
// let itemtitle = document.getElementById("itemtitle");
console.log(crd);


    crd.forEach(function(curValue){
         curValue.addEventListener("click", function(){
            itemPage.style.display="flex";
            // container.style.display="none";
    // customer.style.display="none"
    read.style.display="none"
    contact.style.display="none"
    box.style.display="none"
    main.style.display="none"

    

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src=imgSrc;
             
            let buyText =  document.querySelector(".buyText");
            buyBtn.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="block";
                buyText.innerHTML=`
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
    
                </select> <br>
                
    
                `
               let button =  document.createElement("button");
               button.innerText="Submit";
               buyText.appendChild(button);

               button.addEventListener("click", function(){
               let name = document.getElementById("name");

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Detail")
               }else{
                alert("Your Response Recorded");
                document.querySelector(".buyPage").style.display="none";

               }
               })
                 
                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="none";

                }
                )
            })

             
         })

    })
 
 
    // connect

    function connect(){
        let names = document.getElementById("names");
        let num = document.getElementById("number");
        if(name.value == "" && num.value == ""){
            alert("Fill Details")
        }else{
            alert("Thanks For Connecting")
        }

    }