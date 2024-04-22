export const createQueue = (wins: any) => {
  const list = []
  wins = wins.map((i: any) => {
    if (i >= 10) {
      return i % 10
    }
    return i
  })
  let last = -1
  for (let i = 0; i < wins.length; ++i) {
    let result = wins[i]
    if (result === 3) {
      result = 2
    }
    if (last === -1 || (last !== result && result !== 0)) {
      list.push({ n: result, i: 1 })
    } else if (last === result) {
      ++list[list.length - 1].i
    }
    if (last === -1 || result !== 0) {
      last = result
    }
  }
  return list
}
export const createZhuPanLu = (wins: any) => {
  const matrix: any[] = []
  const MAXY = 6
  let x = 0
  let y = 0
  for (let i = 0; i < wins.length; i++) {
    const target = wins[i]
    if (matrix[x] === void 0) {
      matrix[x] = []
    }
    if (matrix[x][y] === void 0) {
      matrix[x][y] = { picIndex: target }
      y++
    }
    if (y >= MAXY) {
      x++
      y = 0
    }
  }
  return matrix
}
export const daLuList = (wins: any) => {
  const daLuList = []
  let color = -1
  let line = -1
  let exLine = -1
  let count = 0
  let horizontal = false
  let lastX = -1
  let lastY = -1
  for (let index = 0; index < wins.length; ++index) {
    let result = wins[index]
    if (result >= 10) {
      result = result % 10
    }
    if (result === 3) {
      result = 2
    }
    if (color === -1 || (color !== result && result !== 0)) {
      line++
      exLine = line
      count = 0
      horizontal = false
      color = result
      if (daLuList.length <= line) {
        daLuList.push([0, 0, 0, 0, 0, 0])
      }
      daLuList[line][count++] = wins[index] * 1000
      lastX = line
      lastY = count - 1
      if (color === 0) {
        daLuList[line][0]++
      }
    } else if (result === 0) {
      daLuList[exLine][count - 1]++
      lastX = exLine
      lastY = count - 1
    } else if (horizontal || count === 6 || daLuList[line][count] !== 0) {
      horizontal = true
      exLine++
      if (count === 1) {
        line = exLine
      }
      if (daLuList.length <= exLine) {
        daLuList.push([0, 0, 0, 0, 0, 0])
      }
      daLuList[exLine][count - 1] = wins[index] * 1000
      lastX = exLine
      lastY = count - 1
    } else {
      daLuList[line][count++] = wins[index] * 1000
      lastX = line
      lastY = count - 1
    }
  }
  return daLuList
}
export const createDaLu = (wins: any = []) => {
  wins = wins.map((i: any) => {
    if (i % 10 === 0) {
      return 0
    }
    return i
  })
  const list = daLuList(wins)
  const matrix = list.map((i) => {
    return i.map((result) => {
      if (result === 0) {
        return void 0
      }
      return result
    })
  })
  return matrix
}

export const daLuIsFirstZores = (matrix: any) => {
  if (matrix.length < 2) {
    return false
  }
  const firstList = matrix[0] || []
  const firstItem = firstList[0]
  if (firstItem && firstItem < 1000) {
    return true
  }
  return false
}

export const createLu = (wins: any, interval: any) => {
  const winsQueue = createQueue(wins)
  const result = []
  let indexX = interval
  let indexY = 1
  let curC = 0
  if (winsQueue[0] !== undefined && winsQueue[0].n === 0) {
    indexX++
  }
  if (winsQueue[indexX] !== undefined && winsQueue[indexX].i <= 1) {
    indexX++
    indexY = 0
  }
  let indexLine = -1
  let exLine = -1
  let count = 0
  let horizontal = false
  for (; indexX < winsQueue.length; ++indexX) {
    for (; indexY < winsQueue[indexX].i; ++indexY) {
      let c = 0
      if (indexY === 0) {
        c = winsQueue[indexX - 1].i === winsQueue[indexX - 1 - interval].i ? 1 : 2
      } else {
        c = indexY === winsQueue[indexX - interval].i ? 2 : 1
      }
      if (curC !== c) {
        count = 1
        if (indexLine === result.length - 1) {
          result.push([c, 0, 0, 0, 0, 0])
          ++indexLine
        } else {
          result[++indexLine][0] = c
        }
        exLine = indexLine
        horizontal = false
        curC = c
      } else {
        if (horizontal || count === 6 || result[indexLine][count] !== 0) {
          horizontal = true
          ++exLine
          if (count === 1) {
            indexLine = exLine
          }
          if (result.length <= exLine) {
            result.push([0, 0, 0, 0, 0, 0])
          }
          result[exLine][count - 1] = c
        } else {
          result[exLine][count++] = c
        }
      }
    }
    indexY = 0
  }
  return result
}
