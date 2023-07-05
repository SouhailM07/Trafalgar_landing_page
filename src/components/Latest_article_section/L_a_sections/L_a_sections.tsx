import "./l_a_sections.css";

export default function L_a_sections(props) {
  return (
    <>
      <section className="L-a_sections-container  border-2 border-black">
        <img className="L_a_sections-img" src={props.img} alt="" />
        <div className="px-5 flex flex-col justify-around h-40">
          <h2 className="L_a_sections-title">{props.title}</h2>
          <p className="L_a_sections-text">{props.txt}</p>
          <a href={props.readMore} className="text-blue-500">
            Read more -&#62;
          </a>
        </div>
      </section>
    </>
  );
}
