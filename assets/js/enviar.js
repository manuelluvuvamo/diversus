function enviar(){
    alert(" Enviado com sucesso!");
}

function registrar(){

    let pass = document.getElementById("senha").value;
    let confirm = document.getElementById("confirm").value;
    if( pass != confirm){
        document.getElementById("confirmError").style="display:block; color:red;";
        
        return false;

    }else{
        let nomeCompleto = document.getElementById("nome").value + " " +  document.getElementById("sobrenome").value;
        alert(`Registro concluido, benvindo ao nossa plataforma ${nomeCompleto}`);
    }
   
}



function star(){
     document.getElementById("unstar").style="display:block;";
    document.getElementById("star").style="display:none";

    
    
}
function unstar(){
    document.getElementById("star").style="display:block;";
    document.getElementById("unstar").style="display:none";
}