document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente

    // Captura os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || tel === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return; // Aborta o envio do formulário se algum campo estiver vazio
    }

    //Define o e-mail correspondente ao assunto
    var emailDestino;

    switch (assunto) {
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

    // Configura os dados a serem enviados
    var formData = new FormData();
    formData.append('service_id', 'service_6ttoeeo');
    formData.append('template_id', 'template_6ckzw2o');
    formData.append('user_id', 'CAD1LCrEkCg_HwNul');
    formData.append('nome',nome);
    formData.append('email', email);
    formData.append('tel', tel);
    formData.append('assunto', assunto);
    formData.append('mensagem', mensagem);
    formData.append('principal_email', emailDestino); // Adicione o campo de cópia (CC) aqui

    // Envia os dados
    $.ajax({
        url: 'https://api.emailjs.com/api/v1.0/email/send-form',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            console.log('Email enviado com sucesso!', response);
            alert('Obrigado pelo seu contato, entraremos em contato em breve.');
        },
        error: function(error) {
            console.log('Erro ao enviar o email:', error);
            alert('Houve um erro ao enviar o email. Por favor, tente novamente mais tarde.');
        }
    });

    // Exibe a mensagem de sucesso
    setTimeout(function() {
        alert("Sua mensagem foi enviada com sucesso!");
    }, 1000);
});

document.getElementById("assunto").addEventListener("change", function() {
    var assuntoSelecionado = this.value;
    var campoCurriculo = document.getElementById("campo-curriculo");

    if (assuntoSelecionado === "trabalhe_conosco") {
        campoCurriculo.style.display = "block";
    } else {
        campoCurriculo.style.display = "none";
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Validação

jQuery('#form').validate({
    rules:{
        nome:{
            minlength: 3
        },
        email:{
            email: true
        },
        assunto:{
            required: function(element) { // Função de validação customizada para o campo de assunto
                return jQuery("#assunto option:selected").val() === "";
            }
        },
        mensagem: {
            required: true // Adicionando a regra de requerido para a mensagem
        }
    },
    messages: {
        nome:{
            required: "Digite um nome valido."
        },
        email: "Digite um e-mail valido.",
        tel: "Digite um telefone valido.",
        assunto: "Selecione um assunto.", 
        mensagem: "Digite uma mensagem."
    }
});

 // Aplica a máscara de telefone
$('#tel').mask('(00) 00000-0000');