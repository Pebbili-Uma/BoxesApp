const Box = (props) => {
  //  Write your code here.
  const { name, content } = props;
  return (
    <div className={name}>
      <p className="box-description"> {content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="heading"> Boxes </h1>
    <div className="boxes-container">
      <Box name="smallBox" content="Small" />
      <Box name="mediumBox" content="Medium" />
      <Box name="largeBox" content="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
