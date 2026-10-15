export const PRIMARY_DOMAIN = 'https://www.hmambulance.in';

export const siteSeo = {
  primaryDomain: PRIMARY_DOMAIN,
  siteName: 'HM Ambulance Service',
  defaultTitle: 'HM Ambulance | 24/7 Emergency & ICU Ambulance Service in Guntur',
  defaultDescription:
    'HM Ambulance is the fastest 24/7 emergency medical transport in Guntur. We provide ICU, BLS, Ventilator, Oxygen, and Freezer Box ambulances. Call +91 63014 05446.',
  canonicalUrl: (path: string = '') => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${PRIMARY_DOMAIN}${cleanPath === '/' ? '' : cleanPath}`;
  },
};
