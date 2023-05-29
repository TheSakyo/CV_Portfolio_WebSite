/* -------------------------------------------------------- */


function MouseListener(mouseevent, elementParent, elementOne, elementTwo) {

    if(mouseevent == 'mouseenter' || mouseevent == 'enter') {

        elementParent.mouseenter(function(){

            if(!elementOne.hasClass('d-none')) { elementOne.addClass('d-none'); } 
            if(elementTwo.hasClass('d-none')) { elementTwo.removeClass('d-none'); } 

        });

    } else if(mouseevent == 'mouseleave' || mouseevent == 'leave') {

        elementParent.mouseleave(function(){

            if(elementOne.hasClass('d-none')) { elementOne.removeClass('d-none'); } 
            if(!elementTwo.hasClass('d-none')) { elementTwo.addClass('d-none'); } 
        });
    }
}

MouseListener('enter', $('#phone'), $('#show-num'), $('#num'));
MouseListener('enter', $('#email'), $('#show-mail'), $('#mail'));

                        /* --------------------------- */

MouseListener('enter', $('#office'), $('#title-office'), $('#info-office'));
MouseListener('enter', $('#program'), $('#title-program'), $('#info-program'));
MouseListener('enter', $('#montage'), $('#title-montage'), $('#info-montage'));
MouseListener('enter', $('#music'), $('#title-music'), $('#info-music'));

                        /* --------------------------- */

MouseListener('leave', $('#office'), $('#title-office'), $('#info-office'));
MouseListener('leave', $('#program'), $('#title-program'), $('#info-program'));
MouseListener('leave', $('#montage'), $('#title-montage'), $('#info-montage'));
MouseListener('leave', $('#music'), $('#title-music'), $('#info-music'));

                        /* --------------------------- */

MouseListener('leave', $('#phone'), $('#show-num'), $('#num'));
MouseListener('leave', $('#email'), $('#show-mail'), $('#mail'));

/* -------------------------------------------------------- */