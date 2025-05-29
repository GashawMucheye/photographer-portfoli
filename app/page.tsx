import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Photographer Portfolio</h1>
        <p className='text-lg text-gray-600'>
          Capturing moments, one click at a time.
        </p>
      </div>

      <Image
        src='/images/hero-image.jpg'
        alt='Hero Image'
        width={800}
        height={600}
        className='rounded-lg shadow-lg'
      />

      <Button className='bg-red-600 text-white hover:bg-blue-600 transition-colors'>
        View Gallery
      </Button>
    </div>
  );
}
