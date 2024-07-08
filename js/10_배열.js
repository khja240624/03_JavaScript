/** 배열 선언 및 기초 사용법 */
function check1(){

  // 배열 선언
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ['사과', '딸기', '바나나'];

  console.log(arr1, arr2, arr3, arr4);

  /* 배열명.length : 배열의 길이 */
  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  /* 배열의 각 요소 접근 방법(index 이용) */

  // 배열명[index] -> index번째 요소에 저장된 값을 반환
  console.log('arr4[0] : ', arr4[0]); // 사과
  console.log('arr4[1] : ', arr4[1]); // 딸기
  console.log('arr4[2] : ', arr4[2]); // 바나나
  console.log('arr4[3] : ', arr4[3]); // undefined


  // 배열명[index] = 값;  -> 해당 index번째 요소에 값 대입
  arr2[0] = 123;
  arr2[1] = '덥다';
  arr2[2] = true;
  // (JS 배열은 여러 자료형 저장 가능)

  console.log("arr2 : ", arr2);

  // ----------------------------------------

  /* JS 배열 특징 이용하기 */

  // 1. 길이 제한이 없다
  //  -> 원하는 만큼 배열 요소를 추가할 수 있다
  arr1[0] = '가나다';
  arr1[1] = '라마바';
  arr1[2] = '사아자';
  console.log("값이 대입된 arr1 : ", arr1);

  // 2. 원하는 index에 값을 마음대로 추가할 수 있다
  // -> 중간에 건너뛴 index 요소는 빈칸으로 처리됨
  arr1[5] = '중간에 건너뜀';
  console.log("arr1 확인 : ", arr1);
}


/** 배열 X for문 확인 1 */
function check2(){
  const weeks = ['월','화','수','목','금','토','일'];

  for(let i = 0 ; i < weeks.length ; i++){
    // 0부터 7미만(== 6이하) 까지 1씩 증가
    console.log(weeks[i]);
  }
}