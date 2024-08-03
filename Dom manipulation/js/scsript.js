console.log("Dom")


// // selecting individual element
// // using getElementByid
// var abebe=document.getElementById("one")
// console.log(abebe)

// var classname=abebe.className
// console.log(classname)

// abebe.className="yellow";
// abebe.style.color="red"


// //using query selector

// var abebe2=document.querySelector(".yellow")
// console.log(abebe2)
// var class2=abebe2.className
// console.log(class2)
// abebe2.style.color="red"

// // multiple selecting  using for loop

// var el=document.getElementsByTagName("li")
// for(i=0; i<=el.length; i++){
//     var selecteditem=el[i]

//     selecteditem.className="yellow"

// }
// getelementbyclassname doesmotw work in this case
// var le=document.getElementsByClassName(".yellow")

//     for(j=1; j<=le.length;j++){

//         var selectedclass=le[j]
//         selectedclass.className="red"

//     }


// the solution is convert the the colliction in to array

// var el= document.getElementsByClassName("yellow")
// console.log(el)

//  var temparrar=[]

//  for(i=0; i<=el.length; i++){
//     temparrar.push(el[i])
//  }

//  for(j=0; j<=temparrar.length; j++){
//     var selecteditem=temparrar[j]
// console.log(selecteditem)
//     // selecteditem.className="pink"
//  }


//  traversing between multiple elements

var fourtheelement=document.querySelector(".green")
console.log(fourtheelement)

var bigbroo=fourtheelement.previousElementSibling;
console.log(bigbroo)

var nextelement=fourtheelement.nextElementSibling;
console.log(nextelement)


var parent=fourtheelement.parentNode;
console.log(parent)




// Altering Value 

var er=document.getElementById("four")
 console.log(er)

 er.className="green"
 er.textContent="change html text using textContent"


//  Adding element on the body tag

var createelement=document.createElement("h1")

createelement.textContent="create html element using createElement and append it to body using appendchiled proporties"
document.body.appendChild(createelement)

createelement.classList.add("bootomhiding")

// var select=document.getElementById("listOfFruits")
// var createli=select.createElement("li")
// createli.textContent="create li "
// select.appendChild(createli).className="pink"




// add element on the html


var someli=document.createElement("li")
console.log(someli)
someli.textContent="create li"

var parent=document.getElementById("listOfFruits")
parent.appendChild(someli).className="pink"

var someli2=document.createElement("li")
someli2.textContent="create html element using createelement"

var selecthtml=document.getElementById("listOfFruits")
selecthtml.appendChild(someli2).className="green"



// Adding class 
  var addclass=document.querySelector("#two")
  console.log(addclass.hasAttribute("id"))

    console.log(addclass)
    addclass.classList.add("secondclass")



   //                inline styling


   var inlinestyle=document.querySelector("h1")
   console.log(inlinestyle)
  
   inlinestyle.style.backgroundColor="blue"
   inlinestyle.style.color="white"
   inlinestyle.style.padding="10px"
   inlinestyle.style.borderBottom="3px solid black"





