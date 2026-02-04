import React from 'react';
import { externalLinks } from '../data/siteData';

const PlanPrice: React.FC = () => {
  return (
    <section id="content--plan-price" className="content">
      <div className="item__wrapper">
        <div className="item">
          <h2 className="heading">プランと料金</h2>
          <p className="info">
            サービスメニュー・支援内容によって
            <br />
            提供価格が異なるため、
            <br className="u-sm-hidden" />
            お気軽にお問い合わせください。
          </p>
        </div>
        <div className="item">
          <a
            href={externalLinks.consultation}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark"
          >
            問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanPrice;
