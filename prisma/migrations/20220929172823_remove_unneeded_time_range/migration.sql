/*
  Warnings:

  - You are about to drop the `TimeRange` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TimeRange" DROP CONSTRAINT "TimeRange_jobId_fkey";

-- DropTable
DROP TABLE "TimeRange";
