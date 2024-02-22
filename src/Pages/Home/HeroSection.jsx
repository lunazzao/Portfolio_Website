import SocialIcons from "./SocialIcons";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            Hello/你好/こんにちは, I'm Luna &#127769;
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I consider myself to be a future full-stack software engineer with
            an eye for design.
            <br /> Let's connect!
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1yTjjj6M2fs8Yp0HnEBHIn0CAGt-5QuPU?usp=drive_link",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Get My Resume
        </button>
        <SocialIcons />
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
