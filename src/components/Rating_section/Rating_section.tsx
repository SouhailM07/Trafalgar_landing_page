// css
import "./rating_section.css";
// assets

export default function Rating_section(props) {
  return (
    <>
      <div className="Rating-section grid place-items-center">
        <h1 className="Rating-section__title col-span-2">
          What our customer are saying
          <hr />
        </h1>
        <div className="Rating-section__description col-span-2 grid grid-cols-2">
          <div className="Rating-section__description__profile flex">
            <img src={props.img} alt="image" />
            <div className="profile__container border-2  border-black flex flex-col justify-center">
              <p className="profile__name">{props.name}</p>
              <p className="profile__rank">{props.rank}</p>
            </div>
          </div>
          <p className="Rating-section__description__comment">
            {props.comment}
          </p>
        </div>
      </div>
    </>
  );
}
