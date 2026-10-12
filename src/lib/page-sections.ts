/**
 * Long-form sections for service and make pages. Keyed by slug.
 * Keep claims limited to what the shop already states publicly: no invented prices,
 * certifications, warranties, or turnaround guarantees.
 */
export type Section = { h2: string; paragraphs: string[]; bullets?: string[] };

export const serviceSections: Record<string, Section[]> = {
  "performance-upgrades": [
    {
      h2: "How a performance job is planned here",
      paragraphs: [
        "Most performance problems we see started as a single part bought on its own: an intake, a downpipe, a set of coilovers, or a tune file. Each one is fine by itself. The trouble starts when the car is asked to run, stop, and steer with parts that were never planned together.",
        "At The Upgrade Shop the first conversation is about what the car is for. A daily driver that sees winter salt on the St. Croix crossing needs a different setup than a weekend car or a track build. We write down the goal, the budget, and what the car already has, then put the hardware and calibration in one plan.",
      ],
    },
    {
      h2: "Supporting mods come first",
      paragraphs: [
        "More power puts more load on fuel delivery, cooling, the clutch or transmission, and the brakes. Before we add boost or timing we look at what will be stressed next, so the car keeps its reliability after the install.",
      ],
      bullets: [
        "Fuel: pump capacity, injectors, and pressure under load",
        "Cooling: intercooler, radiator, oil and transmission temps",
        "Driveline: clutch, mounts, and how torque reaches the ground",
        "Brakes: pad compound, fluid, and rotor size for the new speed",
      ],
    },
    {
      h2: "What you get back",
      paragraphs: [
        "You get the car back with the work explained: what was installed, what was changed in calibration, and anything we noticed that should be watched. If something in the plan is not worth the money for how you drive, we say so before it is ordered.",
        "Call the shop or send the quote form with the year, make, model, current mods, and what you want the car to do. That is enough for us to tell you whether the plan makes sense and what the next step is.",
      ],
    },
  ],
  "general-repair": [
    {
      h2: "Diagnosis before parts",
      paragraphs: [
        "A warning light or a noise is a symptom, not a repair. We start by confirming the complaint, reading fault codes, and checking live data and the physical parts before anything is ordered. That keeps you from paying for a part that was only a guess.",
        "European cars in particular stack faults on top of each other. One failing sensor can set several codes across modules. Sorting the root cause from the side effects is most of the job, and it is the part a code reader alone cannot do.",
      ],
    },
    {
      h2: "Daily drivers and specialty cars in one bay",
      paragraphs: [
        "The same shop that rebuilds engines also does brakes, suspension, fluids, and scheduled maintenance. That matters if your car is modified or turbocharged, because routine work on those cars still needs someone who knows what the previous upgrades touched.",
      ],
      bullets: [
        "Check engine and warning-light diagnosis",
        "Brakes, rotors, calipers, and brake fluid service",
        "Suspension, steering, and chassis noises",
        "Leaks, cooling-system faults, and overheating",
        "Heating and air conditioning",
        "Oil service and scheduled maintenance",
      ],
    },
    {
      h2: "How a repair visit works",
      paragraphs: [
        "Call or send the quote form with what the car is doing and when it happens. We set a time to inspect it, tell you what we found, and give you the options before the work starts. If the car is not safe to drive, you hear that first.",
        "Hudson, River Falls, Stillwater, and Woodbury drivers use the shop because it sits between the towns on Valerie Ave, without the wait at a dealer service lane.",
      ],
    },
  ],
  "engine-swaps-rebuilds": [
    {
      h2: "Repair, rebuild, or replace",
      paragraphs: [
        "Not every sick engine needs a full rebuild. Compression and leak-down testing, oil analysis, and a look inside tell us whether the problem lives in the top end, the bottom end, or somewhere else entirely. That decides whether the job is a head repair, a full rebuild, or a swap.",
        "We explain the trade-offs in plain terms: cost, downtime, and what you get at the end. A used long-block can be the right answer for some cars. For a performance engine you plan to keep, a careful rebuild is usually the better value.",
      ],
    },
    {
      h2: "Swaps that drive like they came that way",
      paragraphs: [
        "An engine swap is not finished when the engine starts. Mounts, wiring, fuel, cooling, exhaust, and calibration all have to work together for the car to be driven daily. We plan those pieces up front so the swap does not turn into an open-ended project.",
      ],
      bullets: [
        "Mounting and driveline alignment",
        "Harness, modules, and sensor integration",
        "Fuel and cooling sized for the new engine",
        "Calibration and a road test before delivery",
      ],
    },
    {
      h2: "Documented assembly",
      paragraphs: [
        "Serious engine work is photographed as it goes together, so you can see the bearings, clearances, and assembly instead of only the finished engine bay. Call the shop or send the quote form with the engine, symptoms, and your goal for the car.",
      ],
    },
  ],
  diagnostics: [
    {
      h2: "Why a code is only the starting point",
      paragraphs: [
        "A scan tool tells you which circuit or system set a fault. It does not tell you why. A misfire code can be a coil, a plug, an injector, a vacuum leak, or a mechanical problem. A lean code can be a sensor, an intake leak, or a fuel delivery issue. Guessing from the code alone is how people end up replacing three parts to fix one problem.",
        "Diagnosis at The Upgrade Shop starts with confirming the symptom, then reading codes and freeze-frame data, then checking live data and the physical parts. The goal is to find the cause before you pay for a repair.",
      ],
    },
    {
      h2: "What we check",
      paragraphs: [
        "The exact steps depend on the complaint, but most diagnostic visits cover these areas:",
      ],
      bullets: [
        "Fault codes and freeze-frame data across all modules, not just the engine",
        "Live sensor data compared against what the system expects",
        "Fuel trims, misfire counters, and boost or vacuum readings",
        "Visual inspection for leaks, damaged wiring, and loose connections",
        "Mechanical tests such as compression or leak-down when the data points there",
      ],
    },
    {
      h2: "European and modified cars",
      paragraphs: [
        "BMW and other European cars use many networked control modules, and one fault can trigger warnings in several of them. Modified cars add another layer: a tune, aftermarket intake, or exhaust can change how the car reports problems. We look at the whole picture, including previous upgrades, before calling a part bad.",
        "If a fault was caused by a modification, we tell you plainly and give you the options to fix it properly.",
      ],
    },
    {
      h2: "What happens after the diagnosis",
      paragraphs: [
        "You get a clear explanation of what we found, what is urgent, and what can wait. You decide what gets fixed. If the car is unsafe to drive, we say that first.",
        "Call the shop or send the quote form with the year, make, model, the warning light or symptom, and when it happens. Drivers from Hudson, River Falls, Stillwater, and Woodbury bring cars to the shop on Valerie Ave.",
      ],
    },
  ],
  brakes: [
    {
      h2: "Signs your brakes need attention",
      paragraphs: [
        "Brakes usually warn you before they fail. The common signs are a squeal or grinding noise, a vibration through the pedal or steering wheel, a soft or sinking pedal, the car pulling to one side, or a brake warning light. Any of these is worth an inspection.",
        "If the pedal goes to the floor, the car will not stop straight, or you hear metal on metal, stop driving when it is safe and call the shop.",
      ],
    },
    {
      h2: "What a brake service covers",
      paragraphs: ["We inspect the whole system, not just the pads, and quote what the car actually needs:"],
      bullets: [
        "Pad and rotor measurement and condition",
        "Caliper slide pins, pistons, and hardware",
        "Brake lines and hoses for leaks or damage",
        "Brake fluid condition and service",
        "ABS and brake warning-light diagnosis",
      ],
    },
    {
      h2: "Brakes for performance and European cars",
      paragraphs: [
        "European and performance cars often use larger brakes, wear sensors, and electronic parking brakes that need the right tools to service. If your car has more power than stock, the brakes should match. We can recommend pad compounds, fluid, and rotor options for how you drive, from daily commuting to occasional track days.",
        "Big-brake upgrades are planned around your wheels, so the setup fits and works before parts are ordered.",
      ],
    },
    {
      h2: "Book a brake inspection",
      paragraphs: [
        "Call the shop or send the quote form with the year, make, model, and what the brakes are doing. We will tell you what we find and the options before any work starts.",
      ],
    },
  ],
  "coilovers-suspension": [
    {
      h2: "Coilovers done as a setup, not just a part swap",
      paragraphs: [
        "Bolting coilovers on is the easy part. Ride height, damping, and alignment decide whether the car feels better or just looks lower. A car dropped too far can bottom out, wear tires unevenly, and ride worse than stock.",
        "We start by asking how you use the car: daily driving on Wisconsin and Minnesota roads, spirited weekends, or track time. That decides the ride height, damper settings, and alignment targets.",
      ],
    },
    {
      h2: "What a suspension job includes",
      paragraphs: ["Depending on the car and the goal, a suspension job can include:"],
      bullets: [
        "Coilover or spring and damper install",
        "Ride height and corner setup",
        "Damping adjustment for your use",
        "Control arms, bushings, and end links",
        "Alignment after the install",
        "A road test before the car goes home",
      ],
    },
    {
      h2: "Suspension repair",
      paragraphs: [
        "Not every suspension visit is an upgrade. Clunks over bumps, wandering on the highway, uneven tire wear, and a bouncy ride after a pothole are all signs of worn or damaged parts. We find the cause, show you what we found, and quote the repair.",
        "European cars commonly wear control-arm bushings, thrust arms, and strut mounts. Catching them early protects tires and keeps the car stable.",
      ],
    },
    {
      h2: "Book a suspension visit",
      paragraphs: [
        "Call the shop or send the quote form with the year, make, model, current parts, and what you want the car to feel like. Photos of the current setup help.",
      ],
    },
  ],
  tuning: [
    {
      h2: "Calibration is part of the hardware plan",
      paragraphs: [
        "An ECU tune changes how the engine uses fuel, timing, and boost. A tune that ignores the hardware on the car, or hardware that is never calibrated, leaves performance on the table and can put the engine at risk. We plan tuning together with the intake, exhaust, turbo, and fuel parts.",
        "Before any calibration work, we check that the car is healthy. Tuning a car with a misfire, a boost leak, or a weak fuel pump only makes the problem worse.",
      ],
    },
    {
      h2: "What we look at before tuning",
      paragraphs: ["A pre-tune check usually covers:"],
      bullets: [
        "Fault codes and any existing problems",
        "Spark plugs, coils, and ignition health",
        "Boost and vacuum leaks",
        "Fuel delivery under load",
        "Cooling capacity for the added power",
        "Clutch or transmission condition",
      ],
    },
    {
      h2: "Daily drivers and built cars",
      paragraphs: [
        "Many drivers want a stronger, smoother car that still starts every winter morning and passes a long road trip without drama. Others are building for more power with supporting mods. Both are welcome. We will tell you what is realistic for your car and what supporting work the goal needs.",
        "Ask about warranty and emissions effects before you tune. Factory coverage varies by maker and by what is changed, and we explain what the work touches before it starts.",
      ],
    },
    {
      h2: "Start with a conversation",
      paragraphs: [
        "Call the shop or send the quote form with the year, make, model, engine, current mods, and your goal. We will tell you whether the plan makes sense and what the next step is.",
      ],
    },
  ],
};

/** Shared sections appended to every service and make page. */
export const sharedSections: Section[] = [
  {
    h2: "How a visit works",
    paragraphs: [
      "Start with a call or the quote form. Tell us the year, make, model, mileage, and what the car is doing or what you want it to do. Photos help, especially for leaks, worn parts, or a setup you want changed.",
      "We book a time to see the car, inspect it, and call you with what we found before anything is ordered. You get the options, what is urgent, what can wait, and the expected downtime. Nothing is added to the job without your approval.",
      "When the work is done, we walk you through what was changed and anything worth watching. For larger jobs, we photograph the work as it goes so you can see more than the finished result.",
    ],
  },
  {
    h2: "Serving Hudson, River Falls, and the St. Croix valley",
    paragraphs: [
      "The Upgrade Shop sits on Valerie Ave between Hudson and downtown River Falls, a few minutes off Hwy 35. Drivers come from Hudson, River Falls, Stillwater, Woodbury, Afton, Lakeland, Ellsworth, and Prescott for work that is hard to get scheduled at a dealer or a high-volume chain.",
      "Shop hours are Monday to Friday 8 AM to 6 PM and Saturday 9 AM to 2 PM. Call (651) 353-1243, text a photo of the problem, or send the quote form below.",
    ],
  },
];

export type MakePage = {
  slug: string;
  make: string;
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  summary: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  sections: Section[];
  faqs: { q: string; a: string }[];
};

const commonFaqs = (make: string) => [
  {
    q: `Do I have to go to the dealer to service my ${make}?`,
    a: `No. Independent shops can perform maintenance and repairs on a ${make}. Keep your service records, and ask us what the work touches if you have factory coverage.`,
  },
  {
    q: `Can you diagnose a ${make} warning light?`,
    a: "Yes. We read fault codes across the car's modules, check live data, and inspect the parts before recommending a repair.",
  },
  {
    q: "How do I book?",
    a: "Call the shop at (651) 353-1243 or send the quote form with the year, model, and what the car is doing. Hours are Monday to Friday 8 to 6, Saturday 9 to 2.",
  },
  {
    q: "Do you only work on BMWs?",
    a: "No. BMW is most of the work on the floor, but European, high-end, and daily-driver cars are all booked. Audi and Mercedes-Benz owners get the same diagnosis-first process.",
  },
  {
    q: "Can you work on a modified car?",
    a: "Yes. Tell us what has been changed when you book. We account for tunes and aftermarket parts during diagnosis and tell you plainly if a modification is part of the problem.",
  },
  {
    q: "Will you call before doing extra work?",
    a: "Yes. We inspect, explain what we found, and quote before work starts. Nothing is added to the job without your approval.",
  },
];

export const makePages: MakePage[] = [
  {
    slug: "bmw-repair-river-falls-wi",
    make: "BMW",
    city: "River Falls",
    title: "BMW Repair & Performance in River Falls, WI",
    metaDescription:
      "BMW repair, diagnostics, suspension, tuning and engine work in River Falls and Hudson, WI. M3, M4, 3 Series and X5 M work. Call (651) 353-1243.",
    h1: "BMW repair and performance in River Falls",
    summary:
      "Diagnostics, maintenance, suspension, exhaust, tuning, and engine work for BMW owners in River Falls, Hudson, and the St. Croix valley.",
    image: "/shop/bmw-m4-front.webp",
    imageAlt: "White BMW M4 at The Upgrade Shop in River Falls",
    gallery: [
      { src: "/shop/bmw-m4-m3-bays.webp", alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop" },
      { src: "/shop/bmw-g20-coilovers.webp", alt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop" },
      { src: "/shop/bmw-x5m.webp", alt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123" },
      { src: "/shop/bmw-valvetronic.webp", alt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop" },
    ],
    sections: [
      {
        h2: "BMW work is what this shop is built around",
        paragraphs: [
          "Look through the gallery and you will see mostly BMWs: M3s and M4s on the lift, a G20 3 Series getting coilovers, an X5 M in the bay, and exhaust work underneath. That is the work The Upgrade Shop does every week, and it is why BMW owners from Hudson, River Falls, Stillwater, and Woodbury bring their cars here instead of waiting on a dealer service lane.",
          "Whether the car is stock and needs a repair, or modified and needs someone who understands what was changed, it gets the same diagnosis-first approach.",
        ],
      },
      {
        h2: "Common BMW jobs we handle",
        paragraphs: ["BMWs share a set of familiar issues and upgrades across generations. Typical work includes:"],
        bullets: [
          "Check engine, drivetrain, and warning-light diagnosis across modules",
          "Oil, coolant, and other leaks",
          "Cooling-system faults and overheating",
          "Brakes, including wear sensors and electronic parking brakes",
          "Suspension bushings, control arms, and coilover installs",
          "Exhaust, intake, and ECU tuning on turbo engines",
          "Engine repair, rebuilds, and swaps",
        ],
      },
      {
        h2: "Stock or modified, it gets the same diagnosis",
        paragraphs: [
          "Modern BMWs run many networked control modules. One failing sensor can trigger warnings in several systems, and a tune or aftermarket part can change how faults show up. We read the whole car, check live data, and inspect the hardware before calling a part bad.",
          "If a problem traces back to a modification, you hear that plainly, along with the options to fix it properly or return it to stock.",
        ],
      },
      {
        h2: "Performance work on M cars and turbo BMWs",
        paragraphs: [
          "For drivers who want more from the car, we plan tuning, exhaust, suspension, and brakes as one setup so the car stays reliable. The shop's performance upgrades and engine swap pages cover how those jobs are planned.",
          "Call the shop or send the quote form with the year, model, engine, mileage, and what the car is doing. That is enough to tell you the next step.",
        ],
      },
      {
        h2: "BMW maintenance that protects the car long term",
        paragraphs: [
          "BMW service intervals can be long, and some owners stretch them further. Oil, coolant, brake fluid, spark plugs, and transmission service all matter more on turbocharged engines that run hot and hard. We can review your service history and tell you what is due, what is overdue, and what can wait.",
          "Catching gaskets, hoses, and bushings before they fail is cheaper than repairing the damage they cause. If we see something wearing during a visit, you hear about it with a photo, not a surprise bill later.",
        ],
      },
    ],
    faqs: [
      ...commonFaqs("BMW"),
      {
        q: "Do you work on BMW M cars?",
        a: "Yes. M3, M4, and X5 M work is regular at the shop, along with 3 Series and other BMW models.",
      },
    ],
  },
  {
    slug: "audi-repair-hudson-wi",
    make: "Audi",
    city: "Hudson",
    title: "Audi Repair & Diagnostics Near Hudson, WI",
    metaDescription:
      "Audi diagnostics, brakes, suspension, maintenance and performance work near Hudson, WI, at The Upgrade Shop in River Falls. Call (651) 353-1243.",
    h1: "Audi repair and diagnostics near Hudson",
    summary:
      "Diagnostics, brakes, suspension, maintenance, and performance work for Audi owners in Hudson, River Falls, and the St. Croix valley.",
    image: "/shop/bmw-bay-123.webp",
    imageAlt: "Bay door 123 at The Upgrade Shop on Valerie Ave",
    gallery: [
      { src: "/shop/bmw-unit-123.webp", alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123" },
      { src: "/shop/engine-rebuild.webp", alt: "Engine on a stand with timing chain assembly at The Upgrade Shop" },
    ],
    sections: [
      {
        h2: "European repair without the dealer wait",
        paragraphs: [
          "The Upgrade Shop works on European and high-end cars every day, and Audi owners get the same approach: confirm the problem, diagnose it properly, and explain the options before any work starts. The shop sits on Valerie Ave, a short drive from Hudson, River Falls, and Stillwater.",
        ],
      },
      {
        h2: "Audi work we handle",
        paragraphs: ["Typical Audi visits include:"],
        bullets: [
          "Check engine and warning-light diagnosis",
          "Oil and coolant leaks, and cooling-system faults",
          "Brakes, including electronic parking brakes",
          "Suspension and steering noises",
          "Scheduled maintenance and fluids",
          "Intake, exhaust, and tuning on turbo engines",
        ],
      },
      {
        h2: "Diagnosis before parts",
        paragraphs: [
          "Audis use networked modules, and one fault can show warnings in several systems. We read codes across the car, check live data, and inspect the hardware before recommending a repair, so you do not pay for a guess.",
          "If the car has been modified, we take that into account and tell you plainly if an upgrade is causing the problem.",
        ],
      },
      {
        h2: "Book an Audi visit",
        paragraphs: [
          "Call the shop or send the quote form with the year, model, engine, mileage, and what the car is doing. We will tell you the next step.",
        ],
      },
      {
        h2: "Maintenance that keeps an Audi reliable",
        paragraphs: [
          "Turbocharged Audi engines run hot and depend on clean oil, a healthy cooling system, and good ignition parts. Staying on top of oil, coolant, brake fluid, spark plugs, and transmission service helps avoid the bigger repairs that follow neglect.",
          "We can review your service records and tell you what is due, what is overdue, and what can wait. If something is wearing during a visit, we show you before recommending work.",
        ],
      },
      {
        h2: "Performance work for Audi owners",
        paragraphs: [
          "The same team that builds BMW performance setups can plan intake, exhaust, suspension, brakes, and tuning for Audi owners who want more from the car. Every upgrade is planned with the supporting parts so the car stays dependable through Wisconsin and Minnesota winters.",
        ],
      },
    ],
    faqs: commonFaqs("Audi"),
  },
  {
    slug: "mercedes-repair-hudson-wi",
    make: "Mercedes-Benz",
    city: "Hudson",
    title: "Mercedes-Benz Repair Near Hudson, WI",
    metaDescription:
      "Mercedes-Benz diagnostics, brakes, suspension and maintenance near Hudson, WI, at The Upgrade Shop in River Falls. European car repair. Call (651) 353-1243.",
    h1: "Mercedes-Benz repair near Hudson",
    summary:
      "Diagnostics, brakes, suspension, and maintenance for Mercedes-Benz owners in Hudson, River Falls, and the St. Croix valley.",
    image: "/shop/bmw-unit-123.webp",
    imageAlt: "The Upgrade Shop at 663 Valerie Ave, Unit 123",
    gallery: [
      { src: "/shop/bmw-bay-123.webp", alt: "Bay door 123 at The Upgrade Shop on Valerie Ave" },
      { src: "/shop/engine-rebuild.webp", alt: "Engine on a stand with timing chain assembly at The Upgrade Shop" },
    ],
    sections: [
      {
        h2: "A European specialist close to Hudson",
        paragraphs: [
          "Mercedes-Benz owners in Hudson, River Falls, and Stillwater can get diagnosis, repair, and maintenance at The Upgrade Shop on Valerie Ave. European and high-end cars are the shop's specialty, not an exception.",
        ],
      },
      {
        h2: "Mercedes-Benz work we handle",
        paragraphs: ["Typical visits include:"],
        bullets: [
          "Check engine and warning-light diagnosis",
          "Oil and coolant leaks",
          "Brakes and brake warning lights",
          "Suspension, steering, and ride-quality complaints",
          "Scheduled maintenance and fluids",
          "Heating and air conditioning",
        ],
      },
      {
        h2: "Clear answers before work starts",
        paragraphs: [
          "Mercedes-Benz cars rely on many electronic systems. We read faults across the car, check live data, and inspect the parts before recommending a repair. You get an explanation of what we found, what is urgent, and what can wait.",
          "If the car is not safe to drive, we tell you that first.",
        ],
      },
      {
        h2: "Book a Mercedes-Benz visit",
        paragraphs: [
          "Call the shop or send the quote form with the year, model, mileage, and what the car is doing. We will tell you the next step.",
        ],
      },
      {
        h2: "Maintenance that keeps a Mercedes-Benz reliable",
        paragraphs: [
          "Regular oil, coolant, brake fluid, and transmission service keep a Mercedes-Benz running the way it should. Suspension and steering parts also wear with time on rough roads, and catching them early protects tires and ride quality.",
          "We can review your service records and tell you what is due, what is overdue, and what can wait. If something is wearing during a visit, we show you before recommending work.",
        ],
      },
      {
        h2: "Electrical and warning-light problems",
        paragraphs: [
          "Many Mercedes-Benz complaints show up as warning messages on the dash rather than a noise or a leak. Batteries, sensors, and wiring faults can trigger several messages at once. We trace the cause instead of clearing codes and hoping they stay gone.",
        ],
      },
    ],
    faqs: commonFaqs("Mercedes-Benz"),
  },
];
