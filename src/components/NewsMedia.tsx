import React from 'react';
import { newsArticles } from '../data/siteData';

const categoryLabels: Record<string, string> = {
  research: '調査',
  case: '事例',
  trend: 'トレンド',
  technology: 'テクノロジー',
};

const categoryColors: Record<string, string> = {
  research: '#00b8d4',
  case: '#00c853',
  trend: '#ff6d00',
  technology: '#7c4dff',
};

const NewsMedia: React.FC = () => {
  return (
    <section id="content--news" className="content content--pale-blue">
      <h2 className="heading">
        <span className="u-text-light-blue">業界メディア</span>が報じる
        <br className="u-sm-hidden" />
        <span className="u-text-light-blue">AI検索対策</span>の重要性
      </h2>

      <p className="news-lead">
        日経クロストレンド、Business Insiderなど主要メディアが連日報道。
        <br className="u-sm-hidden" />
        <strong>GEO/AIO対策は、今すぐ取り組むべき経営課題</strong>として注目されています。
      </p>

      <div className="news-grid">
        {newsArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
          >
            <div className="news-card__header">
              <span
                className="news-card__category"
                style={{ backgroundColor: categoryColors[article.category] }}
              >
                {categoryLabels[article.category]}
              </span>
              <span className="news-card__source">{article.source}</span>
            </div>
            <h3 className="news-card__title">{article.title}</h3>
            {article.highlight && (
              <span className="news-card__highlight">{article.highlight}</span>
            )}
            <span className="news-card__link">
              記事を読む
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <div className="news-stats">
        <div className="news-stats__item">
          <span className="news-stats__number">83<small>社</small></span>
          <span className="news-stats__label">調査対象企業</span>
        </div>
        <div className="news-stats__item">
          <span className="news-stats__number">7<small>割</small></span>
          <span className="news-stats__label">が「機会」と回答</span>
        </div>
        <div className="news-stats__item">
          <span className="news-stats__number">6<small>割超</small></span>
          <span className="news-stats__label">が流入減を実感</span>
        </div>
      </div>

      <p className="news-cta-text">
        <span className="u-text-light-blue">競合より先に動いた企業</span>が、AI検索時代の勝者になります。
      </p>
    </section>
  );
};

export default NewsMedia;
