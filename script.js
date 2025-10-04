document.addEventListener('DOMContentLoaded', () => {

  // ⭐️ 1. 프로젝트 데이터를 관리하는 객체
  const projectData = {

    'dong': {
        number: 1,
      title: '동시대 유령들 contemporary ghosts',
      type: 'BOOK',
      year: '2025',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/cs1.png','/img/csc1.png','/img/csc2.png','/img/csc3.png','/img/csc4.png','/img/cs5.png','/img/cs4.jpeg'],
      text: `
        <p>
          <span class="kor">동시대 유령들</span> contemporary ghosts<br/>
          2025<br/><br/>

          BOOK<br/>
          90x90mm<br/>
          216p<br/><br/>

          <span class="kor">괴담에 나오는 귀신들은 정말 귀신일까? 도시 전설의 기원은 무엇일까? 사실은 소외된 유령 같은 사람들이 괴담의 주인공으로 만들어지는 것일지도 모른다. </br>
          동시대의 사회문제를 주제로 전 세계의 창작자들이 괴담을 쓴 프로젝트인 100 monogatari(the ghost project)의 텍스트를 이용해서 현대판 괴담집을 만들었다. 괴담이 손에서 손으로 퍼져나가기를 바라며…
          </br> </br>
          <a href="https://www.instagram.com/p/DHAPk8Tvuuk/?img_index=1" target="_blank"> ▶︎ <span class="kor hype">홍익대학교 시각디자인과 2025 SISO 한글꼴연구회 『네모 네모 네모 네모 네모 네모』 전시</span></a>
          </br></br>

          『네모 네모 네모 네모 네모 네모』</br>
          2025. 03. 03. 월요일부터</br>
2025. 03. 07. 금요일까지</br>
오전 10시부터 오후 6시까지</br>
홍익대학교 현대미술관 제 1관 문헌관 4층</br></br>

책은 하나의 네모일까? 책을 위에서 보면 하나의 네모, 책을 반 측면에서 보면 두 개의 네모, 책을 대각선으로 내려보면 세 개의 네모, 책을 펼쳐보면 네모 네모 네모 네모 네모 네모…. 책은 몇 개의 네모로 이루어져 있을까? 책이란 네모, 그 위에 네모, 그 위에 네모, 그 위에 네모, 그 위에 네모, 그 위에 네모. 또 그 옆에 네모. ■■■■■■ 안에만 들어간다면, 무엇이든 책이 될 수 있다. 한글꼴연구회는 책을 지칭하는 다른 관점의 이름을 선택했다. 책을 만들기 위해 선택하고 분류하고 정렬한 네모를 통해 우리가 모르고 있었던 책을 탐구한다.
<br/><br/>
          
        </p>
      `,
    },

    'jun': {
        number: 2,
      title: '한국 전통놀이 한마당',
      type: 'POSTER, BILLBOARD, FLAG',
      year: '2025',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/jun1.png','/img/jun2.png','/img/jun3.png','/img/jun4.png'],
      text: `
        <p>
          <span class="kor">한국 전통놀이 한마당 <br/>
          *개인작업</span></br>
          2025<br/><br/>

          POSTER<br/>
          BILLBOARD<br/>
          FLAG<br/><br/>

          <span class="kor">어린이 날에 열리는 가상의 행사 「한국 전통놀이 한마당」의 그래픽 작업. 전통이라는 주제를 현대적인 감각으로 재해석하여 기존의 이미지에서 벗어난 밝고 통통 튀는 느낌을 강조했다. 또한 전통적인 오방색에서 영감을 받은 다채로운 색상을 사용해 생동감을 더하고, 팽이와 윷을 변형한 그래픽을 활용했다. 어린이들에게 친근하게 다가가면서도 한국 전통의 아름다움을 새롭게 전달하고자 했다.
        </p>
      `,
    },

    'pot': {
        number: 3,
      title: '『Potluck』 리플렛',
      type: 'LEAFLET',
      year: '2025',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/pot1.png','/img/pot2.png','/img/pot3.png','/img/pot4.png'],
      text: `
        <p>
          <span class="kor">『Potluck』 리플렛</span> <br/>
          2025<br/><br/>

          LEAFLET<br/><br/>

          <span class="kor">포트럭이라는 전시의 컨셉에 맞춰 초대장처럼 구성했다. 리플렛을 열면 전시 참여자들의 이름과 작품설명이 보이는 형식이다.<br/><br/>

▶︎ 기업적디자인스튜디오(1) 과제전 『Potluck』
        </p>
      `,
    },

    'bok': {
        number: 4,
      title: '『복도는 복도다』 그래픽',
      type: 'POSTER, GRAPHIC',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/bok1.png','/img/bok2.png','/img/bok3.png'],
      text: `
        <p>
          <span class="kor">『복도는 복도다』 그래픽</span><br/>
          2024<br/><br/>

          POSTER<br/>
          A2<br/><br/>
          GRAPHIC<br/>
          STAIR<br/><br/>

          <span class="kor">
          다양한 용도로 변모하는 갤러리 '복도'의 성질을 교차라는 키워드로 풀어냈다. '복도'를 직관적으로 상징하는 길다란 육면체 뒤에, 미술원 갤러리의 설계도를 본 따 여러 개 겹친 그래픽을 배치했다. 또한 화살표를 통해 복도 안에서 전시되는 작품들이 교차되며 바깥까지 확장되는 이미지를 담았다.
          <br/><br/>
          
          <a href="https://www.instagram.com/p/DB8qc9PTNyZ/" target="_blank">  ▶︎ <span class="kor hype">《복도는 복도다》 전시</span></a><br/><br/>
          
          ▫️전시 제목 : 복도는 복도다<br/>
▫️전시 기간 : 2024년 11월 11일(월) – 2024년 11월 22일(금)<br/>
▫️전시 장소 : 한국예술종합학교 미술원 2층 강태희갤러리 (서울 성북구 화랑로 32길 146-37)<br/>
▫️기획 : 김채림 @cherrym_i , 김현빈 @hbeing.a , 박정민 @greemrockp<br/>
▫️참여작가 : 심온 @sim_on0208 , 이지오 @llulmu , 임수연 @suuuu_ya__ , 최연우 @chldusdn9 , 최지아 @zlor210 , 최지이 @im.zlol<br/>
▫️포스터, 계단 그래픽 디자인 : 강혜민 @minx3.3<br/><br/>

강태희 갤러리(복도 갤러리)에서 유동성의 공간인 복도는 갤러리가 되며 ‘머무르는 곳’으로 변한다. 그러나 누군가는 이 앞에 걸음을 멈추고, 또 다른 이는 그저 지나칠 뿐이다. 이처럼 ‘복도’는 미술원의 하얀 복도인 동시에 갤러리인 교차점에 위치하며, 쉽게 하나로 정의할 수 없는 모호함을 가진다. 우리는 일상적 공간과 특정 용도의 공간이 부딪치는 바로 여기에서 ‘복도 갤러리’라는 장소에 물음을 던지고자 한다. 각 예술을 구분하고 정의하는 것은 무엇인가? 우리 모두 고개를 갸웃거리지만, 어쩌면 그 열쇠는 ‘장소성’이 쥐고 있을지도 모른다.<br/><br/>

《복도는 복도다》 전시는 회화/설치, 영상매체/판화/사진/건축/디자인/기타로 구분되는 복도 갤러리 지원서 속 분야의 ‘기타’ 란에 주목하며, ‘기타’ 분야를 ‘복도’로 치환해 예술을 뒤섞고 교차시킨다. 즉, ‘미술’로 규정되기 보다 그 모든 모호성을 이용하는 ‘기타’로 존재하며 새로운 예술의 가능성을 실험하는 것이다. 기획자와 6개원의 존재들은 ‘복도’라는 장소성을 어떻게 해석할 것인가. 자신의 분야에 얽매이지 않고 예술을 어떻게 표현하고, 복도를 거니는 존재는 그에 어떻게 감응하고 ‘연결’의 경험과 감정을 인식할 수 있는가? 함께하며 ‘지나가기’를 수행하는 관객 또한 예술의 주체로서 참여하며 ‘복도’를 미술로, 음악으로, 무용으로, 연기로 또 새로운 예술로 끊임없이 새롭게 이해하고 고민해 주길 소망한다. 이를 통해 전시가 사유의 결과물을 제시하는 것이 아닌 사유의 진행형으로 펼쳐지길 바란다

우리가 마주한 예술적 고민을 ‘유동성의 공간’인 복도에 풀어놓아 모두에게 흐르고 또 끊임없는 물음표가 생겨나길 소망한다. 그리고 그 물음을 구하기에 앞서, 그 자체로 아름다울 모든 존재와 예술이 교차하는 예술의 패턴을 여기, 복도에 꺼내 놓았다.

         
        </p>
      `,
    },

    'ki': {
        number: 5,
      title: 'Kiddo 레터링',
      type: 'LETTERING',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/ki2.png'],
      text: `
        <p>
          <span class="kor">Kiddo 레터링 <br/>
          *개인작업</span><br/>
          2024<br/><br/>

          LETTERING<br/><br/>

          <span class="kor">김뜻돌 - Kiddo(기도) 가상 타이틀 레터링. 빛이 번지는 것처럼 가로획들을 길게 퍼뜨려서, 반짝이는 곡의 분위기와 시원한 기타톤을 표현했다. 의도하진 않았지만 레터링을 뒤집으면 빛을 안고 엎드려 기도하는 사람처럼 보이기도 한다. <br/><br/>

<a href="https://www.instagram.com/p/DD6ByykTqES/?img_index=3" target="_blank">  ▶︎ <span class="kor hype">한글꼴연구회 『레터링』 1호 참여</span></a>
          
          
        </p>
      `,
    },

    'str': {
        number: 6,
      title: '09 -14: 거리(뷰), 한국, 패션',
      type: 'BOOK',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/str1.png','/img/str2.png','/img/str3.png','/img/str4.png','/img/str5.png'],
      text: `
        <p>
          <span class="kor">09 -14: 거리(뷰), 한국, 패션</span> <br/>
          2024<br/><br/>

          BOOK<br/>
          A6<br/>
          40p<br/><br/>

          <span class="kor">'패션암흑기'라고 불리는 00-10년대 중 2009년부터 2014년까지의 한국 유행 패션을 스트리트뷰에서 찾아 아카이빙했다. 실제 사람들의 패션을 직접 가상으로 돌아다니며 관찰할 수 있는 적절한 리서치 방법이라고 생각해 스트리트뷰를 선택했다. 스트리트뷰의 '돌아다닌다'라는 특성을 반영해 거리를 다닐 때 들고 돌아다닐 수 있게끔 가방처럼 제본하고, 판형도 A6의 작은 사이즈로 제작했다.
          <br/><br/>
          패션 항목들에 기호를 붙이고, 함께 스타일링되거나 비슷한 아이템들을 하단에 표시했다.
          <br/><br/>

        </p>
      `,
    },

    'home-sweet-home-1': {
    number: 7,
      title: '즐거운 나의 집 home sweet home',
      type: 'BOOK, POSTER',
      year: '2023',
      // 이미지가 여러 개일 경우 배열로 추가
      images: ['/img/hsh2.png','/img/hsh1.png', '/img/hsh3.png','/img/hsh4.png','/img/hsh5.png', '/img/hsh6.png','/img/hsh7.png'], 
      text: `
        <p>
          <span class="kor">즐거운 나의 집</span> home sweet home<br/>
          2023<br/><br/>

          POSTER<br/>
          A3<br/><br/>

          BOOK<br/>
          A6<br/>
          104p<br/></br>

          <span class="kor">‘개발’이라는 개념에 의문을 가지고 주변에서 일어났던 두 가지 재개발 사건에 대해 다뤘다. 스트리트뷰 스크린샷을 사용해서 개발이 진행되는 모습을 시간 순으로 나열하고, 직접 방문해서 현재의 모습을 촬영한 사진들을 담았다. </br></br>

          <a href="https://www.instagram.com/p/C1Y47u9OzR3/" target="_blank"> ▶︎ <span class="kor hype">2023 실천단 겨울전시 『invisible (to) visible』</span></a>
        </p>
      `,
    },

    'tai': {
        number: 8,
      title: 'Taiji 레터링',
      type: 'LETTERING',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/tai.png','/img/tai2.png'],
      text: `
        <p>
          <span class="kor">Taiji 레터링 <br/>
          *개인작업</span><br/>
          2024<br/><br/>

          LETTERING<br/><br/>

          <span class="kor"><br/><br/>
        </p>
      `,
    },
    

    'new': {
        number: 9,
      title: '새헌법',
      type: 'BOOK',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/new2.png','/img/new4.png','/img/new3.png','/img/new1.png','/img/new5.jpg','/img/new6.jpg','/img/new7.jpg'],
      text: `
        <p>
          <span class="kor">새 헌법</span> <br/>
          2024<br/><br/>

          BOOK<br/>
          A5<br/>
          64p<br/><br/>

          <span class="kor">헌법의 틀린 맞춤법을 수정한 일종의 헌법 제11호. </br>
          헌법 제10호는 1987년에 개정되었다. 하지만 아직 맞춤법이 완전하지 않은 부분들이 더러 있다. 올바르지 않은 부분은 회색으로 표기하고 바로 위에 수정된 말은 검정으로 표기했다. 맞춤법이 갖춰진 새 헌법만을 읽고 싶다면 검정 부분만 눈으로 따라가면 되도록 한 것이다. 사용된 모든 맞춤법 수정은 ‘부산대 맞춤법/문법 검사기(https:// nara-speller.co.kr/speller/results)’에 따른 것이다. </br>
맞춤법을 수정한 개정 버전이라는 의미에서 표지에 도장처럼 제목을 겹쳐서 배치했다. 맞춤법이 어긋난 부분에는 점선으로 밑줄을 긋고 텍스트를 회색 처리하고, 위에 수정된 검정색 텍스트를 올렸다.
1부터 130까지 중복없이 숫자가 이어지는 조의 경우 왼쪽에 영역을 따로 두어서 찾고자 하는 조를 바로바로 찾을 수 있게 했고, 장은 서체의 변주로, 절과 관은 글자의 크기 및 위치로 위계를 주었다.
상철, 단면으로 제작하여 원하는 항목 찾기가 용이하도록 했다.
        </p>
      `,
    },

    'cat': {
        number: 10,
      title: '고양이를 부탁해 레터링',
      type: 'LETTERING',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/cat1.png'],
      text: `
        <p>
          <span class="kor">고양이를 부탁해 레터링 <br/>
          *개인작업</span><br/>
          2024<br/><br/>

          LETTERING<br/><br/>

          <span class="kor">영화 〈고양이를 부탁해〉의 가상 타이틀 레터링.<br/><br/>

          
        </p>
      `,
    },


     'cap': {
        number: 11,
      title: '자본주의 리얼리즘',
      type: 'BOOK COVER',
      year: '2024',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/cap1.png','/img/cap2.png'],
      text: `
        <p>
          <span class="kor">자본주의 리얼리즘 <br/>
          *개인작업</span></br>
          2024<br/><br/>

          BOOK COVER<br/><br/>

          <span class="kor">『자본주의 리얼리즘: 대안은 없는가』 - 마크 피셔<br/>
사회를 구조화하는 자신의 실체를 달콤하고 반짝이는 환상으로 가리고 있는 자본주의의 모습을 담았다. ‘자본주의 리얼리즘에 대항하는 한 가지 전략은 자본주의가 우리에게 제시하는 현실의 기저에 있는 실재(들)을 환기시키는 것이다.’ 이 책이 환상에 균열을 내서 구조화된 실재를 볼 수 있게 하는 역할을 한다는 의미에서, 시럽같은 껍데기에 구멍을 내서 책의 정보를 넣었다.<br/><br/>
        </p>
      `,
    },

    

    'ggol': {
        number: 12,
      title: '꼴라주 레터링',
      type: 'LETTERING',
      year: '2025',
      // 이미지가 하나일 경우에도 배열로 넣는 것이 일관성을 유지하기에 좋습니다.
      images: ['/img/ggol1.png'],
      text: `
        <p>
          <span class="kor">꼴라주 레터링</span> <br/>
          2025<br/><br/>

          LETTERING<br/><br/>

          <span class="kor">사각형 안에 꽉 들어차게 콜라주된 글자들을 상상했다.<br/><br/>

          <a href="https://www.instagram.com/p/DHH_RV8vpiE/?img_index=1" target="_blank"> ▶︎ <span class="kor hype">홍익대학교 시각디자인과 2025 SISO 한글꼴연구회 『네모 네모 네모 네모 네모 네모』 워크샵</span></a> <br/><br/>

          《네모 네모 네모 네모 네모 네모: ■■■연구회》<br/>

■■■연구회 안에는 무엇이든 들어갈 수 있다. 회원들이 자유롭게 상상한 ■■■연구회의 글자를 보자. ■■■연구회는 꼴과 어감이 비슷한 음절의 단어로 한글꼴연구회의 유쾌한 가능성을 보여준다.

        </p>
      `,
    },

    

    

    

    

    

    
    // 여기에 필요한 만큼 프로젝트를 추가하세요.
    // '프로젝트-이름': {
    //   title: '...',
    //   type: '...',
    //   year: '...',
    //   images: ['이미지1.png', '이미지2.png'],
    //   text: `...`,
    // },
  };

  // ⭐️ 2. HTML 요소를 선택
  // .list-one, .list-two 대신에 .list-item과 같은 하나의 클래스로 통일하는 것을 권장합니다.
  const listItems = document.querySelectorAll('.list-item');
  const contentArea = document.getElementById('wrap2-content-area');

  // ⭐️ 3. 콘텐츠를 업데이트하는 함수
  function updateContent(contentId) {
  const data = projectData[contentId];
  if (!data) {
    console.error('해당하는 콘텐츠 ID가 없습니다:', contentId);
    return;
  }

  const imageHTML = data.images.map(imageSrc => {
    return `<img class="project-img" src="${imageSrc}">`;
  }).join('');

  const contentArea = document.getElementById('wrap2-content-area');
  contentArea.innerHTML = `
    <div class="title">
      <span class="work-title">
        <span class="number">${data.number}</span> <span class="title-text"><span class="kor">${data.title}</span></span>
      </span>
      <span class="type">${data.type}</span>
      <span class="year">${data.year}</span>
    </div>
    <div class="content">
      <div class="img">
        ${imageHTML}
      </div>
      <div class="text">
        ${data.text}
      </div>
    </div>
  `;
}

  // ⭐️ 4. 각 리스트 항목에 클릭 이벤트 리스너 추가
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const contentId = item.dataset.contentId;
      updateContent(contentId);
    });
  });

  // ⭐️ 5. 페이지 로드 시 첫 번째 항목 내용 표시
  const initialContentId = Object.keys(projectData)[0];
  if (initialContentId) {
    updateContent(initialContentId);
  }
const toggleBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });


});
