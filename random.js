window.addEventListener('load', () => {
    const button = document.getElementById('randomVoteButton');

    const bots = [
        {
            name: 'Himiko',
            link: 'https://top.gg/bot/1008142696801648711',
        },
        {
            name: 'Daily Quotes',
            link: 'https://top.gg/bot/880237210484506675',
        },
        {
            name: 'Scripty',
            link: 'https://top.gg/bot/811652199100317726',
        },
        {
            name: 'Invite Tracker',
            link: 'https://top.gg/bot/720351927581278219',
        },
        {
            name: 'Appy',
            link: 'https://top.gg/bot/853327905357561948',
        },
        {
            name: 'TempVoice',
            link: 'https://top.gg/bot/762217899355013120',
        },
        {
            name: 'Daily Music',
            link: 'https://top.gg/bot/1115972980984516719',
        },
        {
            name: 'DittoBOT',
            link: 'https://top.gg/bot/1000125868938633297',
        },
        {
            name: 'Polls',
            link: 'https://top.gg/bot/1133835522113024151',
        },
        {
            name: 'Mr Poll',
            link: 'https://top.gg/bot/730778862203437068',
        },
        {
            name: 'Would You',
            link: 'https://top.gg/bot/981649513427111957',
        },
        {
            name: 'Pridebot',
            link: 'https://top.gg/bot/1101256478632972369',
        },
        {
            name: 'Green-Bot',
            link: 'https://top.gg/bot/783708073390112830',
        },
        {
            name: 'Discortics',
            link: 'https://top.gg/bot/739735540483752006',
        },
        {
            name: 'TTS Bot',
            link: 'https://top.gg/bot/513423712582762502',
        },
        {
            name: 'Kiai',
            link: 'https://top.gg/bot/518129184338345985',
        },
        {
            name: 'Bookmarker',
            link: 'https://top.gg/bot/935447281929449532',
        },
        {
            name: 'Killua',
            link: 'https://top.gg/bot/756206646396452975',
        },
        {
            name: 'EasyThreads',
            link: 'https://top.gg/bot/992796487048233000',
        },
        {
            name: 'AutoQuoter',
            link: 'https://top.gg/bot/1248262328986894437',
        },
    ];

    const randomBot = bots[Math.floor(Math.random() * bots.length)];

    button.innerHTML = `${randomBot.name}`;
    button.href = randomBot.link;
});
