$(function() {

    $('#submit-1').on('mouseover', function() {
        alert("don't click this button");
    })

    $('#submit-2').on('mouseover', function() {
        alert("don't click this button too");
    })

    $('#submit-3').on('click', function() {
        alert("click on numbers");
    })

    $('#submit-4').on('click', function() {
        alert("find one more number");
    })

    $('.li-1').on('click', function() {
        alert("looser");
    })
    $('.li-2').on('click', function() {
        alert("looser");
    })
    $('.li-4').on('click', function() {
        alert("looser");
    })
    $('.li-5').on('click', function() {
        alert("looser");
    })



    // $('#submit-1').on('click', function() {
    //     console.log('button 1');
    // })

    // $('#submit-2').on('click', function() {
    //     console.log('button 2');
    // })

    // $('#submit-3').on('mouseout', function() {
    //     alert('click this button (pls)');
    // })



    // $('.test-1').on('mouseover', function() {
    //     console.log('mouse over')
    // })


    // $('input[name="username"]').on('focus', function() {
    //     console.log('focus')
    // })

    // $('input[name="username"]').on('blur', function() {
    //     console.log('blur')
    // })

    // $('input[name="username"]').on('keydown', function() {
    //     console.log('keydown')
    // })

});
