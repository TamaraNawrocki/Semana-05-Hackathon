const Form = () => {
  return (
    <div>
      <form className="form">
        <div className="form-element">
          <label htmlFor="email">username</label>
          <input type="email" placeholder="andrea@gmail.com" />
        </div>

        <div className="form-element for-password">
          <label htmlFor="password">password</label>

          <div className="to-box">
            <input type="password" placeholder="***************" />
            <button className="show-button">show</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
