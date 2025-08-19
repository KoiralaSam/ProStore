-- DropIndex
DROP INDEX "public"."product_slug_idx";

-- RenameIndex
ALTER INDEX "public"."Product_slug_key" RENAME TO "product_slug_idx";
