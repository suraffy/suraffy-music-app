import { motion } from "framer-motion";

interface Props {
  header: string;
  count: number;
  description: string;
}

const StaticCard = ({ header, count, description }: Props) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="card border-light mt-3 shadow-sm"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title display-4">{count}</h5>
        <p className="card-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default StaticCard;
