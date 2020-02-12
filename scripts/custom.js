window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-151422011-1');

function safariBullshit() {
    if(document.getElementById('index-body').classList.contains('safari-margin')) {
        document.getElementById('index-body').classList.remove('safari-margin');
    } else {
        document.getElementById('index-body').classList.add('safari-margin');
    }
}
