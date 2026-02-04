import React from 'react';

const Example: React.FC = () => {
  return (
    <section id="content--example" className="content">
      <h2 className="heading">自社事例</h2>
      <p className="lead">
        BtoBのSaaS商材リード獲得を目的として立ち上げた
        <br className="u-sm-hidden" />
        自社オウンドメディアの成果事例です。
      </p>

      <div className="panel__wrapper">
        <div className="panel">
          <h3 className="heading">
            オウンドメディア立ち上げから
            <br className="u-sm-hidden" />
            <span className="u-text-light-blue">12ヶ月</span>で
            <span className="u-text-light-blue">25万PV</span>を達成。
          </h3>
          <p>
            <img
              src="/assets/image/exmple-pct01.png"
              alt="CV数 1年間で2件／月から145件／月まで増加"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Example;
