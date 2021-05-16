import React from "react";
import { Root, Routes, addPrefetchExcludes, Head } from "react-static";
import { Link, Router } from "@reach/router";
import Dynamic from "containers/Dynamic";
import "./app.css";
import { ScrollToTop } from "components/ScrollToTop";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="mb-8">
        <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl">
              <Link to="/">Etin's Notes.</Link>
            </h1>
            <p className="text-xs">A collection of my scribblings</p>
          </div>
          <div className="flex justify-between w-full md:w-1/2 lg:w-1/3">
            <Link className="text-black hover:text-opacity-60" to="/">
              Home
            </Link>
            <Link className="text-black hover:text-opacity-60" to="/about">
              Categories
            </Link>
            <Link className="text-black hover:text-opacity-60" to="/blog">
              Twitter
            </Link>
            <Link className="text-black hover:text-opacity-60" to="/blog">
              Github
            </Link>
          </div>
        </nav>
        <hr />
      </header>
      <main className="px-8 md:px-24 lg:px-48">
        <React.Suspense fallback={<em>Loading...</em>}>
          <ScrollToTop path="/">
            <Router primary={false}>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </ScrollToTop>
        </React.Suspense>
      </main>
      <footer className="bg-gray-300 text-center py-4 px-8 md:px-24 lg:px-48">
        &copy; 2021, Etinosa Obaseki. Made With ❤️.{" "}
        <a className="underline" href="github.com/obasekietinosa/notes.etin.space">
          Explore this repository
        </a>
      </footer>
    </Root>
  );
}

export default App;
