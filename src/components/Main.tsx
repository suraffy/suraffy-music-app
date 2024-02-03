import Card from "./Card";

const Main = () => {
  return (
    <div className="">
      <h1 className="mb-3">Musics</h1>
      <div className="row justify-content-evenly">
        <div className="col-lg-6 col-xl-4 mb-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4 mb-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4 mb-4">
          <Card />
        </div>
        <div className="col-lg-6 col-xl-4 mb-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Main;
