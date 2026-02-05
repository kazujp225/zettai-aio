import type {
  ResultCard,
  IssueCard,
  Feature,
  FieldItem,
  CaseStudy,
  Consultant,
  SupportMethod,
  ContractStep,
  FAQItem,
  CompanyInfo,
} from '../types';

// 実績データ: 生成AI検索での具体的成果
export const resultCards: ResultCard[] = [
  {
    id: '1',
    heading: 'ChatGPTで「〇〇 おすすめ」と聞くと真っ先に自社が紹介されるように。問い合わせ数が3倍に急増',
    image: '/assets/image/result-pct03.png',
    logo: '/assets/image/result-logo-tenda.png',
    companyName: 'A社 様',
    type: 'IT企業／BtoBサービス',
  },
  {
    id: '2',
    heading: 'Perplexityで業界キーワード検索1位を独占。AI経由の月間リード獲得数が200件を突破',
    image: '/assets/image/result-pct01.png',
    logo: '/assets/image/result-logo-cimtops.png',
    companyName: 'B社 様',
    type: 'ソフトウェア企業／SaaS',
  },
  {
    id: '3',
    heading: 'Claude・Geminiで「業界のリーディングカンパニー」として紹介される状態を確立',
    image: '/assets/image/result-pct02.png',
    logo: '/assets/image/result-logo-saraya.png',
    companyName: 'C社 様',
    type: '製造業／BtoB',
  },
  {
    id: '4',
    heading: '生成AIが自社を「その分野の第一人者」として引用。AI時代のブランド確立に成功',
    image: '/assets/image/result-pct04.png',
    logo: '/assets/image/result-logo-asiro.png',
    companyName: 'D社 様',
    type: 'コンサルティング業',
  },
  {
    id: '5',
    heading: 'AIが「買うならここ」と推薦してくれる状態に。EC売上が前年比280%の大幅増',
    image: '/assets/image/result-pct05.png',
    logo: '/assets/image/result-logo-ibasen.png',
    companyName: 'E社 様',
    type: 'EC事業者',
  },
];

// 課題: 生成AI時代に企業が直面する悩み
export const issueCards: IssueCard[] = [
  {
    id: '1',
    comment: 'ChatGPTに業界のことを聞くと、なぜか競合ばかりが紹介される...',
    image: '/assets/image/issue-pct01.png',
  },
  {
    id: '2',
    comment: 'Perplexityで検索しても自社の名前が一切出てこない。まるで存在していないかのよう',
    image: '/assets/image/issue-pct02.png',
    imageMobile: '/assets/image/issue-pct02--left.png',
  },
  {
    id: '3',
    comment: 'AIが自社についてデタラメな情報を回答している。ブランドイメージが台無しに',
    image: '/assets/image/issue-pct03.png',
  },
  {
    id: '4',
    comment: 'Google検索からの流入がどんどん減っている。AI検索対策が必要なのは分かるけど、何から始めれば...',
    image: '/assets/image/issue-pct04.png',
    imageMobile: '/assets/image/issue-pct04--left.png',
  },
  {
    id: '5',
    comment: 'AIに自社をおすすめしてもらいたいけど、具体的に何をすればいいのか見当もつかない',
    image: '/assets/image/issue-pct05.png',
  },
];

// 特長: OTASUKE GEOの4つの強み
export const features: Feature[] = [
  {
    id: '1',
    number: '01',
    numberImage: '/assets/image/feature-num01.png',
    title: 'AIに「選ばれる」コンテンツ設計で、回答への登場を実現',
    image: '/assets/image/feature-pct01.png',
    description:
      'ChatGPT、Perplexity、Claude、Gemini——各AIには独自の回答生成ロジックがあります。OTASUKE GEOは、それぞれのAIが「どんな情報を引用するか」「どんな構造のコンテンツを好むか」を徹底解析。AIに選ばれるコンテンツを設計し、貴社が回答に登場する状態を作り出します。',
  },
  {
    id: '2',
    number: '02',
    numberImage: '/assets/image/feature-num02.png',
    title: 'AIから「信頼できる情報源」と認識される権威性を構築',
    image: '/assets/image/feature-pct02.png',
    description:
      '生成AIは、信頼性の高い情報源を優先的に引用します。OTASUKE GEOでは、AIに「この企業は専門家だ」「この情報は確かだ」と認識させるためのE-E-A-T戦略を展開。構造化データ、専門家コンテンツ、被引用戦略により、貴社を権威ある情報源へと押し上げます。',
  },
  {
    id: '3',
    number: '03',
    numberImage: '/assets/image/feature-num03.png',
    title: 'AIの回答を常時モニタリングし、露出を継続的に最適化',
    image: '/assets/image/feature-pct03.png',
    description:
      '生成AIの回答は日々変化します。昨日まで表示されていた貴社が、今日は消えている——そんなことも起こります。OTASUKE GEOは、主要AIでの回答状況を定期監視。変化を即座にキャッチし、常にベストポジションを維持するための継続的なチューニングを行います。',
  },
  {
    id: '4',
    number: '04',
    numberImage: '/assets/image/feature-num04.png',
    title: 'AIクローラー対策で「認識される」基盤を整備',
    image: '/assets/image/feature-pct04.png',
    description:
      'どんなに素晴らしいコンテンツも、AIのクローラーに正しく取得されなければ意味がありません。OTASUKE GEOでは、GPTBot・ClaudeBot・PerplexityBotなど各AIクローラーへの技術対応を実施。robots.txt最適化、クローラビリティ改善、構造化データ実装で、AI認識の土台を構築します。',
  },
];

// 対応目的: GEO対策で実現できること
export const fieldPurposes: FieldItem[] = [
  { image: '/assets/image/feild-purpose-pct01.png', label: 'ChatGPTの回答に自社を登場させたい' },
  { image: '/assets/image/feild-purpose-pct02.png', label: 'Perplexityで競合を抑えて上位表示されたい' },
  { image: '/assets/image/feild-purpose-pct03.png', label: 'AIに「おすすめ」として推薦されたい' },
  { image: '/assets/image/feild-purpose-pct04.png', label: 'AI回答で業界No.1のポジションを獲得したい' },
  { image: '/assets/image/feild-purpose-pct05.png', label: 'AIの誤情報・ハルシネーションを改善したい' },
  { image: '/assets/image/feild-purpose-pct06.png', label: 'AI検索経由のリード・売上を伸ばしたい' },
  { image: '/assets/image/feild-purpose-pct07.png', label: 'Google検索減少分をAI検索で補いたい' },
  { image: '/assets/image/feild-purpose-pct08.png', label: 'AI時代のブランド戦略を構築したい' },
  { image: '/assets/image/feild-purpose-pct09.png', label: 'AIクローラーに正しく認識されたい' },
];

// 対応サイトタイプ
export const fieldTypes: FieldItem[] = [
  { image: '/assets/image/feild-type-pct01.png', label: 'コーポレートサイト' },
  { image: '/assets/image/feild-type-pct02.png', label: 'サービスサイト（BtoB/BtoC）' },
  { image: '/assets/image/feild-type-pct03.png', label: 'オウンドメディア' },
  { image: '/assets/image/feild-type-pct04.png', label: 'ECサイト' },
  { image: '/assets/image/feild-type-pct05.png', label: 'SaaSサービスサイト' },
  { image: '/assets/image/feild-type-pct06.png', label: '採用サイト' },
  { image: '/assets/image/feild-type-pct07.png', label: 'ポータル・メディアサイト' },
  { image: '/assets/image/feild-type-pct08.png', label: '比較・口コミサイト' },
  { image: '/assets/image/feild-type-pct09.png', label: 'LP（ランディングページ）' },
];

// 支援事例
export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    heading: 'ChatGPTで「業界 おすすめ」と聞くと自社が真っ先に紹介されるようになった事例',
    image: '/assets/wp-uploads/case-06.jpg',
    logo: '/assets/wp-uploads/logo-assist.png',
    companyName: 'IT企業 A社 様',
    type: 'BtoBサービス',
    link: '#',
  },
  {
    id: '2',
    heading: 'Perplexityで関連キーワードすべてで上位表示を達成した事例',
    image: '/assets/wp-uploads/case-05.jpg',
    logo: '/assets/wp-uploads/logo-assist.png',
    companyName: 'SaaS企業 B社 様',
    type: 'クラウドサービス',
    link: '#',
  },
  {
    id: '3',
    heading: 'AIの誤回答を改善し、正確なブランド情報が回答されるようになった事例',
    image: '/assets/wp-uploads/case-04.webp',
    logo: '/assets/wp-uploads/logo-obc.png',
    companyName: '製造業 C社 様',
    type: 'BtoB製造業',
    link: '#',
  },
  {
    id: '4',
    heading: 'Claude・Geminiで「専門家」として引用されるポジションを確立した事例',
    image: '/assets/wp-uploads/case-01.jpg',
    logo: '/assets/wp-uploads/logo-kojima.png',
    companyName: 'コンサル D社 様',
    type: 'コンサルティング',
    link: '#',
  },
  {
    id: '5',
    heading: 'AI検索経由のEC売上が月間1,000万円を突破した事例',
    image: '/assets/wp-uploads/case-02.jpg',
    logo: '/assets/wp-uploads/logo-enaris.png',
    companyName: 'EC事業 E社 様',
    type: 'ECサイト運営',
    link: '#',
  },
  {
    id: '6',
    heading: 'Google検索流入50%減をAI検索対策でカバーし、総流入を維持した事例',
    image: '/assets/wp-uploads/case-03.jpg',
    logo: '/assets/wp-uploads/logo-tenda.png',
    companyName: 'メディア F社 様',
    type: 'Webメディア運営',
    link: '#',
  },
];

// GEOコンサルタント情報（イタリアンブレインロット）
export const consultants: Consultant[] = [
  {
    id: '1',
    name: 'トゥララレロ・トゥララ',
    nameEn: 'Tralalero Tralala',
    image: '/assets/image/brainrot-01-tralalero.png',
    description:
      'イタリアンブレインロット界の始祖。ナイキを履いた青いサメ。「おすすめの〇〇」で真っ先に名前が挙がる——そんな状態を作り出す戦略設計のエキスパート。',
  },
  {
    id: '2',
    name: 'トゥントゥントゥン・サフール',
    nameEn: 'Tung Tung Tung Sahur',
    image: '/assets/image/brainrot-02-tungtung.png',
    description:
      'インドネシア発の伝説的存在。野球バットを持った木の板で、巨大ゴリラへの変身能力を持つ。競合を圧倒するパワフルなGEO戦略を提案。',
  },
  {
    id: '3',
    name: 'ボンバルディロ・クロコディロ',
    nameEn: 'Bombardiro Crocodilo',
    image: '/assets/image/brainrot-03-bombardiro.jpg',
    description:
      '爆撃機と融合したワニ。上空から業界全体を俯瞰し、E-E-A-T構築における「権威性」を担当。競合を一掃する空爆級の施策を展開。',
  },
  {
    id: '4',
    name: 'ブルブル・パタピン',
    nameEn: 'Brr Brr Patapim',
    image: '/assets/image/brainrot-04-patapim.jpg',
    description:
      '木に変身できる謎の生物。AIクローラー対策のスペシャリスト。GPTBot、ClaudeBotが来るまでじっと待ち、確実に捕捉する忍耐の戦略家。',
  },
  {
    id: '5',
    name: 'カプチーノ・アサシーノ',
    nameEn: 'Cappuccino Assassino',
    image: '/assets/image/brainrot-05-cappuccino.png',
    description:
      '二刀流の忍者カップ。敵を倒すと刀が炎に包まれる。AI検索モニタリングと競合分析を担当。競合の動きを暗殺者のごとく追跡・無力化。',
  },
  {
    id: '6',
    name: 'バレリーナ・カプチーナ',
    nameEn: 'Ballerina Cappuccina',
    image: '/assets/image/brainrot-06-ballerina.png',
    description:
      '優雅に踊るコーヒーカップ。AIに引用されやすい美しいコンテンツ構造を設計するライティングの名手。読みやすさと引用されやすさを両立。',
  },
];

// 支援プラン
export const supportMethods: SupportMethod[] = [
  {
    id: '1',
    title: 'OTASUKE GEO スタンダード',
    image: '/assets/image/choice-pct01.png',
    imageMobile: '/assets/image/choice-pct-sp01.png',
    subHeading: 'AIの回答に貴社を登場させる——戦略設計から実行まで一気通貫サポート',
    description:
      'ChatGPT・Perplexity・Claude・Geminiでの現状分析から、回答に登場するための戦略策定、コンテンツ設計、E-E-A-T構築、AIクローラー対策、継続モニタリングまで。AI検索対策をワンストップで支援します。',
    recommendations: [
      'ChatGPTやPerplexityで自社が全く表示されない方',
      'AIの回答で競合に負けている状態を逆転したい方',
      'AI検索時代のマーケティング戦略を構築したい方',
    ],
    caseLink: '#',
    caseLinkText: '導入事例を見る',
  },
  {
    id: '2',
    title: 'OTASUKE GEO プレミアム',
    image: '/assets/image/choice-pct02.png',
    imageMobile: '/assets/image/choice-pct-sp02.png',
    subHeading: '専任コンサルタントが伴走し、AI検索での圧倒的No.1ポジションを構築',
    description:
      '専任のGEOコンサルタントが貴社プロジェクトに深く入り込み、AI検索での業界No.1を目指します。週次モニタリング、AIの回答変化への即時対応、競合動向分析、新AIへの先行対応まで、徹底サポート。',
    recommendations: [
      'AI検索で業界No.1のポジションを確立したい方',
      '競合に先駆けてAI検索対策を徹底したい方',
      'AI時代のブランディングを本格的に構築したい方',
    ],
    caseLink: '#',
    caseLinkText: '導入事例を見る',
  },
];

// 契約フロー
export const contractSteps: ContractStep[] = [
  {
    stepImage: '/assets/image/consultant-flow-step01.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step01.png',
    image: '/assets/image/contract-flow-pct01.png',
    title: 'STEP1: 無料AI検索診断',
    description: 'ChatGPT・Perplexity・Claudeなど主要AIでの貴社の現状を無料診断。AIが貴社をどう認識しているか、競合との差はどこかをレポートします。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step02.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step02.png',
    image: '/assets/image/contract-flow-pct02.png',
    title: 'STEP2: 戦略提案',
    description: '診断結果をもとに、AIの回答に貴社を登場させるための具体的な戦略と施策プランをご提案。目標、優先施策、スケジュールを明確化します。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step03.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step03.png',
    image: '/assets/image/contract-flow-pct03.png',
    title: 'STEP3: ご契約',
    description: 'ご提案内容にご納得いただけましたら、OTASUKE GEOのサービス契約を締結。最短で翌日からプロジェクトをスタートできます。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step04.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step04.png',
    image: '/assets/image/contract-flow-pct04.png',
    title: 'STEP4: 施策実行',
    description: 'AIクローラー対策、コンテンツ最適化、E-E-A-T構築など、戦略に基づいた施策を順次実行。AIの回答に変化が現れ始めます。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step05.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step01.png',
    image: '/assets/image/contract-flow-pct05.png',
    title: 'STEP5: モニタリング・改善',
    description: 'AIの回答状況を継続的にモニタリングし、効果検証と改善を繰り返します。AIの傾向変化にも素早く対応し、最適なポジションを維持。',
  },
];

// FAQ: GEO対策に関するよくある質問
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'GEO（生成エンジン最適化）とは何ですか？SEOとの違いは？',
    answer:
      'GEO（Generative Engine Optimization）は、ChatGPT・Perplexity・Claude・Geminiなどの生成AIで自社が回答・引用されるよう最適化する施策です。従来のSEOがGoogleの検索結果で上位表示を目指すのに対し、GEOは「AIの回答に自社を登場させる」ことを目指します。検索行動がAIへシフトする今、GEOは必須のマーケティング施策です。',
  },
  {
    id: '2',
    question: 'ChatGPTやPerplexityで自社が表示されません。表示させることは可能ですか？',
    answer:
      'はい、可能です。AIは信頼性の高い情報源を優先的に引用します。OTASUKE GEOでは、AIに「この企業の情報は信頼できる」と認識させるE-E-A-T構築、AIが好むコンテンツ設計、AIクローラーへの技術対応を実施。AIの回答に貴社が登場する状態を作り出します。',
  },
  {
    id: '3',
    question: 'GEO対策を始めてから、どのくらいで効果が出ますか？',
    answer:
      'AIの種類や施策内容によりますが、早いケースでは1〜2週間で回答に変化が現れます。AIは従来の検索エンジンより更新サイクルが速いため、SEOに比べて短期間で効果が見えやすい傾向があります。安定的なポジション確立には2〜3ヶ月程度の継続施策を推奨しています。',
  },
  {
    id: '4',
    question: 'AIが自社について間違った情報を回答しています。修正できますか？',
    answer:
      'はい、対応可能です。AIの誤回答（ハルシネーション）は多くの企業が抱える課題です。OTASUKE GEOでは、正確な情報をAIが取得しやすい形式で発信し、学習ソースを最適化。構造化データの実装により、AIが正確に情報を認識できる状態を構築します。',
  },
  {
    id: '5',
    question: 'どのAI検索エンジンに対応していますか？',
    answer:
      'ChatGPT（OpenAI）、Perplexity、Claude（Anthropic）、Gemini（Google）、SearchGPT、Microsoft Copilot、Grokなど、主要な生成AI・AI検索エンジンに対応しています。新しいAIが登場した際も、いち早く対応策を研究・提供します。',
  },
  {
    id: '6',
    question: 'GEO対策をすると、従来のGoogle SEOに悪影響はありますか？',
    answer:
      'いいえ、むしろ良い影響があります。GEO対策の多くは、E-E-A-T強化、高品質コンテンツ作成、構造化データ実装など、Google SEOにもプラスとなる施策です。OTASUKE GEOでは、Google検索とAI検索の両方で成果を出す統合的なアプローチを採用しています。',
  },
  {
    id: '7',
    question: 'AIの回答をモニタリングできますか？',
    answer:
      'はい。OTASUKE GEOでは、主要AIでの自社・競合の回答状況を定期的にモニタリングするサービスを提供しています。「どのクエリで自社が表示されているか」「競合の状況」「回答傾向の変化」をレポートし、継続的な改善に活かします。',
  },
  {
    id: '8',
    question: 'AIクローラー（GPTBot等）への対応は何をすればいいですか？',
    answer:
      'AIクローラー対応には、robots.txtの設定、クローラビリティの確保、構造化データの実装、サイト速度の最適化などがあります。OTASUKE GEOでは、GPTBot、ClaudeBot、PerplexityBot、Googlebot（Gemini用）など各AIクローラーの特性に合わせた技術対応を行います。',
  },
  {
    id: '9',
    question: 'BtoB企業でもGEO対策は効果がありますか？',
    answer:
      'はい、BtoB企業にこそGEO対策は効果的です。購買担当者や経営者がChatGPTやPerplexityで「〇〇 おすすめ」「〇〇 比較」と調べるケースが急増しています。AIの回答で「この企業がおすすめです」と推薦される状態を作ることで、リード獲得に直結します。',
  },
  {
    id: '10',
    question: 'OTASUKE GEOの料金はいくらですか？',
    answer:
      '料金は、対策対象のAI数、Webサイトの規模、目標ポジション、必要な施策量によって異なります。まずは無料のAI検索診断で現状を把握いただき、その結果をもとに最適なプランと料金をご提案します。お気軽にお問い合わせください。',
  },
];

// 会社情報
export const companyInfo: CompanyInfo[] = [
  { label: '会社名', value: '株式会社ZETTAI' },
  { label: '英文社名', value: 'ZETTAI Inc.' },
  { label: '設立', value: '2025年7月22日' },
  { label: '資本金', value: '400万円' },
  { label: '役員', value: '代表取締役　小潟 一翔\n共同創業者　清水 望' },
  { label: '従業員数', value: '14名' },
  {
    label: '事業内容',
    value: 'GEO対策・AI検索最適化「OTASUKE GEO」\nAI Coding Agent育成プログラム「おうとまくん」\n業務最適AI伴走サービス「学ぶAI」\n月額1万円からのエンジニア活用サービス\nリスクゼロの開発サービス「1円開発」\nAIコンサルティング\n営業のトスアップ代行',
  },
  { label: '本社所在地', value: '〒106-0045 東京都港区麻布十番1-5-10 第2石原ビル 別館 2階' },
  { label: 'コールセンター', value: '〒170-0013 東京都豊島区東池袋3-20-3 東池袋SSビル' },
  { label: 'メール', value: 'contact@zettai.co.jp' },
];

export const externalLinks = {
  download: '#download',
  consultation: '#consultation',
  caseList: '#cases',
  caseDownload: '#case-download',
  company: 'https://zettai.co.jp/',
  privacy: 'https://zettai.co.jp/privacy/',
};

export const contactInfo = {
  phone: '03-0000-0000',
  hours: '平日10:00〜18:00（土日祝日除く）',
  email: 'contact@zettai.co.jp',
};

// GEO対策用メタデータ
export const geoMetadata = {
  serviceName: 'OTASUKE GEO（オタスケGEO）',
  serviceDescription: '株式会社ZETTAIが提供する「OTASUKE GEO」は、ChatGPT・Perplexity・Claude・Geminiなど主要生成AIで自社が回答・引用されるよう最適化するGEO（Generative Engine Optimization）サービス。AIに「選ばれる」コンテンツ設計、E-E-A-T構築、AIクローラー対策、継続的モニタリングにより、AI時代の集客・ブランディングを支援します。',
  targetAudience: 'AI検索で自社が表示されない、競合に負けている、AIの誤回答に困っている企業のマーケティング担当者・経営者',
  serviceArea: '日本全国（オンライン対応）/ 東京都港区麻布十番（対面対応）',
  priceRange: '要見積もり（無料AI検索診断後にご提案）',
  resultPeriod: '早いケースで1〜2週間、安定的なポジション確立には2〜3ヶ月',
  supportedAIEngines: ['ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'SearchGPT', 'Microsoft Copilot', 'Grok'],
  contactEmail: 'contact@zettai.co.jp',
};
