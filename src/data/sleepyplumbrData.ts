import heroBackdropImg from '../assets/images/hero_josh_fixing_pipe_1794664258832.jpg';
import diagnosticsBackdropImg from '../assets/images/diagnostics_water_system_1794663372575.jpg';

export interface VideoFeature {
  id: string;
  youtubeId: string;
  title: string;
  series: string;
  audience: 'Homeowners' | 'Plumbers' | 'Both';
  summary: string;
  thumbnail: string;
  youtubeUrl: string;
}

export interface MerchProduct {
  id: string;
  name: string;
  garment: string;
  price: string;
  image: string;
  storeUrl: string;
  note: string;
}

export interface ToolRecommendation {
  name: string;
  category: 'Tools' | 'Books';
  note: string;
  url: string;
  image: string;
  isAffiliate: boolean;
  promoNote?: string;
}

export interface DiagnosticPillar {
  number: string;
  title: string;
  audienceLabel: string;
  description: string;
  fieldTakeaway: string;
}

export const BRAND_PROFILE = {
  brandName: 'SleepyPlumbr',
  personName: 'Josh JB Burleson',
  identityLine: 'Master Plumber · Service & Diagnostics',
  location: 'Columbia, Missouri, USA',
  mission: 'Educating homeowners and plumbers.',
  philosophy: 'Education Over Persuasion',
  logoLightSurface: '/assets/sleepyplumbr-logo.png',
  logoDarkSurface: '/assets/sleepyplumbr-logo-darkbg.png',
  portraitMain: '/assets/josh-yt-avatar.jpg',
  portraitVan: '/assets/videos/iazD-4poIv0-clean.jpg',
  portraitTankless: '/assets/videos/XxySXZFXxR4-clean.jpg',
  portraitHandsPriming: '/assets/videos/oIp69f9qEUg-clean.jpg',
  portraitSoftenerHands: '/assets/videos/U3wcUIR2t0M-clean.jpg',
  heroBackdrop: heroBackdropImg,
  diagnosticsBackdrop: diagnosticsBackdropImg,
  officialLinks: {
    instagram: 'https://www.instagram.com/sleepyplumbr/',
    youtube: 'https://www.youtube.com/channel/UC6AGBWTVMisUbtWQTaEudcw',
    tiktok: 'https://www.tiktok.com/@sleepyplumbr',
    facebook: 'https://www.facebook.com/josh.j.burleson',
    linktree: 'https://linktr.ee/sleepyplumbr',
    merchStore: 'https://fastyowi.com/store/slpplumb/products',
    spotifyEpisode: 'https://open.spotify.com/episode/2pbnrLukmZJeb87opFfA3D',
    shubee: 'https://www.shubee.com/',
  },
} as const;

export const FEATURED_VIDEOS: VideoFeature[] = [
  {
    id: 'tankless-water-treatment',
    youtubeId: 'XxySXZFXxR4',
    title: 'The Importance of Water Treatment with Tankless Water Heaters',
    series: 'LUNCHTIME with Josh the Plumber',
    audience: 'Both',
    summary:
      'Why untreated hard water shortens heat-exchanger life on both gas and electric tankless units, and how proper water conditioning protects performance.',
    thumbnail: '/assets/videos/XxySXZFXxR4-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=XxySXZFXxR4',
  },
  {
    id: 'faucet-leak-diagnostics',
    youtubeId: 'iazD-4poIv0',
    title: 'Leaking Faucet Diagnostics',
    series: 'LUNCHTIME with Josh the Plumber',
    audience: 'Homeowners',
    summary:
      'Tracing where a faucet leak actually originates—cartridge, valve seat, supply stop, or aerator—before swapping parts blindly.',
    thumbnail: '/assets/videos/iazD-4poIv0-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=iazD-4poIv0',
  },
  {
    id: 'sterling-softener-stack',
    youtubeId: 'U3wcUIR2t0M',
    title: 'Sterling Water Softener Stack Assembly Replacement',
    series: 'Field Diagnostics',
    audience: 'Plumbers',
    summary:
      'Hands-on walkthrough of inspecting and replacing a Sterling water softener stack assembly cleanly in the field.',
    thumbnail: '/assets/videos/U3wcUIR2t0M-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=U3wcUIR2t0M',
  },
  {
    id: 'clean-pvc-priming',
    youtubeId: 'oIp69f9qEUg',
    title: 'Are You Sloppy or Clean at Priming?',
    series: 'Field Craft',
    audience: 'Plumbers',
    summary:
      'Proper purple primer and solvent weld technique so joints seal structurally without leaving messy runs across exposed pipework.',
    thumbnail: '/assets/videos/oIp69f9qEUg-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=oIp69f9qEUg',
  },
  {
    id: 'gas-leak-call',
    youtubeId: 'oCMWnFR18s8',
    title: 'Gas Leak Diagnostics & Safety First',
    series: 'Service Calls',
    audience: 'Both',
    summary:
      'Why safety codes and honest gas-line diagnostics come ahead of convenience when protecting a household.',
    thumbnail: '/assets/videos/oCMWnFR18s8-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=oCMWnFR18s8',
  },
  {
    id: 'shutoff-valve-height',
    youtubeId: 'eH7F6dC6aeA',
    title: 'Raise Your Shutoff Valves Up a Little Farther',
    series: 'Plumbing Shorts',
    audience: 'Plumbers',
    summary:
      'Practical rough-in and service spacing detail that saves knuckles and improves accessibility for future maintenance.',
    thumbnail: '/assets/videos/eH7F6dC6aeA.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/eH7F6dC6aeA',
  },
  {
    id: 'toilet-fill-valve',
    youtubeId: 'IBR2LUCp4as',
    title: 'Replacing a Toilet Fill Valve Cleanly',
    series: 'Plumbing Shorts',
    audience: 'Homeowners',
    summary:
      'Step-by-step look at replacing a noisy or slow-filling toilet valve and checking supply connections properly.',
    thumbnail: '/assets/videos/IBR2LUCp4as.jpg',
    youtubeUrl: 'https://www.youtube.com/shorts/IBR2LUCp4as',
  },
  {
    id: 'call-that-sucked',
    youtubeId: 'GGOjVTUd2fU',
    title: 'Remembering Back to a Tough Service Call',
    series: 'LUNCHTIME with Josh the Plumber',
    audience: 'Plumbers',
    summary:
      'Real lessons learned from tough residential service calls—what goes wrong in the field and how steady diagnostics keep you moving.',
    thumbnail: '/assets/videos/GGOjVTUd2fU-clean.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=GGOjVTUd2fU',
  },
];

export const DIAGNOSTIC_PILLARS: DiagnosticPillar[] = [
  {
    number: '01',
    title: 'Water Treatment & Tankless Protection',
    audienceLabel: 'Tankless & Softeners · Columbia, MO',
    description:
      'Scale buildup and mineral load silently throttle flow rates and foul tankless heat exchangers. Effective diagnostics evaluate incoming water hardness alongside equipment sizing before recommending repairs.',
    fieldTakeaway: 'Treat the water entering the heater, not just the error code on the screen.',
  },
  {
    number: '02',
    title: 'Whole-Home Filtration & PFAS Awareness',
    audienceLabel: 'Water Quality · Filtration Systems',
    description:
      'Understanding what is actually in local water supplies lets homeowners choose verified carbon, sediment, or reverse-osmosis filtration built around real flow-rate demands.',
    fieldTakeaway: 'Discussed in depth on That Plumbing Podcast Ep. 28 with Franklin Water Treatment.',
  },
  {
    number: '03',
    title: 'Root-Cause Leak & Valve Tracing',
    audienceLabel: 'Fixtures · Stops · Supply Lines',
    description:
      'A dripping spout or damp cabinet floor rarely tells the whole story at first glance. Systematic isolation tests separate worn cartridges, loose packing nuts, failing angle stops, and hidden supply seepage.',
    fieldTakeaway: 'Diagnose the exact failure point before opening a single wall or ordering parts.',
  },
  {
    number: '04',
    title: 'Softener Stack & Valve Assemblies',
    audienceLabel: 'Control Heads · Brine & Bypass Valves',
    description:
      'When soft water suddenly disappears or drain lines run continuously, internal stack assemblies, seals, and bypass rotors are often the culprit rather than the entire resin tank.',
    fieldTakeaway: 'Component-level service extends system life when a full replacement is unnecessary.',
  },
  {
    number: '05',
    title: 'Clean Craft & Serviceable Rough-Ins',
    audienceLabel: 'Copper · PEX · PVC · Black Iron',
    description:
      'From crisp Oatey priming joints and properly positioned shutoff valves to tight black-iron gas threading, clean workmanship makes future diagnostics faster and safer for everyone.',
    fieldTakeaway: 'Leave every mechanical room easier to service than the day you walked in.',
  },
  {
    number: '06',
    title: 'Education Over Persuasion',
    audienceLabel: 'Homeowner Transparency · Honest Options',
    description:
      'No high-pressure scripts. Homeowners deserve a clear explanation of what failed, why it happened, what maintenance prevents a repeat, and honest repair options.',
    fieldTakeaway: 'Informed homeowners make confident decisions—that is the SleepyPlumbr standard.',
  },
];

export const PODCAST_FEATURE = {
  showName: 'That Plumbing Podcast',
  episodeTitle:
    'Ep. 28 — Understanding Water Filtration & PFAS w/ Steve Hamilton: National Sales Manager for Franklin Water Treatment (feat. Josh B.)',
  spotifyUrl: 'https://open.spotify.com/episode/2pbnrLukmZJeb87opFfA3D',
  spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/2pbnrLukmZJeb87opFfA3D?utm_source=generator',
  coverImage: '/assets/podcast/ep28-cover.jpg',
  recurringThemes: [
    {
      topic: 'Education Over Persuasion',
      detail: 'Why walking homeowners through system diagnostics builds lasting trust without sales pressure.',
    },
    {
      topic: 'Apprenticeship & First 30 Days',
      detail: 'Setting real field expectations, tool discipline, and structured mentorship for incoming apprentices.',
    },
    {
      topic: 'Water Filtration & PFAS',
      detail: 'Practical guidance on filtration stages, water chemistry, and talking honestly with residential customers.',
    },
    {
      topic: 'Mindset in Residential Service',
      detail: 'Handling tough days on the truck, staying sharp mentally, and building longevity in the trades.',
    },
  ],
};

export const MERCH_PRODUCTS: MerchProduct[] = [
  {
    id: 'good-printed-shirt',
    name: 'Sleepy Plumbr Good Printed Shirt',
    garment: 'Gildan 64000 Softstyle® T-Shirt',
    price: '$30.00',
    image: '/assets/merch-good-shirt.jpg',
    storeUrl: 'https://fastyowi.com/store/slpplumb/products',
    note: 'Printed to order via Fast Yowi Tees · Ready within 7 business days',
  },
  {
    id: 'evil-printed-shirt',
    name: 'Sleepy Plumbr EVIL Printed Shirt',
    garment: 'Gildan 64000 Softstyle® T-Shirt',
    price: '$30.00',
    image: '/assets/merch-evil-shirt.jpg',
    storeUrl: 'https://fastyowi.com/store/slpplumb/products',
    note: 'Printed to order via Fast Yowi Tees · Ready within 7 business days',
  },
  {
    id: 'pipe-down-shirt',
    name: 'Sleepy Plumbr Pipe Down Printed Shirt',
    garment: "Under Armour 1376842 Men's Team Tech™ T-Shirt",
    price: '$60.00',
    image: '/assets/merch-pipedown-shirt.jpg',
    storeUrl: 'https://fastyowi.com/store/slpplumb/products',
    note: 'Performance tech fabric · Printed to order via Fast Yowi Tees',
  },
  {
    id: 'embroidered-hat',
    name: 'Sleepy Plumbr Embroidered Hat',
    garment: 'Richardson 112 Snapback Trucker Cap',
    price: '$30.00',
    image: '/assets/merch-hat.jpg',
    storeUrl: 'https://fastyowi.com/store/slpplumb/products',
    note: 'Embroidered front patch · Ships or local pickup in ~7 business days',
  },
];

export const OFFICIAL_RECOMMENDATIONS: ToolRecommendation[] = [
  {
    name: 'IWISS Tools',
    category: 'Tools',
    note: 'PEX crimping and field plumbing tools featured on Josh’s official Linktree.',
    url: 'https://glnk.io/jlyz9/josh',
    image: '/assets/tools/iwiss.png',
    isAffiliate: true,
    promoNote: 'Official Linktree code: JOSH5',
  },
  {
    name: 'FlowRite ONA Puller',
    category: 'Tools',
    note: 'Puller tool for stubborn compression rings and angle-stop sleeves without scarring copper.',
    url: 'https://amzn.to/3yMbX6R',
    image: '/assets/tools/flowrite-ona.jpg',
    isAffiliate: true,
  },
  {
    name: 'Jam-Bar Toilet Bolt Lock Wrench',
    category: 'Tools',
    note: 'Stops spinning closet bolts underneath toilet bases during single-person installs and resets.',
    url: 'https://amzn.to/41cd0Fx',
    image: '/assets/tools/jam-bar.webp',
    isAffiliate: true,
  },
  {
    name: 'Ferrule Blaster™',
    category: 'Tools',
    note: 'Fast, clean ferrule removal tool for tight under-sink and behind-toilet valve replacements.',
    url: 'https://toolceptions.com/products/ferrule-blaster',
    image: '/assets/tools/ferrule-blaster.png',
    isAffiliate: false,
  },
  {
    name: 'Kwik Tite & Angle-On Wrench Kit',
    category: 'Tools',
    note: 'Dual-action supply-stop and compression nut wrench setup for tight cabinet work.',
    url: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0019VQ0QC%3Ftag%3D143751-sleepyplumbr-20%26linkCode%3Dogi%26th%3D1%26psc%3D1&btn_ref=org-433bb393e1b8b503',
    image: '/assets/tools/kwik-tite.jpg',
    isAffiliate: true,
  },
  {
    name: 'Klein Tools 56074 EDC Pocket Flashlight',
    category: 'Tools',
    note: 'Rechargeable 1000-lumen pocket floodlight with green laser for crawlspaces and mechanical rooms.',
    url: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0F4KXRGVT%2Fref%3Dasc_df_B0F4KXRGVT1779102000000%3Ftag%3D143751-sleepyplumbr-20%26creative%3D395261%26creativeASIN%3DB0F4KXRGVT%26linkCode%3Dasn&btn_ref=org-433bb393e1b8b503',
    image: '/assets/tools/klein-flashlight.jpg',
    isAffiliate: true,
  },
  {
    name: 'Unreasonable Hospitality — Will Guidara',
    category: 'Books',
    note: 'Recommended reading on Josh’s Linktree for elevating customer experience in residential service.',
    url: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fdp%2F0593418573%3Ftag%3D143751-sleepyplumbr-20%26linkCode%3Dogi%26th%3D1%26psc%3D1&btn_ref=org-433bb393e1b8b503',
    image: '/assets/tools/unreasonable-hospitality.jpg',
    isAffiliate: true,
  },
  {
    name: 'Extreme Ownership — Jocko Willink & Leif Babin',
    category: 'Books',
    note: 'Leadership and accountability principles applied to trade teams and field diagnostics.',
    url: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fdp%2F1250183863%2Fref%3Dasc_df_12501838631794582000000%3Ftag%3D143751-sleepyplumbr-20%26linkCode%3Ddf0&btn_ref=org-433bb393e1b8b503',
    image: '/assets/tools/extreme-ownership.jpg',
    isAffiliate: true,
  },
];
