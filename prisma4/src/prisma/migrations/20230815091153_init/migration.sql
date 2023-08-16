-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "archiveSnapshot" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);
