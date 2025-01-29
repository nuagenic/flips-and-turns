import { rulesAndTerms } from "@/lib/rulesAndTerms";
import Header from "@/components/Header";

export default function RulesAndTerms() {
  return (
    <main className="z-0 flex h-full w-full items-center justify-center overflow-auto bg-basic px-2 py-32">
      <Header />
      <div className="absolute z-20 aspect-square w-full transform overflow-auto bg-white p-12 text-xs text-black md:text-base lg:h-3/4vh lg:w-3/4vh">
        <div className="z-20 flex flex-col items-start justify-center gap-10 text-xl">
          {rulesAndTerms.map((section) => {
            return (
              <section key={section.title}>
                <div className="ml-6 underline">{section.title}</div>
                <ol>
                  {section.rules.map((rule, idx) => {
                    return (
                      <li
                        className="flex font-normal leading-7"
                        key={rule.content}
                      >
                        <div className="w-6 flex-shrink-0">{idx + 1}.</div>
                        <div className="w-auto whitespace-normal break-all">
                          {rule.content}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
