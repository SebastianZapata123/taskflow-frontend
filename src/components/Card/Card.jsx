import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        {props.taskname}
        {props.desc}
        {props.status}
      </div>
    </>
  );
}
