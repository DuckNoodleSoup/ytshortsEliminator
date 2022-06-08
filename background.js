
const filter = {
    urls: [
        '*://www.youtube.com/shorts*'
    ],
}

const opt = ['blocking'];

function urlreplace (url) {
    if (url.includes('shorts/')) {
        url = url.replace('shorts/', 'watch?v=')
    }
    return url;
}

//fct addListener(fct callback, var filter, var opt_extraInfoSpec);
window.chrome.webRequest.onBeforeRequest.addListener(
    function callback (details) {
        url = details.url;
        return {redirectUrl: urlreplace(url)}
    },
    filter,
    opt
);