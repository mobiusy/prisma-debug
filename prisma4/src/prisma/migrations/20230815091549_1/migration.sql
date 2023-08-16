/*
  Warnings:

  - Added the required column `rawBinary` to the `Case` table without a default value. This is not possible if the table is not empty.
  - Made the column `archiveSnapshot` on table `Case` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "rawBinary" BYTEA NOT NULL,
ALTER COLUMN "archiveSnapshot" SET NOT NULL;
