import Image from "next/image";

export default function SupportSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Reach Us Anywhere, Anytime</h2>
                <p className="text-gray-600 text-lg mb-12">
                We’ve got everything you need to manage your account, take charge of your connection and more, all at your fingertips.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center p-6">
                    <div className="mb-6">
                        <Image 
                        src="/images/technical-support.png" 
                        alt="Technical Support" 
                        width={160} 
                        height={160}
                        className="object-contain"
                        />
                    </div>
                    <a href="tel:1800181818" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                        Technical Support
                    </a>
                    </div>
                    <div className="flex flex-col items-center p-6">
                    <div className="mb-6">
                        <Image 
                        src="/images/enquiry.png" 
                        alt="Sign Up Enquiries" 
                        width={160} 
                        height={160}
                        className="object-contain"
                        />
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=601133038836&text=Hello%20TIME%20InternetI%20would%20like%20to%20know%20if%20my%20area%20is%20under%20TIME%20coverage%3FFull%20Address%20%3A%20Building%20Name%3A" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                        Sign Up Enquiries
                    </a>
                    </div>
                    <div className="flex flex-col items-center p-6">
                    <div className="mb-6">
                        <Image 
                        src="/images/pay.png" 
                        alt="Pay Now" 
                        width={160} 
                        height={160}
                        className="object-contain"
                        />
                    </div>
                        <a href="https://quickpay.time.com.my/web/account" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                        Pay Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
