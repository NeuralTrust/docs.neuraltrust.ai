import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';
import DocCard from '@theme/DocCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props) {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  const isAIGateway = window.location.pathname.includes('/category/ai-gateway');
  const isRedTeaming = window.location.pathname.includes('/category/red-teaming');
  const isObservability = window.location.pathname.includes('/category/observability');

  return (
    <section className={clsx('container mx-auto px-4', className)}>
      {isAIGateway && (
        <div className="relative w-full mb-12">
          <div className="relative rounded-xl bg-[#141420] overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/15 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            {/* Hero Image */}
            <img
              src={useBaseUrl('/img/ai-gateway-product.svg')}
              alt="AI Gateway Hero"
              className="w-full h-[400px] object-contain"
            />
          </div>
        </div>
      )}

    {isRedTeaming && (
        <div className="relative w-full mb-12">
          <div className="relative rounded-xl bg-[#141420] overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/15 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            {/* Hero Image */}
            <img
              src={useBaseUrl('/img/red-teaming-product.svg')}
              alt="Red Teaming Hero"
              className="p-4 w-full h-[400px] object-contain"
            />
          </div>
        </div>
      )}

      {isObservability && (
        <div className="relative w-full mb-12">
          <div className="relative rounded-xl bg-[#141420] overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/15 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            
            {/* Hero Image */}
            <img
              src={useBaseUrl('/img/observability-product.svg')}
              alt="Observability Hero"
              className="p-4 w-full h-[400px] object-contain"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <DocCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

DocCardList.Sidebar = DocCardListForCurrentSidebarCategory; 