// $(function() {
//     let $container = $('#container');
//     console.log($container);
// })

$(function() {
    let $submitButton = $('#submitButton');
    let $listOfItemsID = $('#listOfItemsID');
    
    $submitButton.on('click',function(e) {
        e.preventDefault();
        // above might be more specific to jQuery -- this particular function keeps the item from instantly going away after click
        let $userInput = $('#userInput').val();
        // console.log($userInput);
        // line above tests for Chrome inspect tool
        // $listOfItemsID.html($userInput);
        // line above makes input show up on page after we type it in and hit enter
        $(`<li>${$userInput}</li>`).appendTo($listOfItemsID);
        // below clears submission so it's ready for the next one
        // console.log(#userInput);
        $('#userInput').val('');
        // adding a space between '' in val() will clear the field above - not having the space will return it to the original text

    });

    // "this" is a JS keyword - dark blue means it's a reserved word in JS
    $listOfItemsID.on('click', 'li', function() {
        let $this = $(this);
        // console.log($this);
        $this.remove();
    });


});