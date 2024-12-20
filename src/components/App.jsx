import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect } from "react";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

{
  /* <!-- POPUP DELETE CARD --> */
}
{
  /* <div className="popup__container popup__container-deleteCard">
        <div className="popup__card">
          <h3 className="popup__title">Tem certeza?</h3>
          <form className="popup__input input-deleteCard" noValidate>
            <button type="submit" className="input__submit input__submit-delete">
              Sim
            </button>
          </form>
          <button
            className="popup__button-close button-closeDelete"
            draggable="true"
          ></button>
        </div>
      </div> */
}
