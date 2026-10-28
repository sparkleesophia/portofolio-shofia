import Image from "next/image";
import CaseStudySection from "./components/CaseStudySection";

const services = [
  {
    number: "01",
    title: "Data Cleaning",
    description:
      "Stop wrestling with chaotic spreadsheets. I specialize in transforming raw, inconsistent data into clean, structured datasets ready for analysis.",
    detail: "Clean inputs. Confident decisions.",
  },
  {
    number: "02",
    title: "People Analytics",
    description:
      "Understand the humans behind the numbers. I build dynamic dashboards to track cross-team KPIs, employee engagement, training ROI, and turnover risks.",
    detail: "People-first, evidence-led.",
  },
  {
    number: "03",
    title: "Workflow Automation",
    description:
      "Work smarter, not harder. I design seamless backend automations (using n8n and Notion) to ensure your operational data flows perfectly without human error.",
    detail: "More flow. Less busywork.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.25 8h9.5m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DataPreview() {
  return (
    <div
      aria-label="Illustration of workforce data becoming useful insights"
      className="relative mx-auto w-full max-w-[31rem]"
    >
      <div className="absolute -left-7 top-16 hidden h-24 w-24 rounded-full bg-autumn-lavender/60 blur-2xl sm:block" />
      <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-autumn-camel/35 blur-2xl" />
      <div className="relative rounded-[2rem] border border-autumn-rust/15 bg-white/80 p-5 shadow-[0_24px_70px_-35px_rgba(91,52,181,0.28)] sm:p-7">
        <div className="flex items-center justify-between border-b border-autumn-navy/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-autumn-rust">
              People, made clear
            </p>
            <p className="mt-1 text-sm text-autumn-navy/60">
              Workforce snapshot
            </p>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-autumn-camel" />
            <span className="h-2 w-2 rounded-full bg-autumn-rust/70" />
            <span className="h-2 w-2 rounded-full bg-autumn-lilac" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 py-5">
          <div className="rounded-2xl bg-autumn-ivory p-4">
            <p className="text-xs text-autumn-navy/55">Turnover signal</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">13.6%</p>
            <p className="mt-1 text-xs text-autumn-rust">Sales · peak</p>
          </div>
          <div className="rounded-2xl bg-autumn-lilac/55 p-4">
            <p className="text-xs text-autumn-navy/55">Training impact</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">$561</p>
            <p className="mt-1 text-xs text-autumn-navy/60">ROI / participant</p>
          </div>
        </div>
        <div className="rounded-2xl border border-autumn-navy/10 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">Engagement by team</p>
            <span className="text-xs text-autumn-navy/45">This quarter</span>
          </div>
          <div className="space-y-3">
            {[
              ["People", "82%", "w-[82%]", "bg-autumn-rust"],
              ["Product", "71%", "w-[71%]", "bg-autumn-camel"],
              ["Sales", "64%", "w-[64%]", "bg-autumn-navy/70"],
            ].map(([team, percentage, width, color]) => (
              <div key={team} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-2 text-xs">
                <span className="text-autumn-navy/65">{team}</span>
                <span className="h-2 overflow-hidden rounded-full bg-autumn-cream">
                  <span className={`block h-full rounded-full ${width} ${color}`} />
                </span>
                <span className="text-right text-autumn-navy/55">
                  {percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 rounded-2xl border border-autumn-navy/10 bg-autumn-ivory px-4 py-3 shadow-lg sm:-left-8">
        <p className="text-xs text-autumn-navy/55">From messy data to</p>
        <p className="text-sm font-semibold">meaningful action ↗</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <a
          aria-label="Shofia Khansa home"
          className="flex items-center gap-3"
          href="#home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-autumn-rust text-sm font-semibold text-white shadow-sm">
            S.
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Shofia Khansa
          </span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <a
            className="hidden text-sm text-autumn-navy/65 transition hover:text-autumn-rust sm:block"
            href="#about"
          >
            About
          </a>
          <a
            className="hidden text-sm text-autumn-navy/65 transition hover:text-autumn-rust sm:block"
            href="#services"
          >
            What I do
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-full border border-autumn-navy/15 px-4 py-2.5 text-sm font-medium transition hover:border-autumn-rust hover:text-autumn-rust"
            href="#case-study"
          >
            Case study <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid min-h-[34rem] w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-14"
          id="home"
        >
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-autumn-rust/20 bg-autumn-lilac/60 px-3.5 py-2 text-xs font-semibold tracking-wide text-autumn-purple">
              <span className="h-2 w-2 rounded-full bg-autumn-rust" />
              PEOPLE ANALYTICS · DATA OPERATIONS
            </p>
            <h1
              className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]"
              id="hero-title"
            >
              Transforming Messy Data into{" "}
              <span className="text-autumn-rust">
                Actionable People Insights
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-autumn-navy/70 sm:text-lg sm:leading-8">
              I help businesses streamline their data operations, uncover
              workforce trends, and automate repetitive tasks. By combining
              behavioral psychology with robust data analytics, I build systems
              that make your data work for you.
            </p>
            <a
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-autumn-rust px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(107,70,193,0.55)] transition hover:-translate-y-0.5 hover:bg-autumn-purple"
              href="#case-study"
            >
              View Case Studies <ArrowIcon />
            </a>
            <div className="mt-10 flex items-center gap-3 text-xs text-autumn-navy/55">
              <span className="h-px w-8 bg-autumn-camel" />
              Thoughtful systems for people-first teams
            </div>
          </div>
          <DataPreview />
        </section>

        <section
          aria-labelledby="about-title"
          className="border-t border-autumn-rust/10 bg-white/75 py-20 sm:py-24"
          id="about"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-autumn-rust">
                About Me
              </p>
              <h1
                className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-autumn-navy sm:text-4xl lg:text-[2.65rem]"
                id="about-title"
              >
                Connecting the Dots: People, Data, and Systems
              </h1>
              <div className="mt-6 space-y-5 text-base leading-7 text-autumn-navy/75 sm:text-[1.05rem] sm:leading-8">
                <p>
                  My journey into data analytics didn&apos;t start with numbers;
                  it started with people. With a degree in Psychology and a
                  background in Learning Design and HR Operations, I spent years
                  understanding how people learn, work, and engage within
                  organizations.
                </p>
                <p>
                  However, I quickly realized that scaling human-centered
                  solutions requires robust data and efficient systems. This led
                  me to master data analytics—graduating with a perfect score
                  from an intensive bootcamp—and dive deep into workflow
                  automation using tools like n8n and Notion.
                </p>
                <p>
                  Today, I help companies clean chaotic operational data,
                  visualize workforce trends, and automate repetitive tasks,
                  ensuring that leadership can make empathetic, data-driven
                  decisions. When I&apos;m not building dashboards or
                  configuring backend workflows, you can find me designing 3D
                  character concepts or exploring spatial interior design.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Psychology Degree",
                  "Learning Design & HR Ops",
                  "Data Analytics Bootcamp · Perfect Score",
                  "n8n & Notion Automation",
                  "3D Character & Spatial Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-autumn-rust/20 bg-autumn-lilac/60 px-3.5 py-1.5 text-xs font-medium text-autumn-purple"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-autumn-lavender/50 blur-2xl" />
              <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-autumn-camel/35 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-autumn-rust/20 bg-gradient-to-br from-autumn-lilac via-autumn-cream to-white p-3 shadow-[0_24px_60px_-25px_rgba(91,52,181,0.28)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/shofia-khansa.jpg"
                    alt="Portrait of Shofia Khansa"
                    fill
                    sizes="(max-width: 1024px) 90vw, 28rem"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="services-title"
          className="bg-autumn-cream py-20 sm:py-24"
          id="services"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-autumn-rust">
                  Specialized services
                </p>
                <h2
                  className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
                  id="services-title"
                >
                  Good data makes room
                  <br className="hidden sm:block" /> for good work.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-autumn-navy/65">
                Practical, people-centered support for every step between raw
                data and confident decisions.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex min-h-[19rem] flex-col rounded-[1.5rem] border border-autumn-rust/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-autumn-rust/30 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-autumn-lilac px-2.5 py-1 text-xs font-semibold tracking-[0.15em] text-autumn-purple">
                      {service.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-autumn-camel"
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-autumn-navy/70">
                    {service.description}
                  </p>
                  <p className="mt-6 border-t border-autumn-navy/10 pt-4 text-xs font-medium text-autumn-rust">
                    {service.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col justify-between gap-6 rounded-[1.5rem] border border-autumn-rust/15 bg-white/90 p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-autumn-rust">
                  Enterprise AI &amp; Custom Engineering
                </p>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Scaling Up? Meet My Engineering Team.
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-autumn-navy/70 sm:text-base sm:leading-7">
                  For complex AI integrations and full-scale operational
                  software, I partner closely with my specialized development
                  agency. I handle the strategic blueprint and client
                  onboarding, bridging the gap between your business goals and
                  our robust technical execution.
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-autumn-navy/20 bg-autumn-ivory px-5 py-3 text-sm font-semibold text-autumn-navy transition hover:border-autumn-rust hover:text-autumn-rust"
              >
                Explore Agency Services <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <CaseStudySection />
      </main>

      <footer className="border-t border-autumn-navy/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-autumn-navy/55 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <span>Shofia Khansa — Insightful work, made human.</span>
          <a
            className="w-fit font-medium text-autumn-navy transition hover:text-autumn-rust"
            href="#home"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
