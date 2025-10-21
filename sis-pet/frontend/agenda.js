// listagem 

let servicos = [
    {
        nome: "Tosa",
        valor: 120
    },
    {
        nome: "Banho",
        valor: 100
    },
    {
        nome: "Escova",
        valor: 80
    },
    {
        nome: "Consulta",
        valor: 200
    },
];

$(document).ready(function(){

    servicos.forEach(function(item, id){
        $("#servico").append(`<option value="${id}">${item.nome}</option>`);
    });

    function listarTudo()
    {

        $.getJSON('/agenda', function(dados){
            
            $("#agenda").empty();
            
            dados.forEach(function(valor) {
                
                let data = new Date(valor.datahora);
                
                let item = `<label class="list-group-item d-flex justify-content-between gap-3"> 
                
                <input class="form-check-input flex-shrink-0"
                type="checkbox" value="" style="font-size: 1.375em;"> 
                <span class="pt-1 form-checked-content"> 
                <strong> ${valor.nome} - ${valor.tutor} </strong> 
                <small class="d-block text-body-secondary"> 
                ${data.toLocaleString()}
                </small> </span> 
                <div>
                <button petId="${valor.id}" class="btn btn-outline-info bt-editar"> <i class="bi bi-pencil"></i> </button>
                <button petId="${valor.id}" class="btn btn-outline-danger bt-del"> <i class="bi bi-x-square-fill"></i> </button>
                </div>
                </label>`;
                
                
                $("#agenda").append(item);
                
            }); // fim do forEach
        }); //fim do getJson
    }

    listarTudo();

    $("#servico").change(function(ev){
        let id = this.value;
        let valor = servicos[id].valor;
        $("#valor").val(valor);
    }); //fim do change

    $("#bt-agendar").click(function(){

        let erro = false;

        $('#modal-cadastro input, #modal-cadastro select').removeClass("is-invalid");

        if ($("#nome").val().length < 3)
        {
            $("#nome").addClass("is-invalid");
            erro = true;
        }

        if ($("#tutor").val() < 3)
        {
            $("#tutor").addClass("is-invalid");
            erro = true;
        }

        if ($("#datahora").val() == "")
        {
            $("#datahora").addClass("is-invalid");
            erro = true;
        }

        if ($("#profissional").val() == "")
        {
            $("#profissional").addClass("is-invalid");
            erro = true;
        }

        if ($("#servico").val() == "")
        {
            $("#servico").addClass("is-invalid");
            erro = true;
        }

        if ($("#valor").val() == "")
        {
            $("#valor").addClass("is-invalid");
            erro = true;
        }

        if (erro == true) {
            return false;
        }


        let servico_sel = $("#servico").val();
        let dados = {
            nome: $("#nome").val(),
            tutor: $("#tutor").val(),
            datahora: $("#datahora").val(),
            servico: servicos[servico_sel].nome,
            profissional: $("#profissional").val(),
            valor: $("#valor").val(),
        };

        let idAgenda = $("#idAgenda").val();

        if (idAgenda == "")
        {
            $.post('/agenda', dados, function(res){
                $("#modal-cadastro").modal('hide');
                listarTudo();
            });
        } else {
            console.log('edit')
            $.post('/agenda/atualizar/' + idAgenda, dados, function(res){
                $("#modal-cadastro").modal('hide');
                listarTudo();
            });
        }
    }); //fim do bt-agendar

    $("#agenda").on('click', '.bt-del', function(){
        let id = $(this).attr('petId');

        $.post('/agenda/deletar/'+id, function(res){
            console.log(res);
            listarTudo();
            location.href = "#topo";

            $("#alert-msg").removeClass("d-none");
        })
    });// fim do bt-del

    $("#agenda").on('click', '.bt-editar', function(){
        let id = $(this).attr('petId');

        $("#modal-cadastro").modal('show');

        $.getJSON("/agenda/"+id, function(dados){
            console.log(dados)

            let pos = servicos.findIndex(function(valor) {
                if (valor.nome == dados.servico)
                {
                    return true;
                }
            })


            $("#nome").val(dados.nome);
            $("#tutor").val(dados.tutor);
            $("#datahora").val(dados.datahora);
            $("#servico").val(pos);
            $("#profissional").val(dados.profissional);
            $("#valor").val(dados.valor);
            $("#idAgenda").val(dados.id);

        }); // fim do getJson

    }); // Fim do bt-editar

});