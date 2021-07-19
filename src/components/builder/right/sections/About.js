import { FaBug, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { Trans, useTranslation } from 'react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import React, { memo } from 'react';
import Button from '../../../shared/Button';
import Heading from '../../../shared/Heading';
import * as styles from './About.module.css';

const About = ({ id }) => {
  const { t } = useTranslation();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          version
        }
      }
    }
  `);

  return (
    <section>
      <Heading id={id} />

      <div className="my-4 text-center opacity-50 text-sm flex flex-col items-center justify-center">
        <Trans t={t} i18nKey="builder.about.footer">
          A
          <a href="https://www.higheredd.com/" rel="noreferrer" target="_blank">
            B
          </a>
        </Trans>
      </div>
    </section>
  );
};

export default memo(About);
