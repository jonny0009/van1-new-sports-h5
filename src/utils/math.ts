// 加法函数(防丢精度)
export const accAdd = (arg1: any, arg2: any) => {
  let r1
  let r2
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  const m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}

// 减法函数(防丢精度)
export const accSubtr = (arg1: any, arg2: any) => {
  let r1
  let r2
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  const m = Math.pow(10, Math.max(r1, r2)) // 动态控制精度长度
  const n = r1 >= r2 ? r1 : r2
  return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n))
}

// 乘法函数(防丢精度)
export const accMul = (arg1: any, arg2: any) => {
  let m = 0
  const s1 = arg1.toString()
  const s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {
    // console.log(e)
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
    // console.log(e)
  }
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

// 除法函数(防丢精度)
export const accDiv = (arg1: any, arg2: any) => {
  let t1 = 0
  let t2 = 0
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {
    // console.log(e)
  }
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {
    // console.log(e)
  }
  const r1 = Number(arg1.toString().replace('.', ''))
  const r2 = Number(arg2.toString().replace('.', ''))
  return accMul(r1 / r2, Math.pow(10, t2 - t1))
}


// 金额截取保留2位小数点
export const moneyFormat = (money: any) => {
  money = money + ''
  //没有小数补齐这个0
  if (money.indexOf('.') == '-1') {
    money = money + '.00'
  } else {
    money = money + '0'
    //有小数截取前二位小数
    money = money.substring(0, money.indexOf('.') + 3)
  }
  return money
}
