var correctCards = 0;

$(document).ready(function () { 
    init();
});

function init() {
    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Incandescente', 'Halógena', 'De descarga', 'LED'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui.draggable.draggable('option', 'revert', false);
        correctCards++; //increment keep track correct cards
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        })
    }
}

var correctCards2 = 0;

$(document).ready(function () { 
    init2();
});

function init2() {
    // Reset the game
    correctCards2 = 0;
    $('#cardPile2').html('');
    $('#cardSlots2').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Medición de la resistividad aparente del terreno', 'Medición de resistencia de puesta a tierra', 'Medición de tensiones de paso y de contacto', 'Medición de equipotencialidad'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number2', numbers[i]).attr('id', 'cardEmparejamient2' + numbers[i]).appendTo('#cardPile2').draggable({
            containment: '#contentEmparejamiento2',
            stack: '#cardPile2 p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number2', i).appendTo('#cardSlots2').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2
        });
    }

}

function handleCardDrop2(event, ui2) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number2');
    var cardNumber = ui2.draggable.data('number2');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui2.draggable.addClass('correct');
        ui2.draggable.draggable('disable');
        $(this).droppable('disable');
        ui2.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui2.draggable.draggable('option', 'revert', false);
        correctCards2++; //increment keep track correct cards
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards2 === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init2();
            }
        })
    }
}
