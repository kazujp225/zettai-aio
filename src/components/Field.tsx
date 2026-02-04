import React from 'react';
import { fieldPurposes, fieldTypes } from '../data/siteData';

const Field: React.FC = () => {
  return (
    <section id="content--field" className="content">
      <h2 className="heading">
        <span className="text-sm">ZETTAIのAIOコンサルティング</span>
        <br />
        対応領域
      </h2>

      <div className="panel__wrapper">
        <div className="panel">
          <h3 className="heading">目的</h3>
          <div className="pct__3col">
            {fieldPurposes.map((item, index) => (
              <div className="col" key={index}>
                <img src={item.image} alt={item.label} />
                <br />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <h3 className="heading">サイトタイプ</h3>
          <div className="pct__3col">
            {fieldTypes.map((item, index) => (
              <div className="col" key={index}>
                <img src={item.image} alt={item.label} />
                <br />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Field;
