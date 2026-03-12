import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SocialMedia = () => {
  const socials = [
    {
      name: 'Facebook',
      handle: '@golden.tree.latest',
      href: 'https://www.facebook.com/golden.tree.673991',
      icon: FiFacebook,
      color: 'bg-blue-600',
    },
    {
      name: 'Instagram',
      handle: '@goldentreelifespaces',
      href: 'https://www.instagram.com/goldentreelifespaces/',
      icon: FiInstagram,
      color: 'bg-pink-600',
    },
    {
      name: 'LinkedIn',
      handle: 'Golden Tree Corporate',
      href: '#',
      icon: FiLinkedin,
      color: 'bg-blue-700',
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-light-gray rounded-2xl p-8 lg:p-12 border border-gray-200">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-3">
              Join Our Clean Energy Network 🌱
            </h3>
            <p className="text-gray-600">
              Follow us on social media for daily project showcases, energy saving tips, government subsidy updates, and exclusive customer reviews.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-wrap justify-center md:justify-end gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-full px-6 py-3 transition-all duration-300 group"
              >
                <div className={`w-8 h-8 rounded-full ${social.color} flex items-center justify-center text-white`}>
                  <social.icon className="text-sm" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-semibold">{social.name}</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
