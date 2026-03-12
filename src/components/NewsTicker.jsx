import { motion } from 'framer-motion';

const statements = [
  "Subsidies on On-Grid Solar Systems",
  "Reduce your electricity bill by up to 90%",
  "25 years performance warranty",
  "Expert installation across Andhra Pradesh",
  "High quality tier-1 solar panels",
];

const NewsTicker = () => {
  return (
    <div className="bg-yellow-400 py-3 overflow-hidden border-y border-yellow-500 shadow-sm relative z-20">
      <div className="flex w-fit">
        {/* We map twice to create an infinite seamless loop effect */}
        {[0, 1].map((set) => (
          <motion.div
            key={set}
            className="flex items-center whitespace-nowrap px-8"
            animate={{ x: "-100%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {statements.map((text, idx) => (
              <div key={idx} className="flex items-center mx-6">
                <span className="w-2 h-2 rounded-full bg-green-700 mx-6 opacity-50" />
                <span className="text-green-900 font-bold uppercase tracking-wider text-sm md:text-base">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
