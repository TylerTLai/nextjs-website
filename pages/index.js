import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../components/Button";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div>
      <Head>
        <title>Tyler Lai | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="font-mono text-sm tracking-widest text-gray-400 uppercase">
        Fullstack Developer
      </p>
      <p className="mt-2 mb-6 text-6xl font-bold tracking-wide font-body md:text-7xl">
        Tyler Lai
      </p>
      <p className="text-lg tracking-wider text-gray-400">
        I build and design apps that focus on the user experience.
      </p>
      <Button onClick={handleClick}>My Projects</Button>
    </div>
  );
};

export default Home;
