

function przelicz() {
    var zlotowki = document.getElementById('siano').value;
    euro = zlotowki / 3.65;
    alert(zlotowki + 'zl to jest: ' + euro + 'euro');
}

var btn = document.getElementById('count');
btn.addEventListener('click', function() {
    przelicz();
});
