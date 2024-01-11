/* .js 파일 내부를 <script> 태그 내부라고 생각하면 됨 */

function externalFn(){
    alert("외부 파일에 작성된 externalFn() 함수 호출됨");
}

// button 클릭시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body");

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode(){
    body.style.color = "white";  // 글자색 흰색으로 변경
    body.style.backgroundColor = "black";
}

function lightMode(){
    body.style.color = "black";  // 글자색 흰색으로 변경
    body.style.backgroundColor = "white";
}







function act(){
    var memberId = document.getElementById('memberId').value;
    var result = document.getElementById('result');

    result.innerHTML = memberId;

    
}