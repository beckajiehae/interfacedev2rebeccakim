// $("#homecontent").show();

/* An event to cause a reaction - to click on menu bar to show other page
document=asks the browser, on=when, click, function=when clicked perform function */
$(document).on("click", "#menu_home", function(){
/*function performed, homecontent will slide down*/
    $("#homecontent").slideDown();
// Siblings - forcing other content to slide up when other menu item is selected
    $("#homecontent").siblings().slipeUp();
})

$(document).on("click", "#menu_about", function(){
    $("#aboutcontent").slideDown();
    $("#aboutcontent").siblings().slipeUp();
})

$(document).on("click", "#menu_tutorial", function(){
    $("#tutorialcontent").slideDown();
    $("#tutorialcontent").siblings().slipeUp();
})

$(document).on("click", "#menu_vlog", function(){
    $("#vlogcontent").slideDown();
    $("#vlogcontent").siblings().slipeUp();
})

$(document).on("click", "#menu_contact", function(){
    $("#contactcontent").slideDown();
    $("#contactcontent").siblings().slipeUp();
})

//
$("#menu_home").click();