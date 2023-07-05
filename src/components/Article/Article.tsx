import "./article.css";
// assets

// components
import LearnMore_btn from "../LearnMore-btn/LearnMore-btn";

export default function Article(props) {
  return (
    <>
      <article className="article flex justify-between">
        <div className="article__img ">
          <img src={props.img} alt="" width={props.width} />
        </div>
        <div className="article__description flex flex-col justify-evenly">
          <h1 className="article__description-title">{props.title}</h1>
          <hr />
          <p className="article__description-txt">{props.txt}</p>
          <LearnMore_btn txt={props.btn_text} />

          {/* <button>sb</button> */}
        </div>
      </article>
    </>
  );
}
