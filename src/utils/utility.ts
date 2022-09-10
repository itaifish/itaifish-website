import { z } from 'zod';

export const Constants = {
	minimumSalary: 70_000,
	maximumSalary: 1_000_000,
};

export const dateSchema = z.preprocess((arg) => {
	if (typeof arg == 'string' || arg instanceof Date) {
		return new Date(arg);
	}
}, z.date());
