-- DropForeignKey
ALTER TABLE "public"."DownloadVerification" DROP CONSTRAINT "DownloadVerification_product_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."DownloadVerification" ADD CONSTRAINT "DownloadVerification_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
