'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import IconButton from '../shared/Buttons/IconButton';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const EntireReputationInOnePlace = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4 csm:gap-6 lg:gap-10'>
          {/* top sec ---->  */}
          <div className='w-full flex flex-col cmd:gap-0 gap-5 cmd:flex-row justify-between items-start'>
            <div className='flex flex-col gap-2 lg:gap-0'>
              <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
                {t('g_title')}
              </p>
              <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
                {t('g_sub_title')}
              </h2>
              <p className='text-[18px] max-w-[700px] font-medium text-black-3'>
                {t('g_content')}
              </p>
              <div className='flex justify-start items-center mt-2 sm:mt-0 lg:mt-4 gap-3'>
                <IconButton
                  text={t('common:start_now')}
                  styles='bg-purple-1 w-fit text-white-1'
                  isRight={true}
                  icon={<Icons.downA className='w-[24px] h-[24px]' />}
                />
                {/* read docs --->  */}
                <button className='flex hover:opacity-80 justify-center items-center gap-2 md:gap-3'>
                  <Icons.docs className='w-[22px] md:w-[24px] h-[22px] md:h-[24px]' />
                  <p className='text-[16px] md:text-[18px] font-semibold text-black-3'>
                    {t('common:read_docs')}
                  </p>
                </button>
              </div>
            </div>
            {/* user ---> */}
            {/* user ---->  */}
            <div className='flex justify-start items-center gap-0'>
              <div className='flex justify-center items-center'>
                {user.map((item, index) => {
                  const value = index * 12;
                  return (
                    <div
                      style={{ transform: `translate(-${value}px)` }}
                      key={index}
                      className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative'
                    >
                      <Image src={item} alt='' fill className='object-fill' />
                    </div>
                  );
                })}
              </div>
              {/*  */}
              <p className='text-[18px] font-normal text-black-3 -ml-6 lg:-ml-3'>
                <span className='font-semibold'> +1200 </span>{' '}
                {t('common:user')}
              </p>
            </div>
          </div>
          {/* dashoard image ----->  */}
          <div className='w-full h-[300px] sm:h-[300px] csm:h-[400px] md:h-[500px] cmd:h-[600px] lg:h-[770px] clg:h-[870px] xl:mt-0 clg-mt-10 lg:-mt-16 mt-0 relative sm:mt-0 mt-4'>
            <Image
              src='/assets/dashboard.svg'
              fill
              className='object-contain xl:object-cover rounded-md'
              alt=''
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const user = [
  '/assets/user1.svg',
  '/assets/user2.svg',
  '/assets/user3.svg',
  '/assets/user4.svg',
];

export default EntireReputationInOnePlace;
