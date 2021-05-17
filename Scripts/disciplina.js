class Disciplina{
    constructor (id, nome, docente){
        this.id = id        
        this.nome = nome        
        this.docente = docente
    }

    showDisciplinas(divid){ //Lista as disciplinas
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
        th.appendChild(document.createTextNode("Nome"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Docente"));
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for(let disciplinas of this.disciplina){
            var row = document.createElement("tr");
            tbody.appendChild(row);
            var td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.id));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.nome));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.docente));
        }

        divobj.appendChild(table);
    }
    
    
} 