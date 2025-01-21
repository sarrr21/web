import PhotoGrid from "../Components/post";
import ProfileHeader from "../Components/profile-header";
import ProfileTabs from "../Components/profile-tabs";
import Photo from "../Components/repost";



export default function ProfilePage() {
  return (
    <main className="container max-w-5xl mx-auto px-4 py-8">
      <ProfileHeader />
      <ProfileTabs />
    </main>
  )
}

