var str = document.getElementById("uptime").innerHTML;
var mapObj = {
    'd': 'Hari ',
    'h': 'Jam ',
    'm': 'Menit ',
    's': 'Detik '
};
str = str.replace(/d|h|m|s/g, function (matched) {
    return mapObj[matched];
});

document.getElementById("uptime").innerHTML = str;