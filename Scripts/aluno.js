class Aluno{
    constructor(id, nome, dataNasc, genero, email, foto){ 
        this.id = id 
        this.nome = nome
        this.dataNasc = dataNasc
        this.genero = genero
        this.email = email
        this.foto = foto
    }

    showAlunos(divid){ //Lista os alunos
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
        th.appendChild(document.createTextNode("Data de Nascimento"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Género"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Email"));
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for(let alunos of this.alunos){
            var row = document.createElement("tr");
            tbody.appendChild(row);
            var td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.id));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.nome));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.dataNasc));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.genero));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.email));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.foto));
        }

        divobj.appendChild(table);

    }

} 
