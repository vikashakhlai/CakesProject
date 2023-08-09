-- CreateTable
CREATE TABLE "Cakes" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT[],
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Cakes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT[],

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
