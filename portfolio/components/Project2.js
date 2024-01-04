import { motion } from "framer-motion";

const Project = ({ listProject = [] }) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex justify-center items-center">
        <div className="m-1 flex flex-wrap md:-m-2 lg:flex-row">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
              />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <motion.img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
