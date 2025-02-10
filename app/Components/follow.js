import { MapPin } from "lucide-react";
import React from "react";

const people = [
  { name: "Olivia Anderson", location: "Seattle", followers: "2k", id: 1, image: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__" },
  { name: "Olivia Anderson", location: "Seattle", followers: "267", id: 2, image: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__"  },
  { name: "Olivia Anderson", location: "Seattle", followers: "98", id: 3, image: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__"  },
  { name: "Olivia Anderson", location: "Seattle", followers: "13k", id: 4, image: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__"  },
  { name: "Olivia Anderson", location: "Seattle", followers: "2k", id: 5, image: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__"  },
];

const PeopleYouMayKnow = () => {
  return (
    <div className="px-4 py-6 mt-16">
      <h2 className="text-xl font-semibold mb-4">People You May Know</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white border rounded-2xl p-4 text-center"
          >
            <img
              src={person.image} // Replace this with the actual image path
              alt={`${person.name}`}
              className="w-16 h-16 mx-auto rounded-full mb-3"
            />
            <h3 className="text-lg font-medium">{person.name}</h3>
            <p className="text-sm text-gray-500">
            <div className="flex items-center text-sm text-muted-foreground pl-8">
            <MapPin className="mr-1 h-4 w-4" />
            {person.location}
          </div>
              <span>{person.followers} followers</span>
            </p>
            <button className="mt-4 px-12 rounded-xl py-2 border-black border-2 text-black text-sm font-medium  ">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
