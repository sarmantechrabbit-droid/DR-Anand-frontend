import siteData from './siteData.json'

const contactData = {
  hero: {
    title: 'Contact Us',
    subtitle: 'Connect with our team for appointments, consultations, and patient support.',
    breadcrumb: ['Home', 'Contact'],
  },
  infoCards: [
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Phone Number',
      description: 'Call us directly for appointments and medical queries.',
      value: siteData.site.phone,
      href: `tel:${siteData.site.phone}`,
    },
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Address',
      description: 'Send your reports or inquiries to our care team.',
      value: siteData.site.email,
      href: `mailto:${siteData.site.email}`,
    },
    {
      id: 'address',
      icon: 'MapPin',
      title: 'Clinic Address',
      description: 'Visit us at our consultation and treatment center.',
      value: siteData.site.address,
      href: 'https://maps.google.com',
    },
    {
      id: 'hours',
      icon: 'Clock3',
      title: 'Consultation Timings',
      description: 'Our available hours for in-clinic consultation.',
      value: 'Mon - Sat: 9:00 AM - 6:00 PM',
      href: '#',
    },
  ],
  form: {
    title: 'Book a Consultation',
    subtitle: 'Fill out the form below and our team will get back to you shortly.',
    buttonText: 'Send Message',
  },
  map: {
    title: 'Find Us on Map',
    subtitle: siteData.site.address,
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d469832.64225907775!2d72.523559!3d23.076312!3m2!1i1024!2i768!4f13.1!2m1!1s107%20First%20Floor%20Empire%20Doctor%20House%2C%20Nr.%20Kargil%20Petrol%20Pump%2C%20SG%20Highway%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sus!4v1770880385847!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
}

export default contactData
