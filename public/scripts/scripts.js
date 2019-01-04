$(document).ready(function () {
    let cards
    let counter = 0
    console.log("TEST")
    $('#studyCard').hide()
    $('#answer').hide()
    $.ajax({
        type: 'GET',
        url: '/studyguide',
        success: function (data) {
            cards = data
        },
        error: function (err) {
            console.log(err)
        }
    },

    )


    $('#letsGo').click(function () {
        $('#intro').hide()
        setupFlashcards(cards[counter])
    })
    $('#nextcard').click(function () {
        $('#studyCard').show()
        $('#answer').hide()
        $('#stuck').hide()
        setupFlashcards(cards[counter])
    })
    $('#result').click(function () {
        $('#answer').show()
        // setupFlashcards(cards[counter])
    })
    $('#hint').click(function () {
        $('#stuck').show()
        
    })


    function setupFlashcards(data) {
        $('#studyCard').show()
        $('#question').html(data.question)
        $('#answer').html(data.answer)
        $('#stuck').html(data.hint)
        console.log(data)
        counter += 1

    }
})











