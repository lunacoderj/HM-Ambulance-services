export interface Testimonial {
  id: string;
  name: string;
  nameTe?: string;
  location: string;
  locationTe?: string;
  quote: string;
  quoteTe?: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajeshwari Sharma',
    location: 'Arundelpet, Guntur',
    quote: 'They saved my father\'s life. The response was immediate, and the staff was extremely professional and caring during the 2 AM emergency.',
    stars: 5,
  },
  {
    id: 't2',
    name: 'Srinivasa Rao',
    location: 'Brodipet, Guntur',
    quote: 'The ICU ambulance had everything a hospital room would have. The doctor on board monitored my mother\'s oxygen the entire way. Absolutely the best service in Guntur.',
    stars: 5,
  },
  {
    id: 't3',
    name: 'K. Lakshmi',
    location: 'Vidya Nagar, Guntur',
    quote: 'When my son had a severe asthma attack, HM Ambulance reached us in under 10 minutes. The medics were calm, which helped us stay calm. Highly recommended.',
    stars: 5,
  },
  {
    id: 't4',
    name: 'Venkatesh',
    location: 'Mangalagiri',
    quote: 'We used their freezer box service when my grandfather passed away. They handled everything with so much respect and dignity. Very grateful for their professionalism.',
    stars: 5,
  },
  {
    id: 't5',
    name: 'Dr. Ramesh Kumar',
    location: 'Guntur City',
    quote: 'As a physician, I regularly recommend HM Ambulance for inter-hospital patient transfers. Their ventilator-equipped ambulances and trained staff are unmatched.',
    stars: 5,
  },
  {
    id: 't6',
    name: 'Sunitha Reddy',
    location: 'Syamala Nagar, Guntur',
    quote: 'I booked them for my grandmother\'s discharge from the hospital. The stretcher setup was so smooth, she felt no discomfort at all.',
    stars: 5,
  },
  {
    id: 't7',
    name: 'Abdul Rehman',
    location: 'Kothapet, Guntur',
    quote: 'Called them during a heavy rainstorm. I thought they would be delayed, but they arrived incredibly fast. True to their word, any weather, any time.',
    stars: 5,
  },
  {
    id: 't8',
    name: 'M. Krishna',
    location: 'Pattabhipuram',
    quote: 'The WhatsApp location sharing feature made it so easy. I didn\'t have to explain landmarks while I was panicking. They just found our exact spot.',
    stars: 5,
  },
  {
    id: 't9',
    name: 'Anjali Desai',
    location: 'AT Agraharam, Guntur',
    quote: 'Spotless interiors and highly advanced equipment. You can tell they maintain their fleet meticulously. Will definitely keep their number on speed dial.',
    stars: 5,
  },
  {
    id: 't10',
    name: 'Suresh Babu',
    location: 'Nagarampalem, Guntur',
    quote: 'We needed to shift my brother to a hospital in Hyderabad. The ALS ambulance ride was smooth and the paramedic didn\'t sleep a wink the whole 5 hours.',
    stars: 5,
  }
];
