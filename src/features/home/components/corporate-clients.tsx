import Slider from "react-slick";
import { Building2, CheckCircle2 } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const corporateClients = [
  { name: "MOTHERSON", tagline: "Global Manufacturing Leader" },
  { name: "HETTICH", tagline: "Innovation in Hardware Systems" },
  { name: "SSLGROUP", tagline: "Lighting & Electrical Solutions" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export const CorporateClients = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[var(--brand-red)]/3 via-[var(--brand-orange)]/2 to-white/95 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
            Our Corporate Clients
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Trusted By Industry Leaders
          </p>
        </div>
        
        <div className="corporate-clients-slider">
          <Slider {...sliderSettings}>
            {[...corporateClients, ...corporateClients].map((client, index) => (
              <div key={index} className="px-4">
                <div className="bg-gradient-to-br from-[var(--brand-gray-light)] to-white rounded-xl p-8 sm:p-10 border-2 border-gray-200 hover:border-[var(--brand-orange)]/50 transition-all hover:shadow-md group">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-4 group-hover:scale-105 transition-transform">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-2">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {client.tagline}
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                        <span>AI Training Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
