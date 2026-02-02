import Image from "next/image";

interface CoverageSectionProps {
    onOpenModal: () => void;
}

export default function CoverageSection({ onOpenModal }: CoverageSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Card: Device Coverage */}
                    <div className="bg-blue-300 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
                        <div className="w-full max-w-sm ">
                            <Image 
                                src="/images/home-devices-WiFi-6.webp" 
                                alt="WiFi 6 Devices" 
                                width={500}  
                                height={400} 
                                className="w-[390px] h-[290px] object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">When One Device Does Not Cover It</h3>
                        <p className="text-gray-600 mb-8 max-w-md">From seamless mesh Wi-Fi to speed demon routers, you can create the home network of your dreams.</p>
                        <a 
                            href="/application" 
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            SUBSCRIBE
                        </a>
                    </div>

                    {/* Right Card: Check Coverage */}
                    <div className="bg-purple-300 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center justify-center">
                        <div className="w-[200px] h-[200px] mb-8 relative">
                                <Image 
                                src="/images/icon-check-coverage.png" 
                                alt="Check Coverage Icon" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Check Coverage Time<br/>Have we got you covered?</h3>
                        <p className="text-gray-600 mb-8 max-w-md">Fill up your building name/ street name/ postal code for coverage check.<br/>Time Home Fibre Coverage</p>
                        <button 
                            onClick={onOpenModal}
                            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors"
                        >
                            CHECK NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
