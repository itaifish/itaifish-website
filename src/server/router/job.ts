import { createRouter } from './context';
import { z } from 'zod';
import { Constants, dateSchema } from '../../utils/utility';
import { WorkType } from '@prisma/client';

const workTypeArr = Object.keys(WorkType) as [keyof typeof WorkType, ...(keyof typeof WorkType)[]];

export const jobRouter = createRouter().mutation('createJobOpportunity', {
	input: z.object({
		positionTitle: z.string().min(1),
		salary: z.object({
			rangeMin: z.number().min(Constants.minimumSalary),
			rangeMax: z.number().max(Constants.maximumSalary),
			bonusPotential: z.number().nonnegative().optional(),
		}),
		hiringTimeRange: z.object({
			start: dateSchema,
			end: dateSchema,
		}),
		workType: z.enum(workTypeArr),
		jobDescription: z.string().optional(),
		location: z
			.object({
				city: z.string().min(1),
				country: z.string().min(1),
			})
			.optional(),
		technologies: z.array(z.string()).optional(),
	}),
	async resolve({ ctx, input }) {
		const { positionTitle, jobDescription, technologies, workType } = input;
		const newJob = await ctx.prisma.jobOpportunity.create({
			data: {
				positionTitle,
				jobDescription,
				technologies,
				workType,
			},
		});
		const { rangeMin, rangeMax, bonusPotential } = input.salary;
		await ctx.prisma.salary.create({
			data: { rangeMin, rangeMax, bonusPotential: bonusPotential, jobId: newJob.id },
		});
		const { start, end } = input.hiringTimeRange;
		await ctx.prisma.timeRange.create({
			data: {
				start,
				end,
				jobId: newJob.id,
			},
		});
		if (input.location) {
			const { city, country } = input.location;
			await ctx.prisma.location.upsert({
				where: {
					locationStringId: {
						city,
						country,
					},
				},
				update: {},
				create: {
					city,
					country,
					jobId: newJob.id,
				},
			});
		}
	},
});
