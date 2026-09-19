// マスターデータ: 添付PDF「世界の国旗198の国と地域 一覧」に基づく198の国・地域。
// 一般的な国一覧サイトではなく、このPDFの日本語国名・2文字コード・地域分類をそのまま採用している。
//
// difficulty: その国・地域が出題プールに加わる最小難易度。
//   easy  … かんたんプールに含まれる（ふつう・むずかしいにも含まれる）
//   normal… ふつうプールから追加される（むずかしいにも含まれる）
//   hard  … むずかしいプールでのみ追加される
//   ※ マスターデータへの登録と「今の難易度で出題されるか」は別。難易度の調整は
//     このファイルの difficulty 値だけを変更すればよい。
//
// mapPlayable: 地図上でタップして回答できるか。
//   false の国・地域は面積が非常に小さい／領土が海上に散らばっているなどの理由で
//   スマートフォンでの正確なタップが難しいため、初期版ではクイズの出題対象からのみ
//   除外している（マスターデータ・国名一覧・コレクションには通常どおり含まれる）。
//   将来的には拡大表示や専用タップ領域を用意して mapPlayable: true にできる想定。
export const COUNTRIES = [
  { id: "AF", code: "AF", nameJa: "アフガニスタン", nameEn: "Afghanistan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "AM", code: "AM", nameJa: "アルメニア", nameEn: "Armenia", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "AZ", code: "AZ", nameJa: "アゼルバイジャン", nameEn: "Azerbaijan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "BH", code: "BH", nameJa: "バーレーン", nameEn: "Bahrain", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "BD", code: "BD", nameJa: "バングラデシュ", nameEn: "Bangladesh", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "BT", code: "BT", nameJa: "ブータン", nameEn: "Bhutan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "BN", code: "BN", nameJa: "ブルネイ", nameEn: "Brunei", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "KH", code: "KH", nameJa: "カンボジア", nameEn: "Cambodia", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "CN", code: "CN", nameJa: "中国", nameEn: "China", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "GE", code: "GE", nameJa: "ジョージア", nameEn: "Georgia", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "IN", code: "IN", nameJa: "インド", nameEn: "India", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "ID", code: "ID", nameJa: "インドネシア", nameEn: "Indonesia", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "IR", code: "IR", nameJa: "イラン", nameEn: "Iran", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "IQ", code: "IQ", nameJa: "イラク", nameEn: "Iraq", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "IL", code: "IL", nameJa: "イスラエル", nameEn: "Israel", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "JP", code: "JP", nameJa: "日本", nameEn: "Japan", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "JO", code: "JO", nameJa: "ヨルダン", nameEn: "Jordan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "KZ", code: "KZ", nameJa: "カザフスタン", nameEn: "Kazakhstan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "KP", code: "KP", nameJa: "北朝鮮", nameEn: "North Korea", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "KR", code: "KR", nameJa: "韓国", nameEn: "South Korea", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "KW", code: "KW", nameJa: "クウェート", nameEn: "Kuwait", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "KG", code: "KG", nameJa: "キルギス", nameEn: "Kyrgyzstan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "LA", code: "LA", nameJa: "ラオス", nameEn: "Laos", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "LB", code: "LB", nameJa: "レバノン", nameEn: "Lebanon", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "MY", code: "MY", nameJa: "マレーシア", nameEn: "Malaysia", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "MV", code: "MV", nameJa: "モルディブ", nameEn: "Maldives", region: "asia", difficulty: "hard", mapPlayable: false },
  { id: "MN", code: "MN", nameJa: "モンゴル", nameEn: "Mongolia", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "MM", code: "MM", nameJa: "ミャンマー(ビルマ)", nameEn: "Myanmar", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "NP", code: "NP", nameJa: "ネパール", nameEn: "Nepal", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "OM", code: "OM", nameJa: "オマーン", nameEn: "Oman", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "PK", code: "PK", nameJa: "パキスタン", nameEn: "Pakistan", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "PS", code: "PS", nameJa: "パレスチナ", nameEn: "Palestine", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "PH", code: "PH", nameJa: "フィリピン", nameEn: "Philippines", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "QA", code: "QA", nameJa: "カタール", nameEn: "Qatar", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "SA", code: "SA", nameJa: "サウジアラビア", nameEn: "Saudi Arabia", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "SG", code: "SG", nameJa: "シンガポール", nameEn: "Singapore", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "LK", code: "LK", nameJa: "スリランカ", nameEn: "Sri Lanka", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "SY", code: "SY", nameJa: "シリア", nameEn: "Syria", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "TW", code: "TW", nameJa: "台湾", nameEn: "Taiwan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "TJ", code: "TJ", nameJa: "タジキスタン", nameEn: "Tajikistan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "TH", code: "TH", nameJa: "タイ", nameEn: "Thailand", region: "asia", difficulty: "easy", mapPlayable: true },
  { id: "TL", code: "TL", nameJa: "東ティモール", nameEn: "Timor-Leste", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "TM", code: "TM", nameJa: "トルクメニスタン", nameEn: "Turkmenistan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "TR", code: "TR", nameJa: "トルコ", nameEn: "Turkiye", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "AE", code: "AE", nameJa: "アラブ首長国連邦", nameEn: "United Arab Emirates", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "UZ", code: "UZ", nameJa: "ウズベキスタン", nameEn: "Uzbekistan", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "VN", code: "VN", nameJa: "ベトナム", nameEn: "Vietnam", region: "asia", difficulty: "normal", mapPlayable: true },
  { id: "YE", code: "YE", nameJa: "イエメン", nameEn: "Yemen", region: "asia", difficulty: "hard", mapPlayable: true },
  { id: "AL", code: "AL", nameJa: "アルバニア", nameEn: "Albania", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "AD", code: "AD", nameJa: "アンドラ", nameEn: "Andorra", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "AT", code: "AT", nameJa: "オーストリア", nameEn: "Austria", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "BY", code: "BY", nameJa: "ベラルーシ", nameEn: "Belarus", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "BE", code: "BE", nameJa: "ベルギー", nameEn: "Belgium", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "BA", code: "BA", nameJa: "ボスニア・ヘルツェゴビナ", nameEn: "Bosnia and Herzegovina", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "BG", code: "BG", nameJa: "ブルガリア", nameEn: "Bulgaria", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "HR", code: "HR", nameJa: "クロアチア", nameEn: "Croatia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "CY", code: "CY", nameJa: "キプロス", nameEn: "Cyprus", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "CZ", code: "CZ", nameJa: "チェコ", nameEn: "Czechia", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "DK", code: "DK", nameJa: "デンマーク", nameEn: "Denmark", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "EE", code: "EE", nameJa: "エストニア", nameEn: "Estonia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "FI", code: "FI", nameJa: "フィンランド", nameEn: "Finland", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "FR", code: "FR", nameJa: "フランス", nameEn: "France", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "DE", code: "DE", nameJa: "ドイツ", nameEn: "Germany", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "GR", code: "GR", nameJa: "ギリシャ", nameEn: "Greece", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "VA", code: "VA", nameJa: "バチカン市国", nameEn: "Vatican City", region: "europe", difficulty: "hard", mapPlayable: false },
  { id: "HU", code: "HU", nameJa: "ハンガリー", nameEn: "Hungary", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "IS", code: "IS", nameJa: "アイスランド", nameEn: "Iceland", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "IE", code: "IE", nameJa: "アイルランド", nameEn: "Ireland", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "IT", code: "IT", nameJa: "イタリア", nameEn: "Italy", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "XK", code: "XK", nameJa: "コソボ", nameEn: "Kosovo", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "LV", code: "LV", nameJa: "ラトビア", nameEn: "Latvia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "LI", code: "LI", nameJa: "リヒテンシュタイン", nameEn: "Liechtenstein", region: "europe", difficulty: "hard", mapPlayable: false },
  { id: "LT", code: "LT", nameJa: "リトアニア", nameEn: "Lithuania", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "LU", code: "LU", nameJa: "ルクセンブルク", nameEn: "Luxembourg", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "MT", code: "MT", nameJa: "マルタ", nameEn: "Malta", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "MD", code: "MD", nameJa: "モルドバ", nameEn: "Moldova", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "MC", code: "MC", nameJa: "モナコ", nameEn: "Monaco", region: "europe", difficulty: "hard", mapPlayable: false },
  { id: "ME", code: "ME", nameJa: "モンテネグロ", nameEn: "Montenegro", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "NL", code: "NL", nameJa: "オランダ", nameEn: "Netherlands", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "MK", code: "MK", nameJa: "北マケドニア", nameEn: "North Macedonia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "NO", code: "NO", nameJa: "ノルウェー", nameEn: "Norway", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "PL", code: "PL", nameJa: "ポーランド", nameEn: "Poland", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "PT", code: "PT", nameJa: "ポルトガル", nameEn: "Portugal", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "RO", code: "RO", nameJa: "ルーマニア", nameEn: "Romania", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "RU", code: "RU", nameJa: "ロシア", nameEn: "Russia", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "SM", code: "SM", nameJa: "サンマリノ", nameEn: "San Marino", region: "europe", difficulty: "hard", mapPlayable: false },
  { id: "RS", code: "RS", nameJa: "セルビア", nameEn: "Serbia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "SK", code: "SK", nameJa: "スロバキア", nameEn: "Slovakia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "SI", code: "SI", nameJa: "スロベニア", nameEn: "Slovenia", region: "europe", difficulty: "hard", mapPlayable: true },
  { id: "ES", code: "ES", nameJa: "スペイン", nameEn: "Spain", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "SE", code: "SE", nameJa: "スウェーデン", nameEn: "Sweden", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "CH", code: "CH", nameJa: "スイス", nameEn: "Switzerland", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "UA", code: "UA", nameJa: "ウクライナ", nameEn: "Ukraine", region: "europe", difficulty: "normal", mapPlayable: true },
  { id: "GB", code: "GB", nameJa: "イギリス", nameEn: "United Kingdom", region: "europe", difficulty: "easy", mapPlayable: true },
  { id: "DZ", code: "DZ", nameJa: "アルジェリア", nameEn: "Algeria", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "AO", code: "AO", nameJa: "アンゴラ", nameEn: "Angola", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "BJ", code: "BJ", nameJa: "ベナン", nameEn: "Benin", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "BW", code: "BW", nameJa: "ボツワナ", nameEn: "Botswana", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "BF", code: "BF", nameJa: "ブルキナファソ", nameEn: "Burkina Faso", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "BI", code: "BI", nameJa: "ブルンジ", nameEn: "Burundi", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "CV", code: "CV", nameJa: "カーボベルデ", nameEn: "Cabo Verde", region: "africa", difficulty: "hard", mapPlayable: false },
  { id: "CM", code: "CM", nameJa: "カメルーン", nameEn: "Cameroon", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "CF", code: "CF", nameJa: "中央アフリカ共和国", nameEn: "Central African Republic", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "TD", code: "TD", nameJa: "チャド", nameEn: "Chad", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "KM", code: "KM", nameJa: "コモロ", nameEn: "Comoros", region: "africa", difficulty: "hard", mapPlayable: false },
  { id: "CG", code: "CG", nameJa: "コンゴ共和国(ブラザビル)", nameEn: "Republic of the Congo", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "CD", code: "CD", nameJa: "コンゴ民主共和国(キンシャサ)", nameEn: "Democratic Republic of the Congo", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "CI", code: "CI", nameJa: "コートジボワール", nameEn: "Cote d'Ivoire", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "DJ", code: "DJ", nameJa: "ジブチ", nameEn: "Djibouti", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "EG", code: "EG", nameJa: "エジプト", nameEn: "Egypt", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "GQ", code: "GQ", nameJa: "赤道ギニア", nameEn: "Equatorial Guinea", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ER", code: "ER", nameJa: "エリトリア", nameEn: "Eritrea", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "SZ", code: "SZ", nameJa: "エスワティニ", nameEn: "Eswatini", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ET", code: "ET", nameJa: "エチオピア", nameEn: "Ethiopia", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "GA", code: "GA", nameJa: "ガボン", nameEn: "Gabon", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "GM", code: "GM", nameJa: "ガンビア", nameEn: "Gambia", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "GH", code: "GH", nameJa: "ガーナ", nameEn: "Ghana", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "GN", code: "GN", nameJa: "ギニア", nameEn: "Guinea", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "GW", code: "GW", nameJa: "ギニアビサウ", nameEn: "Guinea-Bissau", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "KE", code: "KE", nameJa: "ケニア", nameEn: "Kenya", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "LS", code: "LS", nameJa: "レソト", nameEn: "Lesotho", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "LR", code: "LR", nameJa: "リベリア", nameEn: "Liberia", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "LY", code: "LY", nameJa: "リビア", nameEn: "Libya", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "MG", code: "MG", nameJa: "マダガスカル", nameEn: "Madagascar", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "MW", code: "MW", nameJa: "マラウイ", nameEn: "Malawi", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ML", code: "ML", nameJa: "マリ", nameEn: "Mali", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "MR", code: "MR", nameJa: "モーリタニア", nameEn: "Mauritania", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "MU", code: "MU", nameJa: "モーリシャス", nameEn: "Mauritius", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "MA", code: "MA", nameJa: "モロッコ", nameEn: "Morocco", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "MZ", code: "MZ", nameJa: "モザンビーク", nameEn: "Mozambique", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "NA", code: "NA", nameJa: "ナミビア", nameEn: "Namibia", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "NE", code: "NE", nameJa: "ニジェール", nameEn: "Niger", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "NG", code: "NG", nameJa: "ナイジェリア", nameEn: "Nigeria", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "RW", code: "RW", nameJa: "ルワンダ", nameEn: "Rwanda", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ST", code: "ST", nameJa: "サントメ・プリンシペ", nameEn: "Sao Tome and Principe", region: "africa", difficulty: "hard", mapPlayable: false },
  { id: "SN", code: "SN", nameJa: "セネガル", nameEn: "Senegal", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "SC", code: "SC", nameJa: "セーシェル", nameEn: "Seychelles", region: "africa", difficulty: "hard", mapPlayable: false },
  { id: "SL", code: "SL", nameJa: "シエラレオネ", nameEn: "Sierra Leone", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "SO", code: "SO", nameJa: "ソマリア", nameEn: "Somalia", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ZA", code: "ZA", nameJa: "南アフリカ", nameEn: "South Africa", region: "africa", difficulty: "easy", mapPlayable: true },
  { id: "SS", code: "SS", nameJa: "南スーダン", nameEn: "South Sudan", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "SD", code: "SD", nameJa: "スーダン", nameEn: "Sudan", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "TZ", code: "TZ", nameJa: "タンザニア", nameEn: "Tanzania", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "TG", code: "TG", nameJa: "トーゴ", nameEn: "Togo", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "TN", code: "TN", nameJa: "チュニジア", nameEn: "Tunisia", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "UG", code: "UG", nameJa: "ウガンダ", nameEn: "Uganda", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "ZM", code: "ZM", nameJa: "ザンビア", nameEn: "Zambia", region: "africa", difficulty: "hard", mapPlayable: true },
  { id: "ZW", code: "ZW", nameJa: "ジンバブエ", nameEn: "Zimbabwe", region: "africa", difficulty: "normal", mapPlayable: true },
  { id: "AG", code: "AG", nameJa: "アンティグア・バーブーダ", nameEn: "Antigua and Barbuda", region: "americas", difficulty: "hard", mapPlayable: false },
  { id: "AR", code: "AR", nameJa: "アルゼンチン", nameEn: "Argentina", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "BS", code: "BS", nameJa: "バハマ", nameEn: "Bahamas", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "BB", code: "BB", nameJa: "バルバドス", nameEn: "Barbados", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "BZ", code: "BZ", nameJa: "ベリーズ", nameEn: "Belize", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "BO", code: "BO", nameJa: "ボリビア", nameEn: "Bolivia", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "BR", code: "BR", nameJa: "ブラジル", nameEn: "Brazil", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "CA", code: "CA", nameJa: "カナダ", nameEn: "Canada", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "CL", code: "CL", nameJa: "チリ", nameEn: "Chile", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "CO", code: "CO", nameJa: "コロンビア", nameEn: "Colombia", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "CR", code: "CR", nameJa: "コスタリカ", nameEn: "Costa Rica", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "CU", code: "CU", nameJa: "キューバ", nameEn: "Cuba", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "DM", code: "DM", nameJa: "ドミニカ国", nameEn: "Dominica", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "DO", code: "DO", nameJa: "ドミニカ共和国", nameEn: "Dominican Republic", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "EC", code: "EC", nameJa: "エクアドル", nameEn: "Ecuador", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "SV", code: "SV", nameJa: "エルサルバドル", nameEn: "El Salvador", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "GD", code: "GD", nameJa: "グレナダ", nameEn: "Grenada", region: "americas", difficulty: "hard", mapPlayable: false },
  { id: "GT", code: "GT", nameJa: "グアテマラ", nameEn: "Guatemala", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "GY", code: "GY", nameJa: "ガイアナ", nameEn: "Guyana", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "HT", code: "HT", nameJa: "ハイチ", nameEn: "Haiti", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "HN", code: "HN", nameJa: "ホンジュラス", nameEn: "Honduras", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "JM", code: "JM", nameJa: "ジャマイカ", nameEn: "Jamaica", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "MX", code: "MX", nameJa: "メキシコ", nameEn: "Mexico", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "NI", code: "NI", nameJa: "ニカラグア", nameEn: "Nicaragua", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "PA", code: "PA", nameJa: "パナマ", nameEn: "Panama", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "PY", code: "PY", nameJa: "パラグアイ", nameEn: "Paraguay", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "PE", code: "PE", nameJa: "ペルー", nameEn: "Peru", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "PR", code: "PR", nameJa: "プエルトリコ", nameEn: "Puerto Rico", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "KN", code: "KN", nameJa: "セントクリストファー・ネーヴィス", nameEn: "Saint Kitts and Nevis", region: "americas", difficulty: "hard", mapPlayable: false },
  { id: "LC", code: "LC", nameJa: "セントルシア", nameEn: "Saint Lucia", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "VC", code: "VC", nameJa: "セントビンセント及びグレナディーン諸島", nameEn: "Saint Vincent and the Grenadines", region: "americas", difficulty: "hard", mapPlayable: false },
  { id: "SR", code: "SR", nameJa: "スリナム", nameEn: "Suriname", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "TT", code: "TT", nameJa: "トリニダード・トバゴ", nameEn: "Trinidad and Tobago", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "US", code: "US", nameJa: "アメリカ合衆国", nameEn: "United States of America", region: "americas", difficulty: "easy", mapPlayable: true },
  { id: "UY", code: "UY", nameJa: "ウルグアイ", nameEn: "Uruguay", region: "americas", difficulty: "hard", mapPlayable: true },
  { id: "VE", code: "VE", nameJa: "ベネズエラ", nameEn: "Venezuela", region: "americas", difficulty: "normal", mapPlayable: true },
  { id: "AU", code: "AU", nameJa: "オーストラリア", nameEn: "Australia", region: "oceania", difficulty: "easy", mapPlayable: true },
  { id: "FJ", code: "FJ", nameJa: "フィジー", nameEn: "Fiji", region: "oceania", difficulty: "easy", mapPlayable: true },
  { id: "KI", code: "KI", nameJa: "キリバス", nameEn: "Kiribati", region: "oceania", difficulty: "hard", mapPlayable: false },
  { id: "MH", code: "MH", nameJa: "マーシャル諸島", nameEn: "Marshall Islands", region: "oceania", difficulty: "hard", mapPlayable: false },
  { id: "FM", code: "FM", nameJa: "ミクロネシア連邦", nameEn: "Micronesia", region: "oceania", difficulty: "hard", mapPlayable: false },
  { id: "NR", code: "NR", nameJa: "ナウル", nameEn: "Nauru", region: "oceania", difficulty: "hard", mapPlayable: false },
  { id: "NZ", code: "NZ", nameJa: "ニュージーランド", nameEn: "New Zealand", region: "oceania", difficulty: "easy", mapPlayable: true },
  { id: "PW", code: "PW", nameJa: "パラオ", nameEn: "Palau", region: "oceania", difficulty: "hard", mapPlayable: true },
  { id: "PG", code: "PG", nameJa: "パプアニューギニア", nameEn: "Papua New Guinea", region: "oceania", difficulty: "normal", mapPlayable: true },
  { id: "WS", code: "WS", nameJa: "サモア", nameEn: "Samoa", region: "oceania", difficulty: "normal", mapPlayable: true },
  { id: "SB", code: "SB", nameJa: "ソロモン諸島", nameEn: "Solomon Islands", region: "oceania", difficulty: "hard", mapPlayable: true },
  { id: "TO", code: "TO", nameJa: "トンガ", nameEn: "Tonga", region: "oceania", difficulty: "normal", mapPlayable: false },
  { id: "TV", code: "TV", nameJa: "ツバル", nameEn: "Tuvalu", region: "oceania", difficulty: "hard", mapPlayable: false },
  { id: "VU", code: "VU", nameJa: "バヌアツ", nameEn: "Vanuatu", region: "oceania", difficulty: "hard", mapPlayable: true },
];

// 地域の表示名・ボタン順序
export const REGIONS = [
  { id: "world", label: "全世界", short: "せかい" },
  { id: "asia", label: "アジア", short: "アジア" },
  { id: "europe", label: "ヨーロッパ", short: "ヨーロッパ" },
  { id: "africa", label: "アフリカ", short: "アフリカ" },
  { id: "americas", label: "北・中・南アメリカ／カリブ", short: "アメリカ・カリブ" },
  { id: "oceania", label: "オセアニア", short: "オセアニア" },
];

// 地域ごとの想定件数（データ整合性チェック用。PDFの掲載数と一致させる）
export const EXPECTED_REGION_COUNTS = {
  asia: 48,
  europe: 46,
  africa: 54,
  americas: 36,
  oceania: 14,
};

const DIFFICULTY_RANK = { easy: 1, normal: 2, hard: 3 };

// 難易度に応じた出題プールを取得する（region が "world" のときは全地域対象）
export function getQuizPool(regionId, difficulty) {
  const maxRank = DIFFICULTY_RANK[difficulty] ?? DIFFICULTY_RANK.hard;
  return COUNTRIES.filter((c) => {
    if (!c.mapPlayable) return false;
    if (regionId !== "world" && c.region !== regionId) return false;
    return DIFFICULTY_RANK[c.difficulty] <= maxRank;
  });
}

export function getCountryById(id) {
  return COUNTRIES.find((c) => c.id === id);
}

export function getRegionLabel(regionId) {
  const r = REGIONS.find((r) => r.id === regionId);
  return r ? r.label : regionId;
}

// データ整合性チェック: 地域別件数・合計198件になっているかを起動時に検証する
export function validateCountriesData() {
  const errors = [];
  const total = COUNTRIES.length;
  if (total !== 198) {
    errors.push(`国・地域の総数が198件ではありません（実際: ${total}件）`);
  }

  const counts = {};
  for (const c of COUNTRIES) {
    counts[c.region] = (counts[c.region] || 0) + 1;
  }
  for (const [region, expected] of Object.entries(EXPECTED_REGION_COUNTS)) {
    const actual = counts[region] || 0;
    if (actual !== expected) {
      errors.push(`地域「${region}」の件数が一致しません（期待値: ${expected}件 / 実際: ${actual}件）`);
    }
  }

  const idSet = new Set(COUNTRIES.map((c) => c.id));
  if (idSet.size !== COUNTRIES.length) {
    errors.push("国・地域IDに重複があります");
  }

  if (errors.length > 0) {
    console.error("[世界の国 どこかな？] マスターデータ整合性チェックでエラーが見つかりました:");
    for (const e of errors) console.error(" - " + e);
  } else {
    console.info(
      `[世界の国 どこかな？] マスターデータOK: 合計${total}件 (アジア${counts.asia} ヨーロッパ${counts.europe} アフリカ${counts.africa} アメリカ${counts.americas} オセアニア${counts.oceania})`
    );
  }
  return errors;
}
