function initializeLists() {
    m3u8List = [];
    titleList = [];
    dateList = [];
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf("https://lovelive-aqoursclub.jp/mob/cont/contLis.php") != -1) {
        if (changeInfo.status == "loading") {
            initializeLists();
        }
        chrome.pageAction.show(tabId);
    }
});

chrome.webRequest.onCompleted.addListener(
  function (details) {
      var url = details.url;
      var size = details.responseHeaders[9].value;
      if (url.match(/index\.m3u8/) && size < 1700) {
          m3u8List.push(url);
      }
  },
  { urls: [ "https://dc.miovp.com/*" ] },
  [ "responseHeaders" ]
);

chrome.runtime.onMessage.addListener(
    function (request) {
        titleList = request.t;
        dateList = request.d;
    }
);
