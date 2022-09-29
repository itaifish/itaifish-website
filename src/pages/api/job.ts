// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const createJob = async (req: NextApiRequest, res: NextApiResponse) => {
	const examples = await prisma.jobOpportunity.findMany();
	res.status(200).json(examples);
	return examples;
};

export default createJob;
