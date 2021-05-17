class turma
{
    constructor (id, nome, ano, responsavel, email, curso)
    {
        this.id = id;
        this.nome = nome;
        this.ano = ano;
        this.responsavel = responsavel;
        this.email = email;
        this.curso = curso;

        this.aluno = [];
        this.disciplina = [];
    }

    adicionarAluno(nome, dataNascimento, genero, email, foto)
    {
        if(!nome || !dataNascimento || !genero || !email || !foto)
        {
            throw "Dados inválidos";
        }
        if(/[0-9]/.test(nome))
        {
            throw "O nome contem caracteres inválidos";
        }
        if(/[A-z]/.test(dataNascimento))
        {
            throw "A data de nascimento contem caracteres inválidos";
        }

        this.aluno.push(new Aluno(this.aluno.length + 1, nome, dataNascimento, genero, email, foto));
    }

    removerAluno(id)
    {
        let contador = 0;
        for(let aluno of this.aluno)
        {
            if(aluno.id == id)
            {
                this.aluno.splice(contador, 1);
            }
            contador++;
        }
    }

    adicionarDisciplina(nome, docente)
    {
        if(!nome)
        {
            throw "Dado inválido";
        }
        else if(!docente)
        {
            throw "Dado inválido";
        }
        else if(!nome || !docente)
        {
            throw "Dados inválidos";
        }

        this.disciplina.push(new disciplina(this.disciplina.length + 1, nome, docente));
    }

    removerDisciplina(id)
    {
        let contador = 0;
        for (let disciplina of this.disciplina)
        {
            if(disciplina.id == id)
            {
                this.disciplina.splice(contador, 1);
            }
            contador++;
        }
    }

    addDisciplina(nome, docente){
        if(!nome || !docente)
            throw "Dado(s) inválidos!";

        nome = nome.StringNome();
        this.disciplina.push(new Disciplina(this.disciplina.length + 1, nome, docente));
    }

    removeDisciplina(id){
        let contador = 0;
        for(let disciplina of this.disciplina){
            if(disciplina.id == id){
                this.disciplina.splice(contador, 1);
            }
            contador++;
        }
    }

    showTurmaAlunos(divid){
        this.aluno.showAlunos(divid);

    }

    showTurmaDisciplinas(divid){
        this.disciplina.showDisciplinas(divid);
    }

    showTurmaDiscInscritos(divid, disciplina_ID){
        this.InscricaoDisc.showInscricoesDisc(divid, disciplina_ID);
    }

    
}

    