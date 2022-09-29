/*
  Warnings:

  - You are about to drop the column `jobId` on the `Salary` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Salary_jobId_key";

-- AlterTable
ALTER TABLE "Salary" DROP COLUMN "jobId";
