-- AlterTable
CREATE SEQUENCE cakes_id_seq;
ALTER TABLE "Cakes" ALTER COLUMN "id" SET DEFAULT nextval('cakes_id_seq');
ALTER SEQUENCE cakes_id_seq OWNED BY "Cakes"."id";

-- AlterTable
CREATE SEQUENCE reviews_id_seq;
ALTER TABLE "Reviews" ALTER COLUMN "id" SET DEFAULT nextval('reviews_id_seq');
ALTER SEQUENCE reviews_id_seq OWNED BY "Reviews"."id";
