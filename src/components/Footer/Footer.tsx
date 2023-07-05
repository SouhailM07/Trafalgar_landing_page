import "./footer.css";
export default function Footer() {
  let company_arr: string[] = [
      "About",
      "Testimonials",
      "Find a doctor",
      "Apps",
    ],
    region_arr: string[] = ["Indonesia", "Singapore", "Hongkong", "Canada"],
    help_arr: string[] = [
      "Help center",
      "Contact support ",
      "Instructions",
      "How it works",
    ];
  return (
    <>
      <footer className="flex justify-evenly items-center">
        <div id="footer__description">
          <h1 className="mb-3 flex items-center">
            <div className="h-8 w-8 rounded-full text-blue-400 bg-white grid place-items-center mr-3">
              T
            </div>
            <span className="text-white">Trafalgar</span>
          </h1>
          <p id="footer__description-text" className="text-white mb-5">
            Trafalgar provides progressive , and affordable healthcare ,
            accessible on mobile and online for everyone
          </p>
          <p id="footer__description-copyright" className="text-white">
            &#169;Trafalgar PTY LTD 2020. ALL rights reserved
          </p>
        </div>
        {/*  */}
        <div id="footer__links" className="flex justify-between">
          <div>
            <h1>Company</h1>
            <ul>
              {company_arr.map((e, i) => {
                return (
                  <li key={i}>
                    <a href={e}>{e}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*  */}
          <div>
            <h1>Region</h1>
            <ul>
              {region_arr.map((e, i) => {
                return (
                  <li key={i}>
                    <a href={e}>{e}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*  */}
          <div>
            <h1>Help</h1>
            <ul>
              {help_arr.map((e, i) => {
                return (
                  <li key={i}>
                    <a href={e}>{e}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
