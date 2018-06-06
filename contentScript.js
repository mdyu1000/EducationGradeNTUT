// $("[value='A']").attr("checked", true)

chrome.runtime.onMessage.addListener(  
  function(request, sender, sendResponse) {  
    var comment = String.fromCharCode(65 + (5 - request.comment));
    $("[value=" + comment + "]").attr("checked", true)
  });