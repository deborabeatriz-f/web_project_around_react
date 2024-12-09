import heart from "../../../../images/heart_icon.png";
import heartClicked from "../../../../images/heart-clicked.png";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;

  const imagePopup = { children: <ImagePopup card={props.card} /> };

  return (
    <div className="grid__card">
      <button className="grid__card-delete"></button>
      <img
        src={link}
        alt=""
        className="grid__card-image"
        onClick={() => handleOpenPopup(imagePopup)}
      />
      <div className="grid__card-text">
        <h3 className="grid__card-title">{name}</h3>
        <img
          src={heart}
          alt="Like Button"
          className="grid__button-heart button-heart-unliked"
        />
        <img
          src={heartClicked}
          alt="Like Button"
          className="grid__button-heart button-heart-liked"
        />
      </div>
    </div>
  );
}
