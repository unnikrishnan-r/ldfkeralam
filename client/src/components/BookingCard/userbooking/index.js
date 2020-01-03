import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
function UserBooking({
  rowStyle,
  idStyle,
  imgStyle,
  chkinoutStyle,
  desStyle,
  image_path,
  id,
  name,
  description,
  dimension,
  addr1,
  city,
  start_date,
  end_date,
  rental_price,
  totalPaidPrice
}) {
  return (
    <Card className="card border-info">
      <div className={rowStyle} style={{ "margin-left": "50px" }}>
        <div className={idStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">ID</Card.Header>
            <br></br>
            <Card.Text>{id}</Card.Text>
          </Card.Body>
        </div>
        {/* </div> */}

        <div className={imgStyle}>
          <Card.Body className="cardBody">
            <Card.Img className="cardImg" src={image_path} />
          </Card.Body>
        </div>

        {/* Workspace Description */}

        <div className={desStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">Info</Card.Header>
            <br></br>
            <Card.Text>
              <strong>Name: </strong>
              {name}
              <br />
              <br />
              <strong>Descriptions: </strong>
              {description}
              <br />
              <br />
              <strong>Dimensions: </strong>
              {dimension} <br></br>
              <br></br>
              <strong>Address:</strong> <br></br>
              {addr1}
              City: <br></br>
              {city} <br />
              {!imgStyle && `Price: ${rental_price}`}
            </Card.Text>
          </Card.Body>
        </div>

        {/* CheckIn Date */}
        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">In</Card.Header>
            <br></br>
            <Card.Text>{moment(start_date).format("MM/DD/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        {/* Checkout Date */}

        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">Out</Card.Header>
            <br></br>
            <Card.Text>{moment(end_date).format("MM/DD/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader bg-warning">CAD</Card.Header>
            <br></br>
            <Card.Text>
              <strong>{totalPaidPrice.toFixed(2)} </strong>
              <br />
            </Card.Text>
          </Card.Body>
        </div>

        {imgStyle && (
          <div className="col-md-2">
            <span className="align-middle"> </span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default UserBooking;
