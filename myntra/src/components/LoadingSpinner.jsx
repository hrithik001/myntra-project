const LoadingSpinner = () => {
  return (
    <>
      <div
        className="spinner-grow"
        style={{
          width: "3rem",
          height: "3rem",
          marginLeft: "50%",
          marginTop: "25%",
          marginBottom: "25%",
        }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </>
  );
};

export default LoadingSpinner;
