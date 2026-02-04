import React from 'react';
import { contractSteps, externalLinks } from '../data/siteData';

const ContractFlow: React.FC = () => {
  return (
    <section id="content--contract-flow" className="content">
      <h2 className="heading">ご契約までの流れ</h2>

      <div className="card__wrapper">
        {contractSteps.map((step, index) => (
          <div className="card" key={index}>
            <div className="card__inner">
              <div className="card__sub">
                <img
                  className="pct--step pct--step-sp"
                  src={step.stepImageMobile}
                  alt={`STEP 0${index + 1}`}
                />
                <img className="pct" src={step.image} alt="" />
                <img
                  className="pct--step pct--step-dt"
                  src={step.stepImage}
                  alt={`STEP 0${index + 1}`}
                />
              </div>
              <div className="card__main">
                <h3 className="heading">{step.title}</h3>
                <p className="info">
                  {index === 0 ? (
                    <>
                      本ページの
                      <a
                        href={externalLinks.consultation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-external link-external-light-blue u-text-underline"
                      >
                        「まずは相談する」
                      </a>
                      より
                      <br className="u-sm-hidden" />
                      お問い合わせください。
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContractFlow;
