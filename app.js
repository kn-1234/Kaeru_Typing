//～課題～
//文字、カエルの出現の重複をなくす ✔
//カエル登場、退場のアニメーション作成 ✔
//小文字入力を「l」,「x」両方対応させる ✔
//背景、その他イラストの作成 ✔
//難易度の追加 ✔

//htmlから要素を取得
var q    =   document.getElementById('text');//入力文字
var p    =   document.getElementById('moji');//ローマ字
var r    =   document.getElementById('score');//スコア
var s    =   document.getElementById('miss');//ミスタイプ
var f    =   document.getElementById('frog');//カエル
var fp   =   document.getElementById('frogpics');//スタート画面のカエル
var fp2  =   document.getElementById('frogpics2');//ゲーム画面のカエル
var alls =   document.getElementById('allscore');
var u    =   document.getElementById('rank');//ランク
var m    =   document.getElementById('massage');//あなたのスコアは…
var m2   =   document.getElementById('massage2');//ひとことメッセージ
var abo  =   document.getElementById('about');
var D2   =   document.getElementById('Display2');
var t    =   document.getElementById('time');
var st   =   document.getElementById('stcount');
var a    =   document.getElementById('a');//カエルのかず
var b    =   document.getElementById('b');//ミスタイプ
var c    =   document.getElementById('c');//のこりじかん
var n    =   document.getElementById('nyuuryoku');//入力欄
var di   =   document.getElementById('Display');

var score=0;
var miss =0;

//入力文字
var textLists = [
    'Java',
    'Javascript',
    'Python',
    'アーカイブ',
    'アウトソーシング',
    'アクセス解析',
    'アクセス管理',
    'アジャイル',
    'アセンブラ',
    'アドイン',
    'アドオン',
    'アフィリエイト',
    'アプライアンス',
    'アベイラビリティ',
    'アライアンス',
    'アローダイアグラム',
    'アンダーフロー',
    'イーサネット',
    'インシデント',
    'インスタンス',
    'インスタンス化',
    'インスペクション',
    'インセンティブ',
    'インターネット',
    'インターフェイス',
    'インデックス',
    'インフラ',
    'インプリメント',
    'インヘリタンス',
    'インベントリ',
    'インポート',
    'ウイルス対策',
    'ウォークスルー',
    'ウォームスタンバイ',
    'エクスポート',
    'エミュレータ',
    'オーバーフロー',
    'オーバーレイ',
    'オーバーロード',
    'オープンシステム',
    'オープンソース',
    'オピニオンリーダー',
    'オブジェクト',
    'オブジェクトコード',
    'オブジェクト指向',
    'オブジェクト図',
    'オプティマイズ',
    'オペランド',
    'オンデマンド',
    'カーネル',
    'カタログ性能',
    'カプセル化',
    'カラム',
    'ガントチャート',
    'ガンブラー',
    'キーロガー',
    'キッティング',
    'キャッシュ',
    'キャッシュメモリ',
    'クイックソート',
    'クエリ',
    'Cookie',
    'クラス',
    'クラスタ',
    'クラスタリング',
    'クラス図',
    'グリーンit',
    'グリーン購入',
    'クリッピング',
    'グループウェア',
    'クローラ',
    'クローリング',
    'クロスコンパイラ',
    'クロスセリング',
    'クロスデバイス',
    'クロスドメイン',
    'ケーススタディ',
    'ゲートウェイ',
    'ゲートキーパー',
    'けた落ち',
    'コアコンピタンス',
    'コード',
    'コーパス',
    'コールドサイト',
    'Go言語',
    'コホート分析',
    'コマンド',
    'コロケーション',
    'コンソール',
    'コンテナ',
    'コンバージョン',
    'コンパイラ',
    'コンパイル',
    'コンピュートエンジン',
    'コンプライアンス',
    'コンフリクト',
    'コンポーネント',
    'コンポーネント図',
    'サーバー',
    'サービスサポート',
    'サービスマーク',
    'サニタイジング',
    'サブルーチン',
    'サマリー',
    'サムネイル',
    'サラミ法',
    'サンドボックス',
    'シーケンス図',
    'C#(シーシャープ)',
    'C++(シープラプラ)',
    'シームレス',
    'シェーディング',
    'ジェネレーター',
    'シェル',
    'シェルソート',
    'システムテスト',
    'システム監査',
    'シソーラス',
    'シックスシグマ',
    'SHIFTJIS',
    'シンクライアント',
    'スイッチ',
    'スキーマ',
    'スケールアウト',
    'スケールアップ',
    'スコアリング',
    'ストレージ',
    'スパイウェア',
    'スパム',
    'スプレッドシート',
    'スマートデバイス',
    'スループット',
    'スワップファイル',
    'セグメント',
    'セッション',
    'ゼロデイ攻撃',
    'ソースコード',
    'ソフトウェア',
    'タイムスタンプ',
    'ダッシュボード',
    'タブロー',
    'ディレクトリ',
    'データセット',
    'データソース',
    'データフィード',
    'データベース',
    'データマート',
    'データマイニング',
    'テーブル',
    'デグレート',
    'デバッガ',
    'デバッグ',
    'トイレ行きます',
    'トークン',
    'ドキュメント',
    'ドメイン',
    'ドライバ',
    'トラップ',
    'トラフィック',
    'トランザクション',
    'トリガー',
    'ネスト',
    'パーサ',
    'パース',
    'ハードウェア',
    'パイチャート',
    'バイナリ',
    'ハイパーバイザ',
    'ハウジング',
    'パケット',
    'パス',
    'バックアップ',
    'バナー',
    'バブルソート',
    'パラメーター',
    'PHP',
    'ビーコン',
    'ヒートマップ',
    'ピクセル',
    'ビッグクエリ',
    'ファイアウォール',
    'ファネル',
    'フィールド',
    'フィッシング',
    'フィルター',
    'フェイルオーバー',
    'フォルダ',
    'プラットフォール',
    'フレームワーク',
    'プロキシ',
    'プロット',
    'プロトコル',
    'プロパティ',
    'ペネロペ',
    'ポータルサイト',
    'ぼくかえるくん',
    'ホスティング',
    'ホットスタンバイ',
    'ホットプラグ',
    'ポリモーフィズム',
    'マージ',
    'マイグレーション',
    'マウスフロー',
    'マウント',
    'マルチホーミング',
    'ミドルウェア',
    'メインフレーム',
    'メインルーチン',
    'メソッド',
    'メモリ',
    'モジュール',
    'ユーザビリティ',
    'ユビキタス',
    'ライブラリ',
    'リーチ',
    'リード',
    'リカバリ',
    'リストア',
    'リファラ',
    'リファレンス',
    'リモートアクセス',
    'リロード',
    'ルータ',
    'ルート',
    'ルートパス',
    'Ruby',
    'レコード',
    'レポート',
    'レンダリング',
    'ロー',
    'ローカルファイル',
    'ロード',
    'ロードバランサ',
    'ログ',
    '暗号化',
    '引数',
    '運用テスト',
    '営業損益',
    '仮想マシン',
    '仮想メモリ',
    '仮想化',
    '仮想記憶',
    '何の話?',
    '可用性',
    '回帰分析',
    '開発ツール',
    '外部キー',
    '完全性',
    '環境会計',
    '監査証拠',
    '監査調書',
    '管理図',
    '企業倫理',
    '機密性',
    '規模の経済',
    '技術オートフォリオ',
    '共通フレーム',
    '共通鍵',
    '系統図法',
    '経営資源',
    '経営戦略',
    '決定表',
    '結合テスト',
    '検索エンジン',
    '固定比率',
    '公開鍵',
    '散布図',
    '射影',
    '主キー',
    '情報せき',
    '請負契約',
    '絶対パス',
    '相対パス',
    '売上総利益',
    '秘密鍵',
    '符号ビット',
    '腹が痛い',

    'セキュリティ',
    'アイデンティティ',
    'SQLインジェクション',
    'IPアドレス',
    '符号ビット',
    'スクリプト'
];
var romanletters = [
    'java',
    'javascript',
    'python',
    'a-kaibu',
    'autoso-sinngu',
    'akusesukaiseki',
    'akusesukanri',
    'ajairu',
    'asenbura',
    'adoinn',
    'adoonn',
    'afirieito',
    'apuraiansu',
    'abeirabiriteli',
    'araiansu',
    'aro-daiaguramu',
    'anda-huro-',
    'i-sanetto',
    'insidento',
    'insutansu',
    'insutansuka',
    'insupekusyonn',
    'insentelibu',
    'inta-netto',
    'inta-feisu',
    'indekkusu',
    'inhura',
    'inpurimento',
    'inheritannsu',
    'inbentori',
    'inpo-to',
    'uirusutaisaku',
    'ulo-kusuru-',
    'ulo-musutanbai',
    'ekusupo-to',
    'emyure-ta',
    'o-ba-huro-',
    'o-ba-rei',
    'o-ba-ro-do',
    'o-punsisutemu',
    'o-punso-su',
    'opinionnri-da-',
    'obujekuto',
    'obujekutoko-do',
    'obujekutosikou',
    'obujekutozu',
    'obutelimaizu',
    'operando',
    'ondemando',
    'ka-neru',
    'kataroguseinou',
    'kapuseruka',
    'karamu',
    'gantocha-to',
    'ganbura-',
    'ki-roga-',
    'kittelingu',
    'kyassyu',
    'kyassyumemori',
    'kuikkuso-to',
    'kueri',
    'cookie',
    'kurasu',
    'kurasuta',
    'kurasutaringu',
    'kurasuzu',
    'guri-nnit',
    'guri-nkounyuu',
    'kurippingu',
    'guru-puwea',
    'kuro-ra',
    'kuro-ringu',
    'kurosukonpaira',
    'kurosuseringu',
    'kurosudebaisu',
    'kurosudomeinn',
    'ke-susutadeli',
    'ge-towei',
    'ge-toki-pa-',
    'ketaoti',
    'koakonpitansu',
    'ko-do',
    'ko-pasu',
    'ko-rudosaito',
    'gogengo',
    'koho-tobunseki',
    'komando',
    'koroke-syonn',
    'konso-ru',
    'kontena',
    'konba-jon',
    'konpaira',
    'konpairu',
    'konpyu-toenzin',
    'konpuraiansu',
    'konhurikuto',
    'konpo-nento',
    'konpo-nentozu',
    'sa-ba-',
    'sa-bisusapo-to',
    'sa-bisuma-ku',
    'sanitaijingu',
    'saburu-tinn',
    'samari-',
    'samuneiru',
    'saramihou',
    'sandobokkusu',
    'si-kennsuzu',
    'c#',
    'c++',
    'si-muresu',
    'she-delingu',
    'jenere-ta-',
    'syeru',
    'syeruso-to',
    'sisutemutesuto',
    'sisutemukansa',
    'siso-rasu',
    'sikkususiguma',
    'shiftjis',
    'sinkuraianto',
    'suitti',
    'suki-ma',
    'suke-ruauto',
    'suke-ruappu',
    'sukoaringu',
    'sutore-zi',
    'supaiwea',
    'supamu',
    'supureddosi-to',
    'suma-todebaisu',
    'suru-putto',
    'suwappufairu',
    'segumento',
    'sessyonn',
    'zerodeikougeki',
    'so-suko-do',
    'sohutowea',
    'taimusutanpu',
    'dassyubo-do',
    'taburo-',
    'delirekutori',
    'de-tasetto',
    'de-taso-su',
    'de-tafi-do',
    'de-tabe-su',
    'de-tama-to',
    'de-tamainingu',
    'te-buru',
    'degure-to',
    'debagga',
    'debaggu',
    'toireikimasu',
    'to-kunn',
    'dokyumento',
    'domeinn',
    'doraiba',
    'torappu',
    'torafikku',
    'toranzakusyonn',
    'toriga-',
    'nesuto',
    'pa-sa',
    'pa-su',
    'ha-dowea',
    'paitya-to',
    'baianari',
    'haipa-baiza',
    'hauzingu',
    'paketto',
    'pasu',
    'bakkuappu',
    'bana-',
    'baburuso-to',
    'parame-ta-',
    'php',
    'bi-kon',
    'hi-tomappu',
    'pikuseru',
    'biggukueri',
    'faiaulo-ru',
    'faneru',
    'fi-rudo',
    'fissingu',
    'firuta-',
    'feiruo-ba-',
    'foruda',
    'purattofo-ru',
    'fure-muwa-ku',
    'purokisi',
    'purotto',
    'purotokoru',
    'puropateli',
    'penerope',
    'po-tarusaito',
    'bokukaerukun',
    'hosutelingu',
    'hottosutanbai',
    'hottopuragu',
    'porimo-fizumu',
    'ma-ji',
    'maigure-syonn',
    'mausufuro-',
    'maunto',
    'marutiho-mingu',
    'midoruwea',
    'meinfure-mu',
    'meinru-tinn',
    'mesoddo',
    'memori',
    'moju-ru',
    'yu-zaribiteli',
    'yubikitasu',
    'raiburari',
    'ri-ti',
    'ri-do',
    'rikabari',
    'risutoa',
    'rifara',
    'rifarensu',
    'rimo-toakusesu',
    'riro-do',
    'ru-ta',
    'ru-to',
    'ru-topasu',
    'ruby',
    'reko-do',
    'repo-to',
    'rendarinngu',
    'ro-',
    'ro-karufairu',
    'ro-do',
    'ro-dobaransa',
    'rogu',
    'angouka',
    'hikisuu',
    'unnyoutesuto',
    'eigyousonneki',
    'kasoumasinn',
    'kasoumemori',
    'kasouka',
    'kasoukioku',
    'nannnohanasi?',
    'kayousei',
    'kaikibunnseki',
    'kaihatutu-ru',
    'gaibuki-',
    'kannzennsei',
    'kannkyoukaikei',
    'kannsasyouko',
    'kannsachousyo',
    'kanrizu',
    'kigyourinri',
    'kimitusei',
    'kibonokeizai',
    'gijutuo-toforio',
    'kyoutuufure-mu',
    'kyoutuukagi',
    'keitouzuhou',
    'keieisigenn',
    'keieisenryaku',
    'ketteihyou',
    'ketugoutesuto',
    'kensakuenzin',
    'koteihitiru',
    'koukaikagi',
    'sannpuzu',
    'syaei',
    'syuki-',
    'jouhouseki',
    'ukeoikeiyaku',
    'zettaipasu',
    'soutaipasu',
    'uriagesourieki',
    'himitsukagi',
    'fugoubitto',
    'haragaitai',

    'sekyuriteli',
    'aidenteliteli',
    'sqlinjekushonn',
    'inta-fe-su',
    'ipadoresu',
    'hugoubitto',
    'i-sanetto',
    'sukuriputo'
];

//高難易度用入力文字
var textLists2 = [
    '技術オートフォリオ',
    '4444444444',
    'アイデンティティ管理',
    'アカウンタビリティ',
    'アドビアナリティクス',
    'アプリケーション仮想化',
    'アンチエイリアシング',
    'インジェクション攻撃',
    'エスクローサービス',
    'エンタープライズサーチ',
    'オープンソースソフトウェア',
    'オブジェクト指向',
    'オンザジョブトレーニング',
    'オンラインストレージ',
    'カスタマージャーニー',
    'カテゴリマネジメント',
    'キャッシュフロー計算書',
    'グーグルアナリティクス',
    'クライアントサーバシステム',
    'クラウドコンピューティング',
    'クラスタシステム',
    'クラスタ分析法',
    'グリットコンピューティング',
    'クリティカルパス',
    'グローに変えました',
    'クロック周波数',
    'ゴーイングコンサーン',
    'コーポレートガバナンス',
    'コーポレートブランド',
    'コールドスタンバイ',
    'コマンドプロンプト',
    'コンカレントエンジニアリング',
    'コンピュータウイルス対策基準',
    'コンピュータ不正アクセス対策基準',
    'コンフィギュレーション',
    'サージプロテクト',
    'サードパーティデータ',
    'サーバ仮想化技術',
    'サブネットマスク',
    'システムインテグレーション',
    'システム監査基準',
    'システム管理基準',
    'シナリオライティング',
    'シングルサインオン',
    'スケーラビリティ',
    'ストレージ仮想化',
    'セカンドファイルデータ',
    'セキュリティーホール',
    'ディザスタリカバリ',
    'テキストマイニング',
    'デジタルサイネージ',
    'デスクトップ仮想化',
    'とりっぴーととりっぴー',
    'ナレッジマネジメント',
    'ネットワーク仮想化',
    'ファーストパーティーデータ',
    'フォールアウトレポート',
    'ブラックマーケット',
    'フラッシュメモリー',
    'マークアップ言語',
    'まだお腹が痛いです',
    'メロンメロンメロンうまい',
    'モダナイゼーション',
    'ライブマイグレーション',
    'リードクオリフィケーション',
    'リードジェネレーション',
    'リードナーチャリング',
    'リッチクライアント',
    'ルックアライクモデリング',
    'レガジーシステム',
    '株主資本等変動計算書',
    '感熱式プリンター',
    '環境アセスメント',
    '関係データベース',
    '関係データベース',
    '共通鍵暗号',
    '共通鍵暗号方式',
    '蕎麦賭博誤爆蕎麦食い',
    '局所参照性',
    '経験曲線',
    '検疫ネットワーク',
    '減価償却',
    '個人情報保護法',
    '個別生産方式',
    '公益通報者保護法',
    '公開鍵暗号',
    '公開鍵暗号方式',
    '黒猫子猫招き猫子猫子倉庫',
    '今日髪を切ります',
    '差分バックアップ方式',
    '裁量労働制',
    '事業ポートフォリオマネジメント',
    '実績見積もり法',
    '食中毒になりません',
    '組込みシステム',
    '白猫ピロジェクト',

    '水平磁気記録方式',
    'インターネットサービスプロバイダ',
    'ノイマン型コンピュータ',
    'アドレス指定方式',
    'ヘッドマウントディスプレイ',
    '第5世代移動通信システム',
    'セールスフォースオートメーション',
    '情報処理推進機構',
    '基本情報技術者試験'
];
var romanletters2 = [
    'gijutuo-toforio',
    'yonyonyonyonyonyonyonyonyonyon',
    'aidentelitelikanri',
    'akaunntabiliteli',
    'aodobianaritelikusu',
    'apurike-syonkasouka',
    'anntieiriasinngu',
    'inzyekusyonkougeki',
    'esukuro-sa-bisu',
    'enta-puraizusa-ti',
    'o-punnso-susohutoulea',
    'obuzyekutosikou',
    'onnzajobutore-ninngu',
    'onrainsutore-ji',
    'kasutama-ja-ni-',
    'kategorimanezimennto',
    'kyassyufuro-keisannsyo',
    'gu-guruanaritelikusu',
    'kuraiantosa-basisutemu',
    'kuraudokonpyu-telingu',
    'kurasutasisutemu',
    'kurasutabunsekihou',
    'gurittokonpyu-telingu',
    'kuritelikarupasu',
    'guro-nikaemasita',
    'kurokkusyuuhasuu',
    'go-ingukonsa-nn',
    'ko-pore-togabanannsu',
    'ko-pore-toburanndo',
    'ko-rudosutanbai',
    'komandopuronputo',
    'konkarentoenjiniaringu',
    'konpyu-tauirusutaisakukijunn',
    'konpyu-tafuseiakusesutaisakukijunn',
    'konfigyure-syonn',
    'sa-jipurotekuto',
    'sa-dopa-telide-ta',
    'sa-bakasoukagijutu',
    'sabunettomasuku',
    'sisutemuinntegure-syonn',
    'susutemukansakijunn',
    'sisutemukannrikijunn',
    'sinarioraitelingu',
    'sinngurusainnonn',
    'suke-rabiriteli',
    'sutore-zikasouka',
    'sekandofairude-ta',
    'sekyuriteli-ho-ru',
    'delizasutarikabari',
    'tekisutomainingu',
    'dezitarusaine-zi',
    'desukutoppukasouka',
    'torippi-totorippi-',
    'narezzimanezimento',
    'nettowa-kukasouka',
    'fa-sutopa-teli-de-ta',
    'fo-ruautorepo-to',
    'burakkuma-ketto',
    'furassyumemori-',
    'ma-kuappugenngo',
    'madaonakagaitaidesu',
    'meronmeronmeronumai',
    'modanaize-syonn',
    'raibumaigure-syonn',
    'ri-dokuorifike-syonn',
    'ri-dojenere-shonn',
    'ri-dona-charinngu',
    'ricchikuraiannto',
    'rukkuaraikumoderinngu',
    'regaji-shisutemu',
    'kabunusisihonntouhenndoukeisannsyo',
    'kannnetusikipurinnta-',
    'kannkyouasesumennto',
    'kannkeide-tabe-su',
    'kankeide-tabe-su',
    'kyoutuukagiangou',
    'kyoutuukagiangouhousiki',
    'sobatobakugobakusobakui',
    'kyokusyosannsyousei',
    'keikeikyokusenn',
    'kennekinettowa-ku',
    'gennkasyoukyaku',
    'kojinnjouhouhogohou',
    'kobetuseisannhousiki',
    'kouekituuhousyahogohou',
    'koukaikagiangou',
    'koukaikagiangouhousiki',
    'kuronekokonekomanekinekokonekokosouko',
    'kyoukamiwokirimasu',
    'sabunnbakkuappuhou',
    'sairyouroudousei',
    'jigyoupo-toforiomanejimento',
    'jissekimitumorihou',
    'syokutyuudokuninarimasen',
    'kumikomisisutemu',
    'sironekopirojyekuto',

    'suiheijikikirokuhousiki',
    'inta-nettosa-bisupurobaida',
    'noimangatakonpyu-ta',
    'adoresusiteihousiki',
    'heddomauntodelisupurei',
    'daigosedaiidoutuusinsisutemu',
    'se-rusufo-suo-tome-shonn',
    'jouhoushorisuisinkikou',
    'kihonjouhougijutushasikenn'
];

var frog = [
    'image/frog/1.png',
    'image/frog/2.png',
    'image/frog/3.png',
    'image/frog/4.png',
    'image/frog/5.png',
    'image/frog/6.png',
    'image/frog/7.png'
];//スタート画面のカエルをランダム表示
var frnd = Math.floor(Math.random() * (frog.length-1));
fp.src= frog[frnd];
var checkTexts = [];

//各要素を非表示
a.style.display   = "none";//カエルのかず
b.style.display   = "none";//ミスタイプ
c.style.display   = "none";//のこりじかん
di.style.display  = "none";
fp2.style.display = "none";
D2.style.display  = "none";

const re =document.getElementById("re");//更新ボタン取得
re.style.display  = "none";//更新ボタン非表示

var diflevel;//難易度の判別

function start(){
    diflevel=0;
    arrmk();
    console.log("arrcount:"+arrcount);
    console.log(arrcount.length);
    stprocess();
}  //難易度「かんたん」ボタン
function start2(){
    diflevel=1;
    arrmk();
    console.log("arrcount:"+arrcount);
    console.log(arrcount.length);
    stprocess();
} //難易度「むずかしい」ボタン

function stprocess(){
    const start = document.getElementById("start");
    const start2 = document.getElementById("start2");
    start.style.display="none";
    start2.style.display="none";
    //↑各スタートボタンを非表示↑
    alls.classList.add("allscores");
    stcountdown(3);//カウントダウン
    //document.addEventListener('keydown', stcountdown(3));//Enterキーが押されたらカウントダウン開始
}//スタートボタンを押下した際の処理

function reload(){
    location.reload();
}//(ゲーム終了後)サイトの更新で最初に戻る

function Typing(){
    if(diflevel==1){
        countdown(120);
    }else{
        countdown(60);
    }//各難易度別に制限時間変更
    di.style.display ="block";
    createText();
    document.addEventListener('keydown', key);//キーが押されたら関数「key」が発動
}//ゲーム中

function stcountdown(sec){
    f.style.display ="none";//カエル非表示
    abo.style.display="none";
    // カウントダウンする秒数
    //var sec = 60;
    st.textContent=sec;
    // 開始日時を設定
    time = new Date();
    //console.log("Start: ", time);
    // 終了時刻を開始日時+カウントダウンする秒数に設定
    endtime = new Date(time.getTime() + sec * 1000);
    //console.log("End : ", endtime);
    // 1秒おきにカウントダウン
    var cnt = sec;
    var id = setInterval(function(){
        cnt--;
        //console.log(cnt);
        st.textContent=cnt;
        // 現在日時と終了日時を比較
        time = new Date();
        if(time.getTime() >= endtime.getTime()){//終了
            clearInterval(id);
            st.style.display="none";
            a.style.display="block";
            b.style.display="block";
            c.style.display="block";
            n.style.display="block";
            f.style.display ="block";
            Typing();
        }
    }, 1000);
}//ゲーム前のカウントダウン



function countdown(sec){
    // カウントダウンする秒数
    t.textContent=sec;
    // 開始日時を設定
    time = new Date();
    // 終了時刻を開始日時+カウントダウンする秒数に設定
    endtime = new Date(time.getTime() + sec * 1000);
    // 1秒おきにカウントダウン
    var cnt = sec;
    var id = setInterval(function(){
        cnt--;
        t.textContent=cnt;
        // 現在日時と終了日時を比較
        time = new Date();
        if(cnt <= 10){
            t.style.color="#ff0000";
            c.style.color="#ff0000";
            t.className='hurueru';
        }
        if(time.getTime() >= endtime.getTime()){//終了
            clearInterval(id);
            finish();
        }
        }, 1000);
}//ゲームのカウントダウン

var arrcount = [];
var i =0
function arrmk(){
    


    if(diflevel==1){
        for(i=0;i<=textLists2.length-1;i++){
        arrcount[i]=i;
        }
    }else if(diflevel==0){
        for(i=0;i<=textLists.length-1;i++){
        arrcount[i]=i;
        }
    }

}//配列を作成




function createText() {
    //文字列をランダムに取得する
    var r = Math.floor(Math.random() * (arrcount.length));
    var rnd = arrcount[r];  //ランダムで文字列の要素番号選択
    console.log("r:"+r);
    console.log("rnd:"+rnd);
    arrcount.splice(r, 1);
    if(arrcount.length===0){
        arrmk();
    }
    //console.log("arrcount:"+arrcount);
    console.log("rnd:"+rnd);
    console.log("入力文字:"+textLists[rnd]);
    console.log("入力文字:"+textLists2[rnd]);
    //console.log("入力文字(sql):"+textLists[3]);
    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    q.textContent = '';
    if(diflevel===0){//文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
        q.textContent = textLists[rnd];//入力文字格納
        checkTexts = romanletters[rnd].split('').map(function(value) {
            var span = document.createElement('span');
            span.textContent = value;
            p.appendChild(span);
            return span;
        });
    }else{//高難易度用
        q.textContent = textLists2[rnd];
        checkTexts = romanletters2[rnd].split('').map(function(value) {
            var span = document.createElement('span');
            span.textContent = value;
            p.appendChild(span);
            return span;
        });
    }
    //console.log("checkTexts 1:"+checkTexts[0].textContent);
    //console.log("checkTexts 1:"+checkTexts[1].textContent);
    //console.log("checkTexts 1:"+checkTexts[2].textContent);
    //console.log("checkTexts 1:"+checkTexts[3].textContent);
}//文字列を取得

function key(e) {
    
    function change(n,ch){
        checkTexts[n].textContent=ch;
        checkTexts[n].className = 'add-blue';
        checkTexts.shift();
    }//文字列中の文字を変える
    function change2(n,ch){
        checkTexts[n].textContent=ch;
    }//文字列中の文字を変える（次の文字へのシフトなし）
    
    function misscnt(){
        checkTexts[0].className = 'add-red';
        miss++;
        s.textContent=miss+"かい";
    }//一文字ミスした際の処理
    
    console.log(checkTexts.textContent);
    //キーボードからの入力は「e.key」に格納されている
    if(checkTexts[0].textContent==="l"){
        if(e.key === "l"){
            change(0,"l");
        }else if(e.key === "x"){
            change(0,"x");
        }else {
            misscnt();
        }//誤った文字を入力
        //e.key !== "x" || (e.key === "x" && textLists[rnd]===textLists[3])
        //e.key === "l"
        // && textLists[rnd]!==textLists[3]
    }else if((checkTexts[0].textContent==="j" || checkTexts[0].textContent==="z") && checkTexts[1].textContent==="i"){
        if(e.key === "j"){
            change(0,"j");
        }else if(e.key === "z"){
            change(0,"z");
        }else {
            misscnt();
        }//誤った文字を入力
    }else if(checkTexts[0].textContent==="e" && checkTexts[1].textContent==="l"){
        if(e.key === "e"){
            change(0,"e");
        }else if(e.key === "h"){
            change(0,"h");
            change2(0,"i");
            change2(1,"");
            checkTexts.splice(1, 1);
        }else {
            misscnt();
        }//誤った文字を入力
    }else if(checkTexts[0].textContent==="h"){
        if(e.key === "h"){
            change(0,"h");
        }else if(e.key === "y"){
            change(0,"y");
        }else {
            misscnt();
        }//誤った文字を入力
        
        
        //    else if(checkTexts[1].textContent){
        //if(checkTexts[0].textContent===checkTexts[1].textContent){
        //    if(e.key === checkTexts[0].textContent){
        //        change(0,checkTexts[0].textContent);
        //    }else if(e.key === "l"){
        //        change(0,"l");
        //        checkTexts.splice(1, 0,"t");
        //        checkTexts.splice(2, 0,"u");
        //        console.log("checkTexts[0].textContent:"+checkTexts[0].textContent);
        //        console.log("checkTexts[1].textContent:"+checkTexts[1].textContent);
        //        console.log("checkTexts[2].textContent:"+checkTexts[2].textContent);
        //    }else {
        //        misscnt();
            //}//誤った文字を入力
        //}
    //}
        
        
    }else if(e.key === checkTexts[0].textContent) {//正しい文字を入力
        checkTexts[0].className = 'add-blue';
        checkTexts.shift();//0番目の配列要素を削除して、次の1文字を比較対象にする
    }else {//誤った文字を入力
            misscnt()
    }
    if(!checkTexts.length) {
        createText();
        score++;
        //if(diflevel==1){
        //    cnt2=cnt2+2;
        //}
        r.textContent=score+"ひき";//スコア追加
        frogchange();//カエル変更のアニメーション
    }//配列要素が空っぽになったら次の問題を出す
}//入力文字の判別

function frogchange(){
    var frnd = Math.floor(Math.random() * Math.random() * frog.length);
    console.log(frnd);
    f.classList.remove('jump');
    f.classList.add('poyonR');
    var animated1 = document.querySelector('.poyonR');
    animated1.addEventListener("animationend",function(){
        fp.src= frog[frnd];
        f.classList.remove('poyonR');
        f.classList.add('poyon');
        var animated2 = document.querySelector('.poyon');
        animated2.addEventListener("animationend",function(){
            f.classList.remove('poyon');
            f.classList.add('jump');
            });
    });
}//カエル変更

function scorecheck(){
    miss=miss*2000;
    score=(score*10000)-miss;
    if(score>=200000){
          u.textContent="ランクS";
          m2.textContent="さいこーだよ。あんた。";
          u.style.color="aqua";
          fp2.src="image/frog/s1.png";
          fp2.classList.add('jump');
    }else if(score>=100000){//ランクA
          u.textContent="ランクA";
          m2.textContent="せかいめざしてみないか？？？";
          u.style.color="red";
          fp2.src="image/frog/s1.png";
          fp2.classList.add('jump');
          console.log("A");
    }else if(score>=150000){//ランクB
          u.textContent="ランクB";
          m2.textContent="やるじゃん";
          u.style.color="orange";
          fp2.src="image/frog/1.png";
          console.log("B");
    }else if(score>=100000){//ランクC
          u.textContent="ランクC";
          m2.textContent="たいしたことないね";
          u.style.color="green";
          fp2.src="image/frog/1.png";
          console.log("C");
    }else{//ランクD
          u.textContent="ランクD";
          m2.textContent="……きみやるきある…？";
          u.style.color="blue";
          fp2.src="image/frog/s2.png";
          console.log("D");
    }
}//スコアをチェック

function finish(){
    //console.log("Finish!");
    document.removeEventListener('keydown', key);//キー入力無効化
    re.style.display ="block";//
    fp2.style.display ="block";//
    D2.style.display ="block";//
    p.style.display ="none";//入力文字欄を非表示
    q.style.display ="none";//入力文字欄
    t.style.display ="none";//時間
    f.style.display ="none";//カエル
    alls.classList.remove("allscores");
    alls.classList.add("allscoref");
    m.textContent = 'あなたのスコアは…';
    scorecheck();//スコアをチェック
}//終了後の処理
