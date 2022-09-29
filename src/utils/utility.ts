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

export function deepExtractMessage(object: any, explored = new Set()): string[] {
	const res: string[] = [];
	if (explored.has(object)) {
		return res;
	}
	if (object == null || typeof object != 'object') {
		return res;
	}
	explored.add(object);
	for (const key of Object.keys(object)) {
		if (key === 'message') {
			res.push(object[key]);
		}
		if (typeof object[key] != 'object') {
			continue;
		}
		res.push(...deepExtractMessage(object[key], explored));
	}
	return res;
}
