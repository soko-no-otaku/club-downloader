chrome.tabs.onUpdated.addListener(function(tabId){
    chrome.pageAction.show(tabId);
})

chrome.webRequest.onCompleted.addListener(
  function extractIndex (details) {
      var url = details.url;
      var size = details.responseHeaders[9].value;
      if (url.match(/index\.m3u8/) && size < 1600) {
          console.log("Extracted:", url);
      }
  },
  { urls: [ "*://*/*" ] },
  [ "responseHeaders" ]
);
