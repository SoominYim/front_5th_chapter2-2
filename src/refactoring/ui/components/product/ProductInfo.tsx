import { Product } from "../../../../types";
import { getMaxDiscount } from "../../../functions/cart/cartFunctions";

interface ProductInfoProps {
  product: Product;
  remainingStock: number;
}

export const ProductInfo = ({ product, remainingStock }: ProductInfoProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{product.name}</span>
        <span className="text-gray-600">{product.price.toLocaleString()}원</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">
        <span className={`font-medium ${remainingStock > 0 ? "text-green-600" : "text-red-600"}`}>
          재고: {remainingStock}개
        </span>
        {product.discounts.length > 0 && (
          <span className="ml-2 font-medium text-blue-600">
            최대 {(getMaxDiscount(product.discounts) * 100).toFixed(0)}% 할인
          </span>
        )}
      </div>
    </>
  );
}; 