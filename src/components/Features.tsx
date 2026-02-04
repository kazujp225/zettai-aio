import React from 'react';
import { features } from '../data/siteData';

const Features: React.FC = () => {
  return (
    <section id="content--feature" className="content">
      <h2 className="heading">
        <span className="text-sm">ZETTAIのAIOコンサルティング</span>
        <br />
        4つの特長
      </h2>
      <div className="card__wrapper">
        {features.map((feature) => (
          <div className="card" key={feature.id}>
            <div className="card__sub">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="card__main">
              <h3 className="heading">
                <span className="number">
                  <img src={feature.numberImage} alt={feature.number} />
                </span>
                <span
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: feature.title
                      .replace(/成果が出るSEO戦略/g, '<span class="u-text-light-blue">成果が出るSEO戦略</span>')
                      .replace(/戦略策定/g, '<span class="u-text-light-blue">戦略策定</span>')
                      .replace(/効果検証/g, '<span class="u-text-light-blue">効果検証</span>')
                      .replace(/アクセス数/g, '<span class="u-text-light-blue">アクセス数</span>')
                      .replace(/コンバージョン数/g, '<span class="u-text-light-blue">コンバージョン数</span>')
                      .replace(/一気通貫/g, '<span class="u-text-light-blue">一気通貫</span>')
                      .replace(/最短の成果創出/g, '<span class="u-text-light-blue">最短の成果創出</span>'),
                  }}
                />
              </h3>
              <p className="pct--xs u-sm-hidden">
                <img src={feature.image} alt={feature.title} />
              </p>
              <p className="info">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
