import {
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Clock,
  Rocket,
} from "lucide-react";

// images
import demo1 from "../assets/articles/demo1.jpeg";
import demo2 from "../assets/articles/demo2.jpeg";
import demo3 from "../assets/articles/demo3.png";
import demo4 from "../assets/articles/demo4.png";
import demo5 from "../assets/articles/demo5.jpeg";
import demo6 from "../assets/articles/demo6.jpeg";

const caseStudies = [
  {
    image: demo1,
    tags: ["QSR", "Revenue Growth", "Staff Training"],
    title: "Scaling Excellence: 40% Revenue Growth for Premium QSR Chain",
    meta: ["QSR", "6–10 Outlets"],
    description:
      "Spice Route Express, a premium QSR chain with 8 outlets across Mumbai and Pune, was struggling with inconsistent food quality, high staff turnover, and declining customer satisfaction.",
    stats: [
      { icon: TrendingUp, value: "+40%", label: "Revenue Growth" },
      { icon: Users, value: "+55%", label: "Staff Retention" },
    ],
  },
  {
    image: demo2,
    tags: ["Fine Dining", "Quality Control", "Service Excellence"],
    title: "Fine Dining Revival: Michelin-Star Quality Systems Implementation",
    meta: ["Fine Dining", "2–5 Outlets"],
    description:
      "The Heritage Table, a luxury fine dining brand in Delhi NCR, faced critical quality control issues despite having talented chefs and premium positioning.",
    stats: [
      { icon: Star, value: "+85%", label: "Quality Score" },
      { icon: Users, value: "+65%", label: "Repeat Customers" },
    ],
  },
  {
    image: demo3,
    tags: ["Cloud Kitchen", "Operational Efficiency", "Process Optimization"],
    title: "Cloud Kitchen Optimization: 3× Order Capacity Without Extra Staff",
    meta: ["Cloud Kitchen", "2–5 Outlets"],
    description:
      "FreshBowl Kitchen was hitting peak-hour capacity limits with fulfillment times exceeding 45 minutes, directly impacting repeat orders.",
    stats: [
      { icon: BarChart3, value: "+200%", label: "Order Capacity" },
      { icon: Clock, value: "-60%", label: "Fulfillment Time" },
    ],
  },
  {
    image: demo4,
    tags: ["Cafe", "Franchise Operations", "Brand Consistency"],
    title: "Cafe Chain Transformation: Consistency Across 12 Locations",
    meta: ["Cafe", "10+ Outlets"],
    description:
      "Brew & Bites struggled with wildly varying customer experience as each outlet operated independently across tier-1 cities.",
    stats: [
      { icon: Star, value: "+90%", label: "Brand Consistency" },
      { icon: Clock, value: "-70%", label: "Training Time" },
    ],
  },
  {
    image: demo5,
    tags: ["Fine Dining", "Revenue Recovery", "Staff Training"],
    title:
      "Multi-Cuisine Restaurant: Revenue Recovery Through Staff Excellence",
    meta: ["Fine Dining", "2–5 Outlets"],
    description:
      "Flavors of India faced a 35% revenue drop over six months caused by service inconsistency and low team morale.",
    stats: [
      { icon: TrendingUp, value: "+52%", label: "Revenue Recovery" },
      { icon: Users, value: "-80%", label: "Staff Turnover" },
    ],
  },
  {
    image: demo6,
    tags: ["QSR", "Expansion Strategy", "Operational Efficiency"],
    title: "QSR Expansion: Scaling from 5 to 15 Outlets with Zero Quality Loss",
    meta: ["QSR", "10+ Outlets"],
    description:
      "Burger Bliss aimed to triple outlet count in 12 months but lacked operational systems to scale without compromising quality.",
    stats: [
      { icon: BarChart3, value: "+200%", label: "Outlet Growth" },
      { icon: Star, value: "96%", label: "Quality Consistency" },
    ],
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-[#f7f4ee] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-[#c59a2a] font-semibold mb-4">
            PROVEN RESULTS
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2a2a2a]">
            Transformation Stories That{" "}
            <span className="text-[#c59a2a]">Speak for Themselves</span>
          </h2>
          <p className="mt-6 text-[#6b6b6b] text-lg">
            Real restaurants. Real challenges. Real results. Explore how we’ve
            helped hospitality businesses across India achieve operational
            excellence and measurable growth through our systematic “Luxury
            Machine” approach.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 text-xs text-[#c59a2a] font-medium mb-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <h3 className="font-playfair text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <div className="text-sm text-[#8b8b8b] flex gap-4 mb-4">
                  {item.meta.map((m, idx) => (
                    <span key={idx}>{m}</span>
                  ))}
                </div>

                <p className="text-[#6b6b6b] text-sm mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-6 border-t pt-6 mb-6">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <stat.icon className="h-5 w-5 text-[#c59a2a]" />
                      <div>
                        <p className="font-semibold">{stat.value}</p>
                        <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#2a2a2a] hover:bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">
                  View Full Case Study <ArrowRight className="h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto mt-32">
          <Rocket className="h-10 w-10 text-[#c59a2a] mx-auto mb-6" />
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-[#6b6b6b] mb-10">
            Join the growing list of hospitality businesses that have
            transformed their operations with Movish. Let’s discuss how we can
            help you achieve similar results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#c59a2a] hover:bg-[#b38b24] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 justify-center">
              Schedule Strategic Discussion <ArrowRight className="h-4" />
            </button>
            <button className="border border-[#2a2a2a] px-8 py-4 rounded-xl font-medium flex items-center gap-2 justify-center hover:bg-[#2a2a2a] hover:text-white transition">
              Explore Our Services ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
