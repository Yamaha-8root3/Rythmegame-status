"use strict";
const button = document.getElementById("myButton");
const messageElement = document.getElementById("message");
// ボタンがクリックされたときの処理
button.addEventListener("click", () => {
    const message = "ボタンがクリックされました！";
    messageElement.textContent = message; // メッセージを表示
});
