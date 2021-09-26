import Form from "./Form";
import Header from "./Header";

const AllTogether = () => {
  return (
    <div className="greet-container">
      <Header />
      <Form />
      <p className="question">Forgot password?</p>
      <button className="button-login">login</button>
      <p className="create">Create Acount</p>
    </div>
  );
};

export default AllTogether;
