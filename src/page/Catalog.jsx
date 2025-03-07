import React, { useState } from 'react';
import Card from '../component/Card';
import data from '../assets/data/data.json';
import * as Images from '../assets/img';

export default function Wedding() {
  const [selectedTheme, setSelectedTheme] = useState('Semua Tema');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [showVipOnly, setShowVipOnly] = useState(false);

  const filteredData = data.map(theme => ({
    ...theme,
    items: theme.items.filter(item => 
      (selectedTheme === 'Semua Tema' || theme.theme === selectedTheme) &&
      (selectedCategory === 'Semua Kategori' || item.category === selectedCategory) &&
      (!showVipOnly || item.premium)
    )
  })).filter(theme => theme.items.length > 0);

  const displayedItems = filteredData.reduce((acc, theme) => acc.concat(theme.items), []);

  return (
    <div className='wedding' id='catalog'>
      <div className='container'>
        <div className='filter-container'>
          <label>Filter</label>
          <div className='select-container'>
            <select
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {['Semua Kategori', 'Wedding', 'Birthday', 'Aqiqah','Graduation'].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select 
              value={selectedTheme} 
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value="Semua Tema">Semua Tema</option>
              {Array.from(new Set(data.map(theme => theme.theme))).map((theme) => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>

            {/* <label>
              <input
                type="checkbox"
                checked={showVipOnly}
                onChange={(e) => setShowVipOnly(e.target.checked)}
              />
              Premium
            </label> */}
          </div>
        </div>

        <div className='card-grid'>
          {displayedItems.map((item) => (
            <Card
              key={item.title}
              imageUrl={Images[item.imageUrl]}
              title={item.title}
              price={item.price}
              previewUrl={item.previewUrl}
              premium={item.premium}
            />
          ))}
        </div>
      </div>
    </div>
  );
}