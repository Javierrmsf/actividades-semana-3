//WRITE YOUR CODE BELOW

// Objects are a collection of properties
var customerorder = {
    
    drinksname: "Cappuccino",
    numberofsugars: 2,
    ready: true,
   
  };

  console.log("This drink is a ",customerorder["drinksname"]);


  console.log("this order contains ",customerorder["numberofsugars"]," sugars");


  if (customerorder.ready == false) {console.log("Still in order queue")
}
      
  
  if (customerorder.ready == true) {console.log("Ready for pick-up")
}