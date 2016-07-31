Template.quiz.events({
    // evento para lidar com o click na opção
    'click .voto': function (event) {

        // impede o click duplo
        event.preventDefault();

        // recupera o id do quiz pai
        var idQuiz = $(event.currentTarget).parent('.quiz').data('id');
        var idVoto = $(event.currentTarget).data('id');

        // cria o objeto de incremento
        var voteString = 'alternativas.' + idVoto + '.votos';
        var action = {};
        action[voteString] = 1;

        // incrementa o número de votos para esta opção
        Quiz.update(
            { _id: idQuiz },
            { $inc: action }
        );
    }
});