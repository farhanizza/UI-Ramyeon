var count = 0;
var result;
var countButton = document.getElementById('plus');
var display = document.getElementById('number');
var displayPrice = document.getElementById('price');
var minButton = document.getElementById('min');
countButton.onclick = function()
{
    count++;
    result = "$" + count * 6;
    display.innerHTML = count;
    displayPrice.innerHTML = result;
}
minButton.onclick = function()
{
    count--;
    result = "$" + count * 6;
    display.innerHTML = count;
    displayPrice.innerHTML = result;
}

