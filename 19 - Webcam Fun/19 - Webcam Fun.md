## #19 - Webcam Fun

> - Webcam 의 유래?
> - webcam은 https 443포트나 localhost에서 사용가능?



예제소스 

browsersync 사용

- 설명 https://blog.outsider.ne.kr/1216

$npm install

$npm start

```shell

[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.25.39:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.25.39:3001
 --------------------------------------
[Browsersync] Serving files from: ./
[Browsersync] Watching files...
[Browsersync] Reloading Browsers...
[Browsersync] Reloading Browsers...
[Browsersync] Reloading Browsers... (buffered 4 events)
[Browsersync] Reloading Browsers... (buffered 2 events)

```



### 자바스크립트 기본 타입(primitive data type: 원시 타입, 기본형)

- 기본타입: 숫자, 문자열, 불린값, null, undefined, symbol
- 기본타입은 그 자체가 하나의 실제 값을 가진다.

```javascript
//숫자 타입
var intNumber = 77;
var floatNumber = 0.77;

//문자열타입
var message = 'Hello World!!';

//불린 타입
var flagVar = true;

//undefined 타입
var emptyVar;

//null 타입
var nullVar = null;

//symbol(new in ECMAScript 2015)
const symbol3 = Symbol('foo');
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol



### 객체

- 참조타입: 기본타입을 제외한 객체(array, obejct, function)다. 
- 이러한 객체의 모든 연산은 실제 값이 아닌 참조값으로 처리된다.

```javascript
//Object() 생성자 함수 이용
var person = new Object();
person.name = 'Jun Park';
person.age = 35;
person.contry = 'korea';

console.log(person.name);
console.log(person['contry']);


//객체 리터럴 방식 이용
var caculator = {
    num1:2,
    num2:5,
    add: function() {
        console.log(this.num1+this.num2);  
    }
}

var github = {
    id : 'miso360',
  	name : 'Jun Park',
  	url : '',
  	email : ''
}

console.log(github.id);
console.log(github['name']);


//객체 출력
var object;
for(object in github){
    console.log(object, github[object]);
}

//배열 생성 방법
var arrayObject1 = new Array(); //var arrayObject2 = new Array();
var arrayObject2 = ['t1', 't2', 't3']; //var arrayObject = [];

//배열 원소 추가 방법들
arrayObject2.color = 'blue;'
arrayObject2.push('t4');
arrayObject2[4] = 't5';

//배열 출력 방법들
console.log(arrayObject2);
console.dir(arrayObject2);

for(var object in arrayObject2){
    console.log(object, arrayObject2[object])
}

for(var i=0; i<arrayObject2.length; i++){
    console.log(i, arrayObject2[i]);
}
```





### 객체 복사

#### slice()

> slice() 메소드는 어떤 배열의 begin부터 end까지(end는 불포함)에 대한 shallow copy를 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



#### Object.assign()

> Object.assign() 메소드는 열거할 수 있는 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용됩니다. 그리고, 타겟 오브젝트가 반환될 것입니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



##### Array.prototype.concat()

> concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat



##### [...Object] //es6 new



##### JSON.parse()

> JSON.parse() 메소드는 JSON을 문자열로 파싱하며, 파싱된 값을 추가로 변환하기도 합니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse



##### JSON.stringify()

> JSON.stringify() 메소드(method)는 자바스크립트 값을 JSON 문자열로 변환하고, 리플레이서(replacer) 함수가 지정되어있을 때 선택적으로 바꾸거나, 리플레이서 배열이 지정되어있을 때 지정된 속성만 선택적으로 포함할 수 있다.**

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify