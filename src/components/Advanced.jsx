import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

export default function Advanced() {
  return (
    <>
      <section className=" bg-gray-100 pt-32 pb-10 lg:pb-40" id="advanced">
        <div className="max-width">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-[14px] text-center mb-10 lg:mb-20">
            Monitor your link performance across the internet <br /> using our
            comprehensive statistics platform.
          </p>

          <div className="relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="line"></div>
            <article className="bg-white p-5 rounded relative">
              <img
                src={brand}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Enhance Brand Visibility
              </h3>
              <p className="text-slate-400 text-sm">
                Elevate your brand’s presence with every click. Generic links
                lack impact; branded links foster trust in your content.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                src={records}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Comprehensive Metrics
              </h3>
              <p className="text-slate-400 text-sm">
                Understand your audience with detailed click data. Knowing when
                and where users interact with your content aids in making
                informed decisions.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                src={fully}
                alt=""
                className="p-3 -mt-12 bg-slate-800 rounded-full"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
              Fully Tailorable
              </h3>
              <p className="text-slate-400 text-sm">
              Increase brand awareness and discoverability with customizable links, boosting audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
