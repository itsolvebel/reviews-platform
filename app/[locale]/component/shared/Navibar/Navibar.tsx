'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import FillButton from '../Buttons/FillButton';
import IconButton from '../Buttons/IconButton';
import * as Icons from '../../../../../svg/Icons';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaEarthAmericas } from 'react-icons/fa6';
import OutSideClick from '@/app/hooks/OutSideClick';

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [smallScreenMenu, setSmallScreenMenu] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className='w-full bg-white-1 headerSha'>
        <div className='w-full z-0 m-auto max-w-[1400px] py-1 h-[54px] md:h-[94px] px-4 md:px-8 gap-4 flex justify-between items-center'>
          {/* logo -->  */}
          <div className='w-[110px] md:w-[170px] h-[50px] md:h-[70px] relative'>
            <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
          </div>
          {/* right por ---->  */}
          <div className='hidden clg:flex justify-center items-center gap-4 xl:gap-8'>
            {/* search bar ------> */}
            <div className='w-fit pl-4 xl:pl-8 pr-4 xl:pr-14 text-[16px] text-black-3 font-semibold py-[16px] border-[1px] border-white-2 rounded-lg'>
              {t('common:how_search')}
            </div>
            {/* docs --->  */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:docs')}
            </Link>
            {/* Browse users --> */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:browse_users')}
            </Link>
            {/* change language ------->  */}
            <OutSideClick
              Event={() => {
                setOpenMenu(false);
              }}
              style='flex flex-col relative z-40'
            >
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className='hover:opacity-80'
              >
                <FaEarthAmericas className='text-[30px] text-purple-1 ' />
              </button>
              {openMenu && (
                <div className='min-w-[160px] bg-white-1 flex flex-col px-2 py-2 rounded-lg shadow-xl absolute top-11 -left-[55px]'>
                  {languagesSupport.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          i18n.changeLanguage(item.key);
                          setOpenMenu(false);
                        }}
                        className={`h-[38px] ${
                          currentLanguage === item.key
                            ? 'text-purple-1'
                            : 'text-black-1'
                        } hover:text-purple-1 capitalize text-[16px] font-medium`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </OutSideClick>
            <div className='flex justify-center items-center gap-3'>
              <FillButton
                styles='bg-purple-1/20 whitespace-nowrap text-purple-1'
                text={t('common:login')}
              ></FillButton>
              <IconButton
                styles='bg-purple-1 text-white-1'
                text={t('common:register')}
                icon={<Icons.location className='w-[16px] h-[16px]' />}
              ></IconButton>
            </div>
          </div>
          {/* hamburger for small scren ---->  */}
          <button className='clg:hidden block' onClick={toggleDrawer}>
            <RxHamburgerMenu className='text-[30px] md:text-[45px] text-purple-1' />
          </button>
        </div>
      </div>
      {/* drawer for small screen ---->  */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='drawer'
      >
        <div className='flex flex-col p-6 justify-center items-center'>
          {/* =========>top bar */}
          <div className='w-full flex justify-end items-center'>
            <RxCross1
              onClick={toggleDrawer}
              className='text-[30px] sm:text-[35px] text-white-main '
            />
          </div>
          {/* logo -->  */}
          <div className='w-[150px] h-[100px] relative mt-10'>
            <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
          </div>
          {/* links  */}
          <div className='flex w-full justify-center items-center flex-col gap-6 mt-6'>
            {/* search */}
            <div className='w-full h-[50px] pb-0 text-center hideScroll flex items-center px-2 xl:max-w-[400px] whitespace-nowrap overflow-auto text-[12px] sm:text-[14px] text-black-3 font-medium border-[1px] border-white-2 rounded-lg'>
              {t('common:how_search')}
            </div>
            {/* change language ------->  */}
            <OutSideClick
              Event={() => {
                setSmallScreenMenu(false);
              }}
              style='flex flex-col relative z-40'
            >
              <button
                onClick={() => setSmallScreenMenu(!smallScreenMenu)}
                className='hover:opacity-80'
              >
                <FaEarthAmericas className='text-[30px] text-purple-1 ' />
              </button>
              {smallScreenMenu && (
                <div className='min-w-[160px] bg-white-1 flex flex-col px-2 py-2 rounded-lg shadow-xl absolute top-8 -left-[60px]'>
                  {languagesSupport.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          i18n.changeLanguage(item.key);
                          setSmallScreenMenu(false);
                        }}
                        className={`h-[38px] ${
                          currentLanguage === item.key
                            ? 'text-purple-1'
                            : 'text-black-1'
                        } hover:text-purple-1 z-50 capitalize text-[16px] font-medium`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </OutSideClick>
            {/* docs --->  */}
            <Link
              href='#'
              className='text-black-3 text-[18px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:docs')}
            </Link>
            {/* Browse users --> */}
            <Link
              href='#'
              className='text-black-3 text-[18px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:browse_users')}
            </Link>
            {/* buttons  */}
            <div className='flex justify-center items-center gap-3 mt-4'>
              <FillButton
                styles='bg-purple-1/20 text-purple-1'
                text={t('common:login')}
              ></FillButton>
              <IconButton
                styles='bg-purple-1 text-white-1'
                text={t('common:register')}
                icon={<Icons.location className='w-[16px] h-[16px]' />}
              ></IconButton>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

const languagesSupport = [
  {
    key: 'en',
    name: 'english',
  },
  {
    key: 'fr',
    name: 'French',
  },
];

export default Navibar;
