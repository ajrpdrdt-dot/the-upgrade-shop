export const site = {
  legalName: "TUS Shop Inc.",
  brand: "The Upgrade Shop",
  short: "TUS",
  phone: "(651) 353-1243",
  phoneHref: ("tel:" + "+1" + "651" + "353" + "1243"),
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
  googleAdsPurchaseSendTo: "AW-18088070718/dwWvCJjK2KMcEL6ciLFD",
  googleAdsLeadSendTo: "AW-18088070718/rb-ZCJXK2KMcEL6ciLFD",
} as const;

export const services = [
  {
    slug: "performance-upgrades",
    title: "Performance upgrades",
    nav: "Performance upgrades",
    h1: "Performance upgrades in River Falls and Hudson",
    intent: "performance shop hudson wi",
    summary:
      "Turbo, exhaust, suspension, brakes, and ECU work for European, exotic, and seriously built daily drivers.",
    image: "/shop/bmw-g20-coilovers.webp?v=hd",
    imageAlt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop",
    gallery: [
      {
        src: "/shop/bmw-valvetronic.webp?v=hd",
        alt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-exhaust.webp?v=hd",
        alt: "Custom stainless exhaust under a BMW on the lift at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-front.webp?v=hd",
        alt: "White BMW M4 after performance work at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-g20-wheel.webp?v=hd",
        alt: "BMW 3 Series wheel, caliper, and carbon spoiler after chassis work",
      },
      {
        src: "/shop/bmw-340i-rear.webp?v=hd",
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
    title: "General repair",
    nav: "General repair",
    h1: "General repair in River Falls and Hudson",
    intent: "auto repair hudson wi",
    summary:
      "Diagnostics, brakes, suspension, drivetrain, and maintenance for drivers who want the same shop that builds engines.",
    image: "/shop/bmw-x5m.webp?v=hd",
    imageAlt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123",
    gallery: [
      {
        src: "/shop/bmw-m4-m3-bays.webp?v=hd",
        alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-lift.webp?v=hd",
        alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123",
      },
      {
        src: "/shop/bmw-unit-123.webp?v=hd",
        alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123, with BMWs in the left bay",
      },
      {
        src: "/shop/bmw-bay-123.webp?v=hd",
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
    title: "Engine swaps and rebuilds",
    nav: "Engine swaps and rebuilds",
    h1: "Engine swaps and rebuilds in River Falls",
    intent: "engine rebuild hudson wi",
    summary:
      "Cylinder head work, complete rebuilds, and engine swaps for cars that deserve more than a used long-block from a catalog.",
    image: "/shop/bmw-m3-engine.webp?v=hd",
    imageAlt: "White BMW M3 with the hood open for engine work at The Upgrade Shop",
    gallery: [
      {
        src: "/shop/engine-rebuild.webp?v=hd",
        alt: "Engine on a stand with timing chain assembly at The Upgrade Shop",
      },
      {
        src: "/shop/bmw-m4-m3-wide.webp?v=hd",
        alt: "White BMW M4 on the lift and a BMW M3 below it during shop work",
      },
      {
        src: "/shop/bmw-m4-lift.webp?v=hd",
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
] as const;

export const galleryPhotos = [
  {
    src: "/shop/bmw-m4-front.webp?v=hd",
    alt: "White BMW M4 at The Upgrade Shop in River Falls",
  },
  {
    src: "/shop/bmw-m4-m3-bays.webp?v=hd",
    alt: "White BMW M4 on the lift and a BMW M3 in the bay at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-m4-m3-wide.webp?v=hd",
    alt: "White BMW M4 on the lift and a BMW M3 below it during shop work",
  },
  {
    src: "/shop/bmw-m4-lift.webp?v=hd",
    alt: "White BMW M4 on the lift at The Upgrade Shop, Unit 123",
  },
  {
    src: "/shop/bmw-g20-profile.webp?v=hd",
    alt: "Blue BMW 3 Series after suspension work at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-g20-coilovers.webp?v=hd",
    alt: "Blue BMW 3 Series on the lift with coilovers staged at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-g20-wheel.webp?v=hd",
    alt: "BMW 3 Series wheel, caliper, and carbon spoiler after chassis work",
  },
  {
    src: "/shop/bmw-m3-engine.webp?v=hd",
    alt: "White BMW M3 with the hood open for engine work at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-x5m.webp?v=hd",
    alt: "Black BMW X5 M in the bay at The Upgrade Shop, Unit 123",
  },
  {
    src: "/shop/bmw-340i-rear.webp?v=hd",
    alt: "White BMW 340i outside The Upgrade Shop in River Falls",
  },
  {
    src: "/shop/bmw-valvetronic.webp?v=hd",
    alt: "Valvetronic carbon exhaust tips on a BMW at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-exhaust.webp?v=hd",
    alt: "Custom stainless exhaust under a BMW on the lift at The Upgrade Shop",
  },
  {
    src: "/shop/bmw-unit-123.webp?v=hd",
    alt: "The Upgrade Shop at 663 Valerie Ave, Unit 123, with BMWs in the left bay",
  },
  {
    src: "/shop/bmw-bay-123.webp?v=hd",
    alt: "Bay door 123 with two white BMWs in the shop",
  },
] as const;

export const shopPhotos = galleryPhotos.slice(0, 6);

export const shopBuilding = {
  src: "/shop/bmw-unit-123.webp?v=hd",
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
