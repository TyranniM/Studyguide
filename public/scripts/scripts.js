$(document).ready(function () {
    let cards
    let counter = 0
    console.log("TEST")
    $('#studyCard').hide()
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





//     $('#question').html(data[0].question)
// $('#answer').html(data[0].answer)
//     console.log(data)
// },




// $("#button").click(function () {
//     $("#display").val($("#display").val();

const flashCards = {
    q1() {
        console.log("question1")
        document.getElementById("Q1").innerHTML
    },

    q2() {
        console.log("question2")
        document.getElementById("Q2").innerHTML
    }
}
$('#letsGo').click(function () {
   $('#intro').hide() 
   setupFlashcards(cards[counter])
})
$('#nextcard').click(function () {
    $('#studyCard').show() 
    setupFlashcards(cards[counter])
})
function setupFlashcards(data) {
    $('#studyCard').show() 
        $('#question').html(data.question)
$('#answer').html(data.answer)
    console.log(data)
    counter+=1

}
})
   
   




   


   

