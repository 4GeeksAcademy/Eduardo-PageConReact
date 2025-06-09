import rigoImage from "../../img/rigo-baby.jpg";

const Cards = () => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={rigoImage} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
