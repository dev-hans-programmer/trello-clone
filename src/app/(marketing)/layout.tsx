import React from 'react';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

function MarketingLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className='h-full bg-slate-100'>
         {/* navbar */}
         <Navbar />
         <main className='pt-4 pb-20 h-full'>{children}</main>
         {/* footer */}
         <Footer />
      </div>
   );
}

export default MarketingLayout;
