chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){

          //spam one person
      var chatBox  = document.getElementsByName("message_body")[0];
      var boxID = document.getElementById("u_0_t");

      var spamInit   = function() {   

      chatBox.value = 'LOL';
        boxID.click();
        };
      spamInit();

  };
});