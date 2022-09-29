import { createRouter } from './context';
import { newJobSchema } from '../../schemas/job.schema';

export const jobRouter = createRouter().mutation('createJobOpportunity', {
	input: newJobSchema,
	async resolve({ ctx, input }) {
		const { city, country } = input.location;
		const newLocation = await ctx.prisma.location.upsert({
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
			},
		});

		const { rangeMin, rangeMax, bonusPotential } = input.salary;
		const newSalary = await ctx.prisma.salary.create({
			data: { rangeMin, rangeMax, bonusPotential: bonusPotential },
		});

		const { positionTitle, jobDescription, workType, email } = input;
		const newJob = await ctx.prisma.jobOpportunity.create({
			data: {
				positionTitle,
				jobDescription,
				workType,
				emailContact: email,
				locationId: newLocation.id,
				salaryId: newSalary.id,
			},
		});
	},
});
