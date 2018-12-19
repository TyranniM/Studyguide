$(document).ready (function(){
    console.log("TEST")
    $.ajax(
        {
        type: 'GET',
        url: '/studyguide',
        success: function(data)
        {
            console.log(data)
        },
        error:function(err)
        {
            console.log(err)
        }
        
        });
    })

    // $("#button").click(function () {
    //     $("#display").val($("#display").val();

    const flashCards = {
        q1() {
            console.log("question1")
            document.getElementById("Q1").innerHTML 
        }
    }