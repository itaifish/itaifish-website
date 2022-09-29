-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('REMOTE', 'HYBRID_LEAN_REMOTE', 'HYBRID_HALF_AND_HALF', 'HYBRID_LEAN_INOFFICE', 'INOFFICE');

-- CreateTable
CREATE TABLE "JobOpportunity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "positionTitle" TEXT NOT NULL,
    "workType" "WorkType" NOT NULL,
    "jobDescription" TEXT,
    "technologies" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "JobOpportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salary" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "rangeMin" INTEGER NOT NULL,
    "rangeMax" INTEGER NOT NULL,
    "bonusPotential" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeRange" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "jobId" INTEGER NOT NULL,

    CONSTRAINT "TimeRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Salary_jobId_key" ON "Salary"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeRange_jobId_key" ON "TimeRange"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_jobId_key" ON "Location"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_city_country_key" ON "Location"("city", "country");

-- AddForeignKey
ALTER TABLE "Salary" ADD CONSTRAINT "Salary_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeRange" ADD CONSTRAINT "TimeRange_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
