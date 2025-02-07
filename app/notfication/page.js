"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function NotificationsPage() {
  const notifications = [
    // New notifications
    { id: 1, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true , image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    { id: 2, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 3, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: true , image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    // Earlier notifications
    { id: 4, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false,  image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 5, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 6, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
    { id: 7, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__"},
    { id: 8, user: "Bessie Cooper", action: "start following you.", timeAgo: "10", isNew: false, image:"https://s3-alpha-sig.figma.com/img/8cf0/6edb/3b87accefaf94003ebee0d072b3fead8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uCz-iyZHvSboRlJdxNN4pfrEcWIh~iB4t0cVUJzmFnx7Etdj9pk6IDd8IYzVMt53Wmz-itK-vvWp70fhEkf59lcFyI3nYu5H1Jo72j7RCWSakuJBSYDSGmDtQVSjjLhKsowusy2LPkzmwKXud7hFVIUqx6-DLRxWgoQtW-cbF50FvmeW3gbHTZmbGJxv9EMwiDhSUwhYz7~DVwfPzEx7dbl3C0CbejQiFnMgfxghXXgyY3RgrNQx7uRsI1XPgp7LQN4vIMGGpEqotPX~-0eoySl8U3QvouTOQlnIw~6kq5ZOlCo8ZlUdutipWl5EZtGEiCG1TviIpmTCqSCBSmJJOg__" },
  ]

  return (
    <div className="w-full  mx-auto  ">
      <ScrollArea className=" w-full rounded-md border">
        <div className="p-4">
          <div className="space-y-4">
            {/* New Notifications Section */}
            <div className="">
              <h2 className="text-xl font-semibold text-black mb-2">New</h2>
              {notifications
                .filter((notif) => notif.isNew)
                .map((notification) => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
            </div>

            {/* Earlier Notifications Section */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">Earlier</h2>
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
          <span className="font-medium">{user}</span> <span className="text-gray-500">{action}</span>
        </p>
        
        </div>
        
        <p className="text-xs text-gray-400">{timeAgo} minutes ago</p>
      </div>
    
  )
}

