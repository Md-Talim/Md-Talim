import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    tags: ["TypeScript", "Next.js", "Mongo DB", "TailwindCSS"],
    title: "Ask Pro",
    imgSrc: "/projects/ask-pro.png",
    codeLink: "https://github.com/Md-Talim/ask-pro",
    projectLink: "https://askpro.vercel.app/",
    description:
      "AskPro is a dynamic Q&A platform designed to foster knowledge sharing and community interaction, similar to Stack Overflow.",
    modalContent: (
      <>
        <p>
          AskPro is a dynamic Q&A platform designed to foster knowledge sharing
          and community interaction, similar to Stack Overflow. Users can post
          questions, provide answers, and engage with the community through
          voting and saving their favorite content.
        </p>
        <div>
          <h4 className="text-2xl font-bold text-zinc-100">Features</h4>
          <ul className="ml-5 list-disc">
            <li>
              <strong>Ask Questions:</strong> Users can post questions on
              various topics to seek answers from the community.
            </li>
            <li>
              <strong>Provide Answers:</strong> Share your knowledge by
              answering questions posted by other users.
            </li>
            <li>
              <strong>Upvote/Downvote:</strong> Engage with content by upvoting
              or downvoting questions and answers based on their quality and
              relevance.
            </li>
            <li>
              <strong>Save to Collection:</strong> Save interesting questions to
              your personal collection for easy access and reference.
            </li>
            <li>
              <strong>Real-Time Updates:</strong> Experience seamless and
              real-time updates for a dynamic user interaction.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    tags: ["TypeScript", "Next.js", "TailwindCSS"],
    title: "Games Hub Next",
    imgSrc: "/projects/games-hub-next.png",
    codeLink: "https://github.com/Md-Talim/games-hub-next",
    projectLink: "https://games-hub-next.vercel.app/",
    description:
      "A game browsing application to get detailed information about games, including screenshots, available platforms, and ratings.",
    modalContent: (
      <>
        <p>
          Games Hub Next is a game browsing application that provides users with
          detailed information about games, including screenshots, descriptions,
          available platforms, and ratings. This project is built using{" "}
          <code>Next.js</code>
          and <code>TypeScript</code>, and it integrates with the RAWG.io API
          for game data.
        </p>
        <div>
          <h4 className="text-2xl font-bold text-zinc-100">Features</h4>
          <ul className="ml-5 list-disc">
            <li>
              <strong>Game Details:</strong> View detailed information about
              games, including screenshots, descriptions, available platforms,
              and ratings.
            </li>
            <li>
              <strong>Filtering:</strong> Filter games based on available
              platforms and genres.
            </li>
            <li>
              <strong>Sorting:</strong> Sort games by relevance, popularity, and
              names.
            </li>
            <li>
              <strong>Search:</strong> Search for games by name.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
