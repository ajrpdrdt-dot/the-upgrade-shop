export const site = {
  legalName: "TUS Shop Inc.",
  brand: "The Upgrade Shop",
  short: "TUS",
  phone: "(651) 353-1243",
  phoneHref: ("tel:" + "+1" + "651" + "353" + "1243"),
  smsHref: ("sms:" + "+1" + "651" + "353" + "1243" + "?&body=" + encodeURIComponent("Hi TUS, here is a photo of my car. Year/make/model: ")),
  ctaText: "Text a photo",
  email: "tusrepair@gmail.com",
  url: "https://theupgradeshoptus.com",
  owner: "Peyton Sherman",
  nap: "663 Valerie Ave, Unit 123, River Falls, WI 54022",
  address: {
    street: "663 Valerie Ave, Unit 123",
    city: "River Falls",
    region: "WI",
    postal: "54022",
    country: "US",
  },
  geo: { lat: 44.891, lng: -92.624 },
  hours: [
    { days: "Monday to Friday", time: "8:00 AM to 6:00 PM" },
    { days: "Saturday", time: "9:00 AM to 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  ctaCall: "Call the shop",
  ctaQuote: "Request a quote",
  googleAdsId: "AW-18088070718",
  googleAdsLeadSendTo: "AW-18088070718/rb-ZCJXK2KMcEL6ciLFD",
} as const;

export const services = [
  {
    slug: "performance-upgrades",
    seoTitle: "Performance Upgrades for BMW & European Cars | River Falls",
    metaDescription:
      "Turbo, exhaust, coilover, big-brake and ECU tuning for BMW and European cars in River Falls and Hudson, WI. Planned as one job. Call (651) 353-1243.",
    title: "Performance upgrades",
    nav: "Performance upgrades",
    h1: "Performance upgrades in River Falls and Hudson",
    intent: "performance shop hudson wi",
    summary:
      "Turbo, exhaust, suspension, brakes, and ECU work for European, exotic, and seriously built daily drivers.",
    image: "/shop/bmw-g20-coilovers.webp",
    imageAlt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop",
    gallery: [
      {
        src: "/shop/bmw-valvetronic.webp",
        alt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-exhaust.webp",
        alt: "Custom stainless exhaust under a BMW on the lift at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-front.webp",
        alt: "White BMW M4 after performance work at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-g20-wheel.webp",
        alt: "BMW 3 Series wheel, caliper, and carbon spoiler after chassis work",
      },
      {
        src: "/shop/bmw-340i-rear.webp",
        alt: "White BMW 340i outside The Upgrade Shop in River Falls",
      },
    ],
    included: [
      "Turbocharger install and diagnosis",
      "Custom exhaust fabrication and tuning",
      "ECU calibration for modified engines",
      "Coilover and geometry setups",
      "Big-brake and cooling upgrades",
      "Intake, fuel, and drivetrain supporting mods",
    ],
    symptoms: [
      "The car feels soft or overheats under load after a bolt-on",
      "A check engine light after a turbo or exhaust install",
      "You want dealer-grade work on a non-stock European car",
    ],
    faqs: [
      {
        q: "Can TUS Shop Inc. upgrade a modified European or exotic car?",
        a: "Yes. The Upgrade Shop builds performance work around the car you actually drive, including turbo, exhaust, suspension, and ECU calibration on European and high-end platforms.",
      },
      {
        q: "Do performance upgrades void a factory warranty?",
        a: "Factory coverage varies by maker and by the part being changed. We tell you what the install touches before a wrench turns, and we document the work.",
      },
      {
        q: "How long does a typical performance upgrade take?",
        a: "A focused bolt-on or exhaust job is often same day or next day. Turbo, fuel, and calibration packages are scheduled by parts lead time.",
      },
      {
        q: "Do you tune after the hardware is on?",
        a: "Yes. Hardware without calibration is unfinished. We plan supporting mods and ECU work as one job, not as an afterthought.",
      },
    ],
  },
  {
    slug: "general-repair",
    seoTitle: "European & General Auto Repair | River Falls & Hudson, WI",
    metaDescription:
      "Dealer-level diagnostics, brakes, suspension and maintenance for European and daily-driver cars in River Falls and Hudson, WI. Call (651) 353-1243.",
    title: "General repair",
    nav: "General repair",
    h1: "General repair in River Falls and Hudson",
    intent: "auto repair hudson wi",
    summary:
      "Diagnostics, brakes, suspension, drivetrain, and maintenance for drivers who want the same shop that builds engines.",
    image: "/shop/bmw-x5m.webp",
    imageAlt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123",
    gallery: [
      {
        src: "/shop/bmw-m4-m3-bays.webp",
        alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-lift.webp",
        alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123",
      },
      {
        src: "/shop/bmw-unit-123.webp",
        alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123, with BMWs in the left bay",
      },
      {
        src: "/shop/bmw-bay-123.webp",
        alt: "Bay door 123 with two white BMWs in the shop",
      },
    ],
    included: [
      "Dealer-level diagnostics and check engine work",
      "Brake, rotor, and hydraulic service",
      "Suspension, alignment, and chassis repair",
      "Drivetrain and transmission diagnosis",
      "Air conditioning and heating",
      "Oil, fluids, and scheduled maintenance",
    ],
    symptoms: [
      "A warning light, noise, or vibration you do not want guessed at",
      "Brakes, ride quality, or a leak that needs a real diagnosis",
      "A European or turbo car that other shops will not touch",
    ],
    faqs: [
      {
        q: "Is TUS Shop Inc. a general repair shop or only a performance shop?",
        a: "Both. Daily-driver repair and performance work sit under one roof at 663 Valerie Ave, Unit 123, River Falls, WI 54022.",
      },
      {
        q: "How fast can you diagnose a check engine light?",
        a: "Most scan and inspection visits start the same day you call. We tell you what we found before we sell a repair.",
      },
      {
        q: "Do you work on all makes?",
        a: "Yes. Domestic, Asian, European, and modified cars are welcome. High-end and turbo platforms are a specialty, not an exception.",
      },
      {
        q: "Is there a warranty on general repair?",
        a: "Repairs are completed with quality parts and a written service warranty. Ask for the current terms when you book.",
      },
    ],
  },
  {
    slug: "engine-swaps-rebuilds",
    seoTitle: "Engine Rebuilds & Engine Swaps | River Falls & Hudson, WI",
    metaDescription:
      "Cylinder head work, full engine rebuilds and engine swaps in River Falls, WI, with photo-documented assembly for European and performance cars.",
    title: "Engine swaps and rebuilds",
    nav: "Engine swaps and rebuilds",
    h1: "Engine swaps and rebuilds in River Falls",
    intent: "engine rebuild hudson wi",
    summary:
      "Cylinder head work, complete rebuilds, and engine swaps for cars that deserve more than a used long-block from a catalog.",
    image: "/shop/bmw-m3-engine.webp",
    imageAlt: "White BMW M3 with the hood open for engine work at The Upgrade Shop",
    gallery: [
      {
        src: "/shop/engine-rebuild.webp",
        alt: "Engine on a stand with timing chain assembly at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-m3-wide.webp",
        alt: "White BMW M4 on the lift and a BMW M3 below it during shop work",
      },
      {
        src: "/shop/bmw-m4-lift.webp",
        alt: "White BMW M4 raised on the two-post lift at The Upgrade Shop",
      },
    ],
    included: [
      "Cylinder head, valve, and head gasket repair",
      "Complete engine rebuilds to spec",
      "Engine swaps with supporting fuel and electronics",
      "Timing, oil pump, and bottom-end restoration",
      "Compression, leak-down, and dyno-minded assembly",
      "Photo documentation of the build",
    ],
    symptoms: [
      "Smoke, knock, overheating, or a sudden loss of compression",
      "A swap that needs to run clean, not just fire",
      "A high-mileage performance engine you want rebuilt once, correctly",
    ],
    faqs: [
      {
        q: "What is the difference between a top-end repair and a full rebuild?",
        a: "A top-end repair restores heads, valves, and gaskets. A full rebuild opens the bottom end: pistons, bearings, crank, and oil pump. We recommend the one the engine actually needs.",
      },
      {
        q: "How long does an engine rebuild take?",
        a: "Most complete rebuilds take several days to a week once parts are in. Swaps depend on harness, mounts, and calibration.",
      },
      {
        q: "Do you document engine work?",
        a: "Yes. Serious engine work is photographed so you can see bearings, clearances, and assembly, not just a finished bay.",
      },
      {
        q: "Can you swap a turbo engine into a daily driver?",
        a: "Yes, when the supporting fuel, cooling, and electronics are part of the plan. We will not install a motor that cannot be driven home.",
      },
    ],
  },
  {
    slug: "diagnostics",
    seoTitle: "Check Engine Light Diagnostics | River Falls & Hudson, WI",
    title: "Diagnostics",
    nav: "Diagnostics",
    h1: "Check engine and diagnostics in River Falls and Hudson",
    metaDescription:
      "Check engine light and warning-light diagnosis for BMW, European and daily-driver cars in River Falls and Hudson, WI. Cause found before parts. Call us.",
    intent: "car diagnostics hudson wi",
    summary:
      "Dealer-level diagnosis for check engine lights, warning messages, misfires, and drivability problems. We find the cause before you pay for parts.",
    image: "/shop/bmw-m3-engine.webp",
    imageAlt: "White BMW M3 with the hood open for diagnosis at The Upgrade Shop",
    gallery: [
      { src: "/shop/bmw-x5m.webp", alt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123" },
      { src: "/shop/bmw-m4-lift.webp", alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123" },
      { src: "/shop/bmw-m4-m3-bays.webp", alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop" },
    ],
    included: [
      "Fault codes read across all modules",
      "Live data and freeze-frame review",
      "Misfire, lean, and boost-leak diagnosis",
      "Electrical and wiring checks",
      "Compression and leak-down testing when needed",
      "A clear explanation before any repair",
    ],
    symptoms: [
      "A check engine or warning light is on",
      "The car runs rough, hesitates, or lost power",
      "Another shop replaced parts and the problem came back",
    ],
    faqs: [
      { q: "Can I keep driving with a check engine light on?", a: "A steady light usually means get it checked soon. A flashing light often means an active misfire; reduce driving and call the shop, because continued driving can damage the catalytic converter." },
      { q: "Is a free code read the same as a diagnosis?", a: "No. A code read tells you which system set a fault. A diagnosis finds the cause, using live data, inspection, and testing." },
      { q: "Do you diagnose modified cars?", a: "Yes. We take tunes and aftermarket parts into account and tell you plainly if a modification is causing the fault." },
    ],
  },
  {
    slug: "brakes",
    seoTitle: "Brake Repair & Big-Brake Upgrades | River Falls & Hudson, WI",
    title: "Brakes",
    nav: "Brakes",
    h1: "Brake repair and upgrades in River Falls and Hudson",
    metaDescription:
      "Brake pads, rotors, calipers, fluid and big-brake upgrades for BMW, European and daily-driver cars in River Falls and Hudson, WI. Call (651) 353-1243.",
    intent: "brake repair hudson wi",
    summary:
      "Brake inspection, pads, rotors, calipers, fluid, and big-brake upgrades for European, performance, and daily-driver cars.",
    image: "/shop/bmw-g20-wheel.webp",
    imageAlt: "BMW 3 Series wheel and brake caliper after work at The Upgrade Shop",
    gallery: [
      { src: "/shop/bmw-m4-lift.webp", alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123" },
      { src: "/shop/bmw-g20-coilovers.webp", alt: "Blue BMW 3 Series on the lift at The Upgrade Shop" },
    ],
    included: [
      "Full brake inspection and measurement",
      "Pads and rotors",
      "Calipers, hardware, and lines",
      "Brake fluid service",
      "ABS and brake warning-light diagnosis",
      "Big-brake and pad upgrades",
    ],
    symptoms: [
      "Squealing, grinding, or a pulsing pedal",
      "A soft pedal or the car pulls when braking",
      "A brake or ABS warning light",
    ],
    faqs: [
      { q: "How do I know if I need new rotors or just pads?", a: "We measure rotor thickness and check for warping or damage. If the rotors are within spec and in good shape, pads alone may be enough." },
      { q: "Do you do big-brake upgrades?", a: "Yes. We plan the kit around your wheels and how you drive, so it fits and works before parts are ordered." },
      { q: "How often should brake fluid be changed?", a: "Intervals vary by maker. Brake fluid absorbs moisture over time, so check your owner's manual or ask us at your next visit." },
    ],
  },
  {
    slug: "coilovers-suspension",
    seoTitle: "Coilover Install & Suspension Repair | River Falls, WI",
    title: "Coilovers and suspension",
    nav: "Coilovers and suspension",
    h1: "Coilovers and suspension in River Falls and Hudson",
    metaDescription:
      "Coilover installs, ride height setup, alignment and suspension repair for BMW and European cars in River Falls and Hudson, WI. Call (651) 353-1243.",
    intent: "coilover install hudson wi",
    summary:
      "Coilover installs, ride height and damping setup, alignment, and suspension repair for European and performance cars.",
    image: "/shop/bmw-g20-coilovers.webp",
    imageAlt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop",
    gallery: [
      { src: "/shop/bmw-g20-profile.webp", alt: "Blue BMW 3 Series after suspension work at The Upgrade Shop" },
      { src: "/shop/bmw-g20-wheel.webp", alt: "BMW 3 Series wheel, caliper, and carbon spoiler after chassis work" },
      { src: "/shop/bmw-m4-lift.webp", alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123" },
    ],
    included: [
      "Coilover and spring installs",
      "Ride height and corner setup",
      "Damping adjustment",
      "Control arms, bushings, and end links",
      "Alignment after the install",
      "Suspension noise and wear diagnosis",
    ],
    symptoms: [
      "Clunks over bumps or a loose feel on the highway",
      "Uneven tire wear or the car pulls",
      "You want coilovers set up properly, not just bolted on",
    ],
    faqs: [
      { q: "Will coilovers make my car ride rough?", a: "It depends on the coilover and the setup. Ride height and damping are adjusted for how you drive, so a daily car can ride well and still handle better." },
      { q: "Do I need an alignment after coilovers?", a: "Yes. Changing ride height changes alignment. We align the car after the install." },
      { q: "Can you install parts I already bought?", a: "Call the shop to talk it through. We will tell you if the parts suit the car and your goal." },
    ],
  },
  {
    slug: "tuning",
    seoTitle: "ECU Tuning for BMW & European Cars | River Falls & Hudson",
    title: "ECU tuning",
    nav: "ECU tuning",
    h1: "ECU tuning in River Falls and Hudson",
    metaDescription:
      "ECU tuning planned with your intake, exhaust, turbo and fuel hardware for BMW and European cars in River Falls and Hudson, WI. Call (651) 353-1243.",
    intent: "ecu tuning hudson wi",
    summary:
      "ECU calibration planned together with your hardware, after a health check, for turbo BMWs and other European and performance cars.",
    image: "/shop/bmw-valvetronic.webp",
    imageAlt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop",
    gallery: [
      { src: "/shop/bmw-exhaust.webp", alt: "Custom stainless exhaust under a BMW on the lift at The Upgrade Shop" },
      { src: "/shop/bmw-m4-front.webp", alt: "White BMW M4 after performance work at The Upgrade Shop" },
      { src: "/shop/bmw-340i-rear.webp", alt: "White BMW 340i outside The Upgrade Shop in River Falls" },
    ],
    included: [
      "Pre-tune health check",
      "Calibration planned with the hardware",
      "Boost, fuel, and timing review",
      "Supporting-mod recommendations",
      "Check engine light review after install",
      "Road test before delivery",
    ],
    symptoms: [
      "You added an intake, downpipe, or exhaust and want it calibrated",
      "A tune left the car running rough or set warning lights",
      "You want more power without losing daily reliability",
    ],
    faqs: [
      { q: "Is tuning safe for my engine?", a: "A tune planned around healthy hardware and sensible limits is far safer than one added to a car with existing problems. We check the car first." },
      { q: "Will a tune affect my warranty or emissions?", a: "It can. Factory coverage and emissions rules vary. We explain what the work changes before it starts." },
      { q: "Can you fix a tune someone else did?", a: "Call the shop with the details. We will look at the car and tell you the options." },
    ],
  },
] as const;

export const galleryPhotos = [
  {
    src: "/shop/bmw-m4-front.webp",
    alt: "White BMW M4 at The Upgrade Shop in River Falls",
  },
  {
    src: "/shop/bmw-m4-m3-bays.webp",
    alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-m4-m3-wide.webp",
    alt: "White BMW M4 on the lift and a BMW M3 below it during shop work",
  },
  {
    src: "/shop/bmw-m4-lift.webp",
    alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123",
  },
  {
    src: "/shop/bmw-g20-profile.webp",
    alt: "Blue BMW 3 Series after suspension work at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-g20-coilovers.webp",
    alt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-g20-wheel.webp",
    alt: "BMW 3 Series wheel, caliper, and carbon spoiler after chassis work",
  },
  {
    src: "/shop/bmw-m3-engine.webp",
    alt: "White BMW M3 with the hood open for engine work at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-x5m.webp",
    alt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123",
  },
  {
    src: "/shop/bmw-340i-rear.webp",
    alt: "White BMW 340i outside The Upgrade Shop in River Falls",
  },
  {
    src: "/shop/bmw-valvetronic.webp",
    alt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-exhaust.webp",
    alt: "Custom stainless exhaust under a BMW on the lift at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-unit-123.webp",
    alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123, with BMWs in the left bay",
  },
  {
    src: "/shop/bmw-bay-123.webp",
    alt: "Bay door 123 with two white BMWs in the shop",
  },
] as const;

export const shopPhotos = galleryPhotos.slice(0, 6);

export const shopBuilding = {
  src: "/shop/bmw-unit-123.webp",
  alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123, with BMWs in the left bay",
} as const;

export const cities = [
  {
    slug: "hudson-wi",
    name: "Hudson",
    state: "WI",
    drive: "About 5 minutes south of Hudson on Hwy 35 via Glover Rd.",
    pitch:
      "The Upgrade Shop is the performance-capable repair shop sitting just south of Hudson, with shop rates and no Crest View Drive traffic.",
  },
  {
    slug: "river-falls-wi",
    name: "River Falls",
    state: "WI",
    drive: "About 10 minutes from downtown River Falls, with a true River Falls 54022 address.",
    pitch:
      "TUS Shop Inc. is a River Falls shop that also sits close enough to Hudson to serve both towns from one pin.",
  },
  {
    slug: "stillwater-mn",
    name: "Stillwater",
    state: "MN",
    drive: "A short St. Croix crossing from Stillwater to the Valerie Ave shop.",
    pitch:
      "Stillwater drivers use The Upgrade Shop for European repair, engine work, and performance installs without a Twin Cities dealer wait.",
  },
  {
    slug: "woodbury-mn",
    name: "Woodbury",
    state: "MN",
    drive: "East metro drive to the St. Croix, then south to the Town of Troy shop.",
    pitch:
      "Woodbury owners of European and high-end cars come east for engine, turbo, and chassis work that big-box shops will not schedule.",
  },
  {
    slug: "afton-mn",
    name: "Afton",
    state: "MN",
    drive: "Afton to the shop is a direct St. Croix valley run.",
    pitch:
      "Afton is close enough that a morning drop-off is realistic for diagnostics, brakes, and performance work.",
  },
  {
    slug: "lakeland-mn",
    name: "Lakeland",
    state: "MN",
    drive: "Lakeland sits on the river corridor; the shop is a few minutes past Hudson.",
    pitch:
      "Lakeland drivers get Hudson-adjacent access to engine rebuilds and general repair without downtown congestion.",
  },
  {
    slug: "ellsworth-wi",
    name: "Ellsworth",
    state: "WI",
    drive: "South on Hwy 10 / 63 toward the River Falls postal city shop.",
    pitch:
      "Ellsworth is a declared service area. Engine, drivetrain, and maintenance work are booked from this shop, not farmed out.",
  },
  {
    slug: "prescott-wi",
    name: "Prescott",
    state: "WI",
    drive: "Prescott north toward River Falls and the Valerie Ave unit.",
    pitch:
      "Prescott customers use TUS Shop Inc. for honest diagnostics and the kind of engine work that usually means a dealer trip.",
  },
] as const;

export const homeFaqs = [
  {
    q: "Where is TUS Shop Inc. located?",
    a: "TUS Shop Inc., doing business as The Upgrade Shop, is at 663 Valerie Ave, Unit 123, River Falls, WI 54022, between Hudson and downtown River Falls.",
  },
  {
    q: "What cars does The Upgrade Shop work on?",
    a: "European, exotic, modified, and daily-driver vehicles. Performance upgrades, general repair, and engine swaps sit in the same building.",
  },
  {
    q: "Do you serve Hudson, Stillwater, and Woodbury?",
    a: "Yes. Service areas include Hudson, River Falls, Stillwater, Woodbury, Afton, Lakeland, Ellsworth, and Prescott.",
  },
  {
    q: "How do I book a visit?",
    a: "Call the shop at (651) 353-1243 or send the quote form with year, make, model, and what is wrong. Hours are Monday to Friday 8 to 6, Saturday 9 to 2.",
  },
  {
    q: "Is a small independent shop safe for a high-end car?",
    a: "Peyton Sherman built The Upgrade Shop for drivers who want specialist engine and performance work with clear communication, not a dealer service writer.",
  },
];
