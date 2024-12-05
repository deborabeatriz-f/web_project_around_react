export default function EditPorfile() {
  return (
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
  );
}
