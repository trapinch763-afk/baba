/* ============================================================
   규칙을 밀어라 · Firebase 설정 파일
   이 파일 하나만 고치면 학생 화면(index.html)과
   교사용 대시보드(teacher.html)가 함께 바뀌어요.
   ============================================================ */
window.RP_FIREBASE = {

  // ① Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 보이는
  //    const firebaseConfig = { ... };  의 중괄호 안 내용을 여기에 붙여 넣으세요.
  const firebaseConfig = {
  apiKey: "AIzaSyDKCn33RzztOTscWn5dD3m4IXEBC_SCNQE",
  authDomain: "baba-is-baba.firebaseapp.com",
  projectId: "baba-is-baba",
  storageBucket: "baba-is-baba.firebasestorage.app",
  messagingSenderId: "1065988375533",
  appId: "1:1065988375533:web:441fa21a46f97e3b4c9de4"
};

  // ② 교사용 대시보드에 로그인할 구글 계정 (firestore.rules에도 똑같이 적어요)
  teachers: ["trapinch763@gmail.com"],

  // ③ 학생이 고를 반 이름 (빗금 / 은 쓰지 마세요)
  classes: ["1반", "2반", "3반", "4반", "5반"],

  // ④ 번호는 1번부터 몇 번까지
  maxNo: 28
};
