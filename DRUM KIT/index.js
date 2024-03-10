

// document.querySelector("button").addEventListener("click", loadme)

// function loadme(){
//     alert("i am click")

// }


// document.querySelector(".a").addEventListener('click', function(){
//     alert("load it now ubnrg")
// })


// for (let x = 0; x < document.querySelectorAll(".drum").length; x++) {
//     document.querySelectorAll(".drum")[x].addEventListener("click", load)
//     function load() {
//         let play = ["green", "brown", "white", "yellow", "violet", "indigo", "red", "orange", "deepgreen", "black"]
//         let random = Math.floor(Math.random()*play.length )
//         let result = play[random]
//         this.style.color = result
//         console.log(this.innerHTML)
//         let loadsong = this.innerHTML

//         switch (loadsong) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3")
//                 audio.play()
//                 this.style.color = ['green','yellow','brown']
//                 // this.style.color = 'red'
//                 break;

//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3")
//                 audio.play()
//                 // this.style.color = 'green'
//                 // this.style.color = 'blue'
//                 break;

//             case "s":
//                 var audio = new Audio("sounds/tom-2.mp3")
//                 audio.play()
//                 // this.style.color = 'green'
//                 // this.style.color = 'blue'
//                 break;

//             case "j":
//                 var audio = new Audio("sounds/tom-3.mp3")
//                 audio.play()
//                 // this.style.color = 'green'
//                 // this.style.color = 'blue'
//                 break;

//             case "k":
//                 var audio = new Audio("sounds/snare.mp3")
//                 audio.play()
//                 // this.style.color = 'green'
//                 // this.style.color = 'blue'
//                 break;

//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3")
//                 audio.play()
//                 // this.style.color = 'green'
//                 // this.style.color = 'blue'
//                 break;

//             default: console.log(loadsong)
//         }

//     }
// }

// function add (a, b){
//     return a + b
// }

// function subtract(a, b){
//     return a - b
// }

// function multiply (a, b){
//     return a * b
// }

// function divison(a, b){
//     return a / b
// }

// function calculator(a, b, operator){
//     return operator(a,b)
// }

// calculator(5,6, add)

// var bellBoy1 = {
//     name: "Timothy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French", "English"]

// }

// function BellBoy (name, age, hasWorkPermit, languages) {
// this.name = name
// this.age = age
// this.hasWorkPermit =hasWorkPermit
// this.languages = languages
// }

//         // initialize Object

// var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"])

// function HouseHelp(name, age, indegiene, exsalary){
//     this.name = name
//     this.age = age
//     this.indegiene = indegiene
//     this.exsalary = exsalary
// }

//         //    to initialize

// var houseworker1 = new HouseHelp("tolani", 23, "Fedegbo", 40000)

// function cleaner(name, age, indegiene, exsalary){
//     this.name = name
//     this.age = age
//     this.indegiene = indegiene
//     this.exsalary = exsalary
//     this.clean = function (){
//         alert('how are you doin')
//     }
// }

// console.log(cleaner.clean())


// let noofdrum = document.querySelectorAll(".drum").length;

// for(let x = 0; x < noofdrum; x++){
//     document.querySelectorAll(".drum")[x].addEventListener('click', load)
//     function load(){
//     //    let sounds = new Audio('C:\Users\eweda\OneDrive\Desktop\ms\Mohbad-Peace-(TrendyBeatz.com).mp3')
//     //    sounds.play()
//        var audio = new Audio('sounds/kick-bass.mp3')
//         audio.play()




//         }
//     }

let noofdrum = document.querySelectorAll('.drum').length
for (let x = 0; x < noofdrum; x++) {
    document.querySelectorAll('.drum')[x].addEventListener("click", load)

    function load() {
        // var audio = new Audio('sounds/kick-bass.mp3')
        // audio.play()
        let colorli = ["green", "yellow", "purple", "violet", "indigo", "red"]
        let n = Math.floor(Math.random() * colorli.length)
        let result = colorli[n]
        let play = document.querySelector('.drum')

        this.style.color = result
        
        console.log(this.innerHTML)

        switch (this.innerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3')
                audio.play()
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3')
                audio.play()
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3')
                audio.play()
                break;

            case "d":
                var audio = new Audio('sounds/snare.mp3')
                audio.play()
                break;

            case "j":
                var audio = new Audio('sounds/crash.mp3')
                audio.play()
                break;

            case "k":
                var audio = new Audio('sounds/kick-bass.mp3')
                audio.play()
                break;

            case "":
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play()
                break;
            default: console.log("this is the end")
                
        }
    }
}




