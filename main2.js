console.log('hello world');

const app = document.getElementById('app')  //通過此拿到 dom節點
document.getElementsByClassName('')  //另一個方法


const div = document.createElement('div')

div.textContent = 'app2' //往 div 裡添加內容

function addUser() {

}

// 添加節點，如果要往裡面放東西就這樣寫
// app.innerHTML = `     
//   <div>app1</dev>
// `

app.appendChild(div)

const app2 = document.querySelector('#app')

const div2 = document.createElement('div')

div2.textContent = 'app3'

app2.appendChild(div2)

const input = document.querySelector('input')
input.value = '10'

const input2 = document.querySelector('#app>input')
input2.value = '20'

// 面向操作
function add(a,b){    //add(放參數)
  return a + b
}

input.value = add(1, 2)   // 把這裡的 value 放進上面那個 function


//============================================================

// 創造需要的值
const input3 = document.createElement('input')
const input4 = document.createElement('input')
const button = document.createElement('button')
const br = document.createElement('br')
const span = document.createElement('span')
button.textContent = 'Add'     // 裡面的值是 add
span.textContent = '0'         // 裡面的值是 0

// 添加到裡面去
app.appendChild(input3)
app.appendChild(input4)
app.appendChild(button)
app.appendChild(br)
app.appendChild(span)

// 可以使 button 運作
function newAdd(){
  console.log('New Add');
  let a = +input3.value
  let b = +input4.value
  // let a = +input3.value   雖然也可以直接放一個'+'，但沒辦法讓它自身判斷是否為數字
  // let b = +input4.value
  if (isNumber(a) && isNumber(b)){   // 如果前面是真，並且後面也是真
    const sub = a+b            // 變成數字後便可讓它們相加
    span.textContent = sub     // 讓 span 裡的內容等於 sub
  }
  else {
    span.textContent = ''
    if(!isNumber(a)){     // 如果 a 不是一個數，那就往下執行
      // span.textContent = 'a input error' 
      span.textContent += 'a ' 
    }
    if(!isNumber(b)){     // 如果 b 不是一個數，那就往下執行
      // span.textContent = 'b input error'
      span.textContent += 'b ' 
    }
    span.textContent += 'input error'
  }
}

// 創造一個 isNumber 來確認上面函數是不是數字
function isNumber(num){
  // if (+num === num){
  //   return true
  // }
  // else {
  //   return false
  // }

  // parseInt('123') = 123
  // parseInt('abc') = 'abc'
  // +'abc' = NaN
  return +num === num     // +num 前面有個 + 是強制轉化的意思
}

const isNumber2 = (num) => {
  return +num === num
}      // 通過第 69 行可以讓它運作

// 用箭頭函數 => 來指向需要的 function (監聽)
button.addEventListener('click', () => newAdd())  // 不加箭頭函 () => 數理論上也可運作，但有加箭頭函數會更準確抓到值
//============================================================

// let num = 0   // list 從 0 開始
// num = num + 1
// num += 1
// num ++

// num++    先使用後相加
// ++num    先相加後使用


// 後循環
// 創造一個變量 num = 0, 不能超過 10, 如果 num > 10, 那整個循環退出
for (let num = 0 ; num <= 10; num ++){
  const input = document.createElement('input')
  app.appendChild(input)
  // num++    // 也可以放在這
}

const list = ['name', 'age', 'email', 'address', 'profile']

console.time('0')      // 測試一下性能

for (let i = 0; i < list.length; i++){
  console.log(i, list[i]);
  if (list[i] === 'email'){    // 如果是 email
    break       // 就停止，return 也可以，但 return 是直接跳出去
  }
}

console.timeEnd('0');    // 測試一下性能

console.time('1')        // 測試一下性能
// forEach 一但使用，是不可以停止的
// list.forEach((element) => {}   只有一個元素的話是不需要多加()的
list.forEach(element => {
  console.log(element);
  if (element === 'email'){
    return       // 沒辦法停止
  }
})
console.timeEnd('1');     // 測試一下性能

console.time('2')         // 測試一下性能
list.forEach((element, index) => {
  console.log(index, element);
})
console.timeEnd('2')      // 測試一下性能

//======================================================

// list.some
// list.every

//======================================================

// class是一個類，一但之後 new 了一個新的 user 就代表開闢了一個新的空間給新的 user 使用
class User {
  name = ''
  age = 0
  money = 0

  // 還可以放方法
  // 可以放箭頭函數，且推薦使用箭頭函數
  login = () =>{     // 做一個可以 login的動作
    console.log(this.name, 'login');
  }

  saveMoney = (num) => {
    this.money += num
    console.log(`${this.name} money is: ${this.money}`);
  }

  checkMoney = () => {
    console.log(`${this.name} money is: ${this.money}`);
  }

  constructor(name) {     // 只能是普通函數，只有這一種寫法
    this.name = name      // 只要是實體，都要用 this
  }
}

// 創造一個新的 user
const Aileen = new User('Aileen')
console.log(Aileen);

const Ray = new User('Ray')      //上下兩個不相關
console.log(Ray);

Aileen.login()

Ray.saveMoney(200)
Ray.saveMoney(250)

Aileen.checkMoney()
Ray.checkMoney()

//=======================================================