//  Link Title and H1
 document.querySelector('h1').innerText = document.title;

 //My vars
 let count = 0 ;
 let objectCounter = {
   current:0,
   high:0,
   low:0,
 }

 const clickArea = document.querySelector('.click-zone');
 const btnUpGrade = document.querySelector('.upgrade');
 const btnDownGrade = document.querySelector('.downgrade');
 const alerted = document.querySelector('#alert');

//Factoriser la fonctionnalité
btnUpGrade.addEventListener('click',function(e){

   upGrader(this);
   
      // count += Number(this.nextElementSibling.value);
      // target();

      // objectCounter.current = count ;
      //    // console.log(objectCounter);

      // limiter(count);

 });

 btnDownGrade.addEventListener('click',function(e){

 downGrader(this);

   // count -= Number(this.nextElementSibling.value) ;
   // target();

   // objectCounter.current = count ;
   //    // console.log(objectCounter);

   // limiter(count);

 });

 clickArea.addEventListener('mousedown', clickZone);

 //RESET
//  document.body.addEventListener('click', clearData);

//Functions
 function countUpdate(element = '#result') {  

    document.querySelector(`${element}`).innerText = count ;
    
 }

 function limiter(number){

   const highLimit = Number(document.querySelector('.high > .limits').value);
   const lowLimit = Number(document.querySelector('.low > .limits').value);

   objectCounter.high = highLimit;
   objectCounter.low = lowLimit;

     if (number > highLimit || number < lowLimit){

        console.warn('limits handle');

       
        alerted.innerText = number > highLimit ? `tu as bu trop (${number}) de canettes O_o` :  ` y'a rien de spécial ici`;

        alerted.classList.toggle('alerted');

     }

 }

 function clearData(elements = '.inputs'){
   
   count = 0 ;
   target();

   document.querySelectorAll(`${elements}`).forEach((item) => {
      
      console.log(item);

      item.value = 0 ;
      item.dataset.count = 0 ;
             
   });

 }

 function clickZone(e) {

   sessionStorage.setItem('date', Date(e.timeStamp));

   switch(e.which) {

      case 1 :
      upGrader(btnUpGrade);
      break;

      case 2 :
      console.warn(sessionStorage);
      break;

      case 3 :
      downGrader(btnDownGrade);
      break;

      default:
      break;

   }


 }

//  Segmentation #1 des fonctionnalités Up/Down
 function upGrader(element){

   count += Number(element.nextElementSibling.value);
   countUpdate();

   objectCounter.current = count ;
      
   limiter(count);
   
 }
 function downGrader(element) {

   count -= Number(element.nextElementSibling.value);
   countUpdate();

   objectCounter.current = count ;
      
   limiter(count);

 }


 
// TODO : Fonction globale sans sous partiue en up/down ? 
 function triggerCount(element) {

 }
      




