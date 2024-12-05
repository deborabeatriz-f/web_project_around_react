import logo from "../../images/logo_around.png";
import avatar from "../../images/jacques_cousteau.png";

export default function Header() {
  return (
    <header className="header page__container">
      <nav className="nav">
        <img src={logo} alt="Logo Around The U.S." className="nav__image" />
      </nav>

      <section className="profile">
        <div className="profile__card-image">
          <img src={avatar} alt="Jacques Cousteau" className="profile__image" />
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
  );
}
