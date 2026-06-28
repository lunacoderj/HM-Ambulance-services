export interface Equipment {
  id: string;
  title: string;
  titleTe?: string;
  shortDescription: string;
  shortDescriptionTe?: string;
  image: string;
  features: string[];
  featuresTe?: string[];
}

export const equipmentList: Equipment[] = [
  {
    id: 'stretcher',
    title: 'Advanced Auto-Loading Stretcher',
    titleTe: 'అధునాతన ఆటో-లోడింగ్ స్ట్రెచర్',
    shortDescription: 'High-grade, shock-absorbing stretcher designed for smooth and secure patient transfers without manual lifting.',
    shortDescriptionTe: 'మాన్యువల్ లిఫ్టింగ్ లేకుండా రోగులను సురక్షితంగా మార్చడానికి రూపొందించబడిన హై-గ్రేడ్, షాక్-అబ్సోర్బింగ్ స్ట్రెచర్.',
    image: '/images/equipment/stretcher.webp',
    features: [
      'Auto-loading mechanism',
      'Shock-absorbing wheels',
      'Multi-position adjustable backrest'
    ],
    featuresTe: [
      'ఆటో-లోడింగ్ మెకానిజం',
      'షాక్-అబ్సోర్బింగ్ చక్రాలు',
      'బహుళ-స్థాన సర్దుబాటు బ్యాక్‌రెస్ట్'
    ]
  },
  {
    id: 'oxygen',
    title: 'Medical Oxygen System',
    titleTe: 'మెడికల్ ఆక్సిజన్ సిస్టమ్',
    shortDescription: 'Dual high-capacity medical oxygen cylinders equipped with precise flowmeters and regulators for continuous respiratory support.',
    shortDescriptionTe: 'నిరంతర శ్వాసకోశ మద్దతు కోసం ఖచ్చితమైన ఫ్లోమీటర్లు మరియు రెగ్యులేటర్‌లతో కూడిన డ్యూయల్ హై-కెపాసిటీ మెడికల్ ఆక్సిజన్ సిలిండర్‌లు.',
    image: '/images/equipment/oxygen.webp',
    features: [
      'Dual High-Capacity Cylinders',
      'Precise Flow Regulators',
      'Continuous O2 Delivery'
    ],
    featuresTe: [
      'డ్యూయల్ హై-కెపాసిటీ సిలిండర్‌లు',
      'ఖచ్చితమైన ఫ్లో రెగ్యులేటర్లు',
      'నిరంతర O2 డెలివరీ'
    ]
  },
  {
    id: 'monitor',
    title: 'Multipara Patient Monitor',
    titleTe: 'మల్టీపారా పేషెంట్ మానిటర్',
    shortDescription: 'Advanced cardiac and vital sign monitor to continuously track ECG, SpO2, blood pressure, and heart rate during transit.',
    shortDescriptionTe: 'రవాణా సమయంలో ECG, SpO2, రక్తపోటు మరియు హృదయ స్పందన రేటును నిరంతరం ట్రాక్ చేయడానికి అధునాతన కార్డియాక్ మరియు వైటల్ సైన్ మానిటర్.',
    image: '/images/equipment/monitor.webp',
    features: [
      'Real-time ECG & SpO2 Tracking',
      'NIBP & Heart Rate Monitoring',
      'Visual & Audible Alarms'
    ],
    featuresTe: [
      'రియల్ టైమ్ ECG & SpO2 ట్రాకింగ్',
      'NIBP & హార్ట్ రేట్ మానిటరింగ్',
      'విజువల్ & ఆడిబుల్ అలారాలు'
    ]
  },
  {
    id: 'siren',
    title: 'Emergency PA & Siren System',
    titleTe: 'ఎమర్జెన్సీ PA & సైరన్ సిస్టమ్',
    shortDescription: 'High-decibel multi-tone siren and Public Address (PA) system ensuring quick traffic clearance during critical emergencies.',
    shortDescriptionTe: 'క్లిష్టమైన అత్యవసర పరిస్థితుల్లో త్వరిత ట్రాఫిక్ క్లియరెన్స్‌ని నిర్ధారించే హై-డెసిబెల్ మల్టీ-టోన్ సైరన్ మరియు పబ్లిక్ అడ్రస్ (PA) సిస్టమ్.',
    image: '/images/equipment/siren.webp',
    features: [
      'Multi-tone Emergency Siren',
      'Clear PA Microphone',
      'Traffic Clearing Visibility'
    ],
    featuresTe: [
      'మల్టీ-టోన్ ఎమర్జెన్సీ సైరన్',
      'క్లియర్ PA మైక్రోఫోన్',
      'ట్రాఫిక్ క్లియరింగ్ విజిబిలిటీ'
    ]
  },
  {
    id: 'defibrillator',
    title: 'Automated External Defibrillator (AED)',
    titleTe: 'ఆటోమేటెడ్ ఎక్స్‌టర్నల్ డీఫిబ్రిలేటర్ (AED)',
    shortDescription: 'Life-saving cardiac device used to establish a normal heartbeat during sudden cardiac arrest.',
    shortDescriptionTe: 'ఆకస్మిక గుండె ఆగిపోవడంలో సాధారణ హృదయ స్పందనను పునరుద్ధరించడానికి ఉపయోగించే ప్రాణాలను రక్షించే కార్డియాక్ పరికరం.',
    image: '/images/equipment/defibrillator.webp',
    features: [
      'Quick shock delivery',
      'Voice prompts',
      'ECG monitoring'
    ],
    featuresTe: [
      'క్విక్ షాక్ డెలివరీ',
      'వాయిస్ ప్రాంప్ట్‌లు',
      'ECG మానిటరింగ్'
    ]
  },
  {
    id: 'ventilator',
    title: 'Transport Ventilator',
    titleTe: 'ట్రాన్స్‌పోర్ట్ వెంటిలేటర్',
    shortDescription: 'Portable mechanical ventilation system for continuous respiratory support during critical transit.',
    shortDescriptionTe: 'క్లిష్టమైన రవాణా సమయంలో నిరంతర శ్వాసకోశ మద్దతు కోసం పోర్టబుల్ మెకానికల్ వెంటిలేషన్ సిస్టమ్.',
    image: '/images/equipment/ventilator.webp',
    features: [
      'Invasive & Non-invasive modes',
      'Battery backup',
      'Adjustable breathing parameters'
    ],
    featuresTe: [
      'ఇన్వాసివ్ & నాన్-ఇన్వాసివ్ మోడ్‌లు',
      'బ్యాటరీ బ్యాకప్',
      'సర్దుబాటు చేయగల శ్వాస పారామితులు'
    ]
  },
  {
    id: 'suction',
    title: 'Medical Suction Apparatus',
    titleTe: 'మెడికల్ సక్షన్ అపారాటస్',
    shortDescription: 'High-vacuum portable suction pump to rapidly clear airways and prevent aspiration.',
    shortDescriptionTe: 'వాయుమార్గాలను వేగంగా క్లియర్ చేయడానికి మరియు ఆస్పిరేషన్‌ను నిరోధించడానికి హై-వాక్యూమ్ పోర్టబుల్ సక్షన్ పంప్.',
    image: '/images/equipment/suction.webp',
    features: [
      'High suction capacity',
      'Portable and lightweight',
      'Spill-proof collection jar'
    ],
    featuresTe: [
      'అధిక చూషణ సామర్థ్యం',
      'పోర్టబుల్ మరియు తేలికైనది',
      'స్పిల్ ప్రూఫ్ కలెక్షన్ జార్'
    ]
  },
  {
    id: 'firstaid',
    title: 'Emergency Trauma Bag',
    titleTe: 'ఎమర్జెన్సీ ట్రామా బ్యాగ్',
    shortDescription: 'Comprehensive trauma and first-aid kit containing essential life-saving medications and dressings.',
    shortDescriptionTe: 'అత్యవసర ప్రాణాలను రక్షించే మందులు మరియు డ్రెస్సింగ్‌లను కలిగి ఉన్న సమగ్ర ట్రామా మరియు ఫస్ట్-ఎయిడ్ కిట్.',
    image: '/images/equipment/firstaid.webp',
    features: [
      'Advanced airway kit',
      'Emergency medications',
      'Trauma dressings & splints'
    ],
    featuresTe: [
      'అధునాతన ఎయిర్‌వే కిట్',
      'అత్యవసర మందులు',
      'ట్రామా డ్రెస్సింగ్‌లు & స్ప్లింట్లు'
    ]
  },
  {
    id: 'wheelchair',
    title: 'Folding Transit Wheelchair',
    titleTe: 'ఫోల్డింగ్ ట్రాన్సిట్ వీల్‌చైర్',
    shortDescription: 'Lightweight folding wheelchair for safe and comfortable patient transport in restricted spaces.',
    shortDescriptionTe: 'పరిమిత స్థలాలలో రోగులను సురక్షితంగా మరియు సౌకర్యవంతంగా తీసుకెళ్లడానికి తేలికపాటి ఫోల్డింగ్ వీల్‌చైర్.',
    image: '/images/equipment/wheelchair.webp',
    features: [
      'Quick folding mechanism',
      'Safety harness',
      'Heavy-duty castors'
    ],
    featuresTe: [
      'క్విక్ ఫోల్డింగ్ మెకానిజం',
      'భద్రతా జీను',
      'హెవీ-డ్యూటీ కాస్టర్‌లు'
    ]
  }
];
