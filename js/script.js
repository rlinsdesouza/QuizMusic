Array.prototype.uniq = function () {
	let uniq = []
	let values = this
	values.forEach(function (v) {
  	if (!uniq.includes(v))
  	uniq.push(v)
	})
  	return uniq
}

let perguntas = ['A letra , pertence a qual Artista/Banda?',
                 'Complete a letra ',
                 'Acerte a nome da música',
                 'Qual o Artista/Banda ilustrado na foto?']

var genero = document.querySelector('#generoMusical')
var artist = document.querySelector('#art-banda')
var numPer = document.querySelector('#numPer')
var questions = document.querySelector('.perguntas')
var botaoIniciar = document.querySelector('.botao')
// Variavel pra pegar o nome das musicas e artistas da funcao achaArt
var artistas = {}
// Chave do vagalume
var key = 'c3f6644637dc1802b86c528e33ba0f78'

//evento para receber o valor da escolha do genero musical
genero.addEventListener('change', () => achaArt(genero.value))

//função para mandar a resposta anterior para pegar artistas daquele genero no json do vagalume via url
function achaArt(resp_gen){
	let url = `https://www.vagalume.com.br/browse/style/${resp_gen}.js`

  const itemArt = i => `<option value="${i.artUrl}">${i.artDesc}</option>`
  const result = (item) => {
		artistas = item.playlist
		artist.innerHTML = '<option value="vazio"></option>' //forçar o usuario a tomar uma opção ou deixar vazio
    artist.innerHTML += item.playlist.map(itemArt).sort().uniq().join('')
  }
  fetch(url)
						.then(resposta => resposta.json()) //.then é equivalente ao sucess, o primeiro recebe a resposta e extrai apenas o json útil dela
						.then(result) //aqui vai oq vc faz com a resposta definitiva
}

/* Funcao utilizada para retornar um array simples, apenas com o nome do artista e a msc
parametro: artistas - recebe um array com todos os artistas e msc com todas variaveis recebidas da API*/
function paramArt (artistas) {
	const result = item => {
		let art = {
			artUrl: item.artUrl,
			musDesc: item.musDesc
		}
		return art
	}
	if (artistas !==  undefined)
		return artistas.map(result)
}
/*Funcao utilizada para retornar um array de musicas do mesmo artistas ou vazio se nao escolher artista
Parametro: artistas - recebe um array com todos os artistas e msc com todas variaveis recebidas da API
*/
function filtroArtista (artistas) {
	let art = paramArt(artistas)
	if (artist.value !== 'vazio') {
		teste = []
		for (i = 0; i < art.length; i++) {
			if(artist.value === art[i].artUrl)
				teste.push(art[i])
		}
		art = teste
	}
	return art
}

// Botao utilizado para simular o inicio do jogo, onde abrira o pop-up para iniciar as perguntas
botaoIniciar.addEventListener('click', () => {
	requisicaoJSON ()
	paramArt ()
	geraPerguntas(perguntas, numPer.value, filtroArtista(artistas))
})

/*evento para pegar a qnt de questoes a ser respondida (Achei redundante)
numPer.addEventListener('change', () => {
  //console.log(numPer.value)
	geraPerguntas(perguntas, numPer.value)
})*/

/*Função para gerar a selecao aleatória das perguntas
(Funcao floor faz com que o numero seja arredondado pra baixo)*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


/*funcao para requisicao do JSON da API do vagalume
	-Parametros: vetor com os artistas (ou apenas 1) que irão participar do jogo
	-Retorno: irá retornar um JSON com as seguintes condições:
	 	-se o vetor tiver apenas 1 artista - JSON com apenas musicas
		-se o vetor tiveer varios artistas - JSON completo com nome do artista, foto e musicas;*/
function requisicaoJSON (/*parametroArtista*/) {
	let urlteste = ''
	let parametro1 = ['madonna']
	let parametro2 = ['madonna','lady%20gaga','justin%20bieber','maroon%205','michael%20jackson']
	//urlteste = `https://api.vagalume.com.br/search.php?art=${parametro1[0]}&apikey=${key}`

	/*funcao para requisiscao de informacoes sobre o artista as melhores musicas do artista
		- parametro: nome do artistas
		- retorno: array de objetos com id, desc e url da musica*/
	function requisicaoTopMusicasArtista (artista) {
		let urlArtista = `https://www.vagalume.com.br/${artista}/index.js`
	  let arrayMusicas

		fetch(urlArtista)
		  .then(resposta => resposta.json()) //.then é equivalente ao sucess, o primeiro recebe a resposta e extrai apenas o json útil dela
			.then(json => {
			arrayMusicas = json.artist.toplyrics
			console.log(Object.keys(json.artist));
			console.log(Object.keys(json.artist.toplyrics));
			console.log(json.artist.toplyrics.item[0]);
			console.log(arrayMusicas.item[0]);
		})
		return arrayMusicas
	}

	if (parametro1.length === 1) {
		console.log(requisicaoTopMusicasArtista('madonna'))

	}else {

	}
}

//função para gerar perguntas
function geraPerguntas (perguntas, qtd, art) {
	//Aqui utilizei o valor [0] para agilizar o processo, mas isso tbm vira de forma 'ramdomica'
	url = `https://api.vagalume.com.br/search.php?art=${art[0].artUrl}&mus=${art[0].musDesc}&apikey=${key}`
	//console.log(url)
	const result = (item) => {
    //console.log(item.mus[0].text)
  }
	fetch(url)
					 .then(resposta => resposta.json()) //.then é equivalente ao sucess, o primeiro recebe a resposta e extrai apenas o json útil dela
					 .then(result)
  questions.innerHTML = ''
  for (i = 0; i < qtd; i++)
    questions.innerHTML += `<h2>${perguntas[getRandomInt(0, perguntas.length)]}</h2>`
}


//função para gerar o quiz
//função para acumular os pontos
