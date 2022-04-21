# wanted_pre_onboarding
원티드 프리온보딩 코스

CSS Framework없이 직접 구현하려고 하니 생각대로 되지 않았다.
React.js, Styled Components만 사용해서 구현했다.

## Toggle.js
![Apr-20-2022 22-16-46](https://user-images.githubusercontent.com/40132591/164239273-6afba5bd-b87b-45f4-8af2-3185d661b3c5.gif)

버튼 애니메이션을 직접 구현하려고 하려고 시도 했으나 쉽지 않았다. 
아이디어는 버튼과 같은색, 같은 크기인 div 요소를 버튼 클릭시 스윗칭되는 키 쪽으로 이동하는 애니메이션을 넣는 것이었다.
허나 제대로 동작하지 않았다... 그래서 핵심 기능만 넣었다. 


## Tab.js
![탭 ](https://user-images.githubusercontent.com/40132591/164239491-6f407148-ca80-4ed2-811b-d92ee1c2f740.gif)

clickedTab이라는 이름으로 state 변수를 하나 만들었다. 기본 값은 첫번째 메뉴로 했다.
메뉴를 클릭하면 해당 메뉴에 들어있던 innerText를 clickedTab 변수 값으로 업데이트한다.
clicked Tab과 일치하는지 비교해서 일치하면 까맣색으로 글씨를 바꾸고, 일치하지 않으면 회색으로 처리하는 방법으로 구현했다.
슬라이드 애니메이션은 일단 구현하지 못했다. 

## Slider.js
![슬라이더](https://user-images.githubusercontent.com/40132591/164239635-ba1491b6-70a1-44cf-b159-b5965f93d4e7.gif)

input 속성을 가진 styled 변수를 선언하고 type을 range로 설정했다. value라는 state 변수를 선언했고 input range를 변경할때 onChange 이벤트 핸들러를 사용해서 
이벤트 target의 value가 바뀌면 value 상태 변수에 업데이트 되도록 만들어서 구현했다.
부가기능은 미구현이다.

## Input.js
![인풋](https://user-images.githubusercontent.com/40132591/164239791-a5097e01-7a7f-426c-9dcd-5b90b5753006.gif)

간단하게 input type을 email과 password로 설정해서 구현했다. 부가 기능은 구현하지 않았다.

## Dropdown.js
![선택](https://user-images.githubusercontent.com/40132591/164239999-98b2ce28-9df7-490b-96f3-d16a00cc89fa.gif)

select태그를 사용해서 간단하게 구현했다. 



