'use client'

import { useState } from 'react'
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Share2, ChevronDown, ChevronUp,  MoreHorizontal, MapPin, Send  } from 'lucide-react'

// Helper component for comments and replies
const CommentItem = ({ comment, level = 0, onReply }) => {
  const [showReply, setShowReply] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [showReplies, setShowReplies] = useState(false)

  const handleReply = () => {
    onReply(comment.id, replyText)
    setReplyText('')
    setShowReply(false)
  }

  return (
    <div className={`flex space-x-2 ${level > 0 ? 'ml-8' : ''}`}>
      <Avatar className="h-6 w-6 flex-shrink-0">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-xs">
          <span className="font-semibold">{comment.author}</span>
          <span className="text-muted-foreground ml-2">{comment.time}</span>
        </p>
        <p className="text-xs">{comment.text}</p>
        <div className="flex items-center space-x-3 mt-1">
          <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground text-xs">
          <Heart className="h-4 w-4 " />
            <span>Like</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-auto p-0 text-muted-foreground text-xs"
            onClick={() => setShowReply(!showReply)}
          >
            <MessageCircle className="h-4 w-4 " />
           <span>Reply</span> 
          </Button>
          <MoreHorizontal />
        </div>
        {showReply && (
          <div className="mt-2 flex items-center space-x-2">
            <Input 
              className="flex-1 text-xs" 
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <Button size="sm" onClick={handleReply}>Reply</Button>
          </div>
        )}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-auto p-0 text-muted-foreground text-xs flex items-center"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? <ChevronUp className="h-3 w-3 mr-1" /> : <ChevronDown className="h-3 w-3 mr-1" />}
              {showReplies ? "Hide" : "View"} {comment.replies.length} {comment.replies.length === 1 ? "reply" : "replies"}
            </Button>
            {showReplies && (
              <div className="mt-2 space-y-2">
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} level={level + 1} onReply={onReply} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SocialPost() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      time: "2 mins ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: []
    },
    {
      id: 2,
      author: "Johanna Doette",
      time: "21 mins ago",
      text: "Tempor incididunt ut labore et dolore magna aliqua.",
      replies: []
    },
    {
      id: 3,
      author: "Jane Doey",
      time: "24 mins ago",
      text: "Lorem ipsum dolor sit amet.",
      replies: []
    }
  ])
  const [newComment, setNewComment] = useState('')

  const addComment = (text) => {
    const newCommentObj = {
      id: comments.length + 1,
      author: "You",
      time: "Just now",
      text: text,
      replies: []
    }
    setComments([...comments, newCommentObj])
    setNewComment('')
  }

  const addReply = (commentId, replyText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: comment.replies.length + 1,
              author: "You",
              time: "Just now",
              text: replyText,
              replies: []
            }
          ]
        }
      }
      return comment
    })
    setComments(updatedComments)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden mt-16">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <Image
            src="/feed1.png"
            alt="Person"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex  flex-col bg-white p-4">
        
        <div className='flex justify-between'>
          <div className="flex items-center  space-x-2 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>KN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">Kronx News</p>
              <p className="text-xs text-muted-foreground">2 mins ago </p>
            </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex space-x-2'>
                <MapPin className='text-gray-400 mt-1' size={16} />
              <h1 className='text-md text-muted-foreground'>Seattle</h1>
              </div>
              
               <MoreHorizontal className='mt-1 ' size={16} />
            </div>
            
          </div>

          <p className="text-sm mb-4">Federal Ways sees 11% drop in overall crime as drug arrests surge by more than 402%</p>

          <div className="flex items-center justify-between border-t border-b p-4  mb-4">
            <div className='flex space-x-4'>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Heart className="h-4 w-4 mr-1" />
              <span className="text-xs">23</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-xs">23</span>
            </Button>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto ">
          <img src="./share.png" className="h-4 w-4" />
        </Button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} onReply={addReply} />
            ))}
          </div>

          <div className="flex items-center space-x-2  pt-4">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex items-center space-x-2">
      <div className="flex items-center w-full relative">
        {/* Input with Send icon inside */}
        <Input
          className="flex-1 text-sm rounded-full pr-48 pl-6"
          placeholder="Share your thoughts here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && newComment.trim() !== '') {
              addComment(newComment);
            }
          }}
        />
        
        {/* Send icon inside the input field */}
        <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 p-1" />
        
        {/* Button to send the comment */}
        <Button
          size="xs"
          variant="ghost"
          onClick={() => newComment.trim() !== '' && addComment(newComment)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
        />
      </div>
    </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

