var bgpage = chrome.extension.getBackgroundPage();

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('one');
    // onClick's logic below:
    link.addEventListener('click', function() {
        console.log('clicked');
        bgpage.startSend();
    });
  
});