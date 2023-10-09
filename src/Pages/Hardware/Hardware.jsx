import Navbar from "../Navbar/Navbar";

const Hardware = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="lg:px-16 px-5">
          {/* monitor */}
          <div className="md:flex  py-10 gap-10">
            {/* img */}
            <div className="w-fit">
              <img src="/images/monitor.jpg" alt="" />
            </div>
            {/* text */}
            <div className="flex items-center w-fit">
              <p className="text-white md:mt-0 mt-4 font-semibold">
                Gaming monitors deliver stunning visuals with high-resolution
                displays, vibrant colors, and sharp contrast ratios. Immerse
                yourself in lifelike graphics that bring your games to
                life.Enjoy smooth and fluid gameplay with high refresh rates,
                typically ranging from 60Hz to 360Hz. Higher refresh rates
                reduce motion blur and provide a competitive edge in fast-paced
                games.
              </p>
            </div>
          </div>
          {/* graphics card */}
          <div>
            <div className="md:flex items-center  py-10 gap-10">
              {/* text */}
              <div
                className="flex items-center w-fit
          ">
                <p className="text-white md:mt-0 mt-4 font-semibold">
                  Elevate your gaming experience to new heights with a
                  high-performance gaming graphics card that delivers stunning
                  visuals and smooth gameplay.Experience lifelike,
                  ultra-realistic graphics with the latest graphics card
                  technology, featuring advanced GPUs (Graphics Processing
                  Units) designed for gaming.Dive into the future of gaming with
                  ray tracing, a technology that simulates real-world lighting
                  and reflections for breathtaking visual realism.
                </p>
              </div>
              {/* img */}
              <div>
                <img
                  className="w-full mt-4"
                  src="/images/graphicsCard.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* pc case */}
          <div className="md:flex py-20 gap-10">
            {/* img */}
            <div className="w-fit ">
              <img src="/images/pcCase.jpg" alt="" />
            </div>
            {/* text */}
            <div className="flex items-center w-fit">
              <p className="text-white md:mt-0 mt-4 font-semibold">
                Elevate your gaming setup with a gaming PC case that not only
                protects your components but also makes a bold statement. With
                striking designs and customizable RGB lighting, your PC will be
                the envy of your gaming friends.Keep your gaming rig running at
                peak performance with optimal airflow and advanced cooling
                solutions. Gaming PC cases often feature multiple fan mounts,
                liquid cooling support, and well-ventilated designs to prevent
                overheating during intense gaming sessions.Gaming PC cases are
                spacious enough to accommodate powerful graphics cards, large
                cooling solutions, and multiple hard drives or SSDs, ensuring
                you can build a high-end gaming machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
