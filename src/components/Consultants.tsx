import React from 'react';
import Flickity from 'react-flickity-component';
import { consultants } from '../data/siteData';
import 'flickity/css/flickity.css';

const flickityOptions = {
  cellAlign: 'left' as const,
  contain: true,
  wrapAround: true,
  pageDots: true,
  prevNextButtons: true,
};

const Consultants: React.FC = () => {
  return (
    <section id="content--seo-consultant" className="content content--pale-blue">
      <h2 className="heading">AIOコンサルタント</h2>
      <p className="lead">
        AI検索最適化に精通した
        <br className="u-sm-hidden" />
        経験豊富なコンサルタントが伴走します。
      </p>

      <Flickity
        className="card__wrapper flickity"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {consultants.map((consultant) => (
          <div className="card" key={consultant.id}>
            <span className="card__inner">
              <figure className="photo">
                <img src={consultant.image} alt={consultant.name} />
                <figcaption>
                  {consultant.name}
                  <span className={consultant.nameEn.length > 18 ? 'u-text-narrow' : ''}>
                    {consultant.nameEn}
                  </span>
                </figcaption>
              </figure>
              <p className="info">{consultant.description}</p>
            </span>
          </div>
        ))}
      </Flickity>
    </section>
  );
};

export default Consultants;
