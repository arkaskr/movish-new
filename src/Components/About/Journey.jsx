const Journey = () => {
  return (
    <section className="bg-[#f7f4ee] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#120f07d4] ">
            The Journey
          </h2>
          <p className="mt-4 font-sans text-md text-gray-600">
            From hospitality heritage to operational excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2" />

          {/* Item 1 */}
          <div className="relative mb-24 flex items-center">
            <div className="w-1/2 pr-12 text-right">
              <div className="bg-white rounded-2xl shadow-sm p-10 inline-block text-right max-w-lg">
                <h3 className="text-2xl font-playfair font-bold text-gray-900">
                  Foundation in Luxury Hospitality
                </h3>
                <p className="mt-2 font-sans font-medium text-[#9c7c4a]">
                  Institute of Hotel Management, Kolkata
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Graduated with honors from India’s premier hospitality
                  institution. Specialized in luxury service standards and
                  operational excellence. Developed deep understanding of guest
                  experience architecture.
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
          </div>

          {/* Item 2 */}
          <div className="relative mb-24 flex items-center">
            <div className="w-1/2 pl-12 ml-auto">
              <div className="bg-white rounded-2xl shadow-sm p-10 max-w-lg">
                <h3 className="text-2xl font-playfair font-bold text-gray-900">
                  Taj Pedigree From Management Trainee to Head of Food &
                  Beverage
                </h3>
                <p className="mt-2 font-sans font-medium text-[#9c7c4a]">
                  Taj Hotels, Mumbai, Delhi, Bangalore, Bhopal, Gwalior, Jim
                  Corbett
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Led F&B operations across multiple luxury properties. Managed
                  teams of 50+ staff. Implemented systematic processes that
                  improved efficiency by 40% while maintaining five-star service
                  standards.
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
          </div>

          {/* Item 3 */}
          <div className="relative mb-24 flex items-center">
            <div className="w-1/2 pr-12 text-right">
              <div className="bg-white rounded-2xl shadow-sm p-10 inline-block text-right max-w-lg">
                <h3 className="text-2xl font-playfair font-bold text-gray-900">
                  Business Strategy & Systems
                </h3>
                <p className="mt-2 font-sans font-medium text-[#9c7c4a]">
                  Masters’ Union School of Business
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Pursued advanced business education focusing on operations
                  strategy and scaling frameworks. Developed the Luxury Machine
                  methodology combining hospitality excellence with business
                  systems.
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
          </div>

          {/* Item 4 */}
          <div className="relative flex items-center">
            <div className="w-1/2 pl-12 ml-auto">
              <div className="bg-white rounded-2xl shadow-sm p-10 max-w-lg">
                <h3 className="text-2xl font-playfair font-bold text-gray-900">
                  Building Movish Hospitality
                </h3>
                <p className="mt-2 font-sans font-medium text-[#9c7c4a]">
                  Founder & Chief Operations Architect
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Founded Movish to bring systematic operational excellence to
                  scaling restaurants. Transforming establishments across
                  India. Created proprietary frameworks for staff training, SOP
                  development, and performance optimization.
                </p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
