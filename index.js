function isnumber(num) {
  return +num === num
}

function mySort(list){
  const flatList = list.flat(Infinity)

  // 篩選是否為真的數，如果不是數字就丟掉
  const filterList = flatList.filter(element => isNumber(element))

  // 數字重複也丟掉，然後 ...把它展開
  const setList = [... new Set(filterList)]

  return setList.sort((a, b) => a - b)
}

export {isNumber, mySort}