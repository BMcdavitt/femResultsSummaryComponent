$(document).ready(function () {
  $.getJSON('data.json', (data) => {
    console.log(data)

    let getScoreForCategory = (category) => {
      return data.filter((data) => {
        return data.category === category
      })[0].score
    }

    let getIconForCategory = (category) => {
      return data.filter((data) => {
        return data.category === category
      })[0].icon
    }

    let totalScore = () => {
      let total = 0
      data.forEach((data) => {
        total += data.score
      })
      
      return  Math.floor(data.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / data.length)
      
    }

    $('#reactionScore').html(getScoreForCategory('Reaction') + '&nbsp')
    $('#memoryScore').html(getScoreForCategory('Memory') + '&nbsp')
    $('#verbalScore').html(getScoreForCategory('Verbal') + '&nbsp')
    $('#visualScore').html(getScoreForCategory('Visual') + '&nbsp')

    $('#reactionIcon').attr('src', getIconForCategory('Reaction'))
    $('#memoryIcon').attr('src', getIconForCategory('Memory'))
    $('#verbalIcon').attr('src', getIconForCategory('Verbal'))
    $('#visualIcon').attr('src', getIconForCategory('Visual'))

    $('.resultTotalNumber').html(totalScore())

  }).fail(function () {
    console.log('An error has occurred.')
  })
})
