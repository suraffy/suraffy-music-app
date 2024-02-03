import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Music = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <Sidebar />
          </div>
          <div className="col-md-8 col-lg-9">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
