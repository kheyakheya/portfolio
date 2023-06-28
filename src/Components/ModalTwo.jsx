import image from '../../src/assets/skills/project4.jpg'
const ModalTwo = () => {
    return (
        <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex flex-col justify-center items-center">
            <img className='w-64 h-42 rounded-md' src={image} alt="toyomoy" />
            <h2 className='text-2xl font-bold text-center py-4'>TOYOMOY</h2>
            <p className="text-xl text-justify">A multiple seller website where different sellers can post their product and see their added product and update them.</p>
            <ul className='pl-6 mt-6 list-disc text-justify'>
                <li>A complete website using React, Tailwind CSS and MongoDB. Daisy UI </li>
                <li>Role based functionality and dashboard and autorization using JWT</li>
                <li>CRUD implementation and payment method implementation using stripe.js</li>
            </ul>
           
            <p className='mt-6'>HTML || CSS || TAILWIND || MONGODB || NODEJS || EPPRESS.JS || FIREBASE</p>
            <div className="flex justify-center space-x-4 pt-4">
        <button    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      <a href='https://assignment-eleven-11d98.web.app/' >View Client</a> 
        </button>
        <button    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      <a href='https://assignment-eleven-11d98.web.app/' >View Server</a> 
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

export default ModalTwo;