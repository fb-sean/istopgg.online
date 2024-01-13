window.addEventListener('load', () => {
    fetch('https://api.sattler.dev/check_topgg').then(async (response) => {
        if(response.status !== 200) {
            return;
        }

        const body = await response.json();

        console.debug(body.isOnline ? `Top.gg is currently online.` : `Top.gg is currently offline.`);

        window.location.href = body.isOnline ? 'https://istopgg.online/online' : ('https://istopgg.online/offline' + (body.since ? `?since=${~~(body.since / 1000)}` : ''));
    }).catch(() => {

    });
});
