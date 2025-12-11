// import "./css/index.css";
// import "./css/welcome.css";

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM Loaded!');
//   // ここに実行したい処理を書く
// });


// コンテンツページのHTMLを読み込む
for (const key of ['welcome', 'profile', 'nagasamai', 'wakegaku', 'cocorefix', 'minecraft']) {
  fetch(`page/${key}.html`)
  .then(res => res.text())
  .then(html => {
    const target = document.querySelector(`#${key}`);
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bodyContent = doc.body.innerHTML;
    target.innerHTML = bodyContent;
  });
}

// ハッシュがない場合は初期ページ用のハッシュを与える
if (!window.location.hash) {
  window.location.hash = 'welcome';
}

// サイドバー開閉処理
const menu = document.getElementById("menubar");
const openMenuBtn = document.getElementById("btn_open-menu");
const closeMenuBtn = document.getElementById("btn_close-menubar");
openMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});
window.addEventListener('hashchange', () => {
  const menu = document.getElementById("menubar");
  menu.classList.remove("open");
});

// サイドバーのフォーカス処理
// function refreshMenuItems() {
//   const items = document.querySelectorAll('.menu.active');
//   items.forEach(active => active.classList.remove('active'));
//   const target = document.querySelector(`a[href="${window.location.hash}"].menu`);
//   if (target) target.classList.add('active');
// }
// window.addEventListener('hashchange', () => {
//   refreshMenuItems();
// });

// タイトルを更新する
// function refreshTitles() {
//   const items = document.querySelectorAll('.title.active');
//   items.forEach(item => item.classList.remove('active'));
//   const hash = window.location.hash.replace(/^#/,'');
//   const target = document.querySelector(`.title.${hash}`);
//   if (target) target.classList.add('active');
// }
// window.addEventListener('hashchange', () => {
//   refreshTitles();
// });

// 初期処理
// refreshMenuItems();
// refreshTitles();
