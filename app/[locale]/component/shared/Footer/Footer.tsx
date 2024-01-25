'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../../../../svg/Icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  //   footer data --->
  const footerData = {
    links: [
      {
        path: '#',
        text: t('common:f_home'),
      },
      {
        path: '#',
        text: t('common:f_about'),
      },
      {
        path: '#',
        text: t('common:f_documentation'),
      },
      {
        path: '#',
        text: t('common:f_news_event'),
      },
      {
        path: '#',
        text: t('common:f_blog'),
      },
      {
        path: '#',
        text: t('common:f_help'),
      },
      {
        path: '#',
        text: t('common:f_about'),
      },
    ],
    social: [
      {
        path: '#',
        icon: (
          <Icons.facebook className='w-[22px] sm:w-[25px] h-[22px] sm:h-[25px]' />
        ),
      },
      {
        path: '#',
        icon: (
          <Icons.instagram className='w-[20px] sm:w-[24px] h-[20px] sm:h-[25px]' />
        ),
      },
      {
        path: '#',
        icon: (
          <Icons.linkedin className='w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]' />
        ),
      },
    ],
    downLinks: [
      {
        path: '#',
        name: t('common:privacy_policy'),
      },
      {
        path: '#',
        name: t('common:cookie_policy'),
      },
      {
        path: '#',
        name: t('common:terms_of_use'),
      },
      {
        path: '#',
        name: t('common:t_statement'),
      },
    ],
  };

  return (
    <div className='w-full pt-10'>
      <div className='w-full m-auto max-w-[1400px] gap-4 sm:gap-6 px-4 md:px-8 flex flex-col justify-center items-center'>
        {/* logo --->  */}
        <div className='w-[110px] md:w-[170px] h-[50px] md:h-[70px] relative'>
          <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
        </div>
        {/* links --->  */}
        <div className='flex flex-wrap justify-center items-center gap-x-6 gap-y-1'>
          {footerData.links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className='text-[16px] capitalize sm:text-[18px] font-normal text-black-2 relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
              >
                {item.text}
              </Link>
            );
          })}
        </div>
        {/* social --> */}
        <div className='flex justify-center items-center gap-3'>
          {footerData.social.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className='w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] flex hover:opacity-80 active:translate-y-[2px] justify-center items-center rounded-full bg-purple-1'
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        {/* most down section ---->  */}
        <div className='w-full py-6 border-t-[1px] border-black-3/10 gap-y-4 gap-x-10 mt-3 flex flex-col sm:flex-row justify-between items-center '>
          <p className='text-[16px] text-black-2 font-medium'>
            {t('common:copy_right')}
          </p>
          <div className='flex flex-wrap justify-center sm:justify-start md:justify-center items-center gap-y-2 md:gap-y-4 gap-x-10 xl:gap-x-20'>
            {footerData.downLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  className='text-[16px] text-black-2 font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
