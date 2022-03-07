
// a rather small sound engine =)

function sfx(url,vol=1,loop=false) {
    if (!window.sfx) sfx = [];
    if (!sfx[url]) {
        console.log("downloading "+url);
        sfx[url] = new Audio(url);
    }
    sfx[url].volume = vol;
    sfx[url].loop = loop;
    sfx[url].play();
}
