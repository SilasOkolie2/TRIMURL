import { useEffect, useState } from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
  const links = localStorage.getItem("links");
  return links ? JSON.parse(links) : [];
};

export default function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
      return;
    }

    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'acf8bf912e5b07a97d595b4f704e23d8362c88cd'
        },
        body: JSON.stringify({ long_url: text })
      });
      
      if (!response.ok) {
        throw new Error("Failed to shorten the URL");
      }

      const data = await response.json();
      const newLink = {
        original_link: text,
        full_short_link: data.link
      };
      
      setLinks((prevLinks) => [...prevLinks, newLink]);
      setText("");
    } catch (error) {
      console.error("Error shortening the link:", error);
      alert("Failed to shorten the link. Please try again.");
    }
  };

  const handleCopy = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    setButtonText("Copied!");
    setTimeout(() => setButtonText("Copy"), 2000); // Reset button text after 2 seconds
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <section className="max-width shortener relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgDesktop} />
        <img src={bgMobile} alt="" />
      </picture>

      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col border-yellow-950 md:flex-row">
          <input
            type="url"
            placeholder="Shorten a link here"
            className="w-full py-2 px-5 rounded-lg  mb-2 md:mb-0 md:w-2/3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
          >
            Shorten It!
          </button>
        </div>
      </form>

      {links.length > 0 && (
        <div className=" flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-4 ">
              <h6 className="mb-3 md:mb-0">{link.original_link}</h6>
              <ul className="md:flex md:items-center">
                <li className="md:mr-5">
                  <button className="text-cyan-500">
                    {link.full_short_link}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCopy(link.full_short_link)}
                    className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                  >
                    {buttonText}
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
