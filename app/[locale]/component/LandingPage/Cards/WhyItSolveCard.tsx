import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  des: string;
  img: string;
}

const WhyItSolveCard = ({ title, des, img }: Props) => {
  const { t } = useTranslation();

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[285px] bg-white-1 px-4 py-3 rounded-lg flex flex-col items-start gap-3'>
        <div className='relative'>
          <Image
            src={img}
            width={48}
            height={48}
            className='object-fill'
            alt=''
          />
        </div>

        <h4 className='text-[20px] font-semibold text-black-2'>{title}</h4>
        <p className='text-[16px] font-medium text-black-3'>{des}</p>
        <button className='text-[16px] capitalize text-purple-1 font-semibold underline hover:opacity-80'>
          {t('common:learn_more')}
        </button>
      </div>
    </div>
  );
};

export default WhyItSolveCard;
