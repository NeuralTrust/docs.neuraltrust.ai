import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import DocCard from '@theme/DocCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

function HeroSection({ type }) {
  const images = {
    'ai-gateway': '/img/ai-gateway-product.svg',
    'red-teaming': '/img/red-teaming-product.svg',
    'observability': '/img/observability-product.svg'
  };

  if (!images[type]) return null;

  return (
    <div className="relative w-full mb-12">
      <div className="relative p-4 rounded-xl bg-[#141420] overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        {/* Hero Image */}
        <img
          src={useBaseUrl(images[type])}
          alt={`${type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Hero`}
          className="w-full h-[400px] object-contain"
        />
      </div>
    </div>
  );
}

function PageTypeDetector({ children }) {
  return (
    <BrowserOnly>
      {() => {
        const path = window.location.pathname;
        let type = null;
        
        if (path.includes('/category/ai-gateway')) {
          type = 'ai-gateway';
        } else if (path.includes('/category/red-teaming')) {
          type = 'red-teaming';
        } else if (path.includes('/category/observability')) {
          type = 'observability';
        }

        return children(type);
      }}
    </BrowserOnly>
  );
}

export default function DocCardList(props) {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);

  return (
    <section className={clsx('container mx-auto px-4', className)}>
      <PageTypeDetector>
        {(type) => type && <HeroSection type={type} />}
      </PageTypeDetector>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <DocCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

DocCardList.Sidebar = DocCardListForCurrentSidebarCategory; 