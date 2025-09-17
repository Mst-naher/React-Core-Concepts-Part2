import {use} from "react";
import Photo from "./Photo"

export default function Photos({ photosPromise }) {
 const photos = use(photosPromise);
 console.log(photos);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-green-600">Our Delicious Foods {photos.length}</h2>
      
      <p></p>

      <div className="card grid grid-cols-3 gap-5">
        {photos.meals.map((photo) => (
          <Photo key={photo.id} photo={photo}>

          </Photo>
        ))}
      </div>
    </div>
  );
}

