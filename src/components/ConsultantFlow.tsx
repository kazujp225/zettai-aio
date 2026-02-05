import React, { useState } from 'react';

interface TabContent {
  id: string;
  label: string;
  title: string;
  image: string;
  description: string;
}

interface FlowStepProps {
  stepId: string;
  stepImage: string;
  title: string;
  tabs: TabContent[];
  tabColClass?: string;
}

const FlowStep: React.FC<FlowStepProps> = ({ stepId, stepImage, title, tabs, tabColClass = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <h3 className="heading">
        <span className="pct">
          <img src={stepImage} alt={`STEP`} />
        </span>
        <span>{title}</span>
      </h3>

      <div id={stepId} className="tab__wrapper">
        <div className={`tabs ${tabColClass}`}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tablink ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`${stepId}-tab${String.fromCharCode(65 + index)}`}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            <div className="tab__inner">
              <div className="tab__content">
                <h4 className="sub-heading">{tab.title}</h4>
                <p className="pct">
                  <img src={tab.image} alt={tab.title} />
                </p>
                <p className="info">{tab.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ConsultantFlow: React.FC = () => {
  const step1Tabs: TabContent[] = [
    {
      id: 'overview',
      label: '概要',
      title: 'AI検索エンジンを分析し、効果の高いGEO戦略を策定',
      image: '/assets/image/consultant-flow-step01-pct01.png',
      description:
        'ChatGPT・Perplexity・Claude・Geminiなど主要AI検索エンジンの特性分析と、3C分析（AI検索市場×競合×自社）を実施し、GEO戦略を策定します。各AIの回答傾向、引用元の特徴、E-E-A-T評価基準を精緻に調査分析し、根拠のある戦略を策定することが可能です。',
    },
    {
      id: 'market',
      label: 'AI検索市場分析',
      title: 'AI検索エンジンの特性と市場を分析',
      image: '/assets/image/consultant-flow-step01-pct02.png',
      description:
        '自社に関連するAI検索市場を分析し、各AI検索エンジンでの露出機会、競合の引用状況、AIが重視するコンテンツ特性を特定します。自社が狙うべき「AI検索領域」とその領域で成功している「競合サイト」を明確にします。',
    },
    {
      id: 'competitor',
      label: '競合分析',
      title: 'AI検索で成功している競合の「成功要因」を分析',
      image: '/assets/image/consultant-flow-step01-pct03.png',
      description:
        'AI検索で引用・推薦されている「競合サイト」のコンテンツ戦略・構造を分析し、成功要因を紐解くことで自社がAI検索で選ばれるための「勝ち方」を見出します。',
    },
    {
      id: 'self',
      label: '自社分析',
      title: 'GEO上の課題や競合サイトとの差分を分析',
      image: '/assets/image/consultant-flow-step01-pct04.png',
      description: '自社サイトのAI検索対応状況を分析し、GEO上の課題や競合サイトとの差分を特定します。',
    },
  ];

  const step2Tabs: TabContent[] = [
    {
      id: 'overview',
      label: '概要',
      title: 'GEO戦略に基づき、成果に直結する施策を立案',
      image: '/assets/image/consultant-flow-step02-pct01.png',
      description:
        'GEO戦略に基づき、最短でAI検索での成果に結びつく施策を立案します。AI検索での露出を増やすGEO施策に加え、コンバージョン率を高めるCRO施策を立案・実行することで、AI経由のコンバージョン数の最大化および売上増大を実現します。',
    },
    {
      id: 'seo',
      label: 'GEO施策',
      title: 'AI検索経由のアクセス数増加でCV数を最大化',
      image: '/assets/image/consultant-flow-step02-pct02.png',
      description:
        'AIクローラー対策でAIがコンテンツを適切に取得できる基盤を作ります。構造化データ実装でAIの理解を促進し、E-E-A-T強化でAIからの信頼性を高めます。AIが引用しやすいコンテンツ構造と質の高い情報提供により、AI検索での露出とサイトアクセス数・コンバージョン数の最大化を実現します。',
    },
    {
      id: 'cro',
      label: 'CRO施策',
      title: 'AI検索経由アクセス後のCVR改善でCV数を最大化',
      image: '/assets/image/consultant-flow-step02-pct03.png',
      description:
        'AI検索からの訪問者が資料請求や商品購入などのアクションを起こす割合を高めるために、ページの構成・内容や導線を工夫し、コンバージョン率の改善によってコンバージョン数の最大化を実現します。アクセス解析、ヒートマップ分析、ABテスト等を活用し、調査分析／施策立案／効果検証を行います。',
    },
  ];

  const step3Tabs: TabContent[] = [
    {
      id: 'overview',
      label: '概要',
      title: '施策の実行・実装を手厚くサポート',
      image: '/assets/image/consultant-flow-step03-pct01.png',
      description:
        '施策毎に実装手順書やマニュアルを作成し、電話・メール・チャット・ミーティングで実装をサポートします。また、社内エンジニアや開発会社、記事制作会社、代理店等との連携やディレクションを行うことも可能です。GEOコンテンツの制作に関しては、AIに選ばれるコンテンツ設計から構成案作成、ライティングまでまとめてご依頼いただけます。',
    },
    {
      id: 'content',
      label: 'GEOコンテンツ制作',
      title: 'AIに選ばれる構造と信頼性でAI検索上位を獲得するコンテンツを制作',
      image: '/assets/image/consultant-flow-step03-pct02.jpg',
      description:
        'AI検索エンジンの特性を分析し、AIが引用しやすい構造・フォーマットでコンテンツを設計します。経験豊富なコンテンツエディターが、Q&A形式、データに基づく信頼性の高い情報、専門家監修コンテンツなど、AIに選ばれる質の高いコンテンツを制作します。',
    },
  ];

  const step4Tabs: TabContent[] = [
    {
      id: 'overview',
      label: '概要',
      title: 'PDCAを回しながら各施策の成果を最大化',
      image: '/assets/image/consultant-flow-step04-pct01.png',
      description:
        '各施策実行後、効果検証と改善を繰り返しながら成果の最大化を図ります。各種レポートの作成によって現状を見える化し、データ解析によって原因を特定。定例ミーティングを通じて現状と課題を共有し、成果を最大化する改善提案を行います。',
    },
    {
      id: 'verify',
      label: '効果検証',
      title: '各種レポート作成で効果検証体制を構築',
      image: '/assets/image/consultant-flow-step04-pct02.png',
      description:
        'サイト全体の現状がわかる「月次レポート」、各施策の結果がわかる「効果検証レポート」、対策キーワードの獲得順位がわかる「順位計測レポート」等を作成し、常に現状がわかる体制を構築します。',
    },
    {
      id: 'improve',
      label: '改善提案',
      title: 'データに基づく要因分析で的確な対策を提案',
      image: '/assets/image/consultant-flow-step04-pct03.png',
      description:
        'データ分析、アクセス解析、ヒートアップ分析、ABテスト等を通じて結果の原因・要因を特定し、成果に繋がる的確な対策を提案します。',
    },
  ];

  return (
    <section id="content--consultant-flow" className="content">
      <h2 className="heading">GEOコンサルティングの流れ</h2>
      <p className="lead">戦略策定から効果検証まで一気通貫で支援します。</p>

      <FlowStep
        stepId="step01"
        stepImage="/assets/image/consultant-flow-step01.png"
        title="戦略策定"
        tabs={step1Tabs}
      />

      <FlowStep
        stepId="step02"
        stepImage="/assets/image/consultant-flow-step02.png"
        title="施策立案"
        tabs={step2Tabs}
        tabColClass="tabs-col3"
      />

      <FlowStep
        stepId="step03"
        stepImage="/assets/image/consultant-flow-step03.png"
        title="施策実行"
        tabs={step3Tabs}
        tabColClass="tabs-col2"
      />

      <FlowStep
        stepId="step04"
        stepImage="/assets/image/consultant-flow-step04.png"
        title="検証改善"
        tabs={step4Tabs}
        tabColClass="tabs-col3"
      />
    </section>
  );
};

export default ConsultantFlow;
