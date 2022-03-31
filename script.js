const colors= ['red','blue','rgb(133,122,200)',
'#F15025'];
//selector
const buttom = document.querySelector
('button');
const color = document.querySelector
('.span-color');

//event
buttom.addEventListener('click',
function(){
   const randomnumber = getrandomnumber();
   console.log(randomnumber);
   
   document.body.style.backgroundColor= colors[randomnumber];
   color.innertext= colors[randomnumber];
})

//random number genertate function
function getrandomnumber(){
   return Math.floor(Math.random() *
   colors.length)

}