/**
 * Created by Esmat on 3/20/2016.
 */


$(function() {
    $( ".I2Skws" ).draggable({ axis: "x" });
});


$('.bannerStart').hide();
$('.I2Skws').hide();



var currentPos = 0;
$(".I2Skws").mousedown(function() {
    currentPos = $(".I2Skws").position().left;
    console.log(currentPos);
});

$(".I2Skws , .I2Scloser").mouseup(function() {
    organizeBannerPosition($(".I2Skws"));
});

//Close the banner
$(".I2Sx").click(function () {
    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: 'left' };

    // Set the duration (default: 400 milliseconds)
    var duration = 500;
    $('.bannerStart').fadeOut(500);
    $('.I2Skws').toggle(effect, options, duration);
    $('.I2SleftSide').show();
});

//Open the banner
$(".I2Splus").click(function () {
    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: 'left' };

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('.I2SleftSide').hide();
    $('.bannerStart').fadeIn(500);
    $('.I2Skws').toggle(effect, options, duration);

});


function organizeBannerPosition(target){
    var kwsPosition = target.position();
    var kwsWidth = target.width();

    //bannerStart
    var bannerStart = $(".bannerStart");
    var bannerStartWidth = bannerStart.width();

    console.log(kwsPosition);
    if(kwsWidth < bannerStartWidth) {
        target.animate({ left: "0px" }, 500);
    }
    else if(kwsPosition.left > 0) {
        target.animate({ left: "0px" }, 500);
    }
    else if((kwsWidth + kwsPosition.left) < bannerStartWidth)
    {
        console.log("left: " + (kwsWidth + kwsPosition.left) + " --- banner width: "+bannerStartWidth);
        console.log("new position: " + (bannerStartWidth - kwsWidth));
        var rightSide = $(".I2Scloser").width();
        target.animate({ left: (bannerStartWidth - kwsWidth - rightSide) }, 500);
    }
    else{
        if(kwsPosition.left <= currentPos)
            target.animate({ left: (target.position().left - 100) + "px" }, 300);
        else target.animate({ left: (target.position().left + 100) + "px" }, 300);
    }


}