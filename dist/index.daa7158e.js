document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que o formulário seja enviado normalmente
    //Captura os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formul\xe1rio.");
        return; // Aborta o envio do formulário se algum campo estiver vazio
    }
    //Define o e-mail correspondente ao assunto
    var emailDestino;
    switch(assunto){
        case "comercial":
            emailDestino = "solange@escolatecnocursos.com.br";
            break;
        case "financeiro":
            emailDestino = "solange@escolatecnocursos.com.br";
            break;
        case "suporte":
            emailDestino = "suporte@escolatecnocursos.com.br";
            break;
        case "trabalhe_conosco":
            emailDestino = "naiane.tomaz@escolatecnocursos.com.br";
            break;
        default:
            emailDestino = "contato@example.com";
    }
    // Monta o corpo do e-mail
    var corpoEmail = "Assunto: " + assunto + "%0D%0A"; // %0D%0A representa uma quebra de linha em um link mailto
    corpoEmail += "Nome: " + nome + "%0D%0A";
    corpoEmail += "Email: " + email + "%0D%0A";
    corpoEmail += "Mensagem: " + mensagem;
    // Monta o link mailto
    var linkMailto = "mailto:" + emailDestino + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpoEmail);
    // Abre uma nova janela com o link mailto
    window.open(linkMailto);
    // Exibe a mensagem de sucesso
    setTimeout(function() {
        alert("Sua mensagem foi enviada com sucesso!");
    }, 1000);
});
document.getElementById("assunto").addEventListener("change", function() {
    var assuntoSelecionado = this.value;
    var campoCurriculo = document.getElementById("campo-curriculo");
    if (assuntoSelecionado === "trabalhe_conosco") campoCurriculo.style.display = "block";
    else campoCurriculo.style.display = "none";
});
//validação
jQuery("#form").validate({
    rules: {
        nome: {
            minlength: 3
        },
        email: {
            email: true
        },
        assunto: {
            required: function(element) {
                return jQuery("#assunto option:selected").val() === "";
            }
        },
        message: {
            required: true // Adicionando a regra de requerido para a mensagem
        }
    },
    messages: {
        nome: {
            required: "Digite um Nome valido."
        },
        email: "Digite um e-mail valido.",
        assunto: "Selecione um assunto.",
        message: "Digite uma mensagem."
    }
});

//# sourceMappingURL=index.daa7158e.js.map
