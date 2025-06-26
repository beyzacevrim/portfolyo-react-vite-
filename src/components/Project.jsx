import HospitalImg from '../assets/ProjectImages/Hospital.jpeg';
import SuperMarketImg from '../assets/ProjectImages/SuperMarket.jpeg';
import SchoolImg from '../assets/ProjectImages/School.jpeg';
import TrainImg from '../assets/ProjectImages/Train.jpeg';


export default function Project() {
    return (
        <>
            <div className='bg-indigo-800 max-w-full m-20'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10'>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            
                            <div className='md:flex '>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Supermarket Management System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 test-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eveniet delectus iusto!</p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={SuperMarketImg} alt='Project1' width={150} height={150}/>
                                </div>
                            </div>

                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            
                            <div className='md:flex '>
                                <div className='md:shrink-0 p-5'>
                                    <img src={HospitalImg} alt='Project1' width={150} height={150}/>
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Hospital Management System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 test-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eveniet delectus iusto!</p>
                                </div>
                                
                            </div>

                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            
                            <div className='md:flex '>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        School Management System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 test-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eveniet delectus iusto!</p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={SchoolImg} alt='Project1' width={150} height={150}/>
                                </div>
                            </div>

                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            
                            <div className='md:flex '>
                                <div className='md:shrink-0 p-5'>
                                    <img src={TrainImg} alt='Project1' width={150} height={150}/>
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Train Management System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 test-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eveniet delectus iusto!</p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 gap-4 p-5'>

                    </div>
                </div>
            </div>


        </>
    )
}
