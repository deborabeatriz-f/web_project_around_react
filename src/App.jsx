import logo from "./images/logo_around.png";
import avatar from "./images/jacques_cousteau.png";

function App() {
  return (
    <>
      <div className="page">
        <header className="header page__container">
          <nav className="nav">
            <img src={logo} alt="Logo Around The U.S." className="nav__image" />
          </nav>

          <section className="profile">
            <div className="profile__card-image">
              <img
                src={avatar}
                alt="Jacques Cousteau"
                className="profile__image"
              />
              <button className="profile__btn-avatar"></button>
            </div>
            <div className="profile__card">
              <h2 className="profile__title">Jacques Cousteau</h2>
              <button className="profile__button-edit"></button>
              <p className="profile__subtitle">Explorador</p>
            </div>

            <button className="profile__button-add"></button>
          </section>
        </header>

        <main className="grid__content page__container">
          <template className="grid__template">
            <div className="grid__card">
              <button className="grid__card-delete"></button>
              <img src="" alt="" className="grid__card-image" />
              <div className="grid__card-text">
                <h3 className="grid__card-title"></h3>
                <img
                  src="<%=require('./images/heart_icon.png')%>"
                  alt="Like Button"
                  className="grid__button-heart button-heart-unliked"
                />
                <img
                  src="<%=require('./images/heart-clicked.png')%>"
                  alt="Like Button"
                  className="grid__button-heart button-heart-liked"
                />
              </div>
            </div>
          </template>
        </main>

        <footer className="footer page__container">
          <p>&copy; 2024 Around The U.S.</p>
        </footer>

        {/* <!-- POPUP EDIT PROFILE --> */}
        {/* <div className="popup__container container-profile">
        <div className="popup__card">
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__input input-profile" noValidate>
            <div className="input__wrap">
              <input
                className="input__text input__text-name"
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                minLength="2"
                maxLength="40"
                required
              />
              <p className="input__errorMessage"></p>
            </div>

            <div className="input__wrap">
              <input
                className="input__text input__text-job"
                id="job"
                name="about"
                type="text"
                placeholder="Sobre mim"
                minLength="2"
                maxLength="200"
                required
              />
              <p className="input__errorMessage"></p>
            </div>
            <button
              type="submit"
              className="input__submit input__submit-save"
              disabled
            >
              Salvar
            </button>
          </form>
          <button
            className="popup__button-close button-closeProfile"
            draggable="true"
          ></button>
        </div>
      </div> */}
        {/* <!--  -->
      <!-- POPUP ADD IMAGE --> */}
        {/* <div className="popup__container container-image">
        <div className="popup__card">
          <h3 className="popup__title">Novo local</h3>
          <form className="popup__input input-image" noValidate>
            <div className="input__wrap">
              <input
                className="input__text input__text-title"
                id="title"
                name="name"
                type="text"
                placeholder="Título"
                minLength="2"
                maxLength=" 30"
                required
              />
              <p className="input__errorMessage"></p>
            </div>
            <div className="input__wrap">
              <input
                className="input__text input__text-image"
                id="url"
                name="link"
                type="url"
                placeholder="Link de imagem"
                required
              />
              <p className="input__errorMessage"></p>
            </div>
            <button
              type="submit"
              className="input__submit input__submit-add"
              disabled
            >
              Criar
            </button>
          </form>
          <button
            className="popup__button-close button-closeImage"
            draggable="true"
          ></button>
        </div>
      </div> */}
        {/* <!--  -->
      <!-- POPUP IMAGE --> */}
        {/* <div className="popup__container popup__bigImage-container">
        <div className="popup__bigImage-card">
          <div className="popup__bigImage-cardContainer">
            <button
              className="popup__button-close popoup__buttonClose-bigImage"
            ></button>
            <img className="popup__open-bigImage" src="" alt="" />
            <p className="popup__subtitle-bigImage"></p>
          </div>
        </div>
      </div> */}
        {/* <!--  -->
      <!-- POPUP DELETE CARD --> */}
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
        {/* <!--  -->
      <!-- POPUP EDIT AVATAR --> */}
        {/* <div className="popup__container popup__container-avatar">
        <div className="popup__card">
          <h3 className="popup__title">Alterar a foto de perfil</h3>
          <form className="popup__input input-avatar" noValidate>
            <div className="input__wrap">
              <input
                className="input__text input__text-avatar"
                id="url"
                name="avatar"
                type="url"
                placeholder="Link de imagem"
                required
              />
              <p className="input__errorMessage"></p>
            </div>
            <button
              type="submit"
              className="input__submit input__submit-avatar"
              disabled
            >
              Salvar
            </button>
          </form>
          <button
            className="popup__button-close button-closeAvatar"
            draggable="true"
          ></button>
        </div>
      </div> */}
        {/* <!--  --> */}
      </div>
    </>
  );
}

export default App;
