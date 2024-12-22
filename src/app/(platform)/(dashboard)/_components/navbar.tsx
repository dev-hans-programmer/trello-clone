import { Plus } from 'lucide-react';
import Logo from '@/components/logo';

import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export const Navbar = () => {
   return (
      <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
         <div className='flex items-center gap-x-4 px-5'>
            <div className='hidden md:flex'>
               <Logo />
            </div>
            <Button
               variant='primary'
               size='sm'
               className='rounded-sm hidden md:block h-auto py-1.5 px-2'
            >
               Create
            </Button>
            <Button
               variant='primary'
               size='sm'
               className='rounded-sm block md:hidden'
            >
               <Plus />
            </Button>
         </div>
         <div className='ml-auto flex items-center gap-x-2 px-5'>
            <OrganizationSwitcher
               afterSelectOrganizationUrl='/organization/:id'
               afterCreateOrganizationUrl='/organization/:id'
               afterLeaveOrganizationUrl='/select-org'
               hidePersonal
               appearance={{
                  elements: {
                     rootBox: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     },
                  },
               }}
            />
            <UserButton />
         </div>
      </nav>
   );
};
