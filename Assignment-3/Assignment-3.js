//Question 1
/*Write a JavaScript program to display the reading status (i.e. display book name, author name,and reading status) of the following books*/
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
    for(i=0;i<library.length;i++){
        if(library[i].readingStatus===true){
            console.log("Already read"+" "+"'"+library[i].author+"'"+" "+"by"+" "+library[i].title+".");
        }
        else{
            console.log("You still need to read"+" "+"'"+library[i].title+"'"+" "+"by"+" "+library[i].author+".");
        }
    }/*output-Already read 'Bill Gates' by The Road Ahead.
             Already read 'Steve Jobs' by Walter Isaacson.
             You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins*/
//Question 2
/*Write a javascript program that generates an alert "Not legal age to drive" if the driver age is below 18 years old, if driver age is greater than or equal to 18, it 
generates an alert "Drive safe"*/
var age= 30;
if(age>=18){
    alert("Drive safe");
}
else{
    alert("Not legal age to drive");
}//output-when the page loads,if the age is greater than 18.it shows alert message as "Drive safe".if it is less than 18 ,it shows alert message as "Not legal age to drive".
