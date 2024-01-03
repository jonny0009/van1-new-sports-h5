
export function arrayGetKey(array: any, key:any) {
  var tempArr:any = []
  var Data:any = []
  array.map((i:any) => {
    if (tempArr.indexOf(array[i][key]) === -1) {
      Data.push({
        key: array[i][key],
        dataInfo: [array[i]]
      })
      tempArr.push(array[i][key])
    } else {
      for (let j = 0; j < Data.length; j++) {
        if (Data[j][key] === array[i][key]) {
          Data[j].dataInfo.push(array[i])
          break
        }
      }
    }
  })
  return Data
}
