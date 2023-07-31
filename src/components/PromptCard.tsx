'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const { pathname } = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => {
      setCopied('');
    }, 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            className='rounded-full object-contain'
            src={prompt.creator.Image}
            alt={prompt.creator.username}
            width={37}
            height={37}
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-slate-200'>
              {prompt.creator.username}
            </h3>
            <p className='font-inter text-slate-400 text-sm'>
              {prompt.creator.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === prompt.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            alt='copy'
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm'>{prompt.prompt}</p>
      <p
        className='font-inter text-sm orange_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        {prompt.tag}
      </p>
    </div>
  );
};

export default PromptCard;
