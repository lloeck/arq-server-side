
//TDD: Test Driven Development
var novoMapa = new Map();

class HistoryMap {

}

novoMapa.set('11/11/2011 - 23:30',{title: 'Título do site', url: 'url'});
novoMapa.set('11/11/2011 - 23:30',{});
novoMapa.set('11/11/2011 - 23:30',{});
novoMapa.set('11/11/2011 - 23:30',{});
novoMapa.set('11/11/2011 - 23:31',{});
novoMapa.set('11/11/2011 - 23:32',{});
novoMapa.set('11/11/2011 - 23:33',{});

var resultado = novoMapa.get('11/11/2011 - 23:30');
console.log(resultado);
