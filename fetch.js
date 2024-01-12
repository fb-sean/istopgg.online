window.addEventListener('load', () => {
    fetch("https://top.gg/api/client/discord/bot/432610292342587392/vote/check", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.6",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Brave\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1"
        },
        "referrer": "https://top.gg/bot/432610292342587392/vote",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => {
        if(response.status !== 200) {
            // window.location.href = 'https://istopgg.online/offline';

            return;
        }

        console.log(response);

        // window.location.href = 'https://istopgg.online/online'
    }).catch((error) => {
        console.log(error);

        // window.location.href = 'https://istopgg.online/offline';
    });
});
