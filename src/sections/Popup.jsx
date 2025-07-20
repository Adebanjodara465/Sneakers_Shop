// This component displays a simple notification popup.


function Popup({message, onClose}){
  return (
    //an overlay on the screen
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
        {/* The actual popup box */}
       <div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-sm mx-auto transform transition-all duration-300 scale-100 opacity-100">
            <p className="text-gray-900 px-20px">{message}</p>
             <button onClick={onClose} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Close</button>
       </div>
       
    </div>
  );
}

export default Popup;
