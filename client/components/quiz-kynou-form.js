Template.formQuiz.events({
    // lida com o submit do formulário
    'submit form': function (event) {

        // impede que o formulário envie mais de uma vez
        event.preventDefault();

        // recupera os dados do form
        var novoQuiz = {
            pergunta: event.target.pergunta.value,
            alternativas: [
                { texto: event.target.opcao1.value, votos: 0 },
                { texto: event.target.opcao2.value, votos: 0 },
                { texto: event.target.opcao3.value, votos: 0 }
            ]
        };

        // cria o novo quiz
        Quiz.insert(novoQuiz);
    }
});