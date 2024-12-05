export default function NewCard() {
  return (
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
  );
}
