window.addEventListener('load', () => {
    fetch('https://api.sattler.dev/check_topgg').then(async (response) => {
        if(response.status !== 200) {
            return;
        }

        const body = await response.json();
        window.location.href = body.isOnline ? 'https://istopgg.online/online' : 'https://istopgg.online/offline';
    }).catch(() => {

    });
});
