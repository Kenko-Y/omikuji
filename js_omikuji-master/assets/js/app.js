/**********************************************************
 *  Omikuji App
 **********************************************************/
/* --- クリックイベント --- */
// btn.addEventListener('click', omikuji);
btn.onclick = omikuji;


/* --- おみくじアプリ（本体） --- */
function omikuji(state) {
    // 定数定義
    const outpt = ["大吉", "中吉", "小吉", "末吉","吉", "凶","大凶"];

    // ランダム変数生成
    const n = Math.floor(Math.random() * 7);   /* random create -> 0-6 */

    const output = document.getElementById("result");

    output.innerText = outpt[state];
};
