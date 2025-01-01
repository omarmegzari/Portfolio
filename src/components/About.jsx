import { profilepic } from "../assets";
import { styles } from "../styles";

//npm run dev
//http://localhost:5173/
const About = () => {
  return (
    <section className={`w-full min-h-screen mx-auto flex items-center justify-center pt-28 md:pt-0 lg:pt-0`}>
      <div
        className={`absolute mx-auto flex items-center flex-wrap gap-5 justify-center p-2`}
      >
        <div className={`flex items-start gap-5 max-w-3xl`}>
          {/* vertical line */}
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          {/* title & text */}
          <div className="max-w-3xl">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <br />
              <span className="text-[#915EFF]">Omar</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
               Third-year Software Engineering Student<br className="sm:block hidden" />
            </p>
            <p
              className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
            >
              I'm an aspiring Data and Software Engineer with a strong passion for big data,
              backend development, and cloud engineering.
              I enjoy coding, exploring data,
              and tackling new challenges as I build my skills and grow my expertise.
            </p>
          </div>
        </div>

        {/* pic */}
        <div className="flex items-center justify-center max-w-[15rem]">
          <img src={profilepic} className="rounded-full mx-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
