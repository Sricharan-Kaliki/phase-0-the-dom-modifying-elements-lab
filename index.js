// Write your code here!
function include(filename)
{
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    head.appendChild(script)
}
const index=require('./index.html');
const main=index.getElementById("main");
main.remove();