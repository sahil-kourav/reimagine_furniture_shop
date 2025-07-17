import React from 'react';
import CardSwap, { Card } from '../functionalities/CardSwap';

const CardSwapSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-[#1f1f27] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Section */}
        <div className="space-y-5 animate-fadeInLeft">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-ubuntu">
            Card stacks have never<br /> looked so good
          </h2>
          <p className="text-gray-400 text-lg">Just look at it go!</p>
        </div>

        {/* Right Card Stack Animation */}
        <div className="relative h-[500px] w-full max-w-md mx-auto animate-fadeInRight">
          <div className="absolute inset-0">
            <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={true}
            >
              <Card>
                <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                  <div className="p-4">
                    <p className="text-sm text-white font-semibold">⚙️ Customizable</p>
                  </div>
                  <img
                    src="https://intagliahome.com/ih-content/uploads/2017/03/Intaglia-Home_February_5-Qualities-of-a-Reliable-Furniture-Store_Image-1-1080x675.jpg"
                    alt="Customizable"
                    className="w-full h-[300px] object-fit"
                  />
                </div>
              </Card>

              <Card>
                <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                  <img
                    src="https://cdn.jsdelivr.https://videos.openai.com/vg-assets/assets%2Ftask_01k0cw2b4cf88bspf1wbzfwbad%2F1752778803_img_1.webp?st=2025-07-17T17%3A06%3A23Z&se=2025-07-23T18%3A06%3A23Z&sks=b&skt=2025-07-17T17%3A06%3A23Z&ske=2025-07-23T18%3A06%3A23Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ydE%2Ft66FVh2ONPPvyTTgq5YcfQ0F%2BGKIN5JBc8y6IRY%3D&az=oaivgprodscus/gh/yourcdn/card2.png"
                    alt="Smooth"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-white font-semibold">🎯 Smooth</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                  <img
                    src="https://cdn.jsdelivr.net/gh/yourcdn/card3.png"
                    alt="Reliable"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-white font-semibold">🛡️ Reliable</p>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSwapSection;
