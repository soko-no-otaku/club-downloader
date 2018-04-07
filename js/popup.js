function makeList(m3u8List, titleList, dateList) {
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
            var extension = (navigator.platform.indexOf("Win") != -1) ? ".exe" : "";
            var command = `ffmpeg${extension} -i '${m3u8List[id]}' -c copy '${dateList[id]}_${titleList[id]}.ts'`;
            window.prompt(message, command);
        }

        list.appendChild(link);
    }
}

window.onload = function () {
    var m3u8List = chrome.extension.getBackgroundPage().m3u8List.sort(function (a, b) {
        var re = /^https:\/\/dc\.miovp\.com\/wrap_m3u8\/ac-amu\/1\/(\d+)\/.+$/;
        var num_a = Number(a.match(re)[1]);
        var num_b = Number(b.match(re)[1]);
        return num_b - num_a;
    });
    var titleList = chrome.extension.getBackgroundPage().titleList;
    var dateList = chrome.extension.getBackgroundPage().dateList;

    makeList(m3u8List, titleList, dateList);
};
