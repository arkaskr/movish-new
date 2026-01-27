import React from "react";
import a1 from "../../assets/articles/a1.jpeg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Article = () => {
  return (
    <section className="bg-[#f7f4ee] py-8 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top label */}
        <div className="flex items-center justify-center gap-2 text-sm text-green-700 mb-4">
          <span className="text-lg">🏆</span>
          <span className="font-medium">Proven Transformations</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center text-[#2b2b2b]">
          Real Results. Real Restaurants.
        </h2>

        {/* Subtitle */}
        <p className="text-center text-[#555] mt-4 max-w-2xl mx-auto">
          From struggling operations to scalable success stories. See how we've
          transformed hospitality businesses across India.
        </p>

        {/* Card */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm overflow-hidden grid md:grid-cols-2">
          {/* Image */}
          <div className="h-full">
            <img
              src={a1}
              alt="Restaurant Case Study"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#2b2b2b]">
                Investor Confidence: Operational Due Diligence for Franchise
                Expansion
              </h3>

              {/* Challenge */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#b68c2d]">
                  The Challenge
                </p>
                <p className="text-[#555] mt-2 leading-relaxed">
                  Investment firm needed comprehensive operational assessment
                  before committing ₹5Cr to multi-location franchise expansion.
                  Required systematic evaluation of scalability potential.
                </p>
              </div>

              {/* Result */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-green-700">
                  The Result
                </p>
                <p className="text-[#555] mt-2 leading-relaxed">
                  Conducted detailed operational audit, identified efficiency
                  gaps, and created scalability roadmap. Provided investor
                  confidence through systematic documentation, leading to
                  successful ₹5Cr investment and 4x location growth.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 border-t pt-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-lg font-semibold text-[#2b2b2b]">₹5 Cr</p>
                <p className="text-sm text-[#777]">Investment Secured</p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[#2b2b2b]">12 units</p>
                <p className="text-sm text-[#777]">Locations Planned</p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[#2b2b2b]">28% CAGR</p>
                <p className="text-sm text-[#777]">ROI Projection</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <button className="text-[#b68c2d] font-medium hover:underline flex items-center gap-2">
                <Link to="/case-studies">Full Case Study</Link> <ArrowRight size={16} /> 
              </button>

              {/* Slider dots */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ddd] rounded-full" />
                <span className="w-6 h-2 bg-[#b68c2d] rounded-full" />
                <span className="w-2 h-2 bg-[#ddd] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
