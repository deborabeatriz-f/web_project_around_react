export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup__container container-profile">
      <div className="popup__card">
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
        <button
          className="popup__button-close button-closeProfile"
          draggable="true"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
