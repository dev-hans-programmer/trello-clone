import { UserButton } from '@clerk/nextjs';

function ProtectedPage() {
   return (
      <div>
         <UserButton />
      </div>
   );
}

export default ProtectedPage;
