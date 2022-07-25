<h1 align='center'>리액트로 갓생살기</h1>

### 1. 리액트 홈페이지 클론코딩으로 리액트 기초 문법 익히기
https://reactjs.org/

---
<h1 align='left'>state</h1>
<p>
  <h3>사용법 : 자료형 [이름,변경함수] = useState(데이터);</h3>
  <h4>ex) let [num,renum] = useState(0);</h4>
</p>
<p>
  state는 데이터가 변경될 때 html를 자동으로 렌더링하기 때문에 즉각즉각 반영됨.<br>
  반면 일반 변수는 변경하면 즉각즉각 반영이 안됨.<br><br>
  따라서 변경이 자주 되지 않는 값은 하드코딩으로 데이터를 삽입하거나, 일반 변수를 사용하는 것이 바람직<br>
  state는 변경이 자주될만한 데이터를 담을 때 사용하는 것이 적절하다.
</p>

---
<h1 align='left'>Component</h1>
<p>
  <h3>사용법 <br>1. function 만들기<br>2. return()의 소괄호 안에다가 html작성하기<br>3. <함수명> <함수명/>쓰기</h3>
</p>
