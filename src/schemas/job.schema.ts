import { z } from 'zod';
import { Constants } from '../utils/utility';
import { WorkType } from '@prisma/client';

const workTypeArr = Object.keys(WorkType) as [keyof typeof WorkType, ...(keyof typeof WorkType)[]];

export const newJobSchema = z.object({
	positionTitle: z.string().min(1),
	salary: z.object({
		rangeMin: z.number().min(Constants.minimumSalary),
		rangeMax: z.number().max(Constants.maximumSalary),
		bonusPotential: z.number().nonnegative().optional(),
	}),
	// hiringTimeRange: z.object({
	// 	start: dateSchema,
	// 	end: dateSchema,
	// }),
	workType: z.enum(workTypeArr),
	jobDescription: z.string().optional(),
	location: z.object({
		city: z.string().min(1),
		country: z.string().min(1),
	}),
	email: z.string().email(),
});
