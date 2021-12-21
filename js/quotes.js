const quotes = [
    {
        quote:  "조금만 더 자야지, 조금만 더 눈을 붙여야지, 조금만 더 일손을 쉬어야지! 하겠느냐? 그러면 가난이 부랑배처럼 들이닥치고 빈곤이 거지처럼 달려든다.",
        auther: "잠연 6:10-11"
    },
    {
        quote: "황금률은 없다는 것이 황금률이다.",
        auther: '조지 버나드 쇼'
    },
    {
        quote: "평화는 웃음으로 시작한다.",
        auther: '마더 테레사'
    },
    {
        quote: "어제에서 배우고 오늘에 살고 내일을 희망하라. 중요한 건 질문을 멈추지 않는 것이다.",
        auther: '알베르트 아인슈타인'
    },
    {
        quote: "아이들은 어른의 모습을 보고 배우지, 그의 말을 보고 배우지는 않는다.",
        auther: "카를 융"
    },
    {
        quote: "노동이 없다면 인생은 몽땅 썩어버린다.",
        auther: '알베르 카뮈'
    },
    {
        quote: "너가 할 수 있다고 믿는 것은 너가 반 이상이나 온 것이다.",
        auther: "시어도어 루스벨트"
    },
    {
        quote: "약한 사람은 불행이 닥치면 체념해 버리고 만다. 그러나 위대한 사람은 불행을 딛고 일어선다.",
        auther: "W. 어빙"
    },
    {
        quote: "가장 용기 있는 행위는 그래도 소리 높혀 자신을 생각하는 것이다.",
        auther: '코코 샤넬'
    },
    {
        quote: '네가 삶을 사랑하면 삶도 너를 사랑한다는 걸 나는 알았다.',
        auther: '아르투르 루빈스타인'
    },
]

const quote = document.querySelector('#quote span:first-child');
const auther = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
auther.innerText = todayQuote.auther;