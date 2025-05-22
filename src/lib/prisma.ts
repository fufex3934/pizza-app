// lib/prisma.ts

import { PrismaClient } from '../generated/prisma';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prevent multiple instances in dev (hot reload safe)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Optional: helpful for debugging
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
