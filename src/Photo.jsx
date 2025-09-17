export default function Photo({photo}){

  console.log(photo)
  const { strMeal, strMealThumb,  } = photo;

  return (
    <div className="bg-gray-200 shadow-[#da4a4a] border-1 border-blue-200 border-radius-10  p-3">
      
      <div className="flex justify-between items-center ">
        <h2>Food id: {photo.idMeal}</h2>
        <p>{photo.strMeal}</p>
      </div>
      <img className="w-[700px] h-[350px] object-cover" src={photo.strMealThumb} alt=""></img>
      <div className="flex justify-between items-center">
        <button>Order</button>
        <button>Review</button>
      </div>
    </div>
  );
} 