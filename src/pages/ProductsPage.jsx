import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="products-page">
      <div className="container">
        <header className="products-header">
          <h1 className="products-title">Shop All</h1>
          <p className="products-subtitle">{filteredProducts.length} products</p>
        </header>

        <div className="products-filters">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid-page">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="products-empty">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
