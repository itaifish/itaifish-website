import { z } from 'zod';
import { Constants } from '../utils/utility';
import { WorkType } from '@prisma/client';

const workTypeArr = Object.keys(WorkType) as [keyof typeof WorkType, ...(keyof typeof WorkType)[]];

export const newJobSchema = z.object({
	positionTitle: z.string().min(1).max(50),
	salary: z.object({
		rangeMin: z.number().min(Constants.minimumSalary).max(Constants.maximumSalary),
		rangeMax: z.number().max(Constants.maximumSalary).min(Constants.minimumSalary),
		bonusPotential: z.number().nonnegative().max(Constants.maximumSalary).optional(),
	}),
	workType: z.enum(workTypeArr),
	jobDescription: z.string().max(4000).optional(),
	location: z.object({
		city: z.string().min(1).max(50),
		country: z.string().min(1).max(50),
	}),
	email: z.string().email().max(100),
});
