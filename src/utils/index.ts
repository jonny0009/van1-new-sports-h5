export const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

const getQueryStringByName = function (name: string) {
  var result = location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'))
  if (result == null || result.length < 1) {
    return ''
  }
  return result[1]
}

const transformData = function (data: any) {
  const params = new FormData()
  for (const item in data) {
    params.append(item, data[item])
  }
  return params
}

export const countryList: Array<any> = [
  {
    'code': 'AD',
    'code2': 'AND',
    'en': 'Andorra',
    'cn': '安道尔',
    'mobileCode': '376',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AD.png',
    'bizType': null
  },
  {
    'code': 'US',
    'code2': 'USA',
    'en': 'United States of America',
    'cn': '美国',
    'mobileCode': '1',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AD.png',
    'bizType': null
  },
  {
    'code': 'AE',
    'code2': 'ARE',
    'en': 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    'cn': '阿联酋',
    'mobileCode': '971',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AE.png',
    'bizType': null
  },
  {
    'code': 'AF',
    'code2': 'AFG',
    'en': 'Afghanistan (‫افغانستان‬‎)',
    'cn': '阿富汗',
    'mobileCode': '93',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AF.png',
    'bizType': null
  },
  {
    'code': 'AG',
    'code2': 'ATG',
    'en': 'Antigua and Barbuda',
    'cn': '安提瓜和巴布达',
    'mobileCode': '1268',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AG.png',
    'bizType': null
  },
  {
    'code': 'AI',
    'code2': 'AIA',
    'en': 'Anguilla',
    'cn': '安圭拉',
    'mobileCode': '1264',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AI.png',
    'bizType': null
  },
  {
    'code': 'AL',
    'code2': 'ALB',
    'en': 'Albania (Shqipëri)',
    'cn': '阿尔巴尼亚',
    'mobileCode': '355',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AL.png',
    'bizType': null
  },
  {
    'code': 'AM',
    'code2': 'ARM',
    'en': 'Armenia (Հայաստան)',
    'cn': '亚美尼亚',
    'mobileCode': '374',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AM.png',
    'bizType': null
  },
  {
    'code': 'AO',
    'code2': 'AGO',
    'en': 'Angola',
    'cn': '安哥拉',
    'mobileCode': '244',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AO.png',
    'bizType': null
  },
  {
    'code': 'AQ',
    'code2': 'ATA',
    'en': 'Antarctica',
    'cn': '南极洲',
    'mobileCode': '672',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AQ.png',
    'bizType': null
  },
  {
    'code': 'AR',
    'code2': 'ARG',
    'en': 'Argentina',
    'cn': '阿根廷',
    'mobileCode': '54',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AR.png',
    'bizType': null
  },
  {
    'code': 'AT',
    'code2': 'AUT',
    'en': 'Austria (Österreich)',
    'cn': '奥地利',
    'mobileCode': '43',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AT.png',
    'bizType': null
  },
  {
    'code': 'AU',
    'code2': 'AUS',
    'en': 'Australia',
    'cn': '澳大利亚',
    'mobileCode': '61',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AU.png',
    'bizType': null
  },
  {
    'code': 'AW',
    'code2': 'ABW',
    'en': 'Aruba',
    'cn': '阿鲁巴',
    'mobileCode': '297',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AW.png',
    'bizType': null
  },
  {
    'code': 'AX',
    'code2': 'ALA',
    'en': 'Åland Islands',
    'cn': '奥兰群岛',
    'mobileCode': '35818',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AX.png',
    'bizType': null
  },
  {
    'code': 'AZ',
    'code2': 'AZE',
    'en': 'Azerbaijan (Azərbaycan)',
    'cn': '阿塞拜疆',
    'mobileCode': '994',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/AZ.png',
    'bizType': null
  },
  {
    'code': 'BA',
    'code2': 'BIH',
    'en': 'Bosnia and Herzegovina (Босна и Херцеговина)',
    'cn': '波黑',
    'mobileCode': '387',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BA.png',
    'bizType': null
  },
  {
    'code': 'BB',
    'code2': 'BRB',
    'en': 'Barbados',
    'cn': '巴巴多斯',
    'mobileCode': '1246',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BB.png',
    'bizType': null
  },
  {
    'code': 'BD',
    'code2': 'BGD',
    'en': 'Bangladesh (বাংলাদেশ)',
    'cn': '孟加拉',
    'mobileCode': '880',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BD.png',
    'bizType': null
  },
  {
    'code': 'BE',
    'code2': 'BEL',
    'en': 'Belgium (België)',
    'cn': '比利时',
    'mobileCode': '32',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BE.png',
    'bizType': null
  },
  {
    'code': 'BF',
    'code2': 'BFA',
    'en': 'Burkina Faso',
    'cn': '布基纳法索',
    'mobileCode': '226',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BF.png',
    'bizType': null
  },
  {
    'code': 'BG',
    'code2': 'BGR',
    'en': 'Bulgaria (България)',
    'cn': '保加利亚',
    'mobileCode': '359',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BG.png',
    'bizType': null
  },
  {
    'code': 'BH',
    'code2': 'BHR',
    'en': 'Bahrain (‫البحرين‬‎)',
    'cn': '巴林',
    'mobileCode': '973',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BH.png',
    'bizType': null
  },
  {
    'code': 'BI',
    'code2': 'BDI',
    'en': 'Burundi (Uburundi)',
    'cn': '布隆迪',
    'mobileCode': '257',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BI.png',
    'bizType': null
  },
  {
    'code': 'BJ',
    'code2': 'BEN',
    'en': 'Benin (Bénin)',
    'cn': '贝宁',
    'mobileCode': '229',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BJ.png',
    'bizType': null
  },
  // {
  //   'code': 'BL',
  //   'code2': 'BLM',
  //   'en': 'Saint Barthélemy',
  //   'cn': '圣巴泰勒米岛',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BL.png',
  //   'bizType': null
  // },
  {
    'code': 'BM',
    'code2': 'BMU',
    'en': 'Bermuda',
    'cn': '百慕大',
    'mobileCode': '1441',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BM.png',
    'bizType': null
  },
  {
    'code': 'BN',
    'code2': 'BRN',
    'en': 'Brunei',
    'cn': '文莱',
    'mobileCode': '673',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BN.png',
    'bizType': null
  },
  {
    'code': 'BO',
    'code2': 'BOL',
    'en': 'Bolivia',
    'cn': '玻利维亚',
    'mobileCode': '591',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BO.png',
    'bizType': null
  },
  {
    'code': 'BQ',
    'code2': 'BES',
    'en': 'Caribbean Netherlands',
    'cn': '荷兰加勒比区',
    'mobileCode': '5997',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BQ.png',
    'bizType': null
  },
  {
    'code': 'BR',
    'code2': 'BRA',
    'en': 'Brazil (Brasil)',
    'cn': '巴西',
    'mobileCode': '55',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BR.png',
    'bizType': null
  },
  {
    'code': 'BS',
    'code2': 'BHS',
    'en': 'Bahamas',
    'cn': '巴哈马',
    'mobileCode': '1242',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BS.png',
    'bizType': null
  },
  {
    'code': 'BT',
    'code2': 'BTN',
    'en': 'Bhutan (འབྲུག)',
    'cn': '不丹',
    'mobileCode': '975',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BT.png',
    'bizType': null
  },
  // {
  //   'code': 'BV',
  //   'code2': 'BVT',
  //   'en': 'Bouvet Island',
  //   'cn': '布韦岛',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BV.png',
  //   'bizType': null
  // },
  {
    'code': 'BW',
    'code2': 'BWA',
    'en': 'Botswana',
    'cn': '博茨瓦纳',
    'mobileCode': '267',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BW.png',
    'bizType': null
  },
  {
    'code': 'BY',
    'code2': 'BLR',
    'en': 'Belarus (Беларусь)',
    'cn': '白俄罗斯',
    'mobileCode': '375',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BY.png',
    'bizType': null
  },
  {
    'code': 'BZ',
    'code2': 'BLZ',
    'en': 'Belize',
    'cn': '伯利兹',
    'mobileCode': '501',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/BZ.png',
    'bizType': null
  },
  {
    'code': 'CA',
    'code2': 'CAN',
    'en': 'Canada',
    'cn': '加拿大',
    'mobileCode': '1',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CA.png',
    'bizType': null
  },
  {
    'code': 'CC',
    'code2': 'CCK',
    'en': 'Cocos (Keeling) Islands',
    'cn': '科科斯群岛',
    'mobileCode': '61',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CC.png',
    'bizType': null
  },
  {
    'code': 'CD',
    'code2': 'COD',
    'en': 'Congo (DRC) (Congo-Kinshasa)',
    'cn': '刚果（金）',
    'mobileCode': '243',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CD.png',
    'bizType': null
  },
  {
    'code': 'CF',
    'code2': 'CAF',
    'en': 'Central African Republic (République centrafricaine)',
    'cn': '中非',
    'mobileCode': '236',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CF.png',
    'bizType': null
  },
  {
    'code': 'CG',
    'code2': 'COG',
    'en': 'Congo (Republic) (Congo-Brazzaville)',
    'cn': '刚果（布）',
    'mobileCode': '242',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CG.png',
    'bizType': null
  },
  {
    'code': 'CH',
    'code2': 'CHE',
    'en': 'Switzerland (Schweiz)',
    'cn': '瑞士',
    'mobileCode': '41',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CH.png',
    'bizType': null
  },
  {
    'code': 'CI',
    'code2': 'CIV',
    'en': 'Côte d’Ivoire',
    'cn': '科特迪瓦',
    'mobileCode': '225',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CI.png',
    'bizType': null
  },
  {
    'code': 'CK',
    'code2': 'COK',
    'en': 'Cook Islands',
    'cn': '库克群岛',
    'mobileCode': '682',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CK.png',
    'bizType': null
  },
  {
    'code': 'CL',
    'code2': 'CHL',
    'en': 'Chile',
    'cn': '智利',
    'mobileCode': '56',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CL.png',
    'bizType': null
  },
  {
    'code': 'CM',
    'code2': 'CMR',
    'en': 'Cameroon (Cameroun)',
    'cn': '喀麦隆',
    'mobileCode': '237',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CM.png',
    'bizType': null
  },
  {
    'code': 'CN',
    'code2': 'CHN',
    'en': 'China (中国)',
    'cn': '中国',
    'mobileCode': '86',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CN.png',
    'bizType': null
  },
  {
    'code': 'CO',
    'code2': 'COL',
    'en': 'Colombia',
    'cn': '哥伦比亚',
    'mobileCode': '57',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CO.png',
    'bizType': null
  },
  {
    'code': 'CR',
    'code2': 'CRI',
    'en': 'Costa Rica',
    'cn': '哥斯达黎加',
    'mobileCode': '506',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CR.png',
    'bizType': null
  },
  {
    'code': 'CV',
    'code2': 'CPV',
    'en': 'Cape Verde (Kabu Verdi)',
    'cn': '佛得角',
    'mobileCode': '238',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CV.png',
    'bizType': null
  },
  {
    'code': 'CW',
    'code2': 'CUW',
    'en': 'Curaçao',
    'cn': '库拉索',
    'mobileCode': '5999',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CW.png',
    'bizType': null
  },
  {
    'code': 'CX',
    'code2': 'CXR',
    'en': 'Christmas Island',
    'cn': '圣诞岛',
    'mobileCode': '61',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CX.png',
    'bizType': null
  },
  {
    'code': 'CY',
    'code2': 'CYP',
    'en': 'Cyprus (Κύπρος)',
    'cn': '塞浦路斯',
    'mobileCode': '357',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CY.png',
    'bizType': null
  },
  {
    'code': 'CZ',
    'code2': 'CZE',
    'en': 'Czech Republic (Česká republika)',
    'cn': '捷克',
    'mobileCode': '420',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/CZ.png',
    'bizType': null
  },
  {
    'code': 'DE',
    'code2': 'DEU',
    'en': 'Germany (Deutschland)',
    'cn': '德国',
    'mobileCode': '49',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DE.png',
    'bizType': null
  },
  {
    'code': 'DJ',
    'code2': 'DJI',
    'en': 'Djibouti',
    'cn': '吉布提',
    'mobileCode': '253',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DJ.png',
    'bizType': null
  },
  {
    'code': 'DK',
    'code2': 'DNK',
    'en': 'Denmark (Danmark)',
    'cn': '丹麦',
    'mobileCode': '45',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DK.png',
    'bizType': null
  },
  {
    'code': 'DM',
    'code2': 'DMA',
    'en': 'Dominica',
    'cn': '多米尼克',
    'mobileCode': '1767',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DM.png',
    'bizType': null
  },
  {
    'code': 'DO',
    'code2': 'DOM',
    'en': 'Dominican Republic (República Dominicana)',
    'cn': '多米尼加',
    'mobileCode': '1809',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DO.png',
    'bizType': null
  },
  // {
  //   'code': 'DO1',
  //   'code2': 'DOM1',
  //   'en': 'Dominican Republic (República Dominicana)',
  //   'cn': '多米尼加',
  //   'mobileCode': '1829',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DO1.png',
  //   'bizType': null
  // },
  // {
  //   'code': 'DO2',
  //   'code2': 'DOM2',
  //   'en': 'Dominican Republic (República Dominicana)',
  //   'cn': '多米尼加',
  //   'mobileCode': '1849',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DO2.png',
  //   'bizType': null
  // },
  {
    'code': 'DZ',
    'code2': 'DZA',
    'en': 'Algeria (‫الجزائر‬‎)',
    'cn': '阿尔及利亚',
    'mobileCode': '213',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/DZ.png',
    'bizType': null
  },
  {
    'code': 'EC',
    'code2': 'ECU',
    'en': 'Ecuador',
    'cn': '厄瓜多尔',
    'mobileCode': '593',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/EC.png',
    'bizType': null
  },
  {
    'code': 'EE',
    'code2': 'EST',
    'en': 'Estonia (Eesti)',
    'cn': '爱沙尼亚',
    'mobileCode': '372',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/EE.png',
    'bizType': null
  },
  {
    'code': 'EG',
    'code2': 'EGY',
    'en': 'Egypt (‫مصر‬‎)',
    'cn': '埃及',
    'mobileCode': '20',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/EG.png',
    'bizType': null
  },
  // {
  //   'code': 'EH',
  //   'code2': 'ESH',
  //   'en': 'Western Sahara (‫الصحراء الغربية‬‎)',
  //   'cn': '西撒哈拉',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/EH.png',
  //   'bizType': null
  // },
  {
    'code': 'ER',
    'code2': 'ERI',
    'en': 'Eritrea',
    'cn': '厄立特里亚',
    'mobileCode': '291',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ER.png',
    'bizType': null
  },
  {
    'code': 'ES',
    'code2': 'ESP',
    'en': 'Spain (España)',
    'cn': '西班牙',
    'mobileCode': '34',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ES.png',
    'bizType': null
  },
  {
    'code': 'ET',
    'code2': 'ETH',
    'en': 'Ethiopia',
    'cn': '埃塞俄比亚',
    'mobileCode': '251',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ET.png',
    'bizType': null
  },
  {
    'code': 'FI',
    'code2': 'FIN',
    'en': 'Finland (Suomi)',
    'cn': '芬兰',
    'mobileCode': '358',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FI.png',
    'bizType': null
  },
  {
    'code': 'FJ',
    'code2': 'FJI',
    'en': 'Fiji',
    'cn': '斐济群岛',
    'mobileCode': '679',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FJ.png',
    'bizType': null
  },
  {
    'code': 'FK',
    'code2': 'FLK',
    'en': 'Falkland Islands (Islas Malvinas)',
    'cn': '马尔维纳斯群岛（福克兰）',
    'mobileCode': '500',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FK.png',
    'bizType': null
  },
  {
    'code': 'FM',
    'code2': 'FSM',
    'en': 'Micronesia',
    'cn': '密克罗尼西亚联邦',
    'mobileCode': '691',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FM.png',
    'bizType': null
  },
  {
    'code': 'FO',
    'code2': 'FRO',
    'en': 'Faroe Islands (Føroyar)',
    'cn': '法罗群岛',
    'mobileCode': '298',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FO.png',
    'bizType': null
  },
  {
    'code': 'FR',
    'code2': 'FRA',
    'en': 'France',
    'cn': '法国',
    'mobileCode': '33',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/FR.png',
    'bizType': null
  },
  {
    'code': 'GA',
    'code2': 'GAB',
    'en': 'Gabon',
    'cn': '加蓬',
    'mobileCode': '241',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GA.png',
    'bizType': null
  },
  {
    'code': 'GB',
    'code2': 'GBR',
    'en': 'United Kingdom',
    'cn': '英国',
    'mobileCode': '44',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GB.png',
    'bizType': null
  },
  {
    'code': 'GD',
    'code2': 'GRD',
    'en': 'Grenada',
    'cn': '格林纳达',
    'mobileCode': '1473',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GD.png',
    'bizType': null
  },
  {
    'code': 'GE',
    'code2': 'GEO',
    'en': 'Georgia (საქართველო)',
    'cn': '格鲁吉亚',
    'mobileCode': '995',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GE.png',
    'bizType': null
  },
  {
    'code': 'GF',
    'code2': 'GUF',
    'en': 'French Guiana (Guyane française)',
    'cn': '法属圭亚那',
    'mobileCode': '594',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GF.png',
    'bizType': null
  },
  {
    'code': 'GG',
    'code2': 'GGY',
    'en': 'Guernsey',
    'cn': '根西岛',
    'mobileCode': '44',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GG.png',
    'bizType': null
  },
  {
    'code': 'GH',
    'code2': 'GHA',
    'en': 'Ghana (Gaana)',
    'cn': '加纳',
    'mobileCode': '233',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GH.png',
    'bizType': null
  },
  {
    'code': 'GI',
    'code2': 'GIB',
    'en': 'Gibraltar',
    'cn': '直布罗陀',
    'mobileCode': '350',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GI.png',
    'bizType': null
  },
  {
    'code': 'GL',
    'code2': 'GRL',
    'en': 'Greenland (Kalaallit Nunaat)',
    'cn': '格陵兰',
    'mobileCode': '299',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GL.png',
    'bizType': null
  },
  {
    'code': 'GM',
    'code2': 'GMB',
    'en': 'Gambia',
    'cn': '冈比亚',
    'mobileCode': '220',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GM.png',
    'bizType': null
  },
  {
    'code': 'GN',
    'code2': 'GIN',
    'en': 'Guinea (Guinée)',
    'cn': '几内亚',
    'mobileCode': '224',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GN.png',
    'bizType': null
  },
  {
    'code': 'GP',
    'code2': 'GLP',
    'en': 'Guadeloupe',
    'cn': '瓜德罗普',
    'mobileCode': '590',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GP.png',
    'bizType': null
  },
  {
    'code': 'GQ',
    'code2': 'GNQ',
    'en': 'Equatorial Guinea (Guinea Ecuatorial)',
    'cn': '赤道几内亚',
    'mobileCode': '240',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GQ.png',
    'bizType': null
  },
  {
    'code': 'GR',
    'code2': 'GRC',
    'en': 'Greece (Ελλάδα)',
    'cn': '希腊',
    'mobileCode': '30',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GR.png',
    'bizType': null
  },
  {
    'code': 'GS',
    'code2': 'SGS',
    'en': 'South Georgia and the South Sandwich Islands',
    'cn': '南乔治亚岛和南桑威奇群岛',
    'mobileCode': '500',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GS.png',
    'bizType': null
  },
  {
    'code': 'GT',
    'code2': 'GTM',
    'en': 'Guatemala',
    'cn': '危地马拉',
    'mobileCode': '502',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GT.png',
    'bizType': null
  },
  {
    'code': 'GW',
    'code2': 'GNB',
    'en': 'Guinea-Bissau (Guiné Bissau)',
    'cn': '几内亚比绍',
    'mobileCode': '245',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GW.png',
    'bizType': null
  },
  {
    'code': 'GY',
    'code2': 'GUY',
    'en': 'Guyana',
    'cn': '圭亚那',
    'mobileCode': '592',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/GY.png',
    'bizType': null
  },
  {
    'code': 'HK',
    'code2': 'HKG',
    'en': 'Hong Kong (香港)',
    'cn': '香港',
    'mobileCode': '852',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HK.png',
    'bizType': null
  },
  // {
  //   'code': 'HM',
  //   'code2': 'HMD',
  //   'en': 'Heard Island and McDonald Islands',
  //   'cn': '赫德岛和麦克唐纳群岛',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HM.png',
  //   'bizType': null
  // },
  {
    'code': 'HN',
    'code2': 'HND',
    'en': 'Honduras',
    'cn': '洪都拉斯',
    'mobileCode': '504',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HN.png',
    'bizType': null
  },
  {
    'code': 'HR',
    'code2': 'HRV',
    'en': 'Croatia (Hrvatska)',
    'cn': '克罗地亚',
    'mobileCode': '385',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HR.png',
    'bizType': null
  },
  {
    'code': 'HT',
    'code2': 'HTI',
    'en': 'Haiti',
    'cn': '海地',
    'mobileCode': '509',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HT.png',
    'bizType': null
  },
  {
    'code': 'HU',
    'code2': 'HUN',
    'en': 'Hungary (Magyarország)',
    'cn': '匈牙利',
    'mobileCode': '36',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/HU.png',
    'bizType': null
  },
  {
    'code': 'ID',
    'code2': 'IDN',
    'en': 'Indonesia',
    'cn': '印尼',
    'mobileCode': '62',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ID.png',
    'bizType': null
  },
  {
    'code': 'IE',
    'code2': 'IRL',
    'en': 'Ireland',
    'cn': '爱尔兰',
    'mobileCode': '353',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IE.png',
    'bizType': null
  },
  {
    'code': 'IL',
    'code2': 'ISR',
    'en': 'Israel (‫ישראל‬‎)',
    'cn': '以色列',
    'mobileCode': '972',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IL.png',
    'bizType': null
  },
  // {
  //   'code': 'IM',
  //   'code2': 'IMN',
  //   'en': 'Isle of Man',
  //   'cn': '马恩岛',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IM.png',
  //   'bizType': null
  // },
  {
    'code': 'IN',
    'code2': 'IND',
    'en': 'India (भारत)',
    'cn': '印度',
    'mobileCode': '91',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IN.png',
    'bizType': null
  },
  {
    'code': 'IO',
    'code2': 'IOT',
    'en': 'British Indian Ocean Territory',
    'cn': '英属印度洋领地',
    'mobileCode': '246',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IO.png',
    'bizType': null
  },
  {
    'code': 'IQ',
    'code2': 'IRQ',
    'en': 'Iraq (‫العراق‬‎)',
    'cn': '伊拉克',
    'mobileCode': '964',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IQ.png',
    'bizType': null
  },
  {
    'code': 'IS',
    'code2': 'ISL',
    'en': 'Iceland (Ísland)',
    'cn': '冰岛',
    'mobileCode': '354',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IS.png',
    'bizType': null
  },
  {
    'code': 'IT',
    'code2': 'ITA',
    'en': 'Italy (Italia)',
    'cn': '意大利',
    'mobileCode': '39',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/IT.png',
    'bizType': null
  },
  {
    'code': 'JE',
    'code2': 'JEY',
    'en': 'Jersey',
    'cn': '泽西岛',
    'mobileCode': '44',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/JE.png',
    'bizType': null
  },
  {
    'code': 'JM',
    'code2': 'JAM',
    'en': 'Jamaica',
    'cn': '牙买加',
    'mobileCode': '1876',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/JM.png',
    'bizType': null
  },
  {
    'code': 'JO',
    'code2': 'JOR',
    'en': 'Jordan (‫الأردن‬‎)',
    'cn': '约旦',
    'mobileCode': '962',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/JO.png',
    'bizType': null
  },
  {
    'code': 'JP',
    'code2': 'JPN',
    'en': 'Japan (日本)',
    'cn': '日本',
    'mobileCode': '81',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/JP.png',
    'bizType': null
  },
  {
    'code': 'KE',
    'code2': 'KEN',
    'en': 'Kenya',
    'cn': '肯尼亚',
    'mobileCode': '254',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KE.png',
    'bizType': null
  },
  {
    'code': 'KG',
    'code2': 'KGZ',
    'en': 'Kyrgyzstan (Кыргызстан)',
    'cn': '吉尔吉斯斯坦',
    'mobileCode': '996',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KG.png',
    'bizType': null
  },
  {
    'code': 'KH',
    'code2': 'KHM',
    'en': 'Cambodia (កម្ពុជា)',
    'cn': '柬埔寨',
    'mobileCode': '855',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KH.png',
    'bizType': null
  },
  {
    'code': 'KI',
    'code2': 'KIR',
    'en': 'Kiribati',
    'cn': '基里巴斯',
    'mobileCode': '686',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KI.png',
    'bizType': null
  },
  {
    'code': 'KM',
    'code2': 'COM',
    'en': 'Comoros (‫جزر القمر‬‎)',
    'cn': '科摩罗',
    'mobileCode': '269',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KM.png',
    'bizType': null
  },
  {
    'code': 'KN',
    'code2': 'KNA',
    'en': 'Saint Kitts and Nevis',
    'cn': '圣基茨和尼维斯',
    'mobileCode': '1869',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KN.png',
    'bizType': null
  },
  {
    'code': 'KR',
    'code2': 'KOR',
    'en': 'South Korea (대한민국)',
    'cn': '韩国',
    'mobileCode': '82',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KR.png',
    'bizType': null
  },
  {
    'code': 'KW',
    'code2': 'KWT',
    'en': 'Kuwait (‫الكويت‬‎)',
    'cn': '科威特',
    'mobileCode': '965',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KW.png',
    'bizType': null
  },
  {
    'code': 'KY',
    'code2': 'CYM',
    'en': 'Cayman Islands',
    'cn': '开曼群岛',
    'mobileCode': '1345',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KY.png',
    'bizType': null
  },
  {
    'code': 'KZ',
    'code2': 'KAZ',
    'en': 'Kazakhstan (Казахстан)',
    'cn': '哈萨克斯坦',
    'mobileCode': '7',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/KZ.png',
    'bizType': null
  },
  {
    'code': 'LA',
    'code2': 'LAO',
    'en': 'Laos (ລາວ)',
    'cn': '老挝',
    'mobileCode': '856',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LA.png',
    'bizType': null
  },
  {
    'code': 'LB',
    'code2': 'LBN',
    'en': 'Lebanon (‫لبنان‬‎)',
    'cn': '黎巴嫩',
    'mobileCode': '961',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LB.png',
    'bizType': null
  },
  {
    'code': 'LC',
    'code2': 'LCA',
    'en': 'Saint Lucia',
    'cn': '圣卢西亚',
    'mobileCode': '1758',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LC.png',
    'bizType': null
  },
  {
    'code': 'LI',
    'code2': 'LIE',
    'en': 'Liechtenstein',
    'cn': '列支敦士登',
    'mobileCode': '423',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LI.png',
    'bizType': null
  },
  {
    'code': 'LK',
    'code2': 'LKA',
    'en': 'Sri Lanka (ශ්‍රී ලංකාව)',
    'cn': '斯里兰卡',
    'mobileCode': '94',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LK.png',
    'bizType': null
  },
  {
    'code': 'LR',
    'code2': 'LBR',
    'en': 'Liberia',
    'cn': '利比里亚',
    'mobileCode': '231',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LR.png',
    'bizType': null
  },
  {
    'code': 'LS',
    'code2': 'LSO',
    'en': 'Lesotho',
    'cn': '莱索托',
    'mobileCode': '266',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LS.png',
    'bizType': null
  },
  {
    'code': 'LT',
    'code2': 'LTU',
    'en': 'Lithuania (Lietuva)',
    'cn': '立陶宛',
    'mobileCode': '370',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LT.png',
    'bizType': null
  },
  {
    'code': 'LU',
    'code2': 'LUX',
    'en': 'Luxembourg',
    'cn': '卢森堡',
    'mobileCode': '352',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LU.png',
    'bizType': null
  },
  {
    'code': 'LV',
    'code2': 'LVA',
    'en': 'Latvia (Latvija)',
    'cn': '拉脱维亚',
    'mobileCode': '371',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LV.png',
    'bizType': null
  },
  {
    'code': 'LY',
    'code2': 'LBY',
    'en': 'Libya (‫ليبيا‬‎)',
    'cn': '利比亚',
    'mobileCode': '218',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/LY.png',
    'bizType': null
  },
  {
    'code': 'MA',
    'code2': 'MAR',
    'en': 'Morocco (‫المغرب‬‎)',
    'cn': '摩洛哥',
    'mobileCode': '212',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MA.png',
    'bizType': null
  },
  {
    'code': 'MC',
    'code2': 'MCO',
    'en': 'Monaco',
    'cn': '摩纳哥',
    'mobileCode': '377',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MC.png',
    'bizType': null
  },
  {
    'code': 'MD',
    'code2': 'MDA',
    'en': 'Moldova (Republica Moldova)',
    'cn': '摩尔多瓦',
    'mobileCode': '373',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MD.png',
    'bizType': null
  },
  {
    'code': 'ME',
    'code2': 'MNE',
    'en': 'Montenegro (Crna Gora)',
    'cn': '黑山',
    'mobileCode': '382',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ME.png',
    'bizType': null
  },
  {
    'code': 'MF',
    'code2': 'MAF',
    'en': 'Saint Martin (Saint-Martin (partie française))',
    'cn': '法属圣马丁',
    'mobileCode': '590',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MF.png',
    'bizType': null
  },
  {
    'code': 'MG',
    'code2': 'MDG',
    'en': 'Madagascar (Madagasikara)',
    'cn': '马达加斯加',
    'mobileCode': '261',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MG.png',
    'bizType': null
  },
  {
    'code': 'MH',
    'code2': 'MHL',
    'en': 'Marshall Islands',
    'cn': '马绍尔群岛',
    'mobileCode': '692',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MH.png',
    'bizType': null
  },
  {
    'code': 'MK',
    'code2': 'MKD',
    'en': 'Macedonia (FYROM) (Македонија)',
    'cn': '马其顿',
    'mobileCode': '389',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MK.png',
    'bizType': null
  },
  {
    'code': 'ML',
    'code2': 'MLI',
    'en': 'Mali',
    'cn': '马里',
    'mobileCode': '223',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ML.png',
    'bizType': null
  },
  {
    'code': 'MM',
    'code2': 'MMR',
    'en': 'Myanmar (Burma) (မြန်မာ)',
    'cn': '缅甸',
    'mobileCode': '95',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MM.png',
    'bizType': null
  },
  {
    'code': 'MN',
    'code2': 'MNG',
    'en': 'Mongolia (Монгол)',
    'cn': '蒙古国',
    'mobileCode': '976',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MN.png',
    'bizType': null
  },
  {
    'code': 'MO',
    'code2': 'MAC',
    'en': 'Macau (澳門)',
    'cn': '澳门',
    'mobileCode': '853',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MO.png',
    'bizType': null
  },
  {
    'code': 'MQ',
    'code2': 'MTQ',
    'en': 'Martinique',
    'cn': '马提尼克',
    'mobileCode': '596',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MQ.png',
    'bizType': null
  },
  {
    'code': 'MR',
    'code2': 'MRT',
    'en': 'Mauritania (‫موريتانيا‬‎)',
    'cn': '毛里塔尼亚',
    'mobileCode': '222',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MR.png',
    'bizType': null
  },
  {
    'code': 'MS',
    'code2': 'MSR',
    'en': 'Montserrat',
    'cn': '蒙塞拉特岛',
    'mobileCode': '1664',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MS.png',
    'bizType': null
  },
  {
    'code': 'MT',
    'code2': 'MLT',
    'en': 'Malta',
    'cn': '马耳他',
    'mobileCode': '356',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MT.png',
    'bizType': null
  },
  {
    'code': 'MU',
    'code2': 'MUS',
    'en': 'Mauritius (Moris)',
    'cn': '毛里求斯',
    'mobileCode': '230',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MU.png',
    'bizType': null
  },
  {
    'code': 'MV',
    'code2': 'MDV',
    'en': 'Maldives',
    'cn': '马尔代夫',
    'mobileCode': '960',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MV.png',
    'bizType': null
  },
  {
    'code': 'MW',
    'code2': 'MWI',
    'en': 'Malawi',
    'cn': '马拉维',
    'mobileCode': '265',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MW.png',
    'bizType': null
  },
  {
    'code': 'MX',
    'code2': 'MEX',
    'en': 'Mexico (México)',
    'cn': '墨西哥',
    'mobileCode': '52',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MX.png',
    'bizType': null
  },
  {
    'code': 'MY',
    'code2': 'MYS',
    'en': 'Malaysia',
    'cn': '马来西亚',
    'mobileCode': '60',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MY.png',
    'bizType': null
  },
  {
    'code': 'MZ',
    'code2': 'MOZ',
    'en': 'Mozambique (Moçambique)',
    'cn': '莫桑比克',
    'mobileCode': '258',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/MZ.png',
    'bizType': null
  },
  {
    'code': 'NA',
    'code2': 'NAM',
    'en': 'Namibia (Namibië)',
    'cn': '纳米比亚',
    'mobileCode': '264',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NA.png',
    'bizType': null
  },
  {
    'code': 'NC',
    'code2': 'NCL',
    'en': 'New Caledonia (Nouvelle-Calédonie)',
    'cn': '新喀里多尼亚',
    'mobileCode': '687',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NC.png',
    'bizType': null
  },
  {
    'code': 'NE',
    'code2': 'NER',
    'en': 'Niger (Nijar)',
    'cn': '尼日尔',
    'mobileCode': '227',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NE.png',
    'bizType': null
  },
  {
    'code': 'NF',
    'code2': 'NFK',
    'en': 'Norfolk Island',
    'cn': '诺福克岛',
    'mobileCode': '672',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NF.png',
    'bizType': null
  },
  {
    'code': 'NG',
    'code2': 'NGA',
    'en': 'Nigeria',
    'cn': '尼日利亚',
    'mobileCode': '234',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NG.png',
    'bizType': null
  },
  {
    'code': 'NI',
    'code2': 'NIC',
    'en': 'Nicaragua',
    'cn': '尼加拉瓜',
    'mobileCode': '505',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NI.png',
    'bizType': null
  },
  {
    'code': 'NL',
    'code2': 'NLD',
    'en': 'Netherlands (Nederland)',
    'cn': '荷兰',
    'mobileCode': '31',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NL.png',
    'bizType': null
  },
  {
    'code': 'NO',
    'code2': 'NOR',
    'en': 'Norway (Norge)',
    'cn': '挪威',
    'mobileCode': '47',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NO.png',
    'bizType': null
  },
  {
    'code': 'NP',
    'code2': 'NPL',
    'en': 'Nepal (नेपाल)',
    'cn': '尼泊尔',
    'mobileCode': '977',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NP.png',
    'bizType': null
  },
  {
    'code': 'NR',
    'code2': 'NRU',
    'en': 'Nauru',
    'cn': '瑙鲁',
    'mobileCode': '674',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NR.png',
    'bizType': null
  },
  {
    'code': 'NU',
    'code2': 'NIU',
    'en': 'Niue',
    'cn': '纽埃',
    'mobileCode': '683',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NU.png',
    'bizType': null
  },
  {
    'code': 'NZ',
    'code2': 'NZL',
    'en': 'New Zealand',
    'cn': '新西兰',
    'mobileCode': '64',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/NZ.png',
    'bizType': null
  },
  {
    'code': 'OM',
    'code2': 'OMN',
    'en': 'Oman (‫عُمان‬‎)',
    'cn': '阿曼',
    'mobileCode': '968',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/OM.png',
    'bizType': null
  },
  {
    'code': 'PA',
    'code2': 'PAN',
    'en': 'Panama (Panamá)',
    'cn': '巴拿马',
    'mobileCode': '507',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PA.png',
    'bizType': null
  },
  {
    'code': 'PE',
    'code2': 'PER',
    'en': 'Peru (Perú)',
    'cn': '秘鲁',
    'mobileCode': '51',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PE.png',
    'bizType': null
  },
  {
    'code': 'PF',
    'code2': 'PYF',
    'en': 'French Polynesia (Polynésie française)',
    'cn': '法属波利尼西亚',
    'mobileCode': '689',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PF.png',
    'bizType': null
  },
  {
    'code': 'PG',
    'code2': 'PNG',
    'en': 'Papua New Guinea',
    'cn': '巴布亚新几内亚',
    'mobileCode': '675',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PG.png',
    'bizType': null
  },
  {
    'code': 'PH',
    'code2': 'PHL',
    'en': 'Philippines',
    'cn': '菲律宾',
    'mobileCode': '63',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PH.png',
    'bizType': null
  },
  {
    'code': 'PK',
    'code2': 'PAK',
    'en': 'Pakistan (‫پاکستان‬‎)',
    'cn': '巴基斯坦',
    'mobileCode': '92',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PK.png',
    'bizType': null
  },
  {
    'code': 'PL',
    'code2': 'POL',
    'en': 'Poland (Polska)',
    'cn': '波兰',
    'mobileCode': '48',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PL.png',
    'bizType': null
  },
  {
    'code': 'PM',
    'code2': 'SPM',
    'en': 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    'cn': '圣皮埃尔和密克隆',
    'mobileCode': '508',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PM.png',
    'bizType': null
  },
  {
    'code': 'PN',
    'code2': 'PCN',
    'en': 'Pitcairn Islands',
    'cn': '皮特凯恩群岛',
    'mobileCode': '64',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PN.png',
    'bizType': null
  },
  {
    'code': 'PS',
    'code2': 'PSE',
    'en': 'Palestine (‫فلسطين‬‎)',
    'cn': '巴勒斯坦',
    'mobileCode': '970',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PS.png',
    'bizType': null
  },
  {
    'code': 'PT',
    'code2': 'PRT',
    'en': 'Portugal',
    'cn': '葡萄牙',
    'mobileCode': '351',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PT.png',
    'bizType': null
  },
  {
    'code': 'PW',
    'code2': 'PLW',
    'en': 'Palau',
    'cn': '帕劳',
    'mobileCode': '680',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PW.png',
    'bizType': null
  },
  {
    'code': 'PY',
    'code2': 'PRY',
    'en': 'Paraguay',
    'cn': '巴拉圭',
    'mobileCode': '595',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/PY.png',
    'bizType': null
  },
  {
    'code': 'QA',
    'code2': 'QAT',
    'en': 'Qatar (‫قطر‬‎)',
    'cn': '卡塔尔',
    'mobileCode': '974',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/QA.png',
    'bizType': null
  },
  {
    'code': 'RE',
    'code2': 'REU',
    'en': 'Réunion (La Réunion)',
    'cn': '留尼汪',
    'mobileCode': '262',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/RE.png',
    'bizType': null
  },
  {
    'code': 'RO',
    'code2': 'ROU',
    'en': 'Romania (România)',
    'cn': '罗马尼亚',
    'mobileCode': '40',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/RO.png',
    'bizType': null
  },
  {
    'code': 'RS',
    'code2': 'SRB',
    'en': 'Serbia (Србија)',
    'cn': '塞尔维亚',
    'mobileCode': '381',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/RS.png',
    'bizType': null
  },
  {
    'code': 'RU',
    'code2': 'RUS',
    'en': 'Russia (Россия)',
    'cn': '俄罗斯',
    'mobileCode': '7',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/RU.png',
    'bizType': null
  },
  {
    'code': 'RW',
    'code2': 'RWA',
    'en': 'Rwanda',
    'cn': '卢旺达',
    'mobileCode': '250',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/RW.png',
    'bizType': null
  },
  {
    'code': 'SA',
    'code2': 'SAU',
    'en': 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    'cn': '沙特阿拉伯',
    'mobileCode': '966',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SA.png',
    'bizType': null
  },
  {
    'code': 'SB',
    'code2': 'SLB',
    'en': 'Solomon Islands',
    'cn': '所罗门群岛',
    'mobileCode': '677',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SB.png',
    'bizType': null
  },
  {
    'code': 'SC',
    'code2': 'SYC',
    'en': 'Seychelles',
    'cn': '塞舌尔',
    'mobileCode': '248',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SC.png',
    'bizType': null
  },
  {
    'code': 'SD',
    'code2': 'SDN',
    'en': 'Sudan (‫السودان‬‎)',
    'cn': '苏丹',
    'mobileCode': '249',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SD.png',
    'bizType': null
  },
  {
    'code': 'SE',
    'code2': 'SWE',
    'en': 'Sweden (Sverige)',
    'cn': '瑞典',
    'mobileCode': '46',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SE.png',
    'bizType': null
  },
  {
    'code': 'SG',
    'code2': 'SGP',
    'en': 'Singapore',
    'cn': '新加坡',
    'mobileCode': '65',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SG.png',
    'bizType': null
  },
  {
    'code': 'SH',
    'code2': 'SHN',
    'en': 'Saint Helena',
    'cn': '圣赫勒拿',
    'mobileCode': '290',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SH.png',
    'bizType': null
  },
  {
    'code': 'SI',
    'code2': 'SVN',
    'en': 'Slovenia (Slovenija)',
    'cn': '斯洛文尼亚',
    'mobileCode': '386',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SI.png',
    'bizType': null
  },
  {
    'code': 'SJ',
    'code2': 'SJM',
    'en': 'Svalbard and Jan Mayen',
    'cn': '斯瓦尔巴群岛和扬马延岛',
    'mobileCode': '47',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SJ.png',
    'bizType': null
  },
  {
    'code': 'SK',
    'code2': 'SVK',
    'en': 'Slovakia (Slovensko)',
    'cn': '斯洛伐克',
    'mobileCode': '421',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SK.png',
    'bizType': null
  },
  {
    'code': 'SL',
    'code2': 'SLE',
    'en': 'Sierra Leone',
    'cn': '塞拉利昂',
    'mobileCode': '232',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SL.png',
    'bizType': null
  },
  {
    'code': 'SM',
    'code2': 'SMR',
    'en': 'San Marino',
    'cn': '圣马力诺',
    'mobileCode': '378',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SM.png',
    'bizType': null
  },
  {
    'code': 'SN',
    'code2': 'SEN',
    'en': 'Senegal (Sénégal)',
    'cn': '塞内加尔',
    'mobileCode': '221',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SN.png',
    'bizType': null
  },
  {
    'code': 'SO',
    'code2': 'SOM',
    'en': 'Somalia (Soomaaliya)',
    'cn': '索马里',
    'mobileCode': '252',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SO.png',
    'bizType': null
  },
  {
    'code': 'SR',
    'code2': 'SUR',
    'en': 'Suriname',
    'cn': '苏里南',
    'mobileCode': '597',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SR.png',
    'bizType': null
  },
  {
    'code': 'SS',
    'code2': 'SSD',
    'en': 'South Sudan (‫جنوب السودان‬‎)',
    'cn': '南苏丹',
    'mobileCode': '211',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SS.png',
    'bizType': null
  },
  {
    'code': 'ST',
    'code2': 'STP',
    'en': 'São Tomé and Príncipe (São Tomé e Príncipe)',
    'cn': '圣多美和普林西比',
    'mobileCode': '239',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ST.png',
    'bizType': null
  },
  {
    'code': 'SV',
    'code2': 'SLV',
    'en': 'El Salvador',
    'cn': '萨尔瓦多',
    'mobileCode': '503',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SV.png',
    'bizType': null
  },
  {
    'code': 'SX',
    'code2': 'SXM',
    'en': 'Sint Maarten',
    'cn': '荷属圣马丁',
    'mobileCode': '1721',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SX.png',
    'bizType': null
  },
  {
    'code': 'SZ',
    'code2': 'SWZ',
    'en': 'Swaziland',
    'cn': '斯威士兰',
    'mobileCode': '268',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/SZ.png',
    'bizType': null
  },
  {
    'code': 'TC',
    'code2': 'TCA',
    'en': 'Turks and Caicos Islands',
    'cn': '特克斯和凯科斯群岛',
    'mobileCode': '1649',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TC.png',
    'bizType': null
  },
  {
    'code': 'TD',
    'code2': 'TCD',
    'en': 'Chad (Tchad)',
    'cn': '乍得',
    'mobileCode': '235',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TD.png',
    'bizType': null
  },
  // {
  //   'code': 'TF',
  //   'code2': 'ATF',
  //   'en': 'French Southern Territories',
  //   'cn': '法属南部领地',
  //   'mobileCode': '',
  //   'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TF.png',
  //   'bizType': null
  // },
  {
    'code': 'TG',
    'code2': 'TGO',
    'en': 'Togo',
    'cn': '多哥',
    'mobileCode': '228',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TG.png',
    'bizType': null
  },
  {
    'code': 'TH',
    'code2': 'THA',
    'en': 'Thailand (ไทย)',
    'cn': '泰国',
    'mobileCode': '66',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TH.png',
    'bizType': null
  },
  {
    'code': 'TJ',
    'code2': 'TJK',
    'en': 'Tajikistan',
    'cn': '塔吉克斯坦',
    'mobileCode': '992',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TJ.png',
    'bizType': null
  },
  {
    'code': 'TK',
    'code2': 'TKL',
    'en': 'Tokelau',
    'cn': '托克劳',
    'mobileCode': '690',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TK.png',
    'bizType': null
  },
  {
    'code': 'TL',
    'code2': 'TLS',
    'en': 'Timor-Leste',
    'cn': '东帝汶',
    'mobileCode': '670',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TL.png',
    'bizType': null
  },
  {
    'code': 'TM',
    'code2': 'TKM',
    'en': 'Turkmenistan',
    'cn': '土库曼斯坦',
    'mobileCode': '993',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TM.png',
    'bizType': null
  },
  {
    'code': 'TN',
    'code2': 'TUN',
    'en': 'Tunisia (‫تونس‬‎)',
    'cn': '突尼斯',
    'mobileCode': '216',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TN.png',
    'bizType': null
  },
  {
    'code': 'TO',
    'code2': 'TON',
    'en': 'Tonga',
    'cn': '汤加',
    'mobileCode': '676',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TO.png',
    'bizType': null
  },
  {
    'code': 'TR',
    'code2': 'TUR',
    'en': 'Turkey (Türkiye)',
    'cn': '土耳其',
    'mobileCode': '90',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TR.png',
    'bizType': null
  },
  {
    'code': 'TT',
    'code2': 'TTO',
    'en': 'Trinidad and Tobago',
    'cn': '特立尼达和多巴哥',
    'mobileCode': '1868',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TT.png',
    'bizType': null
  },
  {
    'code': 'TV',
    'code2': 'TUV',
    'en': 'Tuvalu',
    'cn': '图瓦卢',
    'mobileCode': '688',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TV.png',
    'bizType': null
  },
  {
    'code': 'TW',
    'code2': 'TWN',
    'en': 'Taiwan (台灣)',
    'cn': '台湾',
    'mobileCode': '886',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TW.png',
    'bizType': null
  },
  {
    'code': 'TZ',
    'code2': 'TZA',
    'en': 'Tanzania',
    'cn': '坦桑尼亚',
    'mobileCode': '255',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/TZ.png',
    'bizType': null
  },
  {
    'code': 'UA',
    'code2': 'UKR',
    'en': 'Ukraine (Україна)',
    'cn': '乌克兰',
    'mobileCode': '380',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/UA.png',
    'bizType': null
  },
  {
    'code': 'UG',
    'code2': 'UGA',
    'en': 'Uganda',
    'cn': '乌干达',
    'mobileCode': '256',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/UG.png',
    'bizType': null
  },
  {
    'code': 'UY',
    'code2': 'URY',
    'en': 'Uruguay',
    'cn': '乌拉圭',
    'mobileCode': '598',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/UY.png',
    'bizType': null
  },
  {
    'code': 'UZ',
    'code2': 'UZB',
    'en': 'Uzbekistan (Oʻzbekiston)',
    'cn': '乌兹别克斯坦',
    'mobileCode': '998',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/UZ.png',
    'bizType': null
  },
  {
    'code': 'VA',
    'code2': 'VAT',
    'en': 'Vatican City (Città del Vaticano)',
    'cn': '梵蒂冈',
    'mobileCode': '379',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VA.png',
    'bizType': null
  },
  {
    'code': 'VC',
    'code2': 'VCT',
    'en': 'Saint Vincent and the Grenadines',
    'cn': '圣文森特和格林纳丁斯',
    'mobileCode': '1784',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VC.png',
    'bizType': null
  },
  {
    'code': 'VE',
    'code2': 'VEN',
    'en': 'Venezuela',
    'cn': '委内瑞拉',
    'mobileCode': '58',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VE.png',
    'bizType': null
  },
  {
    'code': 'VG',
    'code2': 'VGB',
    'en': 'British Virgin Islands',
    'cn': '英属维尔京群岛',
    'mobileCode': '1284',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VG.png',
    'bizType': null
  },
  {
    'code': 'VN',
    'code2': 'VNM',
    'en': 'Vietnam (Việt Nam)',
    'cn': '越南',
    'mobileCode': '84',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VN.png',
    'bizType': null
  },
  {
    'code': 'VU',
    'code2': 'VUT',
    'en': 'Vanuatu',
    'cn': '瓦努阿图',
    'mobileCode': '678',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/VU.png',
    'bizType': null
  },
  {
    'code': 'WF',
    'code2': 'WLF',
    'en': 'Wallis and Futuna (Wallis-et-Futuna)',
    'cn': '瓦利斯和富图纳',
    'mobileCode': '681',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/WF.png',
    'bizType': null
  },
  {
    'code': 'WS',
    'code2': 'WSM',
    'en': 'Samoa',
    'cn': '萨摩亚',
    'mobileCode': '685',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/WS.png',
    'bizType': null
  },
  {
    'code': 'XK',
    'code2': 'XKX',
    'en': 'Kosovo',
    'cn': '科索沃',
    'mobileCode': '383',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/XK.png',
    'bizType': null
  },
  {
    'code': 'YE',
    'code2': 'YEM',
    'en': 'Yemen (‫اليمن‬‎)',
    'cn': '也门',
    'mobileCode': '967',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/YE.png',
    'bizType': null
  },
  {
    'code': 'YT',
    'code2': 'MYT',
    'en': 'Mayotte',
    'cn': '马约特',
    'mobileCode': '262',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/YT.png',
    'bizType': null
  },
  {
    'code': 'ZA',
    'code2': 'ZAF',
    'en': 'South Africa',
    'cn': '南非',
    'mobileCode': '27',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ZA.png',
    'bizType': null
  },
  {
    'code': 'ZM',
    'code2': 'ZMB',
    'en': 'Zambia',
    'cn': '赞比亚',
    'mobileCode': '260',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ZM.png',
    'bizType': null
  },
  {
    'code': 'ZW',
    'code2': 'ZWE',
    'en': 'Zimbabwe',
    'cn': '津巴布韦',
    'mobileCode': '263',
    'countryImageUrl': 'https://bin.bnbstatic.com/image/countrylogo/ZW.png',
    'bizType': null
  }
]

export const getGoodLoadData = function (data: number) {
  if (data === 0) {
    return '否'
  } else if (data === 1) {
    return '长龙'
  } else if (data === 2) {
    return '单跳'
  } else if (data === 3) {
    return 'n房n厅'
  } else if (data === 4) {
    return '排排坐'
  } else if (data === 5) {
    return '斜坡路'
  } else if (data === 6) {
    return '双龙汇'
  } else if (data === 7) {
    return '上坡路'
  } else if (data === 8) {
    return '下坡路'
  } else if (data === 9) {
    return '排排连'
  } else if (data === 10) {
    return '逢庄连'
  } else if (data === 11) {
    return '逢闲连'
  } else if (data === 12) {
    return '逢庄跳'
  } else if (data === 13) {
    return '逢闲跳'
  } else if (data === 14) {
    return '隔连庄'
  } else if (data === 15) {
    return '隔连闲'
  } else if (data === 16) {
    return '双跳'
  }
  return '未知'
}

export const currencyList:Array<any> = ['CNY', 'USDT', 'VIR', 'THB', 'VNDK', 'EUR', 'KRW', 'JPY', 'TWD', 'INR', 'PHP', 'BRL', 'IDRK', 'MYR']

export const gameList:Array<any> = ['全部', '百家乐', '龙虎斗']

export const useTypeList:Array<any> = ['全部', '桌台方案', '用户方案']

export const languageList:Array<any> = ['中文简体', '中文繁体', '英文', '韩文', '越南语', '泰语', '日语', '葡萄牙语', '西班牙语', '印尼语']

export const subTypeList:Array<any> = ['全部', '区块桌', '极速桌', '咪牌桌', '多桌', '真人桌', '活动桌', '竖版桌', 'VIP桌']

const date = function (date: any, fmt = 'yyyy-MM-dd hh:mm:ss', number?: any) {
  if (date === null || typeof date === 'undefined' || date === '') {
    return null
  } else {
    // 时间要转成obj，否则报错
    date = new Date(date)
  }
  const day = number || 0
  var o: any = {
    'M+': new Date(date - 1000 * 60 * 60 * 24 * day).getMonth() + 1, // 月
    'd+': new Date(date - 1000 * 60 * 60 * 24 * day).getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */
const formatMoney = (number: any, decimals = 0, decPoint = '.', thousandsSep = ',') => {
  const num = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+num) ? 0 : +num
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint

  const toFixedFix = function (n:number, prec: number) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  const s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * 格式化数字
 * @param number
 * @param decimals
 */
const formatDecimals = (number: Number, decimals = 2) => {
  return formatMoney(number, decimals, '.', '')
}

export { getQueryStringByName, transformData, date, formatDecimals }
