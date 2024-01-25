'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import FeedbackCard from './Cards/FeedbackCard';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();

  const feedBackCardData = [
    {
      title: t('f_c1_title'),
      data: t('f_c1_date'),
      content: t('f_c1_content'),
    },
    {
      title: t('f_c1_title'),
      data: t('f_c1_date'),
      content: t('f_c1_content'),
    },
    {
      title: t('f_c1_title'),
      data: t('f_c1_date'),
      content: t('f_c1_content'),
    },
    {
      title: t('f_c1_title'),
      data: t('f_c1_date'),
      content: t('f_c1_content'),
    },
  ];

  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full lg:max-w-full max-w-[600px] flex flex-col gap-4 csm:gap-6 lg:gap-10'>
            {/* text ---->  */}
            <div className='flex flex-col gap-0'>
              <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
                {t('f_title')}
              </p>
              <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
                {t('f_sub_title')}
              </h2>
            </div>
            {/* feedback card ----->  */}
            <div className='w-full gap-4 grid grid-cols-1 lg:grid-cols-2 '>
              {feedBackCardData.map((item, index) => {
                return (
                  <FeedbackCard
                    key={index}
                    title={item.title}
                    date={item.title}
                    content={item.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Feedback;
