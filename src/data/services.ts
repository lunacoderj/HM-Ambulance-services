export interface Service {
  id: string;
  title: string;
  titleTe?: string;
  shortDescription: string;
  shortDescriptionTe?: string;
  icon: string; // lucide icon name
  image?: string; // High-quality cinematic image
  features: string[];
  featuresTe?: string[];
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'Basic Life Support (BLS)',
    titleTe: 'బేసిక్ లైఫ్ సపోర్ట్ (BLS)',
    shortDescription: 'For non-critical patient transfers with essential medical monitoring.',
    shortDescriptionTe: 'ప్రాథమిక వైద్య పర్యవేక్షణతో సాధారణ రోగుల తరలింపు కోసం.',
    icon: 'Stethoscope',
    image: '/images/ambulances/basic_icu.webp',
    features: ['Oxygen cylinder', 'First aid kits', 'BP monitor', 'Trained paramedic'],
    featuresTe: ['ఆక్సిజన్ సిలిండర్', 'ఫస్ట్ ఎయిడ్ కిట్లు', 'BP మానిటర్', 'శిక్షణ పొందిన పారామెడిక్']
  },
  {
    id: 's2',
    title: 'Advanced Life Support (ALS)',
    titleTe: 'అడ్వాన్స్డ్ లైఫ్ సపోర్ట్ (ALS)',
    shortDescription: 'For critical patients requiring continuous monitoring and medication.',
    shortDescriptionTe: 'నిరంతర పర్యవేక్షణ అవసరమైన తీవ్రమైన రోగుల కోసం.',
    icon: 'Activity',
    image: '/images/ambulances/advanced.webp',
    features: ['ECG monitor', 'Defibrillator', 'IV supplies', 'Emergency drugs'],
    featuresTe: ['ECG మానిటర్', 'డీఫిబ్రిలేటర్', 'IV సరఫరా', 'అత్యవసర మందులు']
  },
  {
    id: 's3',
    title: 'ICU / Ventilator Ambulance',
    titleTe: 'ICU / వెంటిలేటర్ అంబులెన్స్',
    shortDescription: 'A mobile intensive care unit with life-support capabilities.',
    shortDescriptionTe: 'లైఫ్-సపోర్ట్ సౌకర్యాలతో కూడిన మొబైల్ ఇంటెన్సివ్ కేర్ యూనిట్.',
    icon: 'HeartPulse',
    image: '/images/ambulances/freezer_ventilator.webp',
    features: ['Transport ventilator', 'Multi-para monitor', 'Syringe pumps', 'Specialist doctor'],
    featuresTe: ['ట్రాన్స్‌పోర్ట్ వెంటిలేటర్', 'మల్టీ-పారా మానిటర్', 'సిరంజి పంపులు', 'స్పెషలిస్ట్ డాక్టర్']
  },
  {
    id: 's4',
    title: 'Patient Transfer',
    titleTe: 'పేషెంట్ బదిలీ',
    shortDescription: 'Comfortable transport between hospitals or hospital to home.',
    shortDescriptionTe: 'ఆసుపత్రుల మధ్య లేదా ఆసుపత్రి నుండి ఇంటికి సౌకర్యవంతమైన రవాణా.',
    icon: 'ArrowRightLeft',
    image: '/images/service_patient_transfer.webp',
    features: ['Comfortable stretcher', 'Air-conditioned', 'Wheelchair support'],
    featuresTe: ['సౌకర్యవంతమైన స్ట్రెచర్', 'ఎయిర్ కండిషన్డ్', 'వీల్ చైర్ సపోర్ట్']
  },
  {
    id: 's5',
    title: 'Outstation Transfer',
    titleTe: 'అవుట్‌స్టేషన్ బదిలీ',
    shortDescription: 'Long-distance patient transport across districts or states.',
    shortDescriptionTe: 'జిల్లాలు లేదా రాష్ట్రాల మధ్య సుదూర రోగుల రవాణా.',
    icon: 'Map',
    image: '/images/service_outstation.webp',
    features: ['Long-range vehicles', 'Extra oxygen', 'Two drivers', 'Relief medic'],
    featuresTe: ['సుదూర వాహనాలు', 'అదనపు ఆక్సిజన్', 'ఇద్దరు డ్రైవర్లు', 'రిలీఫ్ మెడిక్']
  },
  {
    id: 's6',
    title: 'Freezer Box Service',
    titleTe: 'ఫ్రీజర్ బాక్స్ సేవ',
    shortDescription: 'Respectful and hygienic preservation for deceased individuals.',
    shortDescriptionTe: 'మరణించిన వ్యక్తుల కోసం పరిశుభ్రమైన మరియు గౌరవప్రదమైన భద్రత.',
    icon: 'ThermometerSnowflake',
    image: '/images/service_freezer_van.webp',
    features: ['-20°C cooling', 'Glass display', 'Home delivery', '24/7 availability'],
    featuresTe: ['-20°C కూలింగ్', 'గ్లాస్ డిస్ప్లే', 'హోమ్ డెలివరీ', '24/7 లభ్యత']
  },
  {
    id: 's7',
    title: 'Dead Body Transport',
    titleTe: 'మృతదేహం రవాణా',
    shortDescription: 'Dignified transportation from hospital to home or crematorium.',
    shortDescriptionTe: 'ఆసుపత్రి నుండి ఇంటికి లేదా స్మశానవాటికకు గౌరవప్రదమైన రవాణా.',
    icon: 'CarFront',
    image: '/images/service_dead_body.webp',
    features: ['Respectful handling', 'Timely arrival', 'Inter-city available'],
    featuresTe: ['గౌరవప్రదమైన నిర్వహణ', 'సమయానికి రాక', 'ఇంటర్-సిటీ అందుబాటులో ఉంది']
  },
  {
    id: 's8',
    title: 'Event Medical Support',
    titleTe: 'ఈవెంట్ మెడికల్ సపోర్ట్',
    shortDescription: 'Standby ambulance for sports, corporate, or public events.',
    shortDescriptionTe: 'క్రీడలు, కార్పొరేట్ లేదా పబ్లిక్ ఈవెంట్‌ల కోసం స్టాండ్‌బై అంబులెన్స్.',
    icon: 'Tent',
    image: '/images/service_event_medical.webp',
    features: ['On-site medics', 'Quick response', 'Pre-event planning'],
    featuresTe: ['ఆన్-సైట్ మెడిక్స్', 'త్వరిత ప్రతిస్పందన', 'ప్రీ-ఈవెంట్ ప్లానింగ్']
  },
  {
    id: 's9',
    title: 'Air Ambulance Coordinator',
    titleTe: 'ఎయిర్ అంబులెన్స్ కోఆర్డినేటర్',
    shortDescription: 'Assistance in arranging air transport for extreme emergencies.',
    shortDescriptionTe: 'తీవ్రమైన అత్యవసర పరిస్థితులకు ఎయిర్ రవాణా ఏర్పాటు చేయడంలో సహాయం.',
    icon: 'Plane',
    image: '/images/service_air_event.webp',
    features: ['Airport transfer', 'Documentation help', 'Bed-to-bed service'],
    featuresTe: ['ఎయిర్‌పోర్ట్ బదిలీ', 'డాక్యుమెంటేషన్ సహాయం', 'బెడ్-టు-బెడ్ సేవ']
  }
];
