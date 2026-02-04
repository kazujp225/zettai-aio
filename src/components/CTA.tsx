import React from 'react';
import { externalLinks, contactInfo } from '../data/siteData';

const CTA: React.FC = () => {
  return (
    <section className="footer content-cta">
      <div className="bg-gradient">
        <div className="footer__btn-wrapper md:tw-m-auto">
          <section className="footer__btn-section tw-text-center">
            <h2 className="tw-font-black">資料ダウンロード</h2>
            <p>
              詳しいサービス内容を知りたい方は、
              <br />
              サービス資料をご覧ください。
            </p>
            <a
              href={externalLinks.download}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              資料をダウンロード
            </a>
          </section>
          <section className="footer__btn-section footer__btn-section--consultant tw-text-center">
            <h2 className="tw-font-black">ご相談・お問い合わせ</h2>
            <p>
              SEOに関するご質問やご相談など、
              <br />
              お気軽にお問い合わせください。
            </p>
            <a
              href={externalLinks.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
            >
              まずは相談する
            </a>
          </section>
        </div>
        <div className="footer__btn-section--tell tw-w-full tw-text-center">
          <p>お電話でもお問い合わせいただけます。</p>
          <span className="btn--tell tw-flex tw-items-center tw-justify-center tw-flex-wrap">
            <div className="tw-flex tw-items-center tw-text-[32px] tw-text-black">
              <img
                src="/assets/image/icon-tel.svg"
                alt="TEL"
                className="icon tw-w-[40px] tw-mr-6"
              />
              <span className="number">{contactInfo.phone}</span>
            </div>
            <div className="time tw-text-sm tw-inline-block tw-w-full">
              {contactInfo.hours}
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
