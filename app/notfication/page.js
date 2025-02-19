"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  const notifications = [
    { id: 1, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true , image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    { id: 2, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 3, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true , image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    { id: 4, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false,  image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 5, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 6, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 7, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    { id: 8, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between pt-12 pb-6 px-14">
        <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        
        
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="w-[400px] pl-9 rounded-full border border-input bg-background px-3 py-2"
            />
          </div>
          <div className='flex gap-4'> 
          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-0.5 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              1
            </span>
          </Button>
          <Button size="icon" variant="ghost" className="relative">
            <img src="./msg.png" className="h-8 w-8" />
            
          </Button>
          </div>
        </div>
      
    <div className="max-w-[992px]  mx-auto  ">
      <ScrollArea className=" w-full rounded-3xl py-12 px-4 border">
        <div className="p-4">
          <div className="space-y-4">
            {/* New Notifications Section */}
            <div className="">
              <h2 className="text-xl font-semibold text-black mb-2 pl-7">New</h2>
              {notifications
                .filter((notif) => notif.isNew)
                .map((notification) => (
                  <NotificationItem key={notification.id} {...notification}  className=""/>
                ))}
            </div>

            {/* Earlier Notifications Section */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-2 pl-7">Earlier</h2>
              {notifications
                .filter((notif) => !notif.isNew)
                .map((notification) => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
    </div>
  )

}

function NotificationItem({ user, action, timeAgo, image }) {
  return (
    
    <div className="flex justify-between border-b items-center gap-3 py-4 px-6 rounded-lg hover:bg-gray-50 ">
        <div className=" flex items-center gap-2  ">
      <Avatar>
        <AvatarImage
          src={image}
          alt={user}
        />
        <AvatarFallback>{user.charAt(0)}</AvatarFallback>
      </Avatar>
      <p className="text-sm">
          <span className="font-medium">{user}</span> <span className="text-[#4B5669]">{action}</span>
        </p>
        
        </div>
        
        <p className="text-xs text-[#4B5669]">{timeAgo} minutes ago</p>
      </div>
    
  )
}

