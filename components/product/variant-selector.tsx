import { ProductOption, ProductVariant } from '@/lib/shopify/types';

type Props = {
  options: ProductOption[];
  variants: ProductVariant[];
};
const VariantSelector = ({ options, variants }: Props) => {
  console.log(options);
  console.log(variants);
  return <div>VariantSelector</div>;
};
export default VariantSelector;
