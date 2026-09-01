const GIRL_BMP = ["...BBB..", "...BSS..", "..BBSSB.", "..BBKBB.", "...KKK..", "..KKKKK.", "...F.F.."];
const GIRL_PAL = { K: '#f3be00', S: '#ffe5cc', B: '#8f563b', F: '#ac3232' };
const UNI_BMP = ["H........", "HH...R..", ".HPP.OO.", ".SSP..YY", ".SSPPCGG", "..SSSPC.", "..SSSS..", "..S..S.."];
const UNI_PAL = { H: "#f5d151", P: "#d77bba", S: "#ffe1f6", R: '#ff004d', O: '#ff9d00', Y: '#fff700', G: '#3dff5c', C: '#00e5ff' };
let drawSprite = (canvas, bmp, palette, px, flipX = false) => {
    canvas.width = bmp[0].length * px;
    canvas.height = bmp.length * px;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    bmp.forEach((row, y) => {
        [...row].forEach((ch, x) => {
            if (ch === '.') return;
            ctx.fillStyle = palette[ch];
            const drawX = flipX ? (bmp[0].length - 1 - x) : x;
            ctx.fillRect(drawX * px, y * px, px, px);
        });
    });
};
function drawUnicorn() {
    if (player.c > 2) drawSprite(unicornCanvas, UNI_BMP, UNI_PAL, UNI_PX, true);
    else if (player.c <= 1) drawSprite(unicornCanvas, UNI_BMP, UNI_PAL, UNI_PX, false);
}
function drawPlayer() {
    const left = PAD + player.c * (CELL + GAP) + (CELL - playerCanvas.width) / 2;
    const top = PAD + player.r * (CELL + GAP) + (CELL - playerCanvas.height) / 2;
    drawSprite(playerCanvas, GIRL_BMP, GIRL_PAL, PLAYER_PX, player.facingLeft);
    playerCanvas.style.left = left + 'px';
    playerCanvas.style.top = top + 'px';
    drawUnicorn();
}