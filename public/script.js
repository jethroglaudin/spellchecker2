/*global fetch*/
var responseText = '';
function handleClick(){
 
 const name =  document.getElementById('nameinput').value
 const phone = document.getElementById('phoneInput').value
 console.log(name)
 fetch('/getemail' + '?' + 'name=' + name + '&' + 'phone='+ phone)
   .then(response=>response.text())
    .then(function(response){
      console.log(response);
      document.getElementById("results").innerHTML = response;
      
    });
  
  
}
