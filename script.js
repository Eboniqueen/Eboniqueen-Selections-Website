function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("open");
}
function copyText(elementId, messageId){
  const text=document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text);
  document.getElementById(messageId).innerText="Account number copied.";
}
