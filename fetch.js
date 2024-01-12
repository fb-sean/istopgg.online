window.addEventListener('load', () => {
    fetch('https://api.sattler.dev/check_topgg').then((response) => {
        if(response.status !== 200) {
            return;
        }

        // window.location.href = response.body.isOnline ? 'https://istopgg.online/online' : 'https://istopgg.online/offline';
    }).catch(() => {

    });
});
