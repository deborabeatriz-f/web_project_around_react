export default function EditAvatar() {
  return (
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
  );
}
