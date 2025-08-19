import { cn } from "@/lib/utils";
const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: String;
}) => {
  const StringValue = Number(value).toFixed(2);

  const [intValue, floatValue] = StringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
