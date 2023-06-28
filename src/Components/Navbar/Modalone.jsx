import image from '../../assets/skills/project1.jpg'
const Modalone = () => {
    return (
        <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
                <div className="flex flex-col justify-center items-center">
                    <img className='w-64 h-42 rounded-md' src={image} alt="" />
                    <h2 className='text-2xl font-bold text-center py-4'>Sporting Star</h2>
                    <p className="text-xl text-justify">A full stack sports academy website for students and instructors where instructors can post classes and students can enroll. </p>
                    <ul className='pl-6 mt-6 list-disc text-justify'>
                        <li>A complete website using React, Tailwind CSS, Express js and MongoDB </li>
                        <li>Role based functionality and dashboard and autorization using JWT</li>
                        <li>CRUD implementation and payment method implementation using stripe.js</li>
                    </ul>

                    <p className='mt-6'>HTML || CSS || TAILWIND || MONGODB || NODEJS || EPPRESS.JS || FIREBASE || STRIPE.JS</p>
                    <div className="flex justify-center space-x-4 py-8">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            <a href='https://github.com/kheyakheya/summer-camp-client-private' >View Client</a>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-kheyakheya' >View Server</a>
                        </button>


                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default Modalone;