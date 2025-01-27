import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <p>{props.taskname}</p>
        <p>{props.desc}</p>
        <p>{props.status}</p>
      </div>
    </>
  );
}
