
import CurrentDate from "../shared/CurrentDate";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-2/3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            <CurrentDate />
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="btn bg-green-700 text-white border-none rounded-xl mt-6 hover:bg-green-800"
          >
            সব পণ্যের দাম দেখুন
          </a>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="text-8xl md:text-9xl">🧺</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
