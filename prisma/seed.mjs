import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.casino.createMany({
    data: [
      {
        country: "poland",
        slug: "sample-casino-1",
        title: "Sample Casino 1",
        description: "Test description",
        category: "online",
        tags: ["top", "bonus"],
        isPublished: true,
        isTop: true,
        rank: 1,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seed done");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
