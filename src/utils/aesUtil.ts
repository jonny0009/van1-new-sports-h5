import CryptoJS from 'crypto-js'

// AES-128-CBC偏移量
export default {
  // 加密
  encrypt(word:any, keyStr:any) {
    keyStr = keyStr || 'absoietlj32fai12'
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
  },

  // 解密
  decrypt(word:any, keyStr:any) {
    keyStr = keyStr || 'absoietlj32fai12'
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  }
}
