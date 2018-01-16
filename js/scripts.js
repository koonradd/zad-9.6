var list = document.getElementById('list'); 
var add = document.getElementById('addElem');
add.addEventListener('click',function () { 
var liElements = document.getElementsByTagName('li'); 
var element = document.createElement('li'); 
element.innerHTML = "Item " + liElements.length; 
list.appendChild(element); 
}); 