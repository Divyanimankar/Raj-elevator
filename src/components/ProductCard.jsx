import { Link } from 'react-router-dom';
import './ProductCard.css'
export default function ProductCard({product}){return (
<article className="productCard">
  <img src={product.image} alt=""/>
  <div className="productBody">
    <span>
      {product.tag}
    </span>
    <h3>
      {product.name}
    </h3>
    <p>
      {product.desc}
    </p>
    <Link to={product.slug==='passenger-elevator'?'/products/passenger-elevator':'/contact'}>
      VIEW SPECIFICATIONS
    </Link>
  </div>
</article>
)}
