
update();
function update() {
    gethi = new XMLHttpRequest();
    gethi.open("GET", "https://sslapi.hitokoto.cn/?c=a");
    gethi.send();
    gethi.onreadystatechange = function () {
        if (gethi.readyState === 4 && gethi.status === 200) {
            debugger;
            var hitokoto = document.getElementsByClassName('hitokoto');
            var from = document.getElementsByClassName('from');
            for (var i = 0; i < hitokoto.length; i++) {
                var Hi = JSON.parse(gethi.responseText);
                hitokoto[i].innerHTML = Hi.hitokoto;
                from[i].innerHTML = "—— " + Hi.from + ""; //可自定义输出格式
            }
        }
    }
}
