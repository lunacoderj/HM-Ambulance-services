

// Common shimmer effect wrapper
const Shimmer = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const HeaderSkeleton = () => (
  <header className="fixed w-full z-50 bg-white/90 border-b border-gray-100 shadow-sm h-20 md:h-24">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
      <Shimmer className="header-logo-target w-32 h-10 md:w-48 md:h-12" />
      <div className="hidden md:flex items-center gap-6">
        {[1, 2, 3, 4, 5].map(i => <Shimmer key={i} className="w-16 h-4" />)}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Shimmer className="w-32 h-10 rounded-xl" />
        <Shimmer className="w-10 h-10 rounded-full" />
      </div>
      <div className="md:hidden">
        <Shimmer className="w-8 h-8 rounded-lg" />
      </div>
    </div>
  </header>
);

export const HeroSkeleton = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
    <div className="page-container relative z-10 flex flex-col items-center text-center">
      <Shimmer className="w-48 h-8 mb-6 rounded-full" />
      <Shimmer className="w-full max-w-3xl h-16 md:h-24 mb-6" />
      <Shimmer className="w-full max-w-2xl h-8 md:h-12 mb-10" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto">
        <Shimmer className="w-full sm:w-48 h-14 rounded-xl" />
        <Shimmer className="w-full sm:w-48 h-14 rounded-xl" />
      </div>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3">
             <Shimmer className="w-10 h-10 rounded-full" />
             <Shimmer className="w-16 h-8" />
             <Shimmer className="w-24 h-4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section className="bg-white py-20">
    <div className="page-container section">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-square lg:aspect-[4/3] w-full max-w-xl mx-auto">
          <Shimmer className="w-full h-full rounded-[2rem]" />
          <Shimmer className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl hidden md:block" />
        </div>
        <div className="flex flex-col gap-6">
          <Shimmer className="w-32 h-6" />
          <Shimmer className="w-full h-12" />
          <Shimmer className="w-3/4 h-12" />
          <div className="space-y-3 mt-4">
            <Shimmer className="w-full h-4" />
            <Shimmer className="w-5/6 h-4" />
            <Shimmer className="w-full h-4" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[1, 2].map(i => (
               <div key={i} className="flex gap-4">
                 <Shimmer className="w-12 h-12 rounded-xl flex-shrink-0" />
                 <div className="space-y-2 flex-grow">
                   <Shimmer className="w-full h-5" />
                   <Shimmer className="w-2/3 h-4" />
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ServicesSkeleton = () => (
  <section className="bg-gray-50 py-20 border-t border-gray-100">
    <div className="page-container section">
      <div className="flex flex-col items-center text-center mb-12">
        <Shimmer className="w-64 h-10 mx-auto mb-4" />
        <Shimmer className="w-96 h-6 mx-auto max-w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-0 flex flex-col overflow-hidden h-[400px]">
            <Shimmer className="w-full h-48 rounded-none" />
            <div className="p-6 flex flex-col flex-grow gap-4">
              <Shimmer className="w-3/4 h-6" />
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-5/6 h-4" />
              <div className="mt-auto">
                 <Shimmer className="w-24 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const EquipmentSkeleton = () => (
  <section className="bg-white py-20 border-t border-gray-100">
    <div className="page-container section">
      <div className="flex flex-col items-center text-center mb-12">
        <Shimmer className="w-64 h-10 mx-auto mb-4" />
        <Shimmer className="w-96 h-6 mx-auto max-w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-0 flex flex-col overflow-hidden h-[420px]">
            <Shimmer className="w-full h-48 rounded-none" />
            <div className="p-6 flex flex-col flex-grow gap-4">
              <Shimmer className="w-3/4 h-6" />
              <div className="space-y-2">
                 <Shimmer className="w-full h-3" />
                 <Shimmer className="w-full h-3" />
              </div>
              <div className="space-y-2 mt-4">
                 <Shimmer className="w-full h-3" />
                 <Shimmer className="w-4/5 h-3" />
                 <Shimmer className="w-5/6 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowItWorksSkeleton = () => (
  <section className="bg-gray-900 py-20 text-white border-t border-gray-800">
    <div className="page-container section">
      <div className="flex flex-col items-center text-center mb-12">
        <Shimmer className="w-64 h-10 mx-auto mb-4 bg-gray-700" />
        <Shimmer className="w-96 h-6 mx-auto max-w-full bg-gray-700" />
      </div>
      <div className="mt-16 max-w-4xl mx-auto space-y-12">
        {[1, 2, 3].map(i => (
           <div key={i} className="flex gap-6">
             <Shimmer className="w-16 h-16 rounded-full flex-shrink-0 bg-gray-700" />
             <div className="flex-grow space-y-3 pt-2">
               <Shimmer className="w-48 h-6 bg-gray-700" />
               <Shimmer className="w-full h-4 bg-gray-700" />
               <Shimmer className="w-3/4 h-4 bg-gray-700" />
             </div>
           </div>
        ))}
      </div>
    </div>
  </section>
);

export const CoverageMapSkeleton = () => (
  <section className="bg-gray-50 py-20 border-t border-gray-100">
    <div className="page-container section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <Shimmer className="w-32 h-6" />
          <Shimmer className="w-full h-10" />
          <Shimmer className="w-full h-4" />
          <Shimmer className="w-5/6 h-4" />
          <div className="grid grid-cols-2 gap-4 mt-6">
             {[1, 2, 3, 4].map(i => <Shimmer key={i} className="w-full h-12 rounded-xl" />)}
          </div>
        </div>
        <Shimmer className="w-full aspect-square md:aspect-[4/3] rounded-[2rem]" />
      </div>
    </div>
  </section>
);

export const TestimonialsSkeleton = () => (
  <section className="bg-white py-20 border-t border-gray-100 overflow-hidden">
    <div className="page-container section">
      <div className="flex flex-col items-center text-center mb-12">
        <Shimmer className="w-64 h-10 mx-auto mb-4" />
        <Shimmer className="w-96 h-6 mx-auto max-w-full" />
      </div>
      <div className="flex gap-6 overflow-hidden">
        {[1, 2, 3].map(i => (
           <div key={i} className="w-full md:w-[400px] flex-shrink-0 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-64 flex flex-col">
             <div className="flex gap-2 mb-6">
               {[1, 2, 3, 4, 5].map(s => <Shimmer key={s} className="w-4 h-4 rounded-full" />)}
             </div>
             <div className="space-y-3 flex-grow">
               <Shimmer className="w-full h-4" />
               <Shimmer className="w-full h-4" />
               <Shimmer className="w-2/3 h-4" />
             </div>
             <div className="flex items-center gap-4 mt-6">
               <Shimmer className="w-12 h-12 rounded-full" />
               <div className="space-y-2 flex-grow">
                 <Shimmer className="w-32 h-4" />
                 <Shimmer className="w-24 h-3" />
               </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="bg-gray-50 py-20 border-t border-gray-100">
    <div className="page-container section">
      <div className="flex flex-col items-center text-center mb-12">
        <Shimmer className="w-64 h-10 mx-auto mb-4" />
        <Shimmer className="w-96 h-6 mx-auto max-w-full" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
           <Shimmer className="w-48 h-8 mb-8" />
           {[1, 2, 3, 4].map(i => <Shimmer key={i} className="w-full h-14 rounded-xl" />)}
           <Shimmer className="w-full h-32 rounded-xl" />
           <Shimmer className="w-full h-14 rounded-xl" />
        </div>
        <div className="space-y-6">
           {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-6 items-center">
                 <Shimmer className="w-16 h-16 rounded-xl flex-shrink-0" />
                 <div className="space-y-3 flex-grow">
                   <Shimmer className="w-32 h-5" />
                   <Shimmer className="w-48 h-4 max-w-full" />
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

export const FooterSkeleton = () => (
  <footer className="bg-[#02050A] pt-24 pb-10 mt-16">
    <div className="page-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
        <div className="md:col-span-4 space-y-6">
          <Shimmer className="w-40 h-12 bg-gray-800" />
          <Shimmer className="w-full h-4 bg-gray-800" />
          <Shimmer className="w-5/6 h-4 bg-gray-800" />
          <Shimmer className="w-full h-32 rounded-xl bg-gray-800 mt-6" />
        </div>
        <div className="md:col-span-3 space-y-4">
          <Shimmer className="w-32 h-6 bg-gray-800 mb-6" />
          {[1, 2, 3, 4, 5, 6].map(i => <Shimmer key={i} className="w-24 h-4 bg-gray-800" />)}
        </div>
        <div className="md:col-span-5 space-y-6">
          <Shimmer className="w-48 h-6 bg-gray-800" />
          <div className="grid grid-cols-2 gap-4">
            <Shimmer className="w-full h-24 rounded-xl bg-gray-800" />
            <Shimmer className="w-full h-24 rounded-xl bg-gray-800" />
          </div>
          <Shimmer className="w-full h-32 rounded-xl bg-gray-800" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <Shimmer className="w-48 h-4 bg-gray-800" />
        <div className="flex gap-6">
           <Shimmer className="w-16 h-4 bg-gray-800" />
           <Shimmer className="w-16 h-4 bg-gray-800" />
           <Shimmer className="w-16 h-4 bg-gray-800" />
        </div>
      </div>
    </div>
  </footer>
);
