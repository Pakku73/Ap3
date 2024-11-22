import ProductCard from '../Cards/ProductCard';

// interface Product {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//   }
  
//   interface ProductsPageProps {
//     products: Product[];
//   }
  
export default function ProductsList() {
  const products = [
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 29.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 19.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 39.99, image: '/images/product3.jpg' },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 39.99, image: '/images/product4.jpg' },

    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 29.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 19.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 39.99, image: '/images/product3.jpg' },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 39.99, image: '/images/product4.jpg' },
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 29.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 19.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 39.99, image: '/images/product3.jpg' },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 39.99, image: '/images/product4.jpg' },
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 29.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 19.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 39.99, image: '/images/product3.jpg' },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 39.99, image: '/images/product4.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// export default function ProductsPage({ products }: ProductsPageProps)

// export async function getStaticProps() {
//     const res = await fetch('https://api.example.com/products');
//     const products: Product[] = await res.json();
  
//     return {
//       props: {
//         products,
//       },
//       revalidate: 10,
//     };
//   }
