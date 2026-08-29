import PageHero from '../components/PageHero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG,products} from '../data/siteData.js';
import './Products.css'
export default function Products(){return (
<>
  <PageHero image={IMG.passenger} eyebrow="★ An ISO 9001:2015 Certified Vertical Transit Leader" title="Our Elevator Solutions" text="Explore a comprehensive and versatile portfolio co-engineered with Japanese Nidec precision controls for every architectural specification."/>
  <section className="productsPage">
    <h2>
      High Precision Products
    </h2>
    <div className="productsGrid">
      {[...products,...products.slice(0,2)].map((p,i)=>
      <ProductCard key={i} product={p}/>
      )}
    </div>
  </section>
  <CTASection/>
</>
)}
