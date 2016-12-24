chrome.runtime.onMessage.addListener(function(request){
    if(request.action==="ChangeColor")
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
})



