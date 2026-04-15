# 서하 진로취업 컨설턴트 홈페이지

## 폴더 구조

```
career/
├── index.html              ← 메인 홈 (이미지 그리드 네비)
├── assets/
│   ├── style.css           ← 공통 스타일
│   ├── main.js             ← 공통 스크립트
│   └── images/             ← 사진 파일들 여기에 넣기
│       ├── about.jpg
│       ├── consulting.jpg
│       ├── lecture.jpg
│       ├── contact.jpg
│       └── gallery.jpg
├── pages/
│   ├── about.html          ← 소개 페이지
│   ├── consulting.html     ← 컨설팅 페이지
│   ├── lecture.html        ← 강의 페이지
│   └── contact.html        ← 문의 페이지
├── data/
│   └── content.json        ← 콘텐츠 데이터
├── admin/
│   └── index.html          ← 관리자 패널
└── README.md
```

## 사진 교체 방법

각 HTML 파일에서 아래 주석 처리된 부분의 주석을 제거하고 파일명을 맞추면 됩니다.

```html
<!-- <img src="../assets/images/about.jpg" alt="강사 소개"> -->
```
→ 주석 제거 후 사진 파일을 `assets/images/` 폴더에 업로드

## 홈페이지 주소

https://seohajobv.github.io/career
