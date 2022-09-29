/*
  Warnings:

  - You are about to drop the column `jobId` on the `Location` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `JobOpportunity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryId` to the `JobOpportunity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_jobId_fkey";

-- DropForeignKey
ALTER TABLE "Salary" DROP CONSTRAINT "Salary_jobId_fkey";

-- DropIndex
DROP INDEX "Location_jobId_key";

-- AlterTable
ALTER TABLE "JobOpportunity" ADD COLUMN     "locationId" INTEGER NOT NULL,
ADD COLUMN     "salaryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "jobId";

-- AddForeignKey
ALTER TABLE "JobOpportunity" ADD CONSTRAINT "JobOpportunity_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "Salary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobOpportunity" ADD CONSTRAINT "JobOpportunity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
