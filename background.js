chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf("https://lovelive-aqoursclub.jp/mob/cont/contLis.php") != -1) {
        chrome.pageAction.show(tabId);
    }
});

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
