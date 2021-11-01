const data = {
  wind: "微風",
  isRain: false,
};

function Weather(props) {
  console.log(props);

  const { isRain, wind } = props;

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">
          今天{isRain ? "是下雨天" : "沒有下雨"}, {wind}
        </h1>
      </div>
    </div>
  );
}

// 需要配合 prop-types 工具.
Weather.propTypes = {
  wind: PropTypes.string,
  isRain: PropTypes.bool,
};

ReactDOM.render(<Weather {...data}></Weather>, document.querySelector("#app"));
