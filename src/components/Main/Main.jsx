import avatar from "../../images/jacques_cousteau.png";
import { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/Api.js";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="page__container">
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

      <section className="grid">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
