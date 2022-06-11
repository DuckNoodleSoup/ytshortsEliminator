function urlreplace(url) {
    if (url.includes('shorts/')) {
        url = url.replace('shorts/', 'watch?v=')
    }
    return url;
}

chrome.tabs.onUpdated.addListener(
    async function callback(id, info, tab) {
        url = tab.url;
        if (url.includes('shorts/')) {
            updated_url = urlreplace(url)
            chrome.tabs.update(id, {url: updated_url});
        }
        console.log(updated_url);
    }
)