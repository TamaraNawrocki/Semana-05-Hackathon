import Form from "./Form";
import Header from "./Header";

const AllTogether = () => {
  return (
    <div className="greet-container">
      <Header />
      <Form />
      <p className="question">Forgot Password?</p>
      <button className="button-login">login</button>
      <p className="create">Create Account</p>
    </div>
  );
};

export default AllTogether;
