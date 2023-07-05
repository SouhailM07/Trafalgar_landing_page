import "./learnmore-btn.css";

export default function LearnMore_btn(props) {
  return (
    <>
      <button className="learnMore_btn grid place-items-center select-none">
        {props.txt}
      </button>
    </>
  );
}
