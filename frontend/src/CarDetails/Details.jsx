import { Calendar, Droplets, Armchair, Gauge, Settings, Clock, User, Wrench } from 'lucide-react';

export default function CarDetails() {
    return (
        <div className="CarDetails border-2 rounded-md p-10">
            <div>
                <h1 className="text-4xl">Car <span className="text-orange-400">Details</span></h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12 space-y-5">
                <div className='flex items-center gap-2 text-lg'>
                    <Calendar className="w-8 h-8" />
                    <p>Registration year : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Clock className="w-8 h-8" />
                    <p>Year of Manufacture : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <User className="w-8 h-8" />
                    <p>Ownership : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Gauge className="w-8 h-8" />
                    <p>Kilometers driven : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Droplets className="w-8 h-8" />
                    <p>Fuel Type : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Settings className="w-8 h-8" />
                    <p>Transmission : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Wrench className="w-8 h-8" />
                    <p>Engine : </p>
                </div>
                <div className='flex items-center gap-2 text-lg'>
                    <Armchair className="w-8 h-8" />
                    <p>Number of seats : </p>
                </div>
            </div>
        </div>
    )
}