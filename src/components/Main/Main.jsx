import heart from "../../images/heart_icon.png";
import heartClicked from "../../images/heart-clicked.png";
import avatar from "../../images/jacques_cousteau.png";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="grid__content page__container">
      <section className="profile">
        <div className="profile__card-image">
          <img src={avatar} alt="Jacques Cousteau" className="profile__image" />
          <button
            className="profile__btn-avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__card">
          <h2 className="profile__title">Jacques Cousteau</h2>
          <button
            className="profile__button-edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__subtitle">Explorador</p>
        </div>

        <button
          className="profile__button-add"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <template className="grid__template">
        <div className="grid__card">
          <button className="grid__card-delete"></button>
          <img src="" alt="" className="grid__card-image" />
          <div className="grid__card-text">
            <h3 className="grid__card-title"></h3>
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
      </template>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
