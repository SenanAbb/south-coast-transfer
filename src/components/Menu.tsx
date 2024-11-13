import { motion } from "framer-motion";

interface MenuProps {
  links: Link[];
}

const menuVariants = {
  hidden: {
    y: "-100%",
  },
  visible: { y: ["-100%", "-75%", "-50%", "-25%", "0%", "0%"] },
};
const linkVariants = {
  hidden: {
    opacity: 0,
    y: "-25px",
  },
  visible: {
    opacity: [0, 0, 0, 0, 1, 1],
    y: ["-25px", "-25px", "-25px", "-25px", "0px", "0px"],
  },
};
const languangeVariants = {
  hidden: {
    opacity: 0,
    y: "-25px",
  },
  visible: {
    opacity: [0, 0, 0, 0, 0, 0, 1, 1],
    y: ["-25px", "-25px", "-25px", "-25px", "25px", "25px", "0px", "0px"],
  },
};

function Menu({ links }: MenuProps) {
  return (
    <motion.div
      className="absolute left-0 h-screen w-screen bg-white"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <ul className="flex flex-col items-center gap-20 pt-20">
        {links.map((link, index) => (
          <motion.li
            key={index}
            className="text-3xl"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <a href={link.href}>{link.title}</a>
          </motion.li>
        ))}
      </ul>
      <div className="flex flex-col items-center mt-52">
        <div className="flex items-center gap-10">
          <motion.p
            variants={languangeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-lg cursor-pointer"
          >
            ES
          </motion.p>
          <div className="w-[1px] h-8 bg-gray-700"></div>
          <motion.p
            variants={languangeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-lg cursor-pointer"
          >
            EN
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
