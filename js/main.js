const girls = [
  {
  name: 'Bel',
  picture: './img/logo_sombra_bi.svg'
  },
  {
  name: 'Bel2',
  picture: './img/logo_sombra_bi.svg'
  },
  {
  name: 'Bel3',
  picture: './img/logo_sombra_bi.svg'
  },
  {
  name: 'Bel4',
  picture: './img/logo_sombra_bi.svg'
  },
  {
  name: 'Bel5',
  picture: './img/logo_sombra_bi.svg'
  },  
]

let turno = 0;
let array = [];
const numberOfGirls = girls.length
const position = shufflePositions(array, numberOfGirls)
console.log(position)
const girlsShuffled = setCards(girls, position)
console.log(girlsShuffled)

function shufflePositions(array, number) {
  let random = Math.floor(Math.random() * number);
  while (array.length < number) {
    if (array.indexOf(random) == -1) {
      array.push(random);
      }
    random = Math.floor(Math.random() * number);
  }
  return array;
}

function setCards (arr, masterArr) {
  for (var i = 0; i < masterArr.length; i++) {
      var z = masterArr.indexOf(i);
      masterArr[z] = arr[i];
  }
  return masterArr;
}

function generateOptions (index, maxNumber, total) {
 let arr = []
 arr.push(girls[index].name)
 let shuffle = []
 while (arr.length < maxNumber) {
   let random = Math.floor(Math.random() * total)
   if (random != index && arr.indexOf(girls[random].name) == -1) {
     arr.push(girls[random].name)
   }
 }
 console.log('asi queda el array original dps de creado', arr)
 const position = shufflePositions(shuffle, maxNumber)
 console.log('estas son las posiciones shuffleadas',position)
 const optionPosition = setCards(arr, position)
 console.log('este es el array shuffleado', optionPosition)
 return optionPosition
}

let currentNames = generateOptions(turno, 3, girls.length)
console.log('soy', currentNames)

$(window).on('load', function() {
  $('#picture').attr('src', girlsShuffled[turno].picture);
  $('.button').each(function (i) {
    $(this).html(currentNames[i]) 
  })
});

function updateCard() {
  $('#container').append(cards[i]['front'].clone());
}

function isMatch() {
  
}
console.log('soy shuffled', girlsShuffled)
$('.button').on('click', function () {
  console.log($(this).index())
  const index = $(this).index();
  if (currentNames[index] === girlsShuffled[turno].name) {
    console.log('yey');
  } else {
    console.log('nooo')
  }
});

// necesito desordenar el array y mostrar una sola por vez
/*
cuando alguien clickea el boton
checkeo si matchea el nombre con el de la foto
  si matchea marco verde y sumo un punto
  si no matchea marco rojo 
  y voy a otra imagen

  después de x cantiudad de clicks
  le doy un puntaje 
  y jugar otra vez

 */