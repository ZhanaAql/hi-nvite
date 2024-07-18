import React, { useState } from 'react';
import Card from '../component/Card';
import data from '../assets/data/data.json';
import * as Images from '../assets/img';

export default function Wedding() {
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [showVipOnly, setShowVipOnly] = useState(false);

  const filteredTemplates = selectedTheme === 'All' 
    ? data 
    : data.filter(theme => theme.category === selectedTheme);

  const finalTemplates = showVipOnly
    ? filteredTemplates.map(theme => ({
        ...theme,
        items: theme.items.filter(item => item.premium)
      }))
    : filteredTemplates;

  return (
    <div className='wedding' id='catalog'>
      <div className='container'>
      <div className='filter-container'>
  <div className="theme-filter">
    <label htmlFor='theme-filter'>Filter by theme:</label>
    <select 
      id='theme-filter' 
      value={selectedTheme} 
      onChange={(e) => setSelectedTheme(e.target.value)}
    >
      {['All', 'Luxury', 'Islamic', 'Traditional', 'Floral', 'Minimalist', 'Overlay-Shadow'].map((theme) => (
        <option key={theme} value={theme}>{theme}</option>
      ))}
    </select>
  </div>
  
  <div className="vip-filter">
    <label>
      <input
        type="checkbox"
        checked={showVipOnly}
        onChange={(e) => setShowVipOnly(e.target.checked)}
      />
      <span>Show VIP Only</span>
    </label>
  </div>
</div>
        
        <div className='card-grid'>
          {finalTemplates.map((theme) => (
            theme.items.map((item) => (
              <Card
                key={item.title}
                imageUrl={Images[item.imageUrl]}
                title={item.title}
                price={item.price}
                previewUrl={item.previewUrl}
                premium={item.premium}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
}