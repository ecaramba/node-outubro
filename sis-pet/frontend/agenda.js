// listagem 

$.getJSON('/agenda', function(dados){

    dados.forEach(function(valor) {

        let data = new Date(valor.datahora);

        let item = `<label class="list-group-item d-flex gap-3"> 
            <input class="form-check-input flex-shrink-0"
            type="checkbox" value="" style="font-size: 1.375em;"> 
            <span class="pt-1 form-checked-content"> 
            <strong> ${valor.nome} - ${valor.tutor} </strong> 
            <small class="d-block text-body-secondary"> 
            ${data.toLocaleDateString()}
            </small> </span> </label>`;

        $("#agenda").append(item);

    }); // fim do forEach
}); //fim do getJson