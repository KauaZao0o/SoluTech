document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Lógica para processar os dados do formulário (se necessário)
    console.log("Formulário enviado!");

    // Redireciona para outra página
    window.location.href = "pages/contact.html";
  });