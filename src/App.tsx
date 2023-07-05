// Tailwind
import "./style/input.css";
// Components
import {
  Navbar,
  Header,
  Main__title,
  Services,
  LearnMore_btn,
  Article,
  Rating_section,
  Latest_article_section,
  Footer,
} from "./components";
// App css
import "./App.css";
// assets
//
import img1 from "./assets/Frame.svg";
import img2 from "./assets/Frame2.svg";
import img3 from "./assets/Frame3.svg";
import img4 from "./assets/Frame4.svg";
import img5 from "./assets/Frame5.svg";
import img6 from "./assets/Frame6.svg";
//
import article_img_1 from "./assets/article_img-1.jpg";
import article_img_2 from "./assets/article_img-2.jpg";
import profile1 from "./assets/profile1.png";
// las img

function App() {
  return (
    <div>
      <div className="m-auto" id="page__container">
        <Navbar />
        <Header />
        <main className="my-20">
          <Main__title />
          <div
            id="services__container"
            className="flex justify-evenly flex-wrap my-14"
          >
            <Services
              img={img1}
              title="Search doctor"
              txt="Choose your doctor from thousands of specialist general and trusted
          hospitals"
            />
            <Services
              img={img2}
              title="Online pharmacy"
              txt="Buy  your medicines with our mobile application with a simple delivery system"
            />
            <Services
              img={img3}
              title="Consultation"
              txt="Free consultation with our trusted doctors and get the best recomendations"
            />
            <Services
              img={img4}
              title="Details info"
              txt="Free consultation with our trusted doctors and get the best recomendations"
            />
            <Services
              img={img5}
              title="Emergency care"
              txt="You can get 24/7 urgent care for yourself or your children and your
            lovely family"
            />
            <Services
              img={img6}
              title="Tracking"
              txt="Track and save your medical history and health data "
            />
          </div>
          <div className="flex justify-center">
            <LearnMore_btn txt="Learn more" />
          </div>
          <Article
            img={article_img_1}
            width={600}
            title="Leading healthcare providers"
            txt="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver"
            btn_text="Learn more"
          />
          <Article
            img={article_img_2}
            width={640}
            title="Download our mobile apps"
            txt="Our dedicated patient engagement app and 
          web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely"
            btn_text="Download"
          />
          <Rating_section
            name="edward Newgate"
            rank="founder circle"
            comment="“Our dedicated patient engagement app and 
          web portal allow you to access information instantaneously (no tedeous form, long calls, 
          or administrative hassle) and securely”"
            img={profile1}
          />
          <Latest_article_section />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
