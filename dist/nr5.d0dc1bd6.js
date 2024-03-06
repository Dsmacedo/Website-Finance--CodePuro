//Abri formulario de Desconto Popup
document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup").classList.add("fixed"); // Adicione esta linha para fixar o formulário
});
document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").classList.remove("fixed");
});
//FUnção para encaminhar email Formulario de desconto
$(document).ready(function() {
    $(".form-desconto").submit(function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente
        // Captura os valores dos campos do formulário
        var nome = $("#nome").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var cidade = $("#cidade").val();
        var estado = $("#estado").val();
        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || tel === "" || cidade === "" || estado === "") {
            alert("Por favor, preencha todos os campos do formul\xe1rio.");
            return; // Aborta o envio do formulário se algum campo estiver vazio
        }
        // Configura os dados a serem enviados
        var formData = new FormData();
        formData.append("service_id", "service_6ttoeeo");
        formData.append("template_id", "template_zs6qc29");
        formData.append("user_id", "CAD1LCrEkCg_HwNul");
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("cidade", cidade);
        formData.append("estado", estado);
        formData.append("email_desc", "solange@escolatecnocursos.com.br");
        // Envia os dados
        $.ajax({
            url: "https://api.emailjs.com/api/v1.0/email/send-form",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log("Email enviado com sucesso!", response);
                alert("Obrigado pelo seu contato, entraremos em contato em breve.");
            },
            error: function(error) {
                console.log("Erro ao enviar o email:", error);
                alert("Houve um erro ao enviar o email. Por favor, tente novamente mais tarde.");
            }
        });
    });
});
jQuery("#form-desconto").validate({
    rules: {
        nome: {
            minlength: 3
        },
        email: {
            email: true
        },
        mensagem: {
            required: true // Adicionando a regra de requerido para a mensagem
        }
    },
    messages: {
        nome: {
            required: "Digite um nome valido."
        },
        email: "Digite um e-mail valido.",
        tel: "Digite um telefone valido.",
        cidade: "Digite uma cidade valida.",
        estado: "Digite um Estado."
    }
});

//# sourceMappingURL=nr5.d0dc1bd6.js.map
