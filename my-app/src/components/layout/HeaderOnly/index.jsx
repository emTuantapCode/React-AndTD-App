import ThisHeader from "../Components/Header";

function HeaderOnly({ children }) {
  return (
    <>
      <ThisHeader />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default HeaderOnly;
