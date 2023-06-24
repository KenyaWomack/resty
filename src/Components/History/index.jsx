const History = (props) => {
  console.log(props.history);
  return (
    <>
      <ul>
        {props.history.map((event, index) => (
          <li key={index}>{event.url}</li>
        ))}
      </ul>
    </>
  );
};

export default History;

