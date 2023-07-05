import "./services.css";

export default function Services(props) {
  return (
    <>
      <div className="services grid  rounded-2xl">
        <img src={props.img} alt="image" />
        <h1 className="services__img">{props.title}</h1>
        <p className="services__txt">{props.txt}</p>
      </div>
    </>
  );
}
