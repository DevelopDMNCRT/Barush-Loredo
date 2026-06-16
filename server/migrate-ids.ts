import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    for (const user of users) {
      if (user.id >= 1000 && user.id <= 9999) continue; // Already 4 digits

      let newId;
      let exists = true;
      while (exists) {
        newId = Math.floor(1000 + Math.random() * 9000);
        const existing = await prisma.user.findUnique({ where: { id: newId } });
        if (!existing) exists = false;
      }

      await prisma.$executeRaw`UPDATE "User" SET id = ${newId} WHERE id = ${user.id}`;
      console.log(`Updated user ${user.username} from ID ${user.id} to ${newId}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main().then(() => prisma.$disconnect());
