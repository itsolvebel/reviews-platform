'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full xl:py-4 py-10 min-h-[calc(100vh-54px)] md:h-[calc(100vh-70px)] clg:h-[calc(100vh-94px)] bg-[url('/assets/heroBg.svg')] bg-cover bg-center overflow-x-hidden">
      <Wrapper style='h-full'>
        <div className='w-full h-full grid gap-2 sm:gap-12 grid-cols-1 md:grid-cols-[1.1fr,1fr] justify-center items-center'>
          {/* left portion ---->  */}
          <div className='w-full flex justify-center items-center'>
            <div className='w-full  xl:max-w-full max-w-[500px] flex flex-col items-start gap-5 lg:gap-6'>
              <h1 className='text-[40px] lg:text-[50px] xl:text-[60px] font-extrabold leading-[50px] lg:leading-[60px] xl:leading-[80px]'>
                {t('h_title')}
              </h1>
              <p className='text-[16px] lg:text-[18px] font-medium text-black-3 leading-[28px]'>
                {t('h_des')}
              </p>
              {/* search input ----->  */}
              <div className='w-full py-[8px] rounded-lg bg-white-1 grid grid-cols-[1fr,auto] justify-center items-center px-3 sm:px-4'>
                {/* input --->  */}
                <input
                  type='text'
                  className='w-full text-black-3 focus:outline-0 text-[14px] xl:text-[16px] font-medium pr-2 xl:font-semibold rounded-lg'
                  placeholder={t('common:how_search')}
                />
                {/* button --->  */}
                <button className='flex px-[14px] hover:opacity-80 rounded-md py-2 justify-center items-center gap-2 bg-purple-1'>
                  <Icons.search className='w-[20px] xl:w-[24px] h-[20px] xl:h-[24px]' />
                  <p className='text-[16px] xl:text-[18px] font-medium text-white-1'>
                    {t('common:search')}
                  </p>
                </button>
              </div>
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
              {/* read docs --->  */}
              <button className='flex hover:opacity-80 justify-center items-center gap-2 md:gap-3'>
                <Icons.docs className='w-[22px] md:w-[24px] h-[22px] md:h-[24px]' />
                <p className='text-[16px] md:text-[18px] font-semibold text-black-3'>
                  {t('common:read_docs')}
                </p>
              </button>
            </div>
          </div>
          {/* right por ---->  */}
          <div className='w-full flex justify-center items-center'>
            <div className='w-full xl:max-w-full max-w-[500px] relative'>
              <div className='w-full h-[440px] sm:h-[400px] csm:h-[480px] lg:h-[540px] relative'>
                <Image
                  src='/assets/hero.png'
                  alt=''
                  fill
                  className='object-cover rounded-md'
                />
              </div>
              {/* total value traded widget --->  */}
              <div className='w-fit absolute top-0 sm:left-0 left-auto sm:right-auto right-0 px-[8px] sm:px-[18px] lg:px-[24px] py-[10px] sm:py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-3 lg:gap-1'>
                <div className='flex flex-col'>
                  <p className='text-[14px] lg:text-[16px] font-medium text-black-3'>
                    {t('h_value_traded')}
                  </p>
                  <p className='text-[16px] lg:text-[18px] text-black-1 font-bold'>
                    $438.72
                  </p>
                </div>
                <p className='text-[12px] lg:text-[14px] font-semibold text-white-1 bg-green-1 py-[2px] px-[12px] rounded-[16px]'>
                  +23%
                </p>
              </div>
              {/* popular product widget --->  */}
              <div className='w-fit absolute bottom-24 sm:bottom-28 left-0 sm:-left-3 px-[8px] sm:px-[18px] lg:px-[24px] py-[10px] sm:py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-2'>
                <div className='flex flex-col'>
                  <p className='text-[14px] lg:text-[16px] font-medium text-black-3'>
                    {t('h_popular_category')}
                  </p>
                  <p className='textr-[16px] lg:text-[18px] text-black-1 font-bold'>
                    {t('h_web_design')}
                  </p>
                </div>
                <Icons.share className='w-[24px] h-[24px]' />
              </div>
              {/* start widget ---->  */}
              <div className='w-fit absolute left-auto md:-left-14 cmd:left-auto -right-2 md:right-0 cmd:-right-20 top-10 csm:top-24 cmd:top-10 lg:top-28 px-[8px] sm:px-[18px] lg:px-[24px] py-[16px] rounded-lg widgetShadow hidden sm:flex bg-white-1 justify-center items-center gap-2'>
                <Image
                  src='/assets/heroStar.svg'
                  width={52}
                  height={50}
                  alt=''
                  className='object-fill rounded-full'
                />
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
              {/* cross icon --->  */}
              <div className='absolute sm:block hidden right-24 top-2 lg:top-10'>
                <Icons.cross className='w-[24px] h-[24px]' />
              </div>
            </div>
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

export default Hero;
