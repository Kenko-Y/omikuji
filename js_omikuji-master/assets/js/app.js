'use strict';
/**********************************************************
 *  Omikuji App
 **********************************************************/
window.onload = function () {
    /* --- 変数宣言 --- */
    // const result = document.getElementsByClassName('result');
    const btn = document.getElementById('btn');
    // const btn_co = document.getElementById('btn_co');
    let state = 0;

    /* --- クリックイベント --- */
    btn.addEventListener('click', function () {
        state %= 3;
        omikuji(state, btn);
        state++;
    });
    // btn_om.onclick = function () {
    //     state = state++ % 3;
    //     omikuji(state);
    // };
    // btn_co.addEventListener('click', chooseLukyColor);
}

/* --- おみくじアプリ（本体） --- */
function omikuji(state, btn) {
    // 定数定義
    const outpt = document.getElementById("result");
    const results_lt = ["大吉", "中吉", "末吉", "吉", "凶"];

    // ランダム変数生成
    const n = Math.floor(Math.random() * results_lt.length);   /* create random */
    switch (state) {
        case 0:
            outpt.innerHTML = results_lt[n];
            btn.innerHTML = "<span>ラッキーカラーは…</span>";
            console.log(`今日の運勢は...${results_lt[n]}`);
            break;
        case 1:
            outpt.innerHTML = chooseLukyColor();
            btn.innerHTML = "<span>もう一度占う</span>";
            break;
        case 2:
            location.reload();
            break;
        default:
            console.log("Error statement!!");
            break;
    }
    // console.log(state);
    return 0;
};

/* --- ラッキーカラー選定 --- */
function chooseLukyColor() {
    // 定数定義
    const results_conm = ["Red", "Blue", "Green", "Black","Gray","Pink","Lime","Navy","Gold","Silver"];
    const addoutpt = document.getElementsByClassName("result");

    // ランダム変数生成
    const n = Math.floor(Math.random() * results_conm.length);   /* create random */

    for (const aout of addoutpt) {

        aout.style.backgroundColor = results_conm[n];

    }
    // console.log(results_conm[n]);

    return results_conm[n];
};
