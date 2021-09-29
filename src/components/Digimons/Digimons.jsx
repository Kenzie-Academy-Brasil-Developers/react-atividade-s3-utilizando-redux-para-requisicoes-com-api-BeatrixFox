import { useSelector } from "react-redux";
import { Container } from "./style";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  let digiLength = digimons.length - 1;
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  if (digimons.length === 0) {
    return (digiLength = "");
  }

  return (
    <Container key={digiLength}>
      <motion.div style={{ background }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          <img src={digimons[digiLength].img} alt={digimons[digiLength].name} />
          <p>{digimons[digiLength].name}</p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Digimons;
