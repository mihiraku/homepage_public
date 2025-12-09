// import "./css/index.css";
// import "./css/welcome.css";

// コンテンツページのHTMLを読み込む
for (const key of ['welcome', 'profile', 'koshihikari']) {
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
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
window.addEventListener('hashchange', () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("open");
});

// サイドバーのフォーカス処理
function refreshSidebarItems() {
  const items = document.querySelectorAll('.sidebar-item.active');
  items.forEach(active => active.classList.remove('active'));
  const target = document.querySelector(`a[href="${window.location.hash}"].sidebar-item`);
  if (target) target.classList.add('active');
}
window.addEventListener('hashchange', () => {
  refreshSidebarItems();
});

// 初期処理
refreshSidebarItems();
