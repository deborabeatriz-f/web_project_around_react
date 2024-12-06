import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/* <!-- POPUP DELETE CARD --> */}
        {/* <div className="popup__container popup__container-deleteCard">
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
      </div> */}
      </div>
    </>
  );
}

export default App;
