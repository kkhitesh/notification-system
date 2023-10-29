import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  const feedbacksData = [
    {
      title: "User Interface Feedback",
      content: "The user interface looks sleek and modern. However, the color scheme could be more vibrant. It's a small change that could make a big difference.",
      comments: ["I agree with this suggestion. A vibrant color scheme would be eye-catching.", "I also think a new color scheme could breathe life into the interface."],
    },
    {
      title: "Feature Request",
      content: "I'd love to see a dark mode option in the app. It would be easier on the eyes during night usage. Dark mode is a popular feature request, and it would be a great addition for late-night users.",
      comments: ["Dark mode is a must-have! I support this request.", "I'm often working late, and a dark mode would be a real game-changer."],
    },
    {
      title: "Bug Report",
      content: "I encountered a bug when trying to upload large files. The system crashes. We apologize for any inconvenience this bug has caused.",
      comments: ["I've experienced this bug too. It's quite frustrating.", "Thanks for reporting the issue. It's important to resolve it promptly."],
    },
    {
      title: "Performance Feedback",
      content: "The application is lightning fast! Kudos to the development team for the speed improvements. We're constantly working on optimizing performance for an even better experience.",
      comments: ["Agreed, the speed is impressive. Keep up the good work!", "I've noticed the speed improvements. It's a major plus for the app."],
    },
    {
      title: "Usability Suggestions",
      content: "The app is user-friendly, but the navigation can be a bit confusing. Consider simplifying the menu. Simplifying navigation is on our radar, and we'll work on making it more intuitive.",
      comments: ["I appreciate that you're addressing usability concerns.", "Simpler navigation would make the app even better."],
    },
    {
      title: "Notification Feature",
      content: "The notification feature works great, but it would be helpful to have the option to snooze notifications. Snooze notifications is a valuable idea, and we'll consider it for future updates.",
      comments: ["I often need to snooze notifications during meetings, so this feature would be fantastic.", "Snooze is a must-have for busy users. Thanks for considering it."],
    },
    {
      title: "Positive Review",
      content: "I'm really enjoying using this model. It's been a game-changer in my workflow. We're delighted to hear that our model has had a positive impact on your workflow!",
      comments: ["It's great to see such positive feedback.", "This model has really boosted my productivity as well."],
    },
    {
      title: "Security Concern",
      content: "I'm worried about the security of my data. Can you provide more information about the encryption in place? We take data security seriously and will provide more information about our encryption methods.",
      comments: ["Security is a top priority for users. Thanks for addressing this concern.", "I'm relieved to hear that you're serious about data security."],
    },
    {
      title: "Content Quality",
      content: "The content generated is good, but it occasionally produces irrelevant information. Please fine-tune it. Content relevance is important, and we'll work on fine-tuning to reduce irrelevant information.",
      comments: ["I've noticed some irrelevant content too. Glad to know it's being worked on.", "Content quality is key, and I'm looking forward to improvements."],
    },
    {
      title: "Collaboration",
      content: "I'd like the ability to collaborate with others in real-time. Is there a feature for that in the works? Real-time collaboration is a great suggestion, and we're exploring such features for the future.",
      comments: ["Collaboration is essential for many users. This is a step in the right direction.", "I've been wanting real-time collaboration. Can't wait for it to be implemented."],
    },
    {
      title: "Community Feedback",
      content: "The community aspect is fantastic, but there's room for improvement in moderating discussions. We're always working on community improvement, and your input on moderation is noted.",
      comments: ["Community is a big part of the experience. Thanks for addressing this.", "Moderation is crucial for a healthy community. Keep up the good work."],
    },
    {
      title: "Feature Enhancement",
      content: "The export feature is handy, but it lacks options for customizing the output format. Please add more flexibility. Customization options for export are in our plans. Thanks for your feedback.",
      comments: ["I frequently use the export feature, and customization would be a great addition.", "Customization would make the export feature even more versatile."],
    },
    {
      title: "Customer Support",
      content: "I had an issue, and the customer support team was quick to respond and resolve it. Great job! Our support team is committed to fast response times, and we're glad we could assist you.",
      comments: ["Quick support is a relief during critical issues. Well done!", "Efficient support is a big plus for users. Keep it up."],
    },
    {
      title: "Mobile App Experience",
      content: "The mobile app is fantastic, but I'd like to see more features that are available on the web version. We're working on feature parity between mobile and web versions. Stay tuned for updates.",
      comments: ["Feature parity is important for a consistent experience. Excited for what's to come.", "The mobile app is great, and I look forward to more features being added."],
    },
    {
      title: "Documentation",
      content: "The documentation could be more comprehensive. It would be helpful to have detailed guides and examples. We'll enhance our documentation with more detailed guides and examples to assist users.",
      comments: ["Comprehensive documentation is a valuable resource for users. Thank you for improving it.", "More detailed guides will be a big help, especially for new users."],
    },
  ];

  for (const feedbackData of feedbacksData) {
    const feedback = await prisma.feedbacks.create({
      data: {
        title: feedbackData.title,
        content: feedbackData.content,
        comments: {
          set: feedbackData.comments,
        },
        Notification: {
          create: {
            notification: `New comment on feedback "${feedbackData.title}": ${feedbackData.comments[0]}`,
          },
        },
      },
    });
  }

  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
