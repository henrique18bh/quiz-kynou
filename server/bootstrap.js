// essa função será executada quando a app for iniciada
Meteor.startup(function () {

    // se não tiver nenhum quiz disponível, cria um com dados simples
    if (Quiz.find().count() === 0) {
        var quizSimples = [
            {
                pergunta: 'Você gostou do Tutorial?',
                alternativas: [
                    { texto: 'Sim, muito!', votos: 0 },
                    { texto: 'Mais ou menos...', votos: 0 },
                    { texto: 'Não. Prefiro JavaScript', votos: 0 }
                ]
            },
            {
                pergunta: 'Como você avalia este artigo?',
                alternativas: [
                    { texto: 'ruim', votos: 0 },
                    { texto: 'bom', votos: 0 },
                    { texto: 'excelente', votos: 0 }
                ]
            }
        ];

        // itera sobre todos os quizes e insere cada um no banco
        _.each(quizSimples, function (quiz) {
            Quiz.insert(quiz);
        });
    }
});