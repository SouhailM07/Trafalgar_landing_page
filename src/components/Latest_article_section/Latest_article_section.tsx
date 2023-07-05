import "./latest_article_section.css";
// importing section component
import L_a_sections from "./L_a_sections/L_a_sections";
import LearnMore_btn from "../LearnMore-btn/LearnMore-btn";
//
import las_img1 from "../../assets/las_img1.jpg";
import las_img2 from "../../assets/las_img2.jpg";
import las_img3 from "../../assets/las_img3.jpg";

export default function Latest_article_section() {
  return (
    <>
      <article id="latest_article_section" className="mt-52">
        <h1 className="title text-center" id="latest__as_title">
          Check out our latest article
        </h1>
        <hr className="title_line" />
        <div
          id="latest__as-sections__container"
          className="flex justify-between flex-wrap "
        >
          <L_a_sections
            img={las_img1}
            title="Disease detection , check up in the laboratory"
            txt="In this case, the role of the health laboratory is very important to do a disease detection..."
          />
          <L_a_sections
            img={las_img2}
            title="Herbal medicines that are safe for consumption"
            txt="Herbal medicine is very widley used at this time because of its very good for your health..."
          />
          <L_a_sections
            img={las_img3}
            title="Natural care for healthy facial skin"
            txt="A healthy lifestyle should start from now and also for your skin health, There are some ..."
          />
        </div>
        <div className="flex justify-center mt-20">
          <LearnMore_btn txt="View all" />
        </div>
      </article>
    </>
  );
}
