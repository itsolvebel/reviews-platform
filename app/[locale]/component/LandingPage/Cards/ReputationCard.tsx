import React, { ReactNode } from 'react';
import Image from 'next/image';
import * as Icons from '../../../../../svg/Icons';

interface props {
  icon: string;
  title: string;
  content: string;
  arrow?: ReactNode;
}

const ReputationCard = ({ icon, title, content, arrow }: props) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[350px] bg-transparent flex flex-col gap-2 sm:gap-3'>
        {/* top section */}
        <div className='w-full flex justify-start items-center gap-5 sm:gap-6'>
          <div className='p-[6px] sm:p-[8px] bg-purple-1/20 rounded-md'>
            <div className='w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] relative'>
              <Image src={icon} fill className='object-fill' alt='' />
            </div>
          </div>
          {/* arrow --->  */}
          {arrow && arrow}
        </div>
        {/* title --->  */}
        <h3 className='text-[20px] sm:text-[24px] font-bold text-black-2 '>
          {title}
        </h3>
        {/* context --->  */}
        <p className='text-[16px] sm:text-[18px] font-medium text-black-3'>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ReputationCard;
