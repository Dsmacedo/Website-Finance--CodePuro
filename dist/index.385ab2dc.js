src = "https://code.jquery.com/jquery-3.7.1.min.js" > $(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Recolher os dados do formulário
        var formData = $(this).serialize();
        // Enviar os dados do formulário para o arquivo PHP usando AJAX
        $.ajax({
            type: "POST",
            url: "form_email.php",
            data: formData,
            success: function(response) {
                // Exibir uma mensagem de sucesso ou redirecionar o usuário, se necessário
                alert("E-MAIL ENVIADO COM SUCESSO, RESPONDEREMOS EM BREVE, OBRIGADO!!!");
            },
            error: function(xhr, status, error) {
                // Lidar com erros, se houver
                console.error(xhr.responseText);
            }
        });
    });
});

//# sourceMappingURL=index.385ab2dc.js.map
