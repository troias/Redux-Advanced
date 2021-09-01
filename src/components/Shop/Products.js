import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: 'first book',
    description: 'test3'
  },
  {
    id: 2,
    price: 20,
    title: 'second book',
    description: 'test2'
  },
  {
    id: 3,
    price: 10,
    title: 'thrid book',
    description: 'test1'
  },



]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(x => 
               <ProductItem key={x.id}
               id={x.id}
               title={x.title}
               price={x.price}
               description={x.description}
             />
      
        )}
   
      </ul>
    </section>
  );
};

export default Products;
