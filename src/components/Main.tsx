import Card from "./Card";

const Main = () => {
  return (
    <div className="border">
      <h1>Musics</h1>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Main;
