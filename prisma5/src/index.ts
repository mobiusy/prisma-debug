import { Prisma, PrismaClient } from '@prisma/client';
const client = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function write() {
  try {
    client.$connect();

    const buffer = Buffer.from('hello world');
    await client.case.create({
      data: {
        name: 'prisma',
        rawBinary: buffer,
        // befor fix
        archiveSnapshot: {
          version: '1.0.0',
          data: Buffer.from('hello world'),
        } as unknown as Prisma.InputJsonValue,

        // after fix

        // archiveSnapshot: {
        //   version: '1.0.0',
        //   data: {
        //     type: 'Buffer',
        //     data: Array.from(buffer),
        //   },
        // },
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
