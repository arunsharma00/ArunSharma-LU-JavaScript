//question 1
//By how many ways we can access elements in the DOM and write about them in brief?There are three ways,are
//1.getElementsByTagName( )-This method will return an array of all the elements you specify between the parentheses.
//eg:
var pararray= document.getElementsByTagName('p');
console.log(pararray);//output-[p, p, p] In the example above we are selecting all the paragraph tags in the document and returns in an array.
//2.getElementsByClassName( )-This method uses the class attribute of an element in order to gain access to it. This allows you to be more specific than .getElementsByTagName()
because it will only return the elements that contain the class name we specify within the parentheses.
//eg:
var classarray= document.getElementsByClassName("top");
console.log(classarray);//output-[h1.top, h2.top, h3.top] In the example above we are selecting all the heading tags in the document by its class name and returns in an array.
//3.getElementById( )-This method is perfect if we want to target one specific element. It uses the id attribute of an element in order to access that element. 
var id= document.getElementById("head1");
console.log(id);//output-it only return the element that contain id we specify within the parentheses.
//question 2
//Write a javascript program that will take 2 numbers from the HTML page and display them on the HTML page after the addition of those 2 numbers.
function addnumbers(){
  var value1 = parseInt(document.getElementById("firstnumber").value);
  var value2 = parseInt(document.getElementById("secondnumber").value);
  var answer=document.getElementById("sum");
  answer.value=value1+value2;
}//output-it adds the two values given in the two input fields with id "firstname" and "secondnumber" when clicking the add button .It shows the sum value in the input field 
which as a id="sum".
