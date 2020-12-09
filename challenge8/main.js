/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/
var body = document.querySelector('body'); 

body.innerHTML += '<div class="dice"><div class="dot"><div class="dot"></div></div>'
body.innerHTML += '<div class="dice"><div class="dot"><div class="dot"><div class="dot"></div></div>'
body.innerHTML += '<div class="dice"><div class="dot"><div class="dot"><div class="dot"><div class="dot"></div></div>'
body.innerHTML += '<div class="dice"><div class="dot"><div class="dot"><div class="dot"><div class="dot"><div class="dot"></div></div>'
body.innerHTML += '<div class="dice"><div class="dot"><div class="dot"><div class="dot"><div class="dot"><div class="dot"><div class="dot"></div></div>'

// Write your code here 👇


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
