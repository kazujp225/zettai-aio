import React from 'react';
import { supportMethods } from '../data/siteData';

const Choice: React.FC = () => {
  return (
    <section id="content--choice" className="content content--pale-blue">
      <h2 className="heading">選べる2つの支援方法</h2>
      <p className="lead">
        貴社のご状況に合わせて
        <br className="u-sm-hidden" />
        最適な支援方法で支援いたします。
      </p>

      <div className="panel__wrapper">
        {supportMethods.map((method, index) => (
          <div className="panel" key={method.id}>
            <div className="panel__inner">
              <h3 className={`heading heading0${index + 1}`}>
                <span className="text">{method.title}</span>
              </h3>
              <p className="pct">
                <img className="u-sm-hidden" src={method.imageMobile} alt="" />
                <img className="u-xs-hidden" src={method.image} alt="" />
              </p>
              <h4
                className="sub-heading"
                dangerouslySetInnerHTML={{
                  __html: method.subHeading
                    .replace(/戦略策定/g, index === 0 ? '<span class="u-text-indigo-blue">戦略策定</span>' : '戦略策定')
                    .replace(/効果検証/g, index === 0 ? '<span class="u-text-indigo-blue">効果検証</span>' : '効果検証')
                    .replace(/全面的にサポート/g, index === 0 ? '<span class="u-text-indigo-blue">全面的にサポート</span>' : '全面的にサポート')
                    .replace(/プロジェクトマネジメント/g, '<span class="u-text-light-blue">プロジェクトマネジメント</span>')
                    .replace(/内製化支援/g, '<span class="u-text-light-blue">内製化支援</span>')
                    .replace(/すべてをリード/g, '<span class="u-text-light-blue">すべてをリード</span>'),
                }}
              />
              <p className="info">{method.description}</p>
              <h5 className="sub-heading">おすすめの方</h5>
              <ul className="list">
                {method.recommendations.map((rec, recIndex) => (
                  <li key={recIndex}>{rec}</li>
                ))}
              </ul>
              <p className="more">
                <a
                  href={method.caseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link--icon u-text-light-blue"
                >
                  {method.caseLinkText}
                  <span className="icon--32">
                    <img src="/assets/image/icon-circle-arrow-gt-light-blue.png" alt="" />
                  </span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choice;
