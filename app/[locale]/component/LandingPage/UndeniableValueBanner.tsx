'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../../../../svg/Icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const UndeniableValueBanner = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-purple-1 py-12 sm:py-24'>
      <Wrapper>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full max-w-[600px] lg:max-w-full gap-y-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            {/* left portion ---->  */}
            <div className='w-full relative flex justify-center items-center'>
              <div className='w-full max-w-[450px] lg:max-w-[500px] h-[350px] xsm:h-[400px] sm:h-[470px] lg:h-[500px] clg:h-[600px] relative'>
                <Image
                  src='/assets/undeniableSec.png'
                  fill
                  alt=''
                  className='object-fill'
                />
              </div>
              {/* widgets ------->  */}
              {/* 1) Freelance Artist widget */}
              <div className='w-fit absolute top-0 left-0 px-[8px] sm:px-[18px] lg:px-[24px] py-[10px] sm:py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-2 lg:gap-1'>
                <div className='w-[40px] sm:w-[52px] h-[40px] sm:h-[52px] relative'>
                  <Image
                    src='/assets/micheal.svg'
                    fill
                    alt=''
                    className='object-fill'
                  />
                </div>
                <div className='flex flex-col gap-0 lg:gap-1'>
                  <p className='text-[12px] sm:text-[16px] lg:text-[18px] font-semibold text-black-2'>
                    Michael
                  </p>
                  <p className='text-[10px] sm:text-[14px] lg:text-[16px] font-medium text-black-3'>
                    {t('common:freelancer_artist')}
                  </p>
                </div>
              </div>
              {/* 2 popular product widget --->  */}
              <div className='w-fit absolute bottom-10 left-0 sm:-left-3 px-[8px] sm:px-[18px] lg:px-[24px] py-[10px] sm:py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-2'>
                <div className='flex flex-col'>
                  <p className='text-[10px] sm:text-[14px] lg:text-[16px] font-medium text-black-3'>
                    {t('common:popular_platform')}
                  </p>
                  <p className='text-[12px] sm:text-[16px] lg:text-[18px] text-black-1 font-bold'>
                    Web Design
                  </p>
                </div>
                <Icons.share className='w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]' />
              </div>
              {/* 3 start widget ---->  */}
              <div className='w-fit absolute cmd:left-auto right-0 bottom-auto sm:top-auto top-0 sm:bottom-36 px-[8px] sm:px-[18px] lg:px-[24px] py-[10px] sm:py-[16px] rounded-lg widgetShadow  bg-white-1 flex justify-center items-center gap-1 sm:gap-2'>
                <div className='w-[40px] sm:w-[52px] h-[40px] sm:h-[50px] relative'>
                  <Image
                    src='/assets/sWidget.png'
                    fill
                    alt=''
                    className='object-fill rounded-full'
                  />
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <div className='flex justify-center items-center gap-1'>
                    {[0, 1, 2, 3, 4].map((item, index) => {
                      return (
                        <Icons.star key={index} className='w-[12px] h-[12px]' />
                      );
                    })}
                  </div>
                  <div className='w-[112px] h-[5px] rounded-[30px] bg-white-3'></div>
                  <div className='w-[87px] h-[5px] rounded-[30px] bg-white-3'></div>
                  <div className='w-[57px] h-[5px] rounded-[30px] bg-white-3'></div>
                </div>
              </div>
            </div>
            {/* right portion ----->  */}
            <div className='w-full flex flex-col items-start sm:items-center lg:items-start gap-1 sm:gap-3 lg:gap-5 pl-0 lg:pl-[3rem]'>
              <p className='text-white-1 text-[18px] sm:text-[22px] font-semibold'>
                {t('u_title')}
              </p>
              <h2 className='text-[26px] sm:text-[32px] lg:text-[48px] text-white-1 leading-[38px] sm:leading-[40px] lg:leading-[60px] font-extrabold'>
                {t('u_sub_title')}
              </h2>
              {/* list --->  */}
              <div className='flex flex-col items-start gap-2 sm:gap-4 lg:mt-0 mt-3'>
                <div className='flex justify-center items-center gap-1'>
                  <Icons.sampleCheck className='w-[24px] h-[24px]' />
                  <p className='text-[#E9E9E9] text-[14px] sm:text-[18px] font-normal sm:font-medium'>
                    {t('u_l1')}{' '}
                    <Link href='#' className='underline hover:opacity-80'>
                      {t('u_l1_link')}
                    </Link>
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <Icons.sampleCheck className='w-[24px] h-[24px]' />
                  <p className='text-[#E9E9E9] text-[14px]  sm:text-[18px] font-normal sm:font-medium'>
                    {t('u_l2')}{' '}
                    <Link href='#' className='underline hover:opacity-80'>
                      {t('u_l2_link')}
                    </Link>
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <Icons.sampleCheck className='w-[24px] h-[24px]' />
                  <p className='text-[#E9E9E9] text-[14px] sm:text-[18px] font-normal sm:font-medium'>
                    {t('u_l3')}{' '}
                    <Link href='#' className='underline hover:opacity-80'>
                      {t('u_l3_link')}
                    </Link>
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <Icons.sampleCheck className='w-[24px] h-[24px]' />
                  <p className='text-[#E9E9E9] text-[14px] sm:text-[18px] font-normal sm:font-medium'>
                    {t('u_l4')}
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <Icons.sampleCheck className='w-[24px] h-[24px]' />
                  <p className='text-[#E9E9E9] text-[14px] sm:text-[18px] font-med'>
                    {t('u_l5')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UndeniableValueBanner;
