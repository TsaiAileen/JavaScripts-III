// import './style.css'

import { isNumber, mySort } from "./src/utils"

const list = []

const btn = document.querySelector('#add') // 只能選擇一個
// document.querySelectorAll()  可以選擇多個，返回值是 list

btn.addEventListener('click', () => {
  const input = document.querySelector('#myInput')
  const value = +input.value
  if (isNumber(value)) {
    list.push(value)
  }
  console.log(list);

   // 先清空
   input.value = ''
  // 創建一個新的、排好序的 list
  const orderList = mySort(list)
  list = [...orderList]
  const tbody = document.querySelector('tbody')
  tbody.innHTML = ''
  orderList.forEach((element, index) => {
    // 每次都創造一行
    const tr = document.createElement('tr')
    const th = document.createElement('th')

    // th 為頭，不讓它從 0 開始，所以後面 + 1
    th.textContent = index + 1
    const td = document.createElement('td')
    td.textContent = element
    tr.append(th,td)
    tbody.append(tr)
  })
})