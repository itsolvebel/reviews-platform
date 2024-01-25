'use client';

import React, { useState } from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../../../svg/Icons';
import WhyItSolveCard from './Cards/WhyItSolveCard';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

const WhyItSolve = () => {
  const [navigateSlideItem, setNavigateSlideItem] = useState(true);
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      title: t('w_c1_title'),
      des: t('w_c1_content'),
      icon: '/assets/import.svg',
    },
    {
      title: t('w_c2_title'),
      des: t('w_c2_content'),
      icon: '/assets/analytics.svg',
    },
    {
      title: t('w_c3_title'),
      des: t('w_c3_content'),
      icon: '/assets/share.svg',
    },
    {
      title: t('w_c4_title'),
      des: t('w_c4_content'),
      icon: '/assets/people.svg',
    },
    {
      title: t('w_c2_title'),
      des: t('w_c2_content'),
      icon: '/assets/share.svg',
    },
    {
      title: t('w_c3_title'),
      des: t('w_c3_content'),
      icon: '/assets/analytics.svg',
    },
    {
      title: t('w_c4_title'),
      des: t('w_c4_content'),
      icon: '/assets/import.svg',
    },
  ];

  // custom arrow for slider

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={() => {
          onClick();
          setNavigateSlideItem(false);
        }}
        className='bg-white-1 p-[8px] sm:p-[12px] hover:opacity-80 absolute -top-[8rem] sm:-top-[7rem] right-[3rem] sm:right-[6rem]'
      >
        <Icons.leftA className='w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]' />
      </button>
    );
  }

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className='bg-white-1 p-[8px] sm:p-[12px] hover:opacity-80 absolute -top-[8rem] sm:-top-[7rem] right-[0px] sm:right-[34px]'
      >
        <Icons.rightA className='w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]' />
      </button>
    );
  }

  return (
    <div className='w-full bg-purple-1 pt-12 pb-14 csm:pt-20 csm:pb-24 relative z-50'>
      <Wrapper>
        <div className='w-full flex flex-col gap-8'>
          {/* top por --->  */}
          <div className='w-full flex justify-between items-center'>
            {/* left por --->  */}
            <div className='flex flex-col gap-0'>
              <p className='text-white-1 text-[18px] sm:text-[22px] font-semibold'>
                {t('w_title')}
              </p>
              <h2 className='text-[26px] sm:w-auto w-[250px] sm:text-[32px] text-white-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
                {t('w_subTitle')}
              </h2>
              <p className='text-[18px] font-medium text-[#C3C3C3]'>
                {t('w_des')}
              </p>
            </div>
          </div>
          {/* slider ----->  */}
          <div className='w-full relative'>
            <Slider {...settings}>
              {sliderData.map((item: any, index: number) => {
                return (
                  <WhyItSolveCard
                    title={item.title}
                    des={item.des}
                    key={index}
                    img={item.icon}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </Wrapper>
      {/* bg ---->  */}
      <div className="w-full h-[320px] absolute bottom-0 right-0 bg-[url('/assets/whyUsBg.svg')] -z-10 bg-cover bg-center overflow-x-hidden"></div>
    </div>
  );
};

export default WhyItSolve;
