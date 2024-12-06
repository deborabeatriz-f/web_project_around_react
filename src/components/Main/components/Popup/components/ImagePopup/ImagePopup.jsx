export default function ImagePopup(props) {
  const { card } = props;

  return (
    <div className="popup__container popup__bigImage-container">
      <div className="popup__bigImage-card">
        <div className="popup__bigImage-cardContainer">
          <button className="popup__button-close popoup__buttonClose-bigImage"></button>
          <img className="popup__open-bigImage" src="" alt="" />
          <p className="popup__subtitle-bigImage"></p>
        </div>
      </div>
    </div>
  );
}
