/**
 * Midnight Navy Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이용성",
    nameEn: "Groom",
    father: "이보균",
    mother: "윤경희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "전다영",
    nameEn: "Bride",
    father: "전준현",
    mother: "강인선",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-27",
    time: "18:00",
    venue: "워커힐 모에기",
    hall: "식당 룸",
    address: "서울특별시 광진구 워커힐로 177 비스타워커힐 서울 1층",
    tel: "02-2022-0222"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 가족을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n 이제 같은 길을 함께 걸어가려 합니다.\n\n \
              저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "Our Story",
    content: "2020년 처음 만나\n 긴 시간 서로 아끼며 사랑을 키워왔습니다.\n\n \
              이제 서로의 가족에게\n 소중한 사람을 소개하고\n 새로운 시작을 함께 나누려 합니다.\n\n \
              편안한 마음으로 오셔서\n 즐거운 시간 보내 주세요."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/261929556",
    naver: "https://naver.me/x5GorXdz"
  },

  // ── 마음 전하실 곳 ──
  // accounts: {
  //   groom: [
  //     { role: "신랑", name: "홍길동", bank: "국민은행", number: "000-000-000000" },
  //     { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
  //     { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
  //   ],
  //   bride: [
  //     { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
  //     { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
  //     { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
  //   ]
  // },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼했어요",
    description: "저희의 결혼에 초대합니다."
  }
};
