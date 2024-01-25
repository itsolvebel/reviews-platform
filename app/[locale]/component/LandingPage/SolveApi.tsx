'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import FillButton from '../shared/Buttons/FillButton';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const SolveApi = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='flex-col w-full grid gap-5 gap-y-10 grid-cols-1 justify-center items-center md:grid-cols-[2fr,1fr]'>
          {/* left portion ---->  */}
          <div className='w-full flex flex-col gap-3 md:gap-4'>
            <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
              {t('api_title')}
            </p>
            <h2 className='text-[26px] sm:text-[35px] cmd::text-[40px] xl:text-[48px] text-black-1 leading-[30px] sm:leading-[45px] cmd:leading-[50px] xl:leading-[58px] font-extrabold'>
              {t('api_subTitle')}
            </h2>
            <p className='text-black-3 max-w-[500px] w-full text-[18px] font-medium'>
              {t('api_des')}
            </p>
            <FillButton
              text='Read the docs'
              styles='bg-purple-1 text-white-1 w-fit'
            />
            <p className='text-black-3 max-w-[500px] w-full text-[18px] font-medium'>
              {t('api_access')}
            </p>
          </div>
          {/* right por ------>  */}
          <div className='w-full h-[350px] flex justify-center items-center relative'>
            <Image src='/assets/code.svg' fill alt='' className='object-fill' />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SolveApi;
