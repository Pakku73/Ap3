import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} €</p>
    </div>
  );
}