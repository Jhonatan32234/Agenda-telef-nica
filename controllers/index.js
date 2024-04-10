import { queue } from "./dependencies.js";

let btnAñadir = document.getElementById("btnAñadir");
let btnRemover = document.getElementById("btnRemover");


btnAñadir.addEventListener("click",
function () {
  console.log("A1 si")
  let nombreContacto = document.getElementById('contactName').value;
  let numeroContacto = document.getElementById('contactNumber').value;
  if(nombreContacto==""||numeroContacto==""){
    alert("Datos incompletos");
  }else{
    let contact = {name: nombreContacto, number: numeroContacto};
  queue.enqueue(contact);
  actualizarListaContactos();
  }
})

btnRemover.addEventListener("click",
function () {
  queue.dequeue();
  actualizarListaContactos();
})

function actualizarListaContactos() {
  let contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  let current = queue.head;
  while (current) {
    let contactItem = document.createElement('div');
    contactItem.textContent = `${current.data.name}: ${current.data.number}`;
    contactList.appendChild(contactItem);
    current = current.next;
  }
  
}
