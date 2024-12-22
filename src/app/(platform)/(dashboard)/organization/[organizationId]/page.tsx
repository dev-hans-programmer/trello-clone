function OrganizationIdPage({
   params: { organizationId },
}: {
   params: { organizationId: string };
}) {
   console.log(organizationId);

   return (
      <div>
         <h1>Organization ID Page</h1>
      </div>
   );
}

export default OrganizationIdPage;
