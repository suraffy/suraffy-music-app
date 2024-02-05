interface Props {
  header: string;
  count: number;
  description: string;
}

const StaticCard = ({ header, count, description }: Props) => {
  return (
    <div
      className="card border-light mt-3 shadow-sm"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title display-4">{count}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default StaticCard;
