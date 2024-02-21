import { db as prisma } from "@/server/db";
import seedBooks from "./seeds/books";

async function main() {
  await seedBooks(prisma);
}

main()
  .then(() => {
    console.log("Seeding complete ✅");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
