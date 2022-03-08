
// a rather small sound engine =)

function sfx(url,vol=1,loop=false) {
    //console.log("sfx: " + url);
    if (!window.sfx) sfx = [];
    if (!sfx[url]) {
    //    console.log("downloading "+url);
        sfx[url] = new Audio(url);
    }
    sfx[url].play();
    sfx[url].volume = vol;
    sfx[url].loop = loop;
    return sfx[url];
}
