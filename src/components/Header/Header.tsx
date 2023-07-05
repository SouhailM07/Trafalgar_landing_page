import "./header.css";
import bg from "./../../assets/background.png";

export default function Header() {
  return (
    <>
      <header id="header" className="flex  justify-between">
        <div id="header__description" className="flex flex-col justify-between">
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare ,
            accessible on mobile and online for everyone
          </p>
          <button id="header__description-btn" className="rounded-full">
            Consult today
          </button>
        </div>
        <div id="header__background">
          <img src={bg} alt="" />
        </div>
      </header>
    </>
  );
}
