import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  const socials = [
    {
      name: 'Facebook',
      handle: '@golden.tree.latest',
      href: 'https://www.facebook.com/golden.tree.673991',
      icon: FaFacebook,
      color: 'bg-blue-600',
    },
    {
      name: 'Instagram',
      handle: '@goldentreelifespaces',
      href: 'https://www.instagram.com/goldentreelifespaces/',
      icon: FaInstagram,
      color: 'bg-pink-600',
    },
    {
      name: 'YouTube',
      handle: 'Golden Tree Life Spaces',
      href: 'https://youtube.com/@goldentreelifespaces-ql3xv?si=dDuPdr5MhJDjliIX',
      icon: FaYoutube,
      color: 'bg-red-600',
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-light-gray rounded-3xl p-8 lg:p-16 border border-gray-200 shadow-sm">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="font-heading font-black text-3xl lg:text-4xl mb-4 leading-tight">
              <span className="text-primary">Join Our</span> <br />
              <span className="text-solar-light uppercase tracking-tighter">Clean Energy Network 🌱</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Follow us for daily project showcases, energy saving tips, and exclusive customer reviews.
            </p>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 bg-white border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl rounded-2xl px-5 py-4 transition-all duration-500 group ${
                    index === 2 ? 'col-span-2 mx-auto min-w-[240px]' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                    <social.icon className="text-lg" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{social.name}</div>
                    <div className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors truncate max-w-[150px]">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
