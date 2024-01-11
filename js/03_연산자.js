// 변수 선언

// document(문서) : HTML문서(파일) 내에서
// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는

// -> HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다
const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");


/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn(){

  /* input요소.value : input 요소에 작성된 값 얻어오기  */
    const value1 = number1.value;
    const value2 = number2.value;

    console.log(value1, value2);

}

console.log("두 수의 합 : ", value1 + value2);

// -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
//   더했을 때 이어쓰기 되는 문제가 발생한다!!!

// [해결방법]
// 문자열 (string)을 숫자(number)로 변경하는 코드를 수행
// -> 데이터 파싱(data parsing) : 데이터의 종류를 바꿈

/* 숫자만 작성된 문자열("123")을
    진짜 숫자(123)로 바꾸는 방법!!
    ->   Number("123")  --> 123
*/

console.log("두 수의 합 : ", Number(value1) + Number(value2));


/* 두 수의 합을 
    아이디가 "calcResult"인 요소(result 변수) 의
    내부 글자(innerText, HTML 요소 내용)로 대입하기
*/
result.innerText = Number(value1) + Number(value2);

// plusFn 끝


/* 빼기 함수 */
function minusFn(){

// string으로 얻어온 값을 바로 number로 변환하여 변수에 대입
const value1 = Number(number1.value); 
const value2 = Number(number2.value); 

console.log("value1 : ", value1, typeof value1);
console.log("value2 : ", value2, typeof value2);

result.innerText = value1 - value2;
}

/* 곱하기 함수 */
function multiFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    
    result.innerText = value1 * value2;
}

  /* 나누기 함수 */
function divFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

result.innerText = value1 / value2;
}

/* 나머지 연산 함수 */
function modFn(){
/* 나머지 연산(%)은 나누기 계산 시 
    몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다*/

const value1 = Number(number1.value);
const value2 = Number(number2.value);

result.innerText = value1 % value2;
}


//---------------------------------
/**(응용) 입력 받은 3개의 수 합계 출력하기 */
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");


function totalFn(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);

    total.innerText = value1 + value2 + value3;
}



// --------------------------------------

// 문서 내에서 id가 "result2" 인 요소를 얻어와 result2 변수에 대입

const result2  = document.getElementsById("result2");

/** 1 증가 함수 */
function increase(){
    count++;

    result2.innerText = count;
}

/** 1 감소 함수 */
function decrease(){
    count--;
    result2.innerText = count;
}

/**전위, 후위 연산 확인하기 */

function check1(){
    // 함수 밖, 안은 구분되는 공간으로 생각하면 된다!
    // 밖에 작성한 변수 count,  안에 작성한 count는 서로 다른 변수(동명이인)
    let count = 100;

    // 전위 연산(++count, --count ) 확인
    console.log("++count : ", ++count); // 101
    console.log("++count : ", ++count); // 102
    console.log("++count : ", ++count); // 103
    console.log("--------------------");
    console.log("--count : ", --count); // 102
    console.log("--count : ", --count); // 101
    console.log("--count : ", --count); // 100



    
}