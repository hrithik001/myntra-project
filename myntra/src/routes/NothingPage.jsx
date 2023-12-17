import { Link } from "react-router-dom";

const NothingPage = ({ contextText, referHere }) => {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/images/failedcase.webp"
          alt=""
          width="10%"
          height="auto"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">
          Hey, it feels so light!
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            There is nothing in your bag. Let's add some items
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to={referHere}>
              <button type="button" style={myStyle}>
                {contextText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const myStyle = {
  padding: "10px 20px",
  width: "auto",
  textTransform: "uppercase",
  background: "#fff",
  color: "#ff3f6c",
  fontWeight: "700",
  cursor: "pointer",
  border: "1px solid #ff3f6c",
  display: "inline-block",
};

export default NothingPage;
