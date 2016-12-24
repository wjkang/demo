function changeBgColor(){
    chrome.tabs.query({active:true,currentWindow:true}, function (tabs){
        var tabId=tabs[0].id;
        chrome.tabs.sendMessage(tabId,{action:"ChangeColor"});
    });
}
document.getElementById("change-bgcolor-btn").onclick=changeBgColor;