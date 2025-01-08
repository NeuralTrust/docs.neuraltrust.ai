import React from 'react';
import {
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common/internal';
import DocCard from '@theme/DocCard';

function DocCardListForCurrentSidebarCategory() {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} />;
}

export default function DocCardList(props) {
  const {items} = props;
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <DocCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

DocCardList.Sidebar = DocCardListForCurrentSidebarCategory; 