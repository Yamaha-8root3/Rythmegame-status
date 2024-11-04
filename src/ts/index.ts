const button = document.getElementById("myButton") as HTMLButtonElement;
const messageElement = document.getElementById("message") as HTMLParagraphElement;

// ボタンがクリックされたときの処理
button.addEventListener("click", () => {
    const message: string = "ボタンがクリックされました！";
    messageElement.textContent = message; // メッセージを表示
});