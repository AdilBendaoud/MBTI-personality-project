import { Link } from "react-router-dom";

const Card = ({title, text, id}) => {
  return (
    <div className="col">
        <div className="card shadow-sm">
        <img class="card-img-top" src="https://thechargerfrontline.com/wp-content/uploads/2022/11/Personality-Test-900x568.png" alt="Card image cap" />
        <div className="card-body">
            <h5 class="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <Link to={`/test/${id}/${title}`} className="btn btn-md btn-primary">Take Test</Link>
                </div>
                <small className="text-body-secondary fw-bold">9 min</small>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Card;