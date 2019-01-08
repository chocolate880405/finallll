 /* Demo purposes only */
 $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );



var text1=document.querySelector(".section1 .text");
var text2=document.querySelector(".section2 .text");
var text3=document.querySelector(".section3 .text");
var text4=document.querySelector(".section4 .text");
var text5=document.querySelector(".section5 .text");
var section1=document.querySelector(".section1");
var section2=document.querySelector(".section2");
var section3=document.querySelector(".section3");
var 
section4=document.querySelector(".section4");
var section5=document.querySelector(".section5");


window.onscroll = myFunction;
function myFunction() {
  console.log(document.documentElement.scrollTop==0);
if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
text1.classList.remove("textshow");
  section1.classList.remove("section1show");
}
  if(document.body.scrollTop >= 5 || document.documentElement.scrollTop >= 5){
text1.classList.add("textshow");
  section1.classList.add("section1show");
}
  
  if(document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20){
text2.classList.remove("textshow");
  section2.classList.remove("section2show");
}
  if(document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180){
text2.classList.add("textshow");
  section2.classList.add("section2show");
}
  
   if(document.body.scrollTop <= 40 || document.documentElement.scrollTop <= 40){
text3.classList.remove("textshow");
  section3.classList.remove("section3show");
}
  if(document.body.scrollTop >= 450 || document.documentElement.scrollTop >= 450){
text3.classList.add("textshow");
  section3.classList.add("section3show");
}
  
   if(document.body.scrollTop <= 60 || document.documentElement.scrollTop <= 60){
text4.classList.remove("textshow");
  section4.classList.remove("section4show");
}
  if(document.body.scrollTop >= 720 || document.documentElement.scrollTop >= 720){
text4.classList.add("textshow");
  section4.classList.add("section4show");
}
  
   if(document.body.scrollTop <= 80 || document.documentElement.scrollTop <= 80){
text5.classList.remove("textshow");
 section5.classList.remove("section5show");
}
  if(document.body.scrollTop >= 850 || document.documentElement.scrollTop >= 850){
text5.classList.add("textshow");
  section5.classList.add("section5show");
}
}