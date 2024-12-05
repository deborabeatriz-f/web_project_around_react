import heart from "../../images/heart_icon.png";
import heartClicked from "../../images/heart-clicked.png";

export default function Main() {
  return (
    <main className="grid__content page__container">
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
    </main>
  );
}
