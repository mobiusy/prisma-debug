import { Prisma, PrismaClient } from '@prisma/client';
const client = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function write() {
  try {
    client.$connect();
    await client.case.create({
      data: {
        name: 'prisma',
        rawBinary: Buffer.from('hello world'),
        archiveSnapshot: {
          version: '1.0.0',
          data: Buffer.from('hello world'),
        } as unknown as Prisma.InputJsonValue,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    client.$disconnect();
  }
}

function main() {
  write();
}

main();
