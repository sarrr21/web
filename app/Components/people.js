import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function PeopleSuggestions() {
  const people = [
    {
      id: 1,
      name: "Olivia Anderson",  
      avatar: "https://s3-alpha-sig.figma.com/img/0893/6f9f/d50d0e13420e97ebce2d1f086b37031b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YMX4PTNdoU~8Pje19OM-vKd1fQaanQlyUN~Ty~l6qRmwLK0nqOYBTLn8xe6gMuhQ48T-mm7cUuQgOTp9216SYGLhdiX6LaYIw7KR7c6uvJ5ifD0L9NdDDu6iJ~~Ioquq0qEH31Oc4ipPzWQlkc5mBHeRo~byFO~VHb5nqoOkb2r5QdKHnjCnKcuYMMC8xmyGwJ5y71sBiZmE7Ng1yspTuCP8TDFPsQKEEUxdXdGV0CgAWMFqXQ2I3YOOyZ~wGYAJMN5JNGGo2ln7-ctMKotRh4lem9-VZEQWYe9coiYYp9ezd2EznYm4Ij6-p09Ie-RH396x9xhqjlPR~v394fkQwQ__",
    },
    {
      id: 2,
      name: "Thomas Baker",
      avatar: "https://s3-alpha-sig.figma.com/img/a5bd/d88b/6b93da15fa5596397a1d3ab2178cd12d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZIWR8DdJf9Q7DYt~qbwIfeLkS2OKSPkInNky1YZegvlzkSLmbxLLbHHAWpE3LLQR7yVwg~At0BqBQMxsRzk0LvXrya8~qd1D7sHH1Rx9AeUAYaTKgiTaO6lDgLcMqT0M0eLytImUlqFJFzcyRyjenkkdoLJFBcSAS9Y5cJ2g5zLiJvWHRTrW7N9H1PJxcL~CDNFBkh~uq1wWbYCIi1KVhvWB9uufEkARlzXAFOMhM6cjCKdEWrJxeoCpFK2dWZzYoj0DfJtSZFghOHk1NwxW3eKXbkctF-psWO8wX887PK1811EqjTCt5xpRDYZ6j-gQu-z3U-3QQTOHXf6g2r8E7w__",
    },
    {
      id: 3,
      name: "Lily Lee",
      avatar: "https://s3-alpha-sig.figma.com/img/a6fb/e766/3c1981b710a5bc9c80ef5d9414d3eec5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bd4xG0nffhaPAF2DFiEq~Zor~z-ejdrohUAAb5C9gg8co8szTmYtrw~49T8KHBy~fa4q2saTYkO0TiHqs9NqG0mJKwQ6CoNXIW15WQXklkDOPnWTITCpXU~7vzGs2YD0xIIXvF5n7O56sMyKyOOiGsAmwqW8iJpsIKiRUTU8qSBXyMSPbWyjDr5CIYL1Tr3IrZ-Y~MU8sfIbwSFsJioo7uEpdZynfOqPxdo-UcQI7gd8jyhab-4pIVPiCegOj2dWqeGU9hn5~Dh5s82ZMw51KOIUSKUyJFdTiq250sNxCiWpBKDGpFEaBhjwZntXnL6QA1rqIPxerV1POnsRshMUIQ__",
    },
    {
      id: 4,
      name: "Andrew Harris",
      avatar: "https://s3-alpha-sig.figma.com/img/7a83/f076/49b133245e4c1c3e208bf886245d4d61?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T6SNT3lIrf4ola5DYkYjJ~vh6DdfksJYScu506g96v2v~~Miyw2JBcWuo3R2nP8o4oqtj7Lv-UPCSrZnrIHWA3oCtiwTuA7XY8efa1zQwCxzuq8q~Jsg-ogkmBVry-9BxFWfkPGIxv~JzJtvneJxtXeLBgF9c2zqO2roczlMIa~ZYcY1KiaOWOA7GxFjuNibcNBWLZ4L0lWp~F0KPnfwfcRrd2llOP8FT0tifUr0p~Tng23quYKJNcEaw9G868GP0PShyDY8ZtEYIhtUBWHozpUOWCYexKHdg~S75Sg1uvY~c6OMI9iHy9CT6owmk9Qc~7Bxa5LtKp3e2EconRTC9Q__",
    },
  ]

  return (
    <div className=" w-[282px] bg-white  border rounded-3xl">
      
      <h2 className="text-lg font-semibold  p-6">People You May Know</h2>
      <div className="border-b mb-2" />
      <div className="space-y-6 px-6 py-8">
        {people.map((person) => (
          <div key={person.id} className="flex items-center justify-between  ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage
                  src={person.avatar}
                  alt={`${person.name}'s avatar`}
                  fill
                  className="object-cover"
                  />
                  </Avatar>
              </div>
              <span className="text-sm font-medium text-gray-900">{person.name}</span>
            </div>
            <button
              className="h-8 w-8 flex items-center justify-center  text-gray-500 hover:bg-gray-100"
              aria-label={`Connect with ${person.name}`}
            >
              <img src="./Plus.png" className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

