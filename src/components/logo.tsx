import Image from 'next/image';
import Link from 'next/link';

function Logo() {
   return (
      <Link href='/'>
         <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
            <Image src='/trello-logo.svg' alt='logo' width={50} height={50} />
            <p className='text-lg text-neutral-700 pb-1'>Taskify</p>
         </div>
      </Link>
   );
}
export default Logo;
