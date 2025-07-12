import { useState } from 'react'
import { Heart, MessageCircle, Share, MapPin, Camera, Send } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface WeatherPost {
  id: string
  user: {
    name: string
    avatar: string
    location: string
  }
  content: string
  weather: {
    temperature: number
    condition: string
    location: string
  }
  image?: string
  timestamp: string
  likes: number
  comments: number
  isLiked: boolean
}

const mockPosts: WeatherPost[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      location: 'San Francisco, CA'
    },
    content: 'Perfect beach weather today! ☀️ Finally some sunshine after all that fog.',
    weather: {
      temperature: 75,
      condition: 'Sunny',
      location: 'Ocean Beach, SF'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
    likes: 24,
    comments: 5,
    isLiked: false
  },
  {
    id: '2',
    user: {
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      location: 'Austin, TX'
    },
    content: 'Crazy thunderstorm rolling in! You can feel the electricity in the air ⚡️',
    weather: {
      temperature: 82,
      condition: 'Thunderstorms',
      location: 'Downtown Austin'
    },
    timestamp: '4 hours ago',
    likes: 18,
    comments: 12,
    isLiked: true
  },
  {
    id: '3',
    user: {
      name: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      location: 'Denver, CO'
    },
    content: 'First snow of the season! ❄️ Time to dust off the ski gear.',
    weather: {
      temperature: 28,
      condition: 'Snow',
      location: 'Rocky Mountain National Park'
    },
    image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&h=400&fit=crop',
    timestamp: '6 hours ago',
    likes: 42,
    comments: 8,
    isLiked: false
  }
]

export default function SocialFeed() {
  const [posts, setPosts] = useState<WeatherPost[]>(mockPosts)
  const [newPost, setNewPost] = useState('')

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ))
  }

  const handleShare = () => {
    if (!newPost.trim()) return
    
    // Add new post (in real app, this would go to a server)
    const post: WeatherPost = {
      id: Date.now().toString(),
      user: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        location: 'San Francisco, CA'
      },
      content: newPost,
      weather: {
        temperature: 72,
        condition: 'Partly Cloudy',
        location: 'Your Location'
      },
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      isLiked: false
    }
    
    setPosts([post, ...posts])
    setNewPost('')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Create Post */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardHeader className="pb-4">
          <h2 className="text-lg font-semibold">Share Your Weather</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What's the weather like where you are?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-white/50 resize-none"
            rows={3}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Camera className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </Button>
            </div>
            <Button 
              onClick={handleShare}
              disabled={!newPost.trim()}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
            <CardContent className="p-6">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">{post.user.name}</div>
                  <div className="text-sm text-white/70 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {post.user.location} • {post.timestamp}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <p className="mb-4">{post.content}</p>

              {/* Weather Info */}
              <div className="bg-white/10 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-white/70" />
                    <span className="text-sm">{post.weather.location}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{post.weather.temperature}°</div>
                    <div className="text-sm text-white/70">{post.weather.condition}</div>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Weather post" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center space-x-6 pt-2 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`text-white/70 hover:text-white hover:bg-white/10 ${
                    post.isLiked ? 'text-red-400' : ''
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}