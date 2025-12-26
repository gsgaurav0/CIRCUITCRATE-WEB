import React, { useState, useMemo } from 'react';
import { electronicsData } from '../data/electronicsData';
import { Search, X, Zap } from 'lucide-react';
import './ElectronicsLibrary.css';

const ElectronicsLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    // Dynamic extraction of categories
    const categories = ['All', ...new Set(electronicsData.map(item => item.category))];

    // Filter Logic
    const filteredItems = useMemo(() => {
        return electronicsData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <section className="electronics-section">
            <div className="container mx-auto px-4">
                <div className="elec-header">
                    <h2 className="elec-title">Component Encyclopedia</h2>
                    <p className="text-slate-400 mb-8">Master the building blocks of modern hardware.</p>

                    <div className="elec-search-bar">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            className="elec-search-input pl-12"
                            placeholder="Search for 'Resistor', '555 Timer', 'Sensor'..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="elec-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`elec-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="elec-grid">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="elec-card"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img src={item.image} alt={item.name} loading="lazy" />
                            <div className="elec-card-content">
                                <span className="elec-card-category">{item.category}</span>
                                <h3 className="elec-card-title">{item.name}</h3>
                                <p className="elec-card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                {selectedItem && (
                    <div className="elec-modal-overlay" onClick={() => setSelectedItem(null)}>
                        <div className="elec-modal-content" onClick={e => e.stopPropagation()}>
                            <div className="elec-modal-header">
                                <img src={selectedItem.image} alt={selectedItem.name} />
                                <button className="elec-close-btn" onClick={() => setSelectedItem(null)}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="elec-modal-body">
                                <h3 className="elec-modal-title">{selectedItem.name}</h3>
                                <span className="elec-modal-cat">{selectedItem.category}</span>

                                <div className="mb-6">
                                    <h4 className="elec-section-title">Description</h4>
                                    <p className="elec-modal-text">{selectedItem.desc}</p>
                                </div>

                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <h4 className="elec-section-title flex items-center gap-2 text-yellow-400">
                                        <Zap size={16} /> How It Works
                                    </h4>
                                    <p className="elec-modal-text mb-0 text-sm opacity-90">{selectedItem.howItWorks}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ElectronicsLibrary;
