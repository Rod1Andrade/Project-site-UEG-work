//Validação do formulário: 

function validForm(){
    var nome = formContato.nome.value;            
    var email = formContato.email.value;            
    var assunto = formContato.assunto.value;            
    var message = formContato.message.value;            

    //Validações: 
    if(nome == "")
    {
        alert("Campo nome é obrigatório");
        formContato.nome.focus();
        return false;
    }
    if(email == "")
    {
        alert("Campo email é obrigatório");
        formContato.email.focus();
        return false;
    }
    if(assunto == "")
    {
        alert("Campo assunto é obrigatório");
        formContato.assunto.focus();
        return false;
    }
    if(message == "")
    {
        alert("Campo mensagem é obrigatório");
        formContato.message.focus();
        return false;
    }

    if(nome != "" && email != "" && assunto != "" && message != ""){
        alert("Mensagem enviada com sucesso, entraremos em contato assim que possível.");
        return true;
    }
}
