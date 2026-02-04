import React from 'react';
import { issueCards } from '../data/siteData';

const Issues: React.FC = () => {
  return (
    <section id="content--issue" className="content content--pale-blue">
      <h2 className="heading">
        AIに<span className="u-text-light-blue">選ばれない</span>
        <br className="u-sm-hidden" />
        こんな<span className="u-text-light-blue">お悩み</span>ありませんか？
      </h2>

      <div className="card__wrapper">
        {issueCards.slice(0, 3).map((card, index) => (
          <div className="card" key={card.id}>
            <p
              className="comment"
              dangerouslySetInnerHTML={{
                __html: card.comment
                  .replace(/ChatGPT/g, '<span class="u-text-light-blue">ChatGPT</span>')
                  .replace(/Perplexity/g, '<span class="u-text-light-blue">Perplexity</span>')
                  .replace(/競合他社ばかり/g, '<span class="u-text-light-blue">競合他社ばかり</span>')
                  .replace(/全く表示されず/g, '<span class="u-text-light-blue">全く表示されず</span>')
                  .replace(/誤った情報/g, '<span class="u-text-light-blue">誤った情報</span>'),
              }}
            />
            <span className={`pct ${index === 1 ? 'pct--left' : ''}`}>
              {card.imageMobile && (
                <img className="u-sm-hidden" src={card.imageMobile} alt="" />
              )}
              <img className={card.imageMobile ? 'u-xs-hidden' : ''} src={card.image} alt="" />
            </span>
          </div>
        ))}
      </div>

      <div className="card__wrapper card__wrapper--2col">
        {issueCards.slice(3).map((card, index) => (
          <div className="card" key={card.id}>
            <p
              className="comment"
              dangerouslySetInnerHTML={{
                __html: card.comment
                  .replace(/Google検索/g, '<span class="u-text-light-blue">Google検索</span>')
                  .replace(/減少/g, '<span class="u-text-light-blue">減少</span>')
                  .replace(/分からず/g, '<span class="u-text-light-blue">分からず</span>'),
              }}
            />
            <span className={`pct ${index === 0 ? 'pct--left' : ''}`}>
              {card.imageMobile && (
                <img className="u-sm-hidden" src={card.imageMobile} alt="" />
              )}
              <img className={card.imageMobile ? 'u-xs-hidden' : ''} src={card.image} alt="" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Issues;
