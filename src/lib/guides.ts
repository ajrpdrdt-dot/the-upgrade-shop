/**
 * Guides / blog posts. Add new posts to the top of this array; the index page,
 * article route, and sitemap all read from here.
 * bodyHtml and answerHtml are trusted, pre-rendered editorial HTML.
 */
export type GuideFaq = { question: string; answer: string; answerHtml: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  intro: string;
  bodyHtml: string;
  faqs: GuideFaq[];
};

export const guides: Guide[] = [
  {
    "slug": "brake-suspension-inspection-questions",
    "title": "Brake and Suspension Inspection Questions",
    "description": "Prepare for a brake or suspension inspection in River Falls. Record symptoms, ask about findings, and review repair priorities before approving work.",
    "h1": "Questions to Ask at a Brake or Suspension Inspection",
    "datePublished": "2026-10-12",
    "dateModified": "2026-10-12",
    "intro": "A brake or suspension inspection should help you understand the concern, the findings, and the recommended next step. Start by describing what changed rather than deciding which repair you want before the vehicle is inspected.",
    "bodyHtml": "<p>The Upgrade Shop lists brake, rotor, hydraulic, suspension, alignment, and chassis work among its <a href=\"/services/general-repair\">general repair services</a>. Share the symptoms and vehicle details when requesting an appointment.</p>\n<h2>Make the symptom description specific</h2>\n<p>Write down where you notice the concern and under what conditions. For example, explain whether a noise occurs while braking, crossing a bump, turning into a driveway, or moving at a particular speed.</p>\n<p>Keep separate observations separate. If a vehicle has a vibration and an unrelated warning message, mention both without assuming that one explains the other.</p>\n<p>Use a short checklist before contacting the shop:</p>\n<ul>\n<li><strong>When:</strong> Cold start, normal driving, braking, or turning.</li>\n<li><strong>What:</strong> Noise, vibration, pulling, or changed pedal feel.</li>\n<li><strong>Where:</strong> Steering wheel, seat, pedal, or a general area.</li>\n<li><strong>History:</strong> Recent tire work, repairs, modifications, or an impact.</li>\n</ul>\n<p>Do not deliberately repeat an unsafe maneuver to confirm the symptom. If braking or vehicle control feels impaired, stop using the vehicle when safe and seek professional assistance.</p>\n<h2>Ask how the recommendation follows the findings</h2>\n<p>During the estimate conversation, ask what the inspection identified and how the proposed work addresses it. Request an explanation of any additional items rather than assuming everything belongs to the same repair.</p>\n<p>Ask which concerns should be addressed before further driving and whether any items can be discussed separately. Let the technician make the safety assessment; the goal is to understand it, not to replace it with an online checklist.</p>\n<h2>Review scope before authorization</h2>\n<p>Confirm the proposed parts and labor, expected communication, and how the shop will handle additional findings. If you also want a performance change, say so explicitly instead of allowing a repair visit to turn into an undefined upgrade project.</p>\n<p>Explore the <a href=\"/services/general-repair\">repair services</a> and <a href=\"/contact\">contact The Upgrade Shop</a> with your symptoms. Ask about the appropriate inspection before ordering parts.</p>",
    "faqs": [
      {
        "question": "Can a noise alone identify the needed repair?",
        "answer": "Avoid treating a sound description as a completed diagnosis. Use it to guide the inspection and ask the shop to explain the findings.",
        "answerHtml": "Avoid treating a sound description as a completed diagnosis. Use it to guide the inspection and ask the shop to explain the findings."
      },
      {
        "question": "Does TUS handle both brakes and suspension?",
        "answer": "Yes, both are included on the general repair page. Ask about the inspection relevant to your particular vehicle and symptoms.",
        "answerHtml": "Yes, both are included on the <a href=\"/services/general-repair\">general repair page</a>. Ask about the inspection relevant to your particular vehicle and symptoms."
      },
      {
        "question": "Should I ask for an upgrade during a repair visit?",
        "answer": "Mention the goal at the beginning and request a separate scope if needed. Keep the immediate repair concern distinct from optional performance changes.",
        "answerHtml": "Mention the goal at the beginning and request a separate scope if needed. Keep the immediate repair concern distinct from optional performance changes."
      },
      {
        "question": "What should I confirm before approving work?",
        "answer": "Review the findings, proposed scope, estimate, and communication process. Ask how you will be contacted if the inspection or repair uncovers additional concerns.",
        "answerHtml": "Review the findings, proposed scope, estimate, and communication process. Ask how you will be contacted if the inspection or repair uncovers additional concerns."
      }
    ]
  }
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
