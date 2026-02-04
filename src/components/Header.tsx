import React, { useState } from 'react';
import { externalLinks, contactInfo } from '../data/siteData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#content--feature', label: '特長' },
    { href: '#content--field', label: '対応領域' },
    { href: '#content--case-study', label: '支援事例' },
    { href: '#content--seo-consultant', label: 'コンサルタント' },
    { href: '#content--consultant-flow', label: '支援概要' },
    { href: '#content--faq', label: 'よくあるご質問' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80; // ヘッダーの高さを考慮
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="#top" onClick={(e) => handleNavClick(e, '#top')}>
          <img src="/assets/image/logo0918.png" alt="ZETTAI" />
        </a>
      </div>
      <div className="header__navi">
        <ul className="header__navi-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__btn">
        <ul className="header__btn-list">
          <li>
            <div className="btn--tel">
              <div>
                <span className="tel">
                  <img src="/assets/image/icon-tel.svg" alt="TEL" className="icon" />
                  <span className="number">{contactInfo.phone}</span>
                </span>
                <span className="time">{contactInfo.hours}</span>
              </div>
            </div>
          </li>
          <li>
            <a
              href={externalLinks.download}
              target="_blank"
              rel="noopener noreferrer"
              className="btn--download"
            >
              <span>資料をダウンロード</span>
            </a>
          </li>
          <li>
            <a
              href={externalLinks.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn--consultation"
            >
              <span>まずは相談する</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="header__icon">
        <button
          type="button"
          className={`header__btn hamburger ${isMenuOpen ? 'is-active' : ''}`}
          aria-controls="navigation"
          aria-expanded={isMenuOpen}
          aria-label="メニューを開く"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__text"></span>
        </button>
      </div>

      <div className={`header__nav-area js-nav-area tw-bg-dark-blue ${isMenuOpen ? 'is-open' : ''}`} id="navigation">
        <nav className="global-navigation tw-w-[90%] tw-mx-auto">
          <ul className="tw-flex tw-flex-wrap tw-gap-y-2 tw-text-center tw-font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="tw-w-full">
                <a
                  href={item.href}
                  className="tw-text-white"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__btn--mobile sm:tw-hidden tw-w-[90%] tw-mx-auto tw-my-16">
            <div className="tw-flex tw-font-black tw-flex-wrap tw-gap-y-4">
              <div className="tw-w-full tw-relative">
                <a
                  href={externalLinks.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-flex tw-rounded-lg tw-items-center tw-justify-center tw-w-full tw-h-full tw-text-lg tw-tracking-[0.05em] tw-text-white tw-bg-light-blue"
                >
                  <span className="tw-inline-block tw-p-7">資料をダウンロード</span>
                </a>
              </div>
              <div className="tw-w-full tw-relative">
                <a
                  href={externalLinks.consultation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-flex tw-rounded-lg tw-items-center tw-justify-center tw-w-full tw-h-full tw-text-lg tw-tracking-[0.05em] tw-text-light-blue tw-bg-white tw-border-2 tw-border-light-blue"
                >
                  <span className="tw-inline-block tw-p-7">まずは相談する</span>
                </a>
              </div>
              <div className="tw-w-full tw-mt-[-12px]">
                <span className="tw-flex tw-rounded-lg tw-items-center tw-justify-center tw-w-full tw-h-full tw-text-2xl tw-text-center tw-leading-none tw-px-0 tw-text-white tw-p-7">
                  <div>
                    <span className="tw-flex tw-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="tw-fill-white tw-mr-2"
                      >
                        <path d="M17.9898 14.2053C17.9469 13.9399 17.7805 13.713 17.5313 13.5782L13.8452 11.4058L13.8148 11.3888C13.6603 11.3114 13.4896 11.2717 13.3167 11.273C13.0079 11.273 12.713 11.3901 12.5083 11.5953L11.4203 12.6841C11.3738 12.7284 11.222 12.7924 11.176 12.7947C11.1634 12.7937 9.9101 12.7034 7.60275 10.3952C5.29952 8.09178 5.20103 6.83425 5.20103 6.83425C5.20232 6.76995 5.26557 6.6187 5.31057 6.57189L6.23835 5.64411C6.56518 5.31641 6.66315 4.77317 6.46926 4.35237L4.42034 0.495914C4.27146 0.189311 3.98217 0 3.66125 0C3.4342 0 3.21511 0.0941414 3.04385 0.265191L0.514845 2.78926C0.272358 3.03053 0.0635573 3.45236 0.0180429 3.79189C-0.0040715 3.95419 -0.452787 7.82839 4.85723 13.1407C9.36521 17.6494 12.8804 17.9998 13.8511 17.9998C13.9693 18.0013 14.0875 17.9952 14.2049 17.9815C14.5433 17.9362 14.9645 17.7279 15.2055 17.4864L17.7324 14.959C17.9386 14.7516 18.0328 14.4777 17.9898 14.2053Z" />
                      </svg>
                      {contactInfo.phone}
                    </span>
                    <span className="tw-text-sm tw-inline-block tw-w-full">{contactInfo.hours}</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
