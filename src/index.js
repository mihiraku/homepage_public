// ハッシュがない場合は初期ページ用のハッシュを与える
if (!window.location.hash) {
  window.location.hash = 'welcome';
}

function loadHtml() {
  const hash = window.location.hash;
  if (hash) {
    const loadMarker = document.querySelector(`.content-wrapper${hash} > a.load-html`);
    if (loadMarker) {
      // const pageUrl = '.' + loadMarker.href.replace(location.origin, '');
      const pageUrl = loadMarker.href;
      fetch(pageUrl).then(res => res.text()).then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        if (loadMarker.parentNode) {
          loadMarker.parentNode.innerHTML = bodyContent;
          console.log(`loaded: ${pageUrl}`);
        }
      });
    }
  }
}
window.addEventListener('hashchange', () => { loadHtml(); });
loadHtml();

// サイドバー開閉処理
const menubar = document.getElementById("menubar");
const openMenuBtn = document.getElementById("btn_open-menu");
const closeMenuBtn = document.getElementById("btn_close-menubar");
openMenuBtn.addEventListener("click", () => {
  menubar.classList.toggle("open");
});
closeMenuBtn.addEventListener("click", () => {
  menubar.classList.remove("open");
});
window.addEventListener('hashchange', () => {
  const menu = document.getElementById("menubar");
  menubar.classList.remove("open");
});
