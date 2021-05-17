class inscricao{
    constructor(id, disciplina_ID, aluno_ID, nota){
        this.id = id        
        this.disciplina_ID = disciplina_ID;
        this.aluno_ID = aluno_ID;
        this.nota = nota;
    }

    showInscricoesDisc(divid, disciplina_ID){

        /*
        O id da disciplina vai-se buscar ao botão da disciplina (que se vai clicar)
        E a partir daí é só listar todas as inscrições com esse ID
        */
        let divobj = document.getElementById(divid);
        while(divobj.firstChild){
            divobj.removeChild(divobj.firstChild);
        }
        var table = document.createElement("table");
        table.className = "table";
        var thead = document.createElement("thead");
        table.append(thead);
        var row = document.createElement("tr");
        thead.appendChild(row);
        var th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id do Aluno"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Anotações"));
        th = document.createElement("th");
        row.appendChild(th);
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);


        
        for(let discID of this.disciplina){
            if(discID.id == disciplina_ID){
                var row = document.createElement("tr");
                tbody.appendChild(row);
                var td = document.createElement("td");
                row.appendChild(td);
                td.appendChild(document.createTextNode(discID.aluno_ID));
                td = document.createElement("td");
                row.appendChild(td);
                td.appendChild(document.createTextNode(discID.nota));
            }
        }

        divobj.appendChild(table);

    }
}