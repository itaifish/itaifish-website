/*
  Warnings:

  - You are about to drop the column `technologies` on the `JobOpportunity` table. All the data in the column will be lost.
  - Added the required column `emailContact` to the `JobOpportunity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobOpportunity" DROP COLUMN "technologies",
ADD COLUMN     "emailContact" TEXT NOT NULL;
