$( document ).ready(function() {
    let points = 0, status = 0, gameOver = 0;

    $("#start").click(start);
    $("#maze").mousemove(play);
    $("#maze").mouseleave(leaveGame);
    $("#end").mouseover(win);
    $(".boundary").mouseover(lose);

    function start(){
        status = 1;
        points = 0;
        gameOver = 0;
        $(".boundary").removeClass('youlose');
        $("#status").text("Points: " + points);
    }
    function play(e){
        let thisElemente = e.toElement;
        if(!$(".boundary").hasClass('youlose')){
            if(status==0){
                $("#status").text('Click the "S" to begin.');
            } else if(thisElemente == this && status == 1 && gameOver == 0){
                points = (e).offsetX;
                $("#status").text("Points: " + points);
            }
        }

    }
    function leaveGame(e){
        if(status == 1 && points <= 450){
            status = 0;
            $(".boundary").addClass('youlose');
            $("#status").text("Your points: " + points + ". Sorry, you lost :(");
        }
    }

    function win(){
        if((!$(".boundary").hasClass("youlose"))  && (status == 1) && (gameOver == 0)){
            $("#status").text("Your points: 498. You win!!! :)");
            $(".boundary").removeClass('youlose');
            gameOver = 1;
        }
    }
    function lose(){
        if(status==1  && gameOver == 0){
            $(".boundary").addClass('youlose');
            if(points >= 0 && points <= 299){
                $("#status").text("Your points: " + points + ". Sorry, you lost :(");
            }else if(points >= 300 && points < 450){
                $("#status").text("Your points: " + points+ ". You lost, but almost there :)");
            }
        }

    }
});


