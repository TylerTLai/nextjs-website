import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Tyler Lai | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid md:space-x-20 lg:space-x-32 md:grid-cols-2">
        <div>
          <p className="text-4xl font-semibold text-gray-800">Hi, I'm Tyler.</p>
          <p className="mt-5 tracking-wider text-gray-400">
            Having been a{" "}
            <a
              className="text-gray-800"
              href="https://500px.com/p/TylerLai?view=photos"
              target="_blank"
              rel="noreferrer"
            >
              photographer
            </a>
            ,{" "}
            <a
              className="text-gray-800"
              href="https://www.youtube.com/watch?v=bwIy-tcUt0Q"
              target="_blank"
              rel="noreferrer"
            >
              video editor
            </a>
            , and now{" "}
            <a
              className="text-gray-800"
              href="https://github.com/TylerTLai"
              target="_blank"
              rel="noreferrer"
            >
              software engineer
            </a>
            , I’m passionate about pushing my creative and technical limits to build
            projects for people to enjoy.
          </p>
          <p className="mt-5 tracking-wider text-gray-400">
            In my life and approach I believe less is more and that simplicity is the best
            route.
          </p>
          <p className="mt-5 tracking-wider text-gray-400">
            If I’m not creating or coding, I’m{" "}
            <a
              className="text-gray-800"
              href="https://www.goodreads.com/user/show/48338817-tyler-lai"
              target="_blank"
              rel="noreferrer"
            >
              reading
            </a>
            .
          </p>
        </div>

        <div className="mt-20 md:mt-0">
          <p className="text-4xl font-semibold text-gray-800">Skillset</p>
          <div className="flex flex-wrap mt-5 text-gray-400 gap-x-24">
            <ul>
              <li className="mt-0">JavaScript ES6+</li>
              <li className="mt-3">React</li>
              <li className="mt-3">Redux</li>
              <li className="mt-3">TypeScript</li>
            </ul>
            <ul>
              <li className="mt-0 md:mt-3 lg:mt-0">NextJS</li>
              <li className="mt-3">Express</li>
              <li className="mt-3">MongoDB</li>
              <li className="mt-3">Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
