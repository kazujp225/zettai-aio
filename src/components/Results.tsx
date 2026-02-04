import React from 'react';
import Flickity from 'react-flickity-component';
import { resultCards } from '../data/siteData';
import 'flickity/css/flickity.css';

const flickityOptions = {
  cellAlign: 'left' as const,
  contain: true,
  wrapAround: true,
  pageDots: true,
  prevNextButtons: true,
  autoPlay: false,
};

const Results: React.FC = () => {
  return (
    <section id="content--result" className="content">
      <h2 className="heading">
        AIの回答に<span className="u-text-light-blue">自社を登場</span>させ
        <br className="u-sm-hidden" />
        数多くの<span className="u-text-light-blue">成果</span>を実現
      </h2>

      <Flickity
        className="card__wrapper flickity"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {resultCards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card__inner">
              <h3
                className="heading"
                dangerouslySetInnerHTML={{
                  __html: card.heading
                    .replace(/ChatGPT/g, '<span class="u-text-light-blue">ChatGPT</span>')
                    .replace(/Perplexity/g, '<span class="u-text-light-blue">Perplexity</span>')
                    .replace(/Claude/g, '<span class="u-text-light-blue">Claude</span>')
                    .replace(/Gemini/g, '<span class="u-text-light-blue">Gemini</span>')
                    .replace(/自社サービスが回答される/g, '<span class="u-text-light-blue">自社サービスが回答される</span>')
                    .replace(/1位表示/g, '<span class="u-text-light-blue">1位表示</span>')
                    .replace(/業界No\.1/g, '<span class="u-text-light-blue">業界No.1</span>')
                    .replace(/専門家/g, '<span class="u-text-light-blue">専門家</span>')
                    .replace(/3倍/g, '<span class="u-text-light-blue">3倍</span>')
                    .replace(/200件突破/g, '<span class="u-text-light-blue">200件突破</span>')
                    .replace(/280%増/g, '<span class="u-text-light-blue">280%増</span>'),
                }}
              />
              <p className="pct">
                <img src={card.image} alt={card.companyName} />
              </p>
              <p className="company">
                <span className="logo">
                  <img src={card.logo} alt={card.companyName} />
                </span>
                <span className="name">
                  {card.companyName}
                  <br />
                  <span className="type">{card.type}</span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </Flickity>

      <div className="btn__wrapper">
        <a href="#content--case-study-heading" className="btn btn--below">
          支援事例をもっと見る
        </a>
      </div>
    </section>
  );
};

export default Results;
