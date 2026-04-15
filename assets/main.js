/* ─────────────────────────────
   main.js  |  공통 스크립트
────────────────────────────── */

// 스크롤 시 네비게이션 그림자
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.page-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // 현재 페이지 메뉴 활성화
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
