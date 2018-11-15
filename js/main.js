const girls = [
  {
  name: 'Agos',
  picture: './img/girls/Agos.png'
  },
  {
  name: 'Agus',
  picture: './img/girls/agus.png'
  },
  {
  name: 'Aldi L.',
  picture: './img/girls/aldiL.png'
  },
  {
  name: 'Bere',
  picture: './img/girls/Bere.png'
  },
  {
  name: 'Cecilia',
  picture: './img/girls/cecilia.png'
  },
  {
  name: 'Euge',
  picture: './img/girls/euge.png'
  },
  {
  name: 'Flor',
  picture: './img/girls/Flor.png'
  },
  {
  name: 'Grace',
  picture: './img/girls/grace.png'
  },
  {
  name: 'Maite',
  picture: './img/girls/Maite.png'
  },
  {
  name: 'Maqui',
  picture: './img/girls/Maqui.png'
  },
  {
  name: 'Marce',
  picture: './img/girls/Marce.png'
  },
  {
  name: 'Marianela',
  picture: './img/girls/marianela.png'
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
    $(clicked).addClass('match')
    $('#message').html('¡Bien, acertaste!')
    turno++;
    
    setTimeout(function() {
      $('#turno').html(turno)
      currentNames = generateOptions(turno, 3, girls.length)
      $(clicked).removeClass('match')
      $('#message').html('')
      $('#picture').attr('src', girlsShuffled[turno].picture);
      $('.button').each(function (i) {
        $(this).html(currentNames[i]) 
      })
    }, 700);

  } else {
    setTimeout(function() {
    }, 2000);
  }
  console.log(currentNames)
});