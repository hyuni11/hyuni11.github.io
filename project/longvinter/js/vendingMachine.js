import Product from "./product.js";

const VendingMachines = {

    // 항구 자판기

    "sgt1":{
        color: "red",
        buy:[
            new Product("모닥불 키트", 20),
            new Product("연료", 150),
            new Product("보관함", 599),
            new Product("모듈식 캐비닛", 799),
            new Product("벽난로", 299),
            new Product("작업대", 2994),
            new Product("연구용 텐트", 699),
            new Product("석궁", 595),
            new Product("분수대", 3599),
            new Product("가로등", 1999),
            new Product("제작책", 60),
            new Product("요리책", 65),
            new Product("나무 의자", 1000),
            new Product("소파", 1039),
            new Product("어설픈 벤치", 599),
            new Product("마을 가로등", 5999),
            new Product("2*2 정원 타일", 150),
            new Product("정원 타일", 150),
            new Product("손질한 덤불", 500),
            new Product("정원 울타리 (흰색)", 299),
            new Product("정원 울타리 (민트)", 299),
            new Product("정원 울타리 (핑크)", 299),
            new Product("돌 울타리", 478),
            new Product("회색 페르시아 러그", 2000),
            new Product("파란색 러그", 5000),
            new Product("정원 화덕", 4999),
            new Product("허수아비", 1049),
            new Product("표지판", 399),
            new Product("휴대용 발전기", 7499),
            new Product("하얀색 둥근 기둥이 있는 사각 테이블", 599),
            new Product("초록색 꽃병", 89),
            new Product("급수대", 1078),
            new Product("계단 건축용 재료", 24)
        ]
        ,
        sell: []
    },
    "sgt2":{
        color: "green",
        buy: [],
        sell: [
            new Product("클라우드베리", 59),
            new Product("라즈베리", 29),
            new Product("블랙베리", 5),
            new Product("호박", 49),
            new Product("메제레움", 20),
            new Product("클라우드베리 씨앗", 299),
            new Product("라즈베리 씨앗", 99)
        ]
    },
    "sgt3":{
        color: "green",
        buy: [
            new Product("평평한 화분 상자", 2599),
            new Product("3*3 화분 상자", 2299)
        ],
        sell: [
            new Product("노루귀", 10),
            new Product("밀", 5),
            new Product("양귀비", 50)
        ]
    },
    "sgt4":{
        color: "blue",
        buy: [
            new Product("낚싯대", 59),
            new Product("석궁", 897),
            new Product("화살[5]", 297)
        ],
        sell: [
            new Product("농어", 30),
            new Product("강꼬치고기", 58),
            new Product("송어", 118),
            new Product("무지개 송어", 258),
            new Product("메가", 140),
            new Product("백어", 158),
            new Product("해덕대구", 60),
            new Product("대구", 150),
            new Product("연어", 100),
        ]
    },

    "tim":{
        color: "red",
        buy: [
            new Product("낚싯대", 59),
            new Product("탄약[100]", 2000),
            new Product("위성 통신기", 999),
            new Product("모닥불 키트", 10),
            new Product("모터", 498)
        ],
        sell: [
            new Product("클라우드베리", 30),
            new Product("라즈베리", 35),
            new Product("블랙베리", 10)
        ]
    },

    "sirola":{
        color: "red",
        buy: [
            new Product("탄약[100]", 1600),
            new Product("화살[5]", 297),
            new Product("탄약[50]", "수수께끼 가방"),
            new Product("전자 회로판", "수수께끼 가방"),
            new Product("금속 부품", "뇌조 깃털")
        ],
        sell: [
            new Product("뇌조 깃털", 129),
            new Product("아주 좋은 뇌조 깃털", 699),
            new Product("꿩 깃털", 59),
            new Product("아주 좋은 꿩 깃털", 499),
            new Product("사슴 뿔", 79),
            new Product("아주 좋은 사슴 뿔", 494)
        ]
    },

    "snow":{
        color: "blue",
        buy: [
            new Product("낚싯대", 59),
            new Product("모닥불 키트", 20)
        ],
        sell: [
            new Product("농어", 60),
            new Product("강꼬치고기", 116),
            new Product("송어", 236),
            new Product("무지개 송어", 516),
            new Product("백어", 316),
            new Product("노루귀", 10),
            new Product("밀", 5),
            new Product("메리골드", 3)
        ]
    },

    "kyrres1":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("연료", 150),
            new Product("보관함", 599),
            new Product("모듈식 캐비닛", 799),
            new Product("벽난로", 299),
            new Product("작업대", 2994),
            new Product("연구용 텐트", 699),
            new Product("석궁", 595),
            new Product("분수대", 3599),
            new Product("가로등", 1999),
            new Product("제작책", 60),
            new Product("요리책", 65),
            new Product("나무 의자", 1000),
            new Product("소파", 1039),
            new Product("어설픈 벤치", 599),
            new Product("마을 가로등", 5999),
            new Product("2*2 정원 타일", 150),
            new Product("정원 타일", 150),
            new Product("손질한 덤불", 500),
            new Product("정원 울타리 (흰색)", 299),
            new Product("정원 울타리 (민트)", 299),
            new Product("정원 울타리 (핑크)", 299),
            new Product("돌 울타리", 478),
            new Product("회색 페르시아 러그", 2000),
            new Product("파란색 러그", 5000),
            new Product("정원 화덕", 4999),
            new Product("허수아비", 1049),
            new Product("표지판", 399),
            new Product("휴대용 발전기", 7499),
            new Product("하얀색 둥근 기둥이 있는 사각 테이블", 599),
            new Product("초록색 꽃병", 89),
            new Product("급수대", 1078),
            new Product("계단 건축용 재료", 24)
        ],
        sell: []
    },
    "kyrres2":{
        color: "red",
        buy: [
            new Product("강철 개머리판", 534),
            new Product("나무 개머리판", 395)
        ],
        sell: [
            new Product("공작새 깃털", 450),
            new Product("아주 좋은 공작새 깃털", 900),
            new Product("큰 뇌조 깃털", 450),
            new Product("꿩 깃털", 59),
            new Product("뇌조 깃털", 129),
            new Product("사슴 뿔", 99),
            new Product("아주 좋은 사슴 뿔", 450),
        ]
    },
    "kyrres3":{
        color: "green",
        buy: [],
        sell: [
            new Product("클라우드베리", 59),
            new Product("라즈베리", 29),
            new Product("블랙베리", 5),
            new Product("호박", 49),
            new Product("메제레움", 20),
            new Product("클라우드베리 씨앗", 299),
            new Product("라즈베리 씨앗", 99)
        ]
    },
    "kyrres4":{
        color: "green",
        buy: [
            new Product("평평한 화분 상자", 2599),
            new Product("3*3 화분 상자", 2299)
        ],
        sell: [
            new Product("노루귀", 10),
            new Product("밀", 5),
            new Product("양귀비", 50)
        ]
    },

    "artur":{
        color: "blue",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("낚싯대", 59),
            new Product("보관함", 599),
            new Product("연구용 텐트", 699)
        ],
        sell: [
            new Product("농어", 30),
            new Product("강꼬치고기", 58),
            new Product("밀", 5),
            new Product("블랙베리", 5)
        ]
    },

    "filemon":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("낚싯대", 59),
            new Product("탄약[100]", 2000),
            new Product("위성 통신기", 999)
        ],
        sell: [
            new Product("클라우드베리", 30),
            new Product("라즈베리", 29),
            new Product("블랙베리", 8),
            new Product("나무", 0)
        ]
    },

    "diogo1":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("연료", 150),
            new Product("보관함", 599),
            new Product("모듈식 캐비닛", 799),
            new Product("벽난로", 299),
            new Product("작업대", 2994),
            new Product("연구용 텐트", 699),
            new Product("석궁", 595),
            new Product("분수대", 3599),
            new Product("가로등", 1999),
            new Product("제작책", 60),
            new Product("요리책", 65),
            new Product("나무 의자", 1000),
            new Product("소파", 1039),
            new Product("어설픈 벤치", 599),
            new Product("마을 가로등", 5999),
            new Product("2*2 정원 타일", 150),
            new Product("정원 타일", 150),
            new Product("손질한 덤불", 500),
            new Product("정원 울타리 (흰색)", 299),
            new Product("정원 울타리 (민트)", 299),
            new Product("정원 울타리 (핑크)", 299),
            new Product("돌 울타리", 478),
            new Product("회색 페르시아 러그", 2000),
            new Product("파란색 러그", 5000),
            new Product("정원 화덕", 4999),
            new Product("허수아비", 1049),
            new Product("표지판", 399),
            new Product("휴대용 발전기", 7499),
            new Product("하얀색 둥근 기둥이 있는 사각 테이블", 599),
            new Product("초록색 꽃병", 89),
            new Product("급수대", 1078),
            new Product("계단 건축용 재료", 24)
        ],
        sell: []
    },
    "diogo2":{
        color: "green",
        buy: [
            new Product("낚싯대", 59)
        ],
        sell: [
            new Product("아주 좋은 꿩 깃털", 749),
            new Product("꿩 깃털", 89),
            new Product("아주 좋은 공작새 깃털", 1800),
            new Product("공작새 깃털", 900),
            new Product("아주 좋은 큰 뇌조 깃털", 1800),
            new Product("큰 뇌조 깃털", 900)
        ]
    },

    "hemio":{
        color: "red",
        buy: [
            new Product("낚싯대", 59),
            new Product("모닥불 키트", 20)
        ],
        sell: [
            new Product("메리골드", 2),
            new Product("아네모네", 2),
            new Product("농어", 30),
            new Product("강꼬치고기", 58),
            new Product("송어", 118),
            new Product("무지개 송어", 258),
            new Product("백어", 316),
        ]
    },

    "heisala":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 60),
            new Product("빵", 90),
            new Product("에너지 드링크:순한맛", 0),
            new Product("위성 통신기", 999),
            new Product("제작책", 72),
            new Product("손도끼", 479)
        ],
        sell: [
            new Product("라즈베리", 29),
            new Product("블랙베리", 29),
            new Product("클라우드베리 씨앗", 0)
        ]
    },

    "koilot":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 60),
            new Product("빵", 90),
            new Product("에너지 드링크:순한맛", 0),
            new Product("위성 통신기", 999),
            new Product("제작책", 72),
            new Product("손도끼", 479)
        ],
        sell: [
            new Product("라즈베리", 29),
            new Product("블랙베리", 29),
            new Product("클라우드베리 씨앗", 0)
        ]
    },

    "padva":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 60),
            new Product("빵", 90),
            new Product("에너지 드링크:순한맛", 0),
            new Product("위성 통신기", 999),
            new Product("제작책", 72),
            new Product("손도끼", 479)
        ],
        sell: [
            new Product("라즈베리", 29),
            new Product("블랙베리", 29),
            new Product("클라우드베리 씨앗", 0)
        ]
    },

    "pix":{
        color: "white",
        buy: [
            new Product("금속 부품", "수수께끼 가방"),
            new Product("에너지 드링크:보통맛", "수수께끼 가방"),
            new Product("검은 연꽃", "수수께끼 가방"),
            new Product("산탄총 키트", "수수께끼 가방"),
            new Product("기관단총 키트", "수수께끼 가방"),
            new Product("핫팩", "수수께끼 가방")
        ],
        sell: []
    },

    // npcs + 자판기

    "Angel":{
        color: "npcs",
        buy: [
            new Product("농부모자", 1999),
            new Product("스프링쿨러", 3599),
            new Product("온실", 22799),
            new Product("자동 포탑 키트", 12000),
            new Product("3*3 화분 상자", 1150),
            new Product("호박 씨앗", 237),
            new Product("밀 씨앗", 57),
            new Product("사탕무 씨앗", 300)
        ],
        sell: [
            new Product("검은 연꽃", 200),
            new Product("노루귀", 20),
            new Product("사탕무", 30),
            new Product("블랙베리", 5),
            new Product("클라우드베리", 118)
        ]
    },
    "Angel's vm1":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("연료", 150),
            new Product("보관함", 599),
            new Product("평평한 화분 상자", 1300),
            new Product("허수아비", 449),
            new Product("모듈식 캐비닛", 799),
            new Product("벽난로", 299),
            new Product("작업대", 2994),
            new Product("연구용 텐트", 699),
            new Product("가로등", 1999),
            new Product("제작책", 60),
            new Product("요리책", 65),
            new Product("나무 의자", 1000),
            new Product("소파", 1039),
            new Product("어설픈 벤치", 599),
            new Product("마을 가로등", 5999),
            new Product("2*2 정원 타일", 150),
            new Product("정원 타일", 150),
            new Product("손질한 덤불", 500),
            new Product("정원 울타리 (흰색)", 299),
            new Product("정원 울타리 (민트)", 299),
            new Product("정원 울타리 (핑크)", 299),
            new Product("돌 울타리", 478),
            new Product("회색 페르시아 러그", 2000),
            new Product("파란색 러그", 5000),
            new Product("정원 화덕", 4999),
            new Product("표지판", 399),
            new Product("휴대용 발전기", 7499),
            new Product("하얀색 둥근 기둥이 있는 사각 테이블", 599),
            new Product("초록색 꽃병", 89)
        ],
        sell: []
    },
    "Angel's vm2":{
        color: "green",
        buy: [
            new Product("클라우드베리 씨앗", 299),
            new Product("라즈베리 씨앗", 99),
            new Product("블랙베리 씨앗", 19)
        ],
        sell: [
            new Product("빵", 117),
            new Product("블랙베리 잼", 63),
            new Product("블랙베리 잼", 63),
            new Product("살구버섯 스프", 150),
            new Product("케이크", 450),
            new Product("호박", 64)
        ]
    },

    "Filemon":{
        color: "npcs",
        buy: [
            new Product("사냥모자", 600),
            new Product("탄약 가방", 4200),
            new Product("반자동 권총", 719),
            new Product("아이템 분해기", 2158)
        ],
        sell: [
            new Product("아주 좋은 큰 뇌조 깃털", 1200),
            new Product("뇌조 깃털", 194),
            new Product("꿩 깃털", 89),
            new Product("큰 뇌조 깃털", 600),
            new Product("아주 좋은 사슴 뿔", 899)
        ]
    },
    "Filemon's vm":{
        color: "red",
        buy: [
            new Product("탄약[100]", 1600),
            new Product("탄약[50]", 1050),
            new Product("산탄총", 799),
            new Product("금속 부품", "뇌조 깃털")
        ],
        sell: [
            new Product("공작새 깃털", 600),
            new Product("아주 좋은 공작새 깃털", 1200),
            new Product("뇌조 깃털", 129),
            new Product("아주 좋은 뇌조 깃털", 699),
            new Product("꿩 깃털", 59),
            new Product("아주 좋은 꿩 깃털", 499),
            new Product("사슴 뿔", 99),
            new Product("아주 좋은 사슴 뿔", 450),
        ]
    },

    "Lake":{
        color: "npcs",
        buy: [
            new Product("어부모자", 1999),
            new Product("기상 관측소", 7199),
            new Product("큰 구명보트", 4799),
            new Product("지렁이 팩", 250),
            new Product("행운의 낚싯대", 699)
        ],
        sell: [
            new Product("잿빛 참바리", 4000),
            new Product("악상어", 3000),
            new Product("황새치", 1998),
            new Product("무지개 송어", 258),
            new Product("북극 곤들메기", 2000),
            new Product("가오리", 998),
            new Product("메기", 210)
        ]
    },
    "Lake's vm1":{
        color: "red",
        buy: [
            new Product("모닥불 키트", 20),
            new Product("연료", 150),
            new Product("지도", 49),
            new Product("폴리머", 498),
            new Product("작은 구명보트", 1999),
            new Product("블루베리 팩", 49),
            new Product("텔레스코픽 릴 낚싯대", 525),
            new Product("가로등", 1999),
            new Product("제작책", 60),
            new Product("요리책", 65),
            new Product("나무 의자", 1000),
            new Product("소파", 1039),
            new Product("어설픈 벤치", 599),
            new Product("마을 가로등", 5999),
            new Product("2*2 정원 타일", 150),
            new Product("정원 타일", 150),
            new Product("손질한 덤불", 500),
            new Product("정원 울타리 (흰색)", 299),
            new Product("정원 울타리 (민트)", 299),
            new Product("정원 울타리 (핑크)", 299),
            new Product("돌 울타리", 478),
            new Product("회색 페르시아 러그", 2000),
            new Product("파란색 러그", 5000),
            new Product("정원 화덕", 4999),
            new Product("허수아비", 1049),
            new Product("표지판", 399),
            new Product("휴대용 발전기", 7499),
            new Product("하얀색 둥근 기둥이 있는 사각 테이블", 599),
            new Product("초록색 꽃병", 89)
        ],
        sell: []
    },
    "Lake's vm2":{
        color: "blue",
        buy: [
            new Product("낚싯대", 59)
        ],
        sell: [
            new Product("농어", 45),
            new Product("강꼬치고기", 87),
            new Product("송어", 177),
            new Product("참치", 224),
            new Product("백어", 158),
            new Product("해덕대구", 60),
            new Product("대구", 150),
            new Product("연어", 100)
        ]
    },

    "Hermit":{
        color: "npcs",
        buy: [
            new Product("악상어", "수수께끼 가방"),
            new Product("검은 연꽃", "수수께끼 가방"),
            new Product("탄약[100]", "수수께끼 가방"),
            new Product("자동 샷건 키트", "수수께끼 가방"),
            new Product("휴대용 발전기", "수수께끼 가방"),
            new Product("미끼 낚싯대", "수수께끼 가방"),
            new Product("크리스마스 선물", "수수께끼 가방"),
            new Product("지도", "수수께끼 가방"),
            new Product("에너지 드링크:강한맛", "수수께끼 가방")
        ],
        sell: []
    }
}

export default VendingMachines;