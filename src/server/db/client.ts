// src/server/db/client.ts
import { PrismaClient } from '../../generated/prisma/client';
import { env } from '../../env/server.mjs';
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const adapter = new PrismaPg({
	connectionString: env.DATABASE_URL,
});

export const prisma =
	global.prisma ||
	new PrismaClient({
		adapter,
		log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	});

if (env.NODE_ENV !== 'production') {
	global.prisma = prisma;
}
