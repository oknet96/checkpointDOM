/*
function like1(){
    var x = document.getElementById("moi");
    x.classList.toggle('changeToRed');
    console.log(x)
    
}

function like2(){
  var y = document.getElementById("toi");
  y.classList.toggle('changeToRed');
}
function like3(){
  var z = document.getElementById("nous");
  z.classList.toggle('changeToRed');
}
*/
  // var moi= "je"
  // console.log(moi)
    
//}
//var x=document.createElement('input').value="afficher"
//console.log(x)
//function remove(){
//const element = document.getElementsByClassName("btn-danger").remove();
//console.log("element")
//element.remove();
//}
/*function remove() {
    var removeCartItemButtons = document.getElementsByClassName("cart-row");
    console.log("CartItemButtons")
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", function () {
        removeCartItem(this);
      });
    }*/
    /*
    function area1(papa){
      var a = document.getElementById("je");
      a.remove();
      console.log(papa.parentElement.parentElement.children[0].children[1].innerHTML)
      
  }
  
  function area2(){
    var b = document.getElementById("tu");
    b.remove();
    console.log(b)
  }
  function area3(){
    var c = document.getElementById("il");
    c.remove();
    console.log(c)
  }
  */
  function area(papa) {
  papa.parentElement.parentElement.remove()
}
function like(maman){
  maman.classList.toggle('changeToRed');
}
function checknumber (qty){
  var x= qty.value
  const y= qty.parentElement.parentElement.children[1].innerText
  var tanti =parseInt(y)
  var z= tanti*x;
  let h=qty.parentElement.parentElement.children[3]
  h.innerHTML= (`${z} FCFA`)
  boom()
  }
function boom(){
  var j= document.getElementById('grandpere');
  console.log(j)
  var a=document.getElementById('naruto').innerText;
  console.log(a)
  var b=document.getElementById('jiraya').innerText;
  console.log(b)
  var c=document.getElementById('sasuké').innerText;
  console.log(c)
  var sidi =parseInt(a)
  var rama =parseInt(b)
  var ansou =parseInt(c)
  console.log(sidi)
  console.log(rama)
  console.log(ansou)
  var total=sidi+rama+ansou
  console.log(total)
  j.innerHTML=(`${total} FCFA`)
}
  



