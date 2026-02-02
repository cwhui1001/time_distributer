import Image from "next/image";

interface WhyWeBetterProps {
  title?: string;
}

export default function WhyWeBetter({ title = "Here’s Why We’re Better" }: WhyWeBetterProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-9">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Affordable */}
            <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                    <Image src="/images/affordable.png" alt="Affordable" width={200} height={200} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable</h3>
                <p className="text-gray-600">Lowest price per Mbps</p>
            </div>

            {/* Fast */}
            <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                    <Image src="/images/fast.png" alt="Fast" width={200} height={200} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast</h3>
                <p className="text-gray-600">2Gbps - 'Nuff said</p>
            </div>

            {/* Stable */}
            <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                     <Image src="/images/stable.png" alt="Stable" width={200} height={200} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stable</h3>
                <p className="text-gray-600">Through ups and downs</p>
            </div>

            {/* Helpful */}
            <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                    <Image src="/images/helpful.png" alt="Helpful" width={200} height={200} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Helpful</h3>
                <p className="text-gray-600">Here for you 24/7</p>
            </div>
        </div>
      </div>
    </section>
  );
}
