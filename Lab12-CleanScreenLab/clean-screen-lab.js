$(function (){
    stopId = 0;
    $("#start").click(function (){
       if(stopId != 0){ clearInterval(stopId); }
        $(".circle").remove();

        let numberCircles = parseInt($("#number-circles").val());
        let width = parseInt($("#circle-width").val());
        let growthAmount = parseInt($("#growth-amount").val());
        let growRice = parseInt($("#grow-rice").val());

        for (let i =0; i < numberCircles; i++) {
            $("#circle-container").append($("<div>", {
                "css": {
                    "background": randomColor(),
                    "right": Math.floor( Math.random() * 700 ),
                    "left": Math.floor( Math.random() * 700 ),
                    "top": Math.floor( Math.random() * 4 ),
                    "width": width,
                    "height": width
                },
                "class": "circle",
                "click": function() {
                    $(this).hide();
                },
                "mouseenter": function() {
                    $(this).css("opacity", 0.7);
                },
                "mouseleave": function() {
                    $(this).css("opacity", 1);
                },
            }));
        }

        stopId =  setInterval(function (){
            let currentSize = parseInt($(".circle").css("width"));
            const newSize = currentSize + growthAmount + "px";
            $(".circle").css({
                "width": newSize ,
                "height": newSize
            });
        }, growRice)
    })

    $("#stop").click(function (){
        clearInterval(stopId);
    })

    function randomColor() {
        return 'rgb('+
            Math.round(Math.random()*255)+', '+
            Math.round(Math.random()*255)+', '+
            Math.round(Math.random()*255)+')'
    }

})