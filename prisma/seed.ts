import prisma from "../src/utils/db";

async function main() {
  // Seed Users
  const users = await prisma.user.createMany({
    data: [
      {
        username: "john_doe",
        email: "john.doe@example.com",
        password: "securepassword1",
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        password: "securepassword2",
      },
      {
        username: "michael_brown",
        email: "michael.brown@example.com",
        password: "securepassword3",
      },
      {
        username: "emily_davis",
        email: "emily.davis@example.com",
        password: "securepassword4",
      },
      {
        username: "daniel_jones",
        email: "daniel.jones@example.com",
        password: "securepassword5",
      },
      {
        username: "sophia_garcia",
        email: "sophia.garcia@example.com",
        password: "securepassword6",
      },
      {
        username: "oliver_martinez",
        email: "oliver.martinez@example.com",
        password: "securepassword7",
      },
      {
        username: "ava_lopez",
        email: "ava.lopez@example.com",
        password: "securepassword8",
      },
      {
        username: "william_clark",
        email: "william.clark@example.com",
        password: "securepassword9",
      },
      {
        username: "mia_rodriguez",
        email: "mia.rodriguez@example.com",
        password: "securepassword10",
      },
    ],
  });

  console.log(users);
  // Seed Articles
  const articles = await prisma.article.createMany({
    data: [
      {
        title: "The Future of AI",
        description:
          "Exploring the advancements and ethical considerations of artificial intelligence.",
      },
      {
        title: "Climate Change Impact",
        description:
          "How climate change affects our planet and what we can do to help.",
      },
      {
        title: "Health and Wellness Tips",
        description: "Practical advice for maintaining a healthy lifestyle.",
      },
      {
        title: "Top 10 Travel Destinations",
        description: "A list of must-visit places around the world.",
      },
      {
        title: "The History of Technology",
        description: "Tracing the evolution of technology over the centuries.",
      },
      {
        title: "Financial Planning for Beginners",
        description: "Tips to manage your finances effectively.",
      },
      {
        title: "The Art of Photography",
        description: "Techniques and stories from professional photographers.",
      },
      {
        title: "Understanding Quantum Computing",
        description: "Breaking down the complex world of quantum computing.",
      },
      {
        title: "The Psychology of Happiness",
        description: "Exploring what makes people truly happy.",
      },
      {
        title: "Breaking into the Tech Industry",
        description: "Advice for aspiring tech professionals.",
      },
    ],
  });
  console.log(articles);

  // Seed Comments
  // const commentsData = [];
  // for (let i = 1; i <= 10; i++) {
  //   commentsData.push(
  //     { content: `Great insights on article ${i}!`, articleId: i, userId: (i % 10) + 1 },
  //     { content: `I found this very helpful. Thanks!`, articleId: i, userId: ((i + 1) % 10) + 1 },
  //     { content: `Could you elaborate more on this topic?`, articleId: i, userId: ((i + 2) % 10) + 1 },
  //     { content: `Fantastic read, learned a lot!`, articleId: i, userId: ((i + 3) % 10) + 1 },
  //     { content: `I have a question about this.`, articleId: i, userId: ((i + 4) % 10) + 1 }
  //   );
  // }
  // await prisma.comment.createMany({
  //   data: commentsData,
  // });

  console.log("Database seeded with real data successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
