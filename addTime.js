const findGetParameter = (parameterName) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(parameterName);
};

function unixToReadAble(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
}

window.addEventListener('load', () => {
    const p = document.getElementById('since-p');
    const unixTimestamp = findGetParameter('since');

    if(unixTimestamp) {
        p.innerHTML = `<strong>Since:</strong> ${unixToReadAble(unixTimestamp)}`;
    } else {
        p.innerHTML = '<strong>Since:</strong> unknown';
    }
});
