// var button = document.getElementById("incrementButton");
// var counter = 0; // Initialize counter

// button.addEventListener("click", function() {
//     counter++; // Increment counter
//     document.getElementById("output").value = counter; // Update input field value with the new counter value
// });
// // reset counter
// document.getElementById("resetButton").addEventListener("click", function() {
//     counter = 0; // Reset counter to zero
//     document.getElementById("output").value = counter; // Update input field to show 0
// });
     

var counter1  = 0; // Initialize counter

// Handle Increment Icon Click
document.getElementById("incrementIcon1").addEventListener("click", function() {
    counter1++; // Increment counter
    document.getElementById("output1").value = counter1; // Update input field
});

// Handle Reset Icon Click
document.getElementById("resetIcon1").addEventListener("click", function() {
    counter1 = 0; // Reset counter to zero
    document.getElementById("output1").value = counter1; // Update input field
});
//   arabic output
var counter2 = 0; 
function toArabicNumerals(num) {
    return num.toString().replace(/\d/g, function(digit) {
        return '٠١٢٣٤٥٦٧٨٩'[digit];
    });
}
 document.getElementById("incrementIconArabic").addEventListener("click", function() {
    counter2++;  
    document.getElementById("output2").value = toArabicNumerals(counter2);  
});
 document.getElementById("resetIconArabic").addEventListener("click", function() {
    counter2 = 0; 
    document.getElementById("outputArabic").value = toArabicNumerals(counter2);  
});
function  myMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    var x = document.getElementById("myMode");
    if (x.innerHTML === "Light") {
      x.innerHTML = "Dark";
    } else {
      x.innerHTML = "Light";
    }
 }
//  document.getElementById("arabic").addEventListener("click", function() {
//     window.location.href="arabic.html"
//     });
   
// document.getElementById("switchButton").addEventListener("click", function() {
//     window.location.href="index.html"
//     });