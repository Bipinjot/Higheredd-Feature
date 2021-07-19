import { FaUserSecret, FaWalking } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { IoIosRocket } from 'react-icons/io';
import { Link } from '@reach/router';
import { RiRefreshLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import Hero from '../components/landing/Hero';
import Screenshots from '../components/landing/Screenshots';
import Wrapper from '../components/shared/Wrapper';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href="https://www.higheredd.com/" />
      </Helmet>

      <div className="container px-8 xl:px-0 text-center md:text-left mt-24">
        <Hero />

        <p className="leading-loose text-lg mt-16">
          Higheredd is a is a free and open source resume builder that’s built to make the mundane tasks of creating, updating and sharing your resume as easy as 1, 2, 3. With this app, you can create multiple resumes, share them with recruiters through a unique link and print as PDF, all for free, no advertisements, without losing the integrity and privacy of your data.
        </p>

        <Screenshots />

        <div className="pt-8 grid lg:grid-cols-2 lg:gap-x-10">
          <Feature
            icon={IoIosRocket}
            title="Create a resume that’s worthy of who you are."
          >
           Keep up with the latest CV trends in the industry without having to start from scratch. With new templates added every week, you can switch from one to another before you count until 10!
           Imagine, never having to from your friend’s resume again!
          </Feature>

          <Feature
            icon={RiRefreshLine}
            title="Updating your resume shouldn’t be a chore."
          >
            Do you procrastinate to update your resume because it needs so much time and energy? Having learnt a new skill suddenly feels like a task to do because updating CV takes so much effort to align it all! Well not anymore- with Higheredd, you just have to mention the new skill, we will take care of the alignments and spacing, design and layout. 
          </Feature>

          {/* <Feature
            icon={FaWalking}
            title="Kickstarting your career shouldn’t come at a cost."
          >
            There are brilliant alternatives to this app like Novoresume and
            Zety , but they come at a cost, mainly because of the time the
            developers and the marketing they had to incur to make the product.
            This app might not be better than them, but it does cater to people
            who are just not in a position to pay hundreds of dollars to create
            a resume to bootstrap their career.
          </Feature> */}

          <Feature
            icon={FaUserSecret}
            title="Our Data Protection Promise"
          >
            Your data will be stored in the Cloud based servers until you delete your account, and this allows you to come back and update your resume at any time without having to start from scratch. However, we promise you that we will protect your data. Your user id will be used to communicate with you, only if you sign up for the same. 
          </Feature>
        </div>

        <div className="my-24">
          <div className="text-xl uppercase font-bold mb-8">
            Links of Interest
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
            <Link to="/blog/design-beautiful-resumes">
              Design Beautiful Resumes
            </Link>
            <Link to="/blog/ats-friendly-resumes">ATS-Friendly Resumes</Link>
            <Link to="/blog/acing-video-interviews">
              Acing Video Interviews
            </Link>
            <Link to="/blog/jobs-during-covid-19">Jobs During COVID-19</Link>
          </div>
        </div>

        <footer className="my-24">
          <p className="text-primary-500">

            Made with love by{' '}
            <a href="https://www.higheredd.com/">Higheredd</a>
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};

const Feature = ({ icon: Icon, title, children }) => (
  <div className="mt-16">
    <div className="flex items-center">
      <Icon size="18px" className="text-primary-900 mr-4" />
      <div className="text-3xl">{title}</div>
    </div>
    <p className="mt-6 text-lg leading-loose">{children}</p>
  </div>
);

export default memo(Home);
