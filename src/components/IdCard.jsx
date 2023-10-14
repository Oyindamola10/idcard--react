import "./IdCard.css"
const IdCard = ({name,image, position,location,phoneNo,email}) => {
    

  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="picture" />
        <div>
          <h3 className="title">{name}</h3>
          <h5>{position}</h5>
          </div>
          <div>
          <p><i className='fas fa-map-marker-alt'></i>{location}</p>
          <p><i className="fa fa-phone"></i>{phoneNo}</p>
          <p><i className="fa fa-envelope"></i>{email}</p>
        </div>
        </div>
    </div>
  );
};

export default IdCard