function makeList(m3u8List, titleList) {
    var list = document.getElementById("list");

    for (i = 0; i < m3u8List.length; i++) {
        var link = document.createElement('a');
        link.textContent = titleList[i];
        link.id = i;
        link.href = "#!";
        link.className = "waves-effect waves-light collection-item brown-text";
        link.onclick = function () {
            var id = this.id;
            var message = "Copy this command and paste it into your terminal:";
            var command = `ffmpeg -i '${m3u8List[id]}' -c copy '${titleList[id]}.ts'`;
            window.prompt(message, command);
        }

        list.appendChild(link);
    }
}

window.onload = function () {
    var m3u8List = chrome.extension.getBackgroundPage().m3u8List.sort().reverse();
    var titleList = chrome.extension.getBackgroundPage().titleList;

    makeList(m3u8List, titleList);
};
