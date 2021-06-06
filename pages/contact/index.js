import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Tyler Lai | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="text-4xl font-semibold text-gray-800">Say hello.</p>
      <p className="my-5 tracking-wider text-gray-400">
        Feel free to reach out to me and I will get back with you.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          className="px-2 py-1 text-xs tracking-widest transition duration-300 uppercase border border-gray-800 rounded-sm hover:text-white hover:bg-gray-800"
          href="mailto:lai.t.tyler@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          lai.t.tyler@gmail.com
        </a>
        <a
          className="px-2 py-1 text-xs tracking-widest transition duration-300 uppercase border border-gray-800 rounded-sm hover:text-white hover:bg-gray-800"
          href="https://github.com/TylerTLai"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          className="px-2 py-1 text-xs tracking-widest transition duration-300 uppercase border border-gray-800 rounded-sm hover:text-white hover:bg-gray-800"
          href="https://www.linkedin.com/in/tylertlai/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
