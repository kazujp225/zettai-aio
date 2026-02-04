import React from 'react';
import { externalLinks } from '../data/siteData';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__main">
          <div className="copy u-fw-bold">
            <span className="u-border-rectangle u-text-indigo-blue u-border-indigo-blue">
              ChatGPT
            </span>
            で
            <span className="u-border-rectangle u-text-light-blue u-border-light-blue">
              選ばれる
            </span>
            <br className="u-sm-hidden" />
            <span className="xs-line2">
              企業<span className="u-dot">に</span>
              <span className="u-dot">な</span>
              <span className="u-dot">る</span>
            </span>
            <br />
            <h1 className="u-fw-bold heading" style={{ fontSize: '2.8rem', color: '#1a1a2e' }}>
              OMAKASE AIO
            </h1>
          </div>

          <p className="pct u-sm-hidden">
            <img src="/assets/image/hero-pct.png" alt="" />
          </p>

          <p className="lead u-fw-bold">
            <span className="u-text-light-blue">ChatGPT・Perplexity・Claude・Gemini</span>など
            <br className="u-sm-hidden" />
            生成AIの回答に<span className="u-text-light-blue">自社を登場させる</span>
            <br />
            AI検索最適化サービス
          </p>

          <div className="btn__wrapper btn__wrapper--download">
            <a
              href={externalLinks.download}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              無料AI検索診断
            </a>
          </div>
          <div className="btn__wrapper">
            <a
              href={externalLinks.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
            >
              まずは相談する
            </a>
          </div>
        </div>

        <div className="hero__sub">
          <img src="/assets/image/hero-bg-crop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
