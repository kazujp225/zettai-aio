import React from 'react';
import Flickity from 'react-flickity-component';
import { caseStudies, externalLinks } from '../data/siteData';
import 'flickity/css/flickity.css';

const flickityOptions = {
  cellAlign: 'left' as const,
  contain: true,
  wrapAround: true,
  pageDots: true,
  prevNextButtons: true,
};

const CaseStudy: React.FC = () => {
  return (
    <>
      <div id="content--case-study-heading"></div>
      <section id="content--case-study" className="content content--pale-blue">
        <h2 className="heading">支援事例</h2>
        <p className="lead">
          多種多様な目的、業界、企業規模、
          <br className="u-sm-hidden" />
          サイトタイプのお客様を支援しています。
        </p>

        <Flickity
          className="card__wrapper flickity"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {caseStudies.map((caseItem) => (
            <div className="card" key={caseItem.id}>
              <a
                href={caseItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card__inner"
              >
                <h3 className="heading">{caseItem.heading}</h3>
                <p className="pct">
                  <img src={caseItem.image} alt={caseItem.companyName} />
                </p>
                <div className="company">
                  <p className="logo">
                    <img src={caseItem.logo} alt={caseItem.companyName} />
                  </p>
                  <div className="name-wrapper">
                    <p className="name">{caseItem.companyName}</p>
                    <p className="type">{caseItem.type}</p>
                  </div>
                </div>
                <p className="more">
                  <span className="link--icon">
                    もっと詳しく見る
                    <span className="icon icon--16">
                      <img src="/assets/image/icon-external.png" alt="" />
                    </span>
                  </span>
                </p>
              </a>
            </div>
          ))}
        </Flickity>

        <div className="btn__wrapper">
          <a href={externalLinks.caseList} className="btn">
            支援事例一覧を見る
          </a>
        </div>

        <div className="link__wrapper">
          <div className="link__wrapper-inner">
            <a
              href={externalLinks.caseDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <span>支援事例集のダウンロードはこちら</span>
              <span className="icon">
                <img src="/assets/image/icon-circle-arrow-gt.png" alt="" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
