import React from 'react';
import { companyInfo } from '../data/siteData';

const CompanyInfoSection: React.FC = () => {
  return (
    <section className="company-info">
      <h2>会社概要</h2>
      <table>
        <tbody>
          {companyInfo.map((item, index) => (
            <tr key={index}>
              <th>{item.label}</th>
              <td>
                {item.value.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < item.value.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CompanyInfoSection;
