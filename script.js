document.getElementById("year").textContent = new Date().getFullYear();

function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("Demande de contact PATLEP974");
  const body = encodeURIComponent(`Bonjour PATLEP974,

Nom : ${name}
E-mail : ${email}

Message :
${message}`);
  window.location.href = `mailto:contact@patlep974.fr?subject=${subject}&body=${body}`;
  document.getElementById("form-status").textContent = "Ouverture de votre messagerie…";
}