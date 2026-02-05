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

// 実績データ: AI検索での具体的成果
export const resultCards: ResultCard[] = [
  {
    id: '1',
    heading: 'ChatGPTで「おすすめの〇〇」と聞くと自社サービスが回答される状態を実現、問い合わせ数が3倍に',
    image: '/assets/image/result-pct03.png',
    logo: '/assets/image/result-logo-tenda.png',
    companyName: 'A社 様',
    type: 'IT企業／BtoBサービス',
  },
  {
    id: '2',
    heading: 'Perplexityの検索結果で競合を抑えて1位表示を獲得、AI経由の月間リード数が200件突破',
    image: '/assets/image/result-pct01.png',
    logo: '/assets/image/result-logo-cimtops.png',
    companyName: 'B社 様',
    type: 'ソフトウェア企業／SaaS',
  },
  {
    id: '3',
    heading: 'Claude・Geminiの回答で業界No.1として紹介されるポジションを確立、ブランド認知度が急上昇',
    image: '/assets/image/result-pct02.png',
    logo: '/assets/image/result-logo-saraya.png',
    companyName: 'C社 様',
    type: '製造業／BtoB',
  },
  {
    id: '4',
    heading: '生成AIが自社を「専門家」として引用する状態を構築、AI時代の権威性確立に成功',
    image: '/assets/image/result-pct04.png',
    logo: '/assets/image/result-logo-asiro.png',
    companyName: 'D社 様',
    type: 'コンサルティング業',
  },
  {
    id: '5',
    heading: 'AI検索で「買うならここ」と推薦される状態を実現、EC売上が前年比280%増を達成',
    image: '/assets/image/result-pct05.png',
    logo: '/assets/image/result-logo-ibasen.png',
    companyName: 'E社 様',
    type: 'EC事業者',
  },
];

// 課題: AI検索時代の企業が抱える悩み
export const issueCards: IssueCard[] = [
  {
    id: '1',
    comment: 'ChatGPTに自社のことを聞いても、競合他社ばかり回答される',
    image: '/assets/image/issue-pct01.png',
  },
  {
    id: '2',
    comment: 'Perplexityで検索すると自社が全く表示されず、存在しないも同然になっている',
    image: '/assets/image/issue-pct02.png',
    imageMobile: '/assets/image/issue-pct02--left.png',
  },
  {
    id: '3',
    comment: '生成AIが自社について誤った情報を回答してしまい、ブランドイメージが損なわれている',
    image: '/assets/image/issue-pct03.png',
  },
  {
    id: '4',
    comment: 'Google検索からの流入が減少し、AI検索への対応が急務だが何をすればいいか分からない',
    image: '/assets/image/issue-pct04.png',
    imageMobile: '/assets/image/issue-pct04--left.png',
  },
  {
    id: '5',
    comment: 'AIに自社を推薦してもらうための具体的な施策が分からず、手が打てない',
    image: '/assets/image/issue-pct05.png',
  },
];

// 特長: OTASUKE GEOのサービス特長
export const features: Feature[] = [
  {
    id: '1',
    number: '01',
    numberImage: '/assets/image/feature-num01.png',
    title: '生成AIに「選ばれる」コンテンツ設計で、AIの回答に自社を登場させる',
    image: '/assets/image/feature-pct01.png',
    description:
      'ChatGPT、Perplexity、Claude、Geminiなど主要な生成AIは、それぞれ異なるロジックで回答を生成します。ZETTAIのOMASE AIOは、各AIの回答生成パターンを徹底分析し、「このAIはどんな情報源を引用するか」「どんな形式のコンテンツを好むか」を解明。AIに選ばれるコンテンツ構造を設計し、自社が回答に登場する状態を作り出します。',
  },
  {
    id: '2',
    number: '02',
    numberImage: '/assets/image/feature-num02.png',
    title: 'AIが「信頼できる情報源」と認識する権威性・専門性の構築',
    image: '/assets/image/feature-pct02.png',
    description:
      '生成AIは回答を作成する際、信頼性の高い情報源を優先的に引用します。OTASUKE GEOでは、AIから「この企業は専門家だ」「この情報は信頼できる」と認識されるためのE-E-A-T（経験・専門性・権威性・信頼性）構築を支援。構造化データの実装、専門家コンテンツの設計、被引用戦略により、AIが自社を権威ある情報源として扱う状態を実現します。',
  },
  {
    id: '3',
    number: '03',
    numberImage: '/assets/image/feature-num03.png',
    title: 'AIの回答を「モニタリング」し、継続的に露出を最適化',
    image: '/assets/image/feature-pct03.png',
    description:
      '生成AIの回答は常に変化します。昨日まで表示されていた自社が、今日は消えているということも起こります。OTASUKE GEOでは、主要AI検索エンジンでの自社・競合の回答状況を定期的にモニタリング。AIの回答傾向の変化をいち早く検知し、常に自社が最適なポジションを維持できるよう継続的にチューニングを行います。',
  },
  {
    id: '4',
    number: '04',
    numberImage: '/assets/image/feature-num04.png',
    title: 'AIクローラー対策で、そもそもAIに「認識される」土台を構築',
    image: '/assets/image/feature-pct04.png',
    description:
      'どんなに良いコンテンツを作っても、AIのクローラーに正しく取得されなければ意味がありません。OTASUKE GEOでは、GPTBot、ClaudeBot、PerplexityBotなど各AIクローラーへの技術的対応を実施。robots.txtの最適化、クローラビリティの改善、構造化データの実装により、AIがコンテンツを正確に理解・取得できる基盤を構築します。',
  },
];

// 対応目的: AIO施策で実現できること
export const fieldPurposes: FieldItem[] = [
  { image: '/assets/image/feild-purpose-pct01.png', label: 'ChatGPTの回答に自社を表示させたい' },
  { image: '/assets/image/feild-purpose-pct02.png', label: 'Perplexityで競合より上位に表示されたい' },
  { image: '/assets/image/feild-purpose-pct03.png', label: '生成AIに「おすすめ」として推薦されたい' },
  { image: '/assets/image/feild-purpose-pct04.png', label: 'AIの回答で業界No.1のポジションを取りたい' },
  { image: '/assets/image/feild-purpose-pct05.png', label: 'AIが誤情報を回答する状態を改善したい' },
  { image: '/assets/image/feild-purpose-pct06.png', label: 'AI検索経由の問い合わせ・売上を増やしたい' },
  { image: '/assets/image/feild-purpose-pct07.png', label: 'Google検索減少をAI検索でカバーしたい' },
  { image: '/assets/image/feild-purpose-pct08.png', label: 'AI時代のブランディング戦略を構築したい' },
  { image: '/assets/image/feild-purpose-pct09.png', label: 'AIクローラーに正しく認識されるサイトにしたい' },
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
    heading: 'ChatGPTで「業界 おすすめ」と聞くと自社が1番目に回答される状態を実現した事例',
    image: '/assets/wp-uploads/case-06.jpg',
    logo: '/assets/wp-uploads/logo-assist.png',
    companyName: 'IT企業 A社 様',
    type: 'BtoBサービス',
    link: '#',
  },
  {
    id: '2',
    heading: 'Perplexityの検索結果で全ての関連クエリで上位表示を獲得した事例',
    image: '/assets/wp-uploads/case-05.jpg',
    logo: '/assets/wp-uploads/logo-assist.png',
    companyName: 'SaaS企業 B社 様',
    type: 'クラウドサービス',
    link: '#',
  },
  {
    id: '3',
    heading: '生成AIの誤回答を修正し、正確なブランド情報が回答されるよう改善した事例',
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

// コンサルタント情報（イタリアンブレインロット）
export const consultants: Consultant[] = [
  {
    id: '1',
    name: 'トゥララレロ・トゥララ',
    nameEn: 'Tralalero Tralala',
    image: '/assets/image/brainrot-01-tralalero.png',
    description:
      'イタリアンブレインロットの始祖にして最も人気のキャラクター。ナイキのシューズを履いた青いサメ。AI検索で「おすすめの〇〇」と聞かれたら真っ先に登場する戦略を得意とする。',
  },
  {
    id: '2',
    name: 'トゥントゥントゥン・サフール',
    nameEn: 'Tung Tung Tung Sahur',
    image: '/assets/image/brainrot-02-tungtung.png',
    description:
      'インドネシア発の恐怖の存在。野球バットを持った木の板の姿をしており、巨大なゴリラに変身する能力を持つ。サフール（ラマダンの早朝食）に呼ばれても起きないと現れるという。',
  },
  {
    id: '3',
    name: 'ボンバルディロ・クロコディロ',
    nameEn: 'Bombardiro Crocodilo',
    image: '/assets/image/brainrot-03-bombardiro.jpg',
    description:
      '爆撃機と融合したワニ。空から急降下してくる姿は圧巻。E-E-A-T構築において「権威性」を担当し、競合を上空から一掃する戦略を提案する。',
  },
  {
    id: '4',
    name: 'ブルブル・パタピン',
    nameEn: 'Brr Brr Patapim',
    image: '/assets/image/brainrot-04-patapim.jpg',
    description:
      '木に変身する能力を持つ謎の生物。AIクローラー対策を専門とし、GPTBot、ClaudeBotへの技術対応を担当。じっと動かずにクローラーを待ち受ける戦略が得意。',
  },
  {
    id: '5',
    name: 'カプチーノ・アサシーノ',
    nameEn: 'Cappuccino Assassino',
    image: '/assets/image/brainrot-05-cappuccino.png',
    description:
      '忍者カップ。二刀流の刀を操り、敵を倒すと刀が炎に包まれる。AI検索モニタリングと競合分析を担当し、競合の動きを暗殺者のごとく追跡する。',
  },
  {
    id: '6',
    name: 'バレリーナ・カプチーナ',
    nameEn: 'Ballerina Cappuccina',
    image: '/assets/image/brainrot-06-ballerina.png',
    description:
      'バレエを踊るコーヒーカップ。優雅な動きでコンテンツライティングを担当。生成AIが引用しやすい美しい構造・フォーマットでの記事設計が得意。',
  },
];

// 支援方法
export const supportMethods: SupportMethod[] = [
  {
    id: '1',
    title: 'OTASUKE GEO スタンダード',
    image: '/assets/image/choice-pct01.png',
    imageMobile: '/assets/image/choice-pct-sp01.png',
    subHeading: 'AIの回答に自社を登場させるための戦略設計から実行までをフルサポート',
    description:
      'ChatGPT・Perplexity・Claude・Geminiなど主要AI検索での露出状況を分析し、自社が回答に登場するための戦略を策定。AIが好むコンテンツ設計、E-E-A-T構築、AIクローラー対策、継続的なモニタリングまで一気通貫で支援します。',
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
    subHeading: '専任コンサルタントが伴走し、AI検索での圧倒的なポジション構築を実現',
    description:
      '専任のAIOコンサルタントが貴社のプロジェクトに深く入り込み、AI検索での業界No.1ポジション構築を目指します。週次のモニタリングレポート、AIの回答変化への即時対応、競合の動向分析、新しいAI検索エンジンへの先行対応まで、徹底的にサポートします。',
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
    description: 'ChatGPT・Perplexity・Claudeなど主要AI検索での貴社の現状を無料で診断。AIがどのように自社を認識しているか、競合との差分はどこかをレポートします。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step02.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step02.png',
    image: '/assets/image/contract-flow-pct02.png',
    title: 'STEP2: 戦略提案',
    description: '診断結果をもとに、AIの回答に自社を登場させるための具体的な戦略と施策プランをご提案。目標設定、優先施策、スケジュールを明確にします。',
  },
  {
    stepImage: '/assets/image/consultant-flow-step03.png',
    stepImageMobile: '/assets/image/consultant-flow-sp-step03.png',
    image: '/assets/image/contract-flow-pct03.png',
    title: 'STEP3: ご契約',
    description: 'ご提案内容にご納得いただけましたら、OTASUKE GEOのサービス契約を締結。最短で翌日からプロジェクトを開始できます。',
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
    description: 'AIの回答状況を継続的にモニタリングし、効果検証と改善を繰り返します。AIの傾向変化にも素早く対応し、最適なポジションを維持します。',
  },
];

// FAQ: AI検索最適化に関するよくある質問
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'AIO（AI検索最適化）とは何ですか？SEO対策との違いは？',
    answer:
      'AIO（AI Optimization）は、ChatGPT・Perplexity・Claude・Geminiなどの生成AIや AI検索エンジンで自社が回答・引用されるよう最適化する施策です。従来のSEOがGoogleの検索結果で上位表示を目指すのに対し、AIOは「AIの回答に自社を登場させる」ことを目指します。検索行動がGoogle検索からAI検索へシフトする中、AIOは今後のマーケティングに必須の施策となります。',
  },
  {
    id: '2',
    question: 'ChatGPTやPerplexityで自社が表示されないのですが、表示させることはできますか？',
    answer:
      'はい、可能です。AIが回答を生成する際には、信頼性の高い情報源を優先的に引用するロジックがあります。OTASUKE GEOでは、AIが「この企業の情報は信頼できる」と認識するためのE-E-A-T構築、AIが好む形式でのコンテンツ設計、AIクローラーへの技術対応を実施し、AIの回答に自社が登場する状態を作り出します。',
  },
  {
    id: '3',
    question: 'AIO対策を始めてから、どのくらいでAIの回答に変化が現れますか？',
    answer:
      'AIの種類や施策内容によりますが、早いケースでは施策実行後1〜2週間で回答に変化が現れ始めます。AIは従来の検索エンジンより学習・更新サイクルが速いため、SEOに比べて短期間で効果が見えやすい傾向があります。ただし、安定的なポジション確立には2〜3ヶ月程度の継続的な施策が推奨されます。',
  },
  {
    id: '4',
    question: '生成AIが自社について間違った情報を回答しています。修正できますか？',
    answer:
      'はい、対応可能です。AIの誤回答（ハルシネーション）は多くの企業が抱える課題です。OTASUKE GEOでは、正確な情報をAIが取得しやすい形式で発信し、AIの学習ソースを最適化することで誤回答を減少させます。また、構造化データの実装により、AIが正確に情報を認識できる状態を構築します。',
  },
  {
    id: '5',
    question: 'どのAI検索エンジンに対応していますか？',
    answer:
      'ChatGPT（OpenAI）、Perplexity、Claude（Anthropic）、Gemini（Google）、SearchGPT、Microsoft Copilot、Bing Chat、Grokなど、主要なAI検索エンジン・生成AIに対応しています。新しいAI検索サービスが登場した際も、いち早く対応策を研究・提供します。',
  },
  {
    id: '6',
    question: 'AIO対策をすると、従来のGoogle SEOに悪影響はありますか？',
    answer:
      'いいえ、むしろ良い影響があります。AIO対策の多くは、E-E-A-T強化、高品質コンテンツ作成、構造化データ実装など、Google SEOにもプラスとなる施策です。OTASUKE GEOでは、Google検索とAI検索の両方で成果を出す統合的なアプローチを採用しています。',
  },
  {
    id: '7',
    question: 'AIの回答をモニタリングすることはできますか？',
    answer:
      'はい、OTASUKE GEOでは、主要AI検索エンジンでの自社・競合の回答状況を定期的にモニタリングするサービスを提供しています。「どのクエリで自社が表示されているか」「競合はどのように回答されているか」「回答傾向にどんな変化があるか」をレポートし、継続的な改善に活かします。',
  },
  {
    id: '8',
    question: 'AIクローラー（GPTBot等）への対応は何をすればいいですか？',
    answer:
      'AIクローラー対応には、robots.txtの設定、クローラビリティの確保、構造化データの実装、サイト速度の最適化などがあります。OTASUKE GEOでは、GPTBot、ClaudeBot、PerplexityBot、Googlebot（Gemini用）など各AIクローラーの特性に合わせた技術対応を行い、AIがコンテンツを正確に取得・理解できる状態を構築します。',
  },
  {
    id: '9',
    question: 'BtoB企業でもAIO対策は効果がありますか？',
    answer:
      'はい、BtoB企業にこそAIO対策は効果的です。購買担当者や経営者がChatGPTやPerplexityで「〇〇 おすすめ」「〇〇 比較」と調べるケースが増えています。AIの回答で「この企業がおすすめです」と推薦される状態を作ることで、問い合わせ・リード獲得に直結します。',
  },
  {
    id: '10',
    question: 'OTASUKE GEOの料金はいくらですか？',
    answer:
      '料金は、対策対象のAI検索エンジン数、Webサイトの規模、目標とするポジション、必要な施策量によって異なります。まずは無料のAI検索診断で現状を把握いただき、その結果をもとに最適なプランと料金をご提案いたします。お気軽にお問い合わせください。',
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
    value: 'AI Coding Agent育成プログラム「おうとまくん」\n業務最適AI伴走サービス「学ぶAI」\n月額1万円からのエンジニア活用サービス\nリスクゼロの開発サービス「1円開発」\nAIコンサルティング\nLLMO対策\nAIO対策「OTASUKE GEO」\n営業のトスアップ代行',
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

// AIO対策用メタデータ
export const aioMetadata = {
  serviceName: 'OTASUKE GEO（AI検索最適化サービス）',
  serviceDescription: '株式会社ZETTAIが提供する「OTASUKE GEO」は、ChatGPT・Perplexity・Claude・Geminiなど主要AI検索エンジンで自社が回答・引用されるよう最適化するサービス。AIに「選ばれる」コンテンツ設計、E-E-A-T構築、AIクローラー対策、継続的モニタリングにより、AI時代の集客・ブランディングを支援します。',
  targetAudience: 'AI検索で自社が表示されない、競合に負けている、AIの誤回答に困っている企業のマーケティング担当者・経営者',
  serviceArea: '日本全国（オンライン対応）/ 東京都港区麻布十番（対面対応）',
  priceRange: '要見積もり（無料AI検索診断後にご提案）',
  resultPeriod: '早いケースで1〜2週間、安定的なポジション確立には2〜3ヶ月',
  supportedAIEngines: ['ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'SearchGPT', 'Microsoft Copilot', 'Bing Chat', 'Grok'],
  contactEmail: 'contact@zettai.co.jp',
};
