var titleList = [];
var dateList = [];

document.querySelectorAll('div.item-info > h2 > a').forEach(
    function (node) {
        var title = node.text.trim();
        titleList.push(title);
    }
);
document.querySelectorAll('div.item-info > p.item-date').forEach(
    function (node) {
        var date = node.textContent.replace(/\./g, "");
        dateList.push(date);
    }
);

chrome.runtime.sendMessage(
    {
        t: titleList,
        d: dateList
    }
);
