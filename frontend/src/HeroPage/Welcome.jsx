import { ChevronDown } from 'lucide-react';
import bg from './assets/car.jpg';
import img1 from './assets/Rectangle 6.jpg';
import img2 from './assets/Rectangle 6 (1).jpg';
import img3 from './assets/Rectangle 6.jpg';
import footer from './assets/Screenshot 2024-10-21 094018.jpg';

export default function Welcome() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh' }}>   
                <div className="flex justify-between mx-32 py-10 text-white">
                    <h1 className="text-6xl font-semibold">Logo</h1>
                    <div className="flex gap-6">
                        <button className="border-4 rounded-md w-24 font-semibold">Login</button>
                        <button className="border-4 rounded-md w-24 font-semibold">Sign Up</button>
                    </div>
                </div>

                <div className="mt-60 mx-32 grid grid-cols-3 gap-10 text-white">
                    <div>
                        <h1 className="text-5xl">Welcome to,<br />
                        Name</h1>
                        <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div></div>
                    <button className="w-32 h-12 bg-orange-400 rounded-md italic text-white font-semibold self-end justify-self-end">Explore</button>
                </div>

                <ChevronDown className="w-6 h-6 mx-auto mt-32 text-white" />
            </div>

            <div className='flex-col'>
                <div className="card flex justify-between rounded-md border shadow-xl mx-32 mt-20 hover:scale-105 transition cursor-default">
                    <div className='p-10'>
                        <h1 className='text-5xl'>How to,</h1>
                        <p className='text-lg mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <img src={img1} alt="placeholder" />
                </div>

                <div className="card flex justify-between rounded-md border shadow-xl mx-32 mt-20 hover:scale-105 transition cursor-default">
                    <div className='p-10'>
                        <h1 className='text-5xl'>Search Cars</h1>
                        <p className='text-lg mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <img src={img2} alt="placeholder" />
                </div>

                <div className="card flex justify-between rounded-md border shadow-xl mx-32 mt-20 hover:scale-105 transition cursor-default">
                    <div className='p-10'>
                        <h1 className='text-5xl'>Sell Cars</h1>
                        <p className='text-lg mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <img src={img3} alt="placeholder" />
                </div>
            </div>

            <div className="footer flex justify-around mt-20 border p-10 items-center bg-[#282A3F]">
                <div className="logo text-6xl text-white font-semibold">Logo</div>
                <img src={footer} alt="placeholder" />
            </div>
        </div>
    )
}