import { rulesAndTerms } from "@/lib/rulesAndTerms";
import Header from "@/components/Header";

export default function RulesAndTerms() {
  return (
    <main className="z-0 flex h-full w-full items-start justify-center overflow-auto bg-basic px-4 py-32 lg:px-52">
      <Header />
      <div className="z-20 flex flex-col items-start justify-center gap-10">
        {rulesAndTerms.map((section) => {
          return (
            <section key={section.title}>
              <div className="mb-2 font-semibold">{section.title}</div>
              <ol>
                {section.rules.map((rule, idx) => {
                  return (
                    <li className="font-normal leading-7" key={rule.content}>
                      <span className="inline-block w-6">
                        {idx + 1}.{"  "}
                      </span>
                      {rule.content}
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </main>
  );
}
