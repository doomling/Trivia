const girls = [
  {
  name: 'Agos',
  picture: './img/girls/Agos.jpg'
  },
  {
  name: 'Agus',
  picture: './img/girls/agus.jpg'
  },
  {
  name: 'Aldi L.',
  picture: './img/girls/aldiL.jpg'
  },
  {
  name: 'Bere',
  picture: './img/girls/Bere.jpg'
  },
  {
  name: 'Cecilia',
  picture: './img/girls/cecilia.jpg'
  },
  {
  name: 'Euge',
  picture: './img/girls/euge.jpg'
  },
  {
  name: 'Flor',
  picture: './img/girls/Flor.jpg'
  },
  {
  name: 'Grace',
  picture: './img/girls/grace.jpg'
  },
  {
  name: 'Maite',
  picture: './img/girls/Maite.jpg'
  },
  {
  name: 'Maqui',
  picture: './img/girls/Maqui.jpg'
  },
  {
  name: 'Marce',
  picture: './img/girls/Marce.jpg'
  },
  {
  name: 'Marianela',
  picture: './img/girls/marianela.jpg'
  },
  {
  name: 'Meli',
  picture: './img/girls/Meli.jpg'
  },
  {
  name: 'Mica',
  picture: './img/girls/Mica.jpg'
  },
  {
  name: 'Michelle',
  picture: './img/girls/Michelle.jpg'
  },
  {
  name: 'Natalia',
  picture: './img/girls/Natalia.jpg'
  },
  {
  name: 'Noelia',
  picture: './img/girls/Noelia.jpg'
  },
  {
  name: 'Rocio',
  picture: './img/girls/Rocio.jpg'
  },
  {
  name: 'Rossita',
  picture: './img/girls/Rossita.jpg'
  },
  {
  name: 'Sofía',
  picture: './img/girls/Sofia.jpg'
  },
  {
  name: 'Vicky',
  picture: './img/girls/Vicky.jpg'
  },
  {
  name: 'Vonnie',
  picture: './img/girls/Vonnie.jpg'
  },
  {
  name: 'Yam',
  picture: './img/girls/Yam.jpg'
  },
]

let turno = 0;
let matches = 0;
let array = [];
const numberOfGirls = girls.length
const position = shufflePositions(array, numberOfGirls)
const girlsShuffled = setCards(girls, position)

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
 arr.push(girlsShuffled[index].name)
 let shuffle = []
 while (arr.length < maxNumber) {
   let random = Math.floor(Math.random() * total)
   if (random != index && arr.indexOf(girls[random].name) == -1) {
     arr.push(girls[random].name)
   }
 }
 const position = shufflePositions(shuffle, maxNumber)
 const optionPosition = setCards(arr, position)
 return optionPosition
}

let currentNames = generateOptions(turno, 3, girls.length)

$(window).on('load', function() {
  $('#picture').attr('src', girlsShuffled[turno].picture);
  $('.button').each(function (i) {
    $(this).html(currentNames[i]) 
  })
});

function updateCard() {
  $('#container').append(cards[i]['front'].clone());
}

// delegating the event to body so I can repeat
$(document).on('click', '.button', function (event) {
  
  const clicked = this;  
  const index = $(clicked).index();

  if (currentNames[index] === girlsShuffled[turno].name) {
    setTimeout(function() {
      $(clicked).addClass('match')
      $('#message').html('¡Bien, acertaste!')
      turno++;
      matches++;
    });
  } else {
    $(clicked).addClass('error')
    $('#message').html('¡No, esa no era!')
    turno++;
  }
  setTimeout(function() {
    checkTurns(turno, girlsShuffled.length, matches)
    $('#picture').attr('src', girlsShuffled[turno].picture);
    $('#turno').html(turno)
    $('#matches').html(matches)
    currentNames = generateOptions(turno, 3, girls.length)
    $(clicked).removeClass('match').removeClass('error')
    $('#message').html('')
    $('.button').each(function (i) {
      $(this).html(currentNames[i]) 
    })
  }, 700);
  console.log(girlsShuffled.length)
});

function checkTurns (turns, girls, matches) {
  if (turns == girls - 1) {
    $('#modal').removeClass('hidden')
    $('#final').html(matches)
  }
}