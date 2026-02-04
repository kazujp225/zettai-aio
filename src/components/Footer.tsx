import React from 'react';
import { externalLinks, contactInfo } from '../data/siteData';
import CompanyInfo from './CompanyInfo';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer content-cta">
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
                AIOに関するご質問やご相談など、
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

        <div id="scroll-top">
          <a href="#top" className="btn__scroll-top">
            <img
              src="/assets/image/icon-circle-arrow-above-light-blue.png"
              alt="ページ先頭へ戻る"
            />
          </a>
        </div>
      </footer>

      <CompanyInfo />

      <div className="footer">
        <div className="copyright tw-text-center tw-bg-white tw-pt-5 sm:tw-pt-10">
          <a href={externalLinks.company} target="_blank" rel="noopener noreferrer">
            運営会社
          </a>
          ｜
          <a href={externalLinks.privacy} target="_blank" rel="noopener noreferrer">
            プライバシーポリシー
          </a>
        </div>
        <div className="copyright copyright__text tw-text-center tw-bg-white tw-p-5 sm:tw-pt-6 sm:tw-pb-8">
          copyright &copy;ZETTAI Inc. all rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
