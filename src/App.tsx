import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';

import HexagonAnimation from './components/HexagonAnimation';
import CursorEffect from './components/CursorEffect';
import { Icons } from './components/Icons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading ? (
        <HexagonAnimation setLoading={setLoading} />
      ) : (
        <>
          <div className="w-full bg-[#08192e] bg-grid-small-white/[0.4] dark:bg-grid-small-black">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#08192e] [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
            <CursorEffect />
            <div className="fixed bottom-0 left-10 z-10 text-slate-300">
              <div className="flex flex-col items-center relative">
                <a
                  href="https://github.com/kiervz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-3 hover:text-[#64FFDA] hover:-translate-y-2 md:hover:-translate-y-6 transition-all duration-300 will-change-transform"
                  aria-label="GitHub"
                >
                  <span className="hidden sm:block mb-2 text-sm [writing-mode:vertical-rl] rotate-180">
                    Github
                  </span>
                  <Icons.github className="w-5 h-5 fill-current" />
                </a>
                <div className="after:content-[''] md:after:block after:w-px md:after:h-[90px] after:mx-auto after:bg-slate-300"></div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[1600px] min-h-screen px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px] py-0">
              <div className="flex flex-col justify-center items-start min-h-screen h-screen mx-auto p-[100px_0] max-w-[1000px]">
                <Fade triggerOnce={true} delay={200} duration={500}>
                  <p className="mt-0 mr-0 mb-5 ml-1 text-[#64FFDA] font-medium font-playfair text-[clamp(14px,5vw,16px)]">
                    Hello, my name is
                  </p>
                </Fade>
                <Fade triggerOnce={true} delay={500} duration={500}>
                  <p className="text-4xl sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] text-slate-300 mb-5 font-bold leading-none">
                    Kiervey Maghanoy.
                  </p>
                </Fade>

                <Fade triggerOnce={true} delay={1100} duration={500}>
                  <TypeAnimation
                    sequence={[
                      'A dedicated Web Artisan.',
                      1500,
                      'I do back-end development.',
                      1500,
                      'I do front-end development.',
                      1500,
                    ]}
                    speed={40}
                    style={{
                      fontSize: 'clamp(36px, 7vw, 65px)',
                      color: '#8892b0',
                      lineHeight: '0.9',
                    }}
                    wrapper="span"
                    className="second-title"
                    repeat={Infinity}
                  />
                </Fade>

                <Fade triggerOnce={true} delay={1300} duration={500}>
                  <p className="text-base md:text-xl text-slate-400 mt-5 md:mt-10 max-w-[800px]">
                    I am a self-taught web developer with hands-on experience
                    building full-stack applications. Proficient in PHP Laravel
                    for back-end and React.js with TypeScript for front-end, I
                    build responsive interfaces, integrate APIs, and design
                    efficient databases to deliver reliable web solutions.
                  </p>
                </Fade>

                <Fade triggerOnce={true} delay={1500} duration={500}>
                  <a
                    href="https://readit.kierveymaghanoy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 text-[#64FFDA] font-medium hover:underline transition-all duration-300 group"
                  >
                    View Featured Project: ReadIt App
                    <Icons.externalLink className="h-4 w-4 -mt-px transform transition-transform duration-300 group-hover:-translate-y-1" />
                  </a>
                </Fade>
              </div>
            </div>
            <div className="fixed bottom-0 left-auto right-10 z-10 text-slate-300">
              <div className="flex flex-col items-center relative ">
                <a
                  href="mailto:kierveytoledomaghanoy@gmail.com"
                  className="my-5 py-2.5 text-sm leading-tight md:[writing-mode:vertical-rl] tracking-wider hover:text-[#64FFDA] hover:-translate-y-2 md:hover:-translate-y-6 transition-all duration-300 will-change-transform"
                >
                  kierveytoledomaghanoy@gmail.com
                </a>
                <div className="after:content-[''] md:after:block after:w-px md:after:h-[90px] after:mx-auto after:bg-slate-300 "></div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-36 md:w-40 h-5 md:h-8 bg-slate-500 flex justify-center items-center">
              <p className="text-xs md:text-sm text-slate-300">
                Under Construction
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
