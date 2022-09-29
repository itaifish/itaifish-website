// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { jobRouter } from './job';

export const appRouter = createRouter().transformer(superjson).merge('job.', jobRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
