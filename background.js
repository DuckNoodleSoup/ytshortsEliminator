function urlreplace(url) {
    if (url.includes('shorts/')) {
        url = url.replace('shorts/', 'watch?v=')
    } else if (url.includes('video_id')) {
        video_id = url.split('video_id=').pop().split('&')[0];
        url = ("https://www.youtube.com/watch?v=" + video_id);
        return url;
    } 
    return url;
}

const filter = {
    urls: [
        '*://www.youtube.com/*',
        '*://www.youtube.com/shorts*'
    ],
}

const opt = ['blocking'];

//ONBEFOREREQUEST
window.chrome.webRequest.onBeforeRequest.addListener(
    function callback(details) {
        url = details.url;
        if (url.includes('shorts/') || url.includes('video_id=')) {
            updated_url = urlreplace(url)
            return { redirectUrl: updated_url };
        }
    },
    filter,
    opt
);