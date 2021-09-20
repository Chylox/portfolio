// Add Small Delay after click for Transition:
function delayUrlLoad(url, mils)
{
    setTimeout(function() {
        window.location.href = url;
    }, mils)
}