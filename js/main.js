
function consultarCep(){
    var cep = document.getElementById("cep").value;
    //console.log(cep);
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "get", 
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#titulo_cep").html("CEP "+ response.cep);
            $(".cep").show();
            //alert(response.logradouro)
            //$("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("complemento").innerHTML = response.complemento;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
        }
    })
}

$(function(){
    $(".cep").hide();
});