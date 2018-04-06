var titleList = [];

document.querySelectorAll('div.item-info > h2 > a').forEach(
    function (node) {
        titleList.push(node.text);
    }
);

chrome.runtime.sendMessage(
    {titles: titleList}
);
