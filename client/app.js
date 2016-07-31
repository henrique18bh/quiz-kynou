Template.body.helpers({
    quizes: function () {
        return Quiz.find();
    }
});

// add um índice a cada item
UI.registerHelper('indexedArray', function (contexto, opcoes) {
    if (contexto) {
        return contexto.map(function (item, indice) {
            item._index = indice;
            return item;
        });
    }
});