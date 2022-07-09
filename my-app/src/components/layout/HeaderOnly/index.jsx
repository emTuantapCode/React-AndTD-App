import Header from "../Components/Header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default HeaderOnly;
