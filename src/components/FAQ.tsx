import React, { useState } from 'react';
import { faqItems } from '../data/siteData';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['1']);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="content--faq" className="content">
      <h2 className="heading">よくあるご質問</h2>

      <div className="card__wrapper">
        {faqItems.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <dl className="card toggle" key={item.id}>
              <dt
                className={`card__main ${isOpen ? 'open' : ''}`}
                onClick={() => toggleItem(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleItem(item.id);
                  }
                }}
              >
                <span className="icon">
                  <img src="/assets/image/icon-faq-q.png" alt="Q" />
                </span>
                <h3 className="heading">{item.question}</h3>
                <span className="toggle_button">
                  <img
                    className="icon--plus"
                    src="/assets/image/icon-plus.svg"
                    alt=""
                    style={{ display: isOpen ? 'none' : 'block' }}
                  />
                  <img
                    className="icon--minus"
                    src="/assets/image/icon-minus.svg"
                    alt=""
                    style={{ display: isOpen ? 'block' : 'none' }}
                  />
                </span>
              </dt>
              <dd
                className={`card__sub ${isOpen ? 'open' : ''}`}
                style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden' }}
              >
                <span className="icon">
                  <img src="/assets/image/icon-faq-a.png" alt="A" />
                </span>
                <p className="info">{item.answer}</p>
              </dd>
            </dl>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
