var value = 0
var tmpValue = 0
var i = 0
$(document).ready(function(){
  $("li").click(function(){
    stars = $(this).attr("value")
    for(i = 0; i < $("ul li").length; i++){
      $("ul li:nth-child(" + (i + 1) + ")").removeClass("checked")      
    }
    for(i = 0; i < stars; i++){
      $("ul li:nth-child(" + (i + 1) + ")").addClass("checked")
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  
      chrome.tabs.sendMessage(tabs[0].id, { comment: stars });  
    })
  })
})