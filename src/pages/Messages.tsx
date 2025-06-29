
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, Send, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [conversations] = useState([
    {
      id: 1,
      parentName: "Mrs. Davis",
      studentName: "Emma Davis",
      lastMessage: "Thank you for the update on Emma's progress!",
      timestamp: "2 hours ago",
      unread: 0,
      messages: [
        { id: 1, sender: "parent", content: "Hello Ms. Johnson, how is Emma doing in math?", timestamp: "Yesterday 3:30 PM" },
        { id: 2, sender: "teacher", content: "Hi Mrs. Davis! Emma is doing wonderfully. She scored 94% on her latest quiz and is really grasping fractions.", timestamp: "Yesterday 4:15 PM" },
        { id: 3, sender: "parent", content: "That's fantastic! She's been practicing at home.", timestamp: "Yesterday 4:20 PM" },
        { id: 4, sender: "teacher", content: "It shows! Keep up the great work. I'll send home some enrichment activities for her.", timestamp: "Yesterday 4:25 PM" },
        { id: 5, sender: "parent", content: "Thank you for the update on Emma's progress!", timestamp: "2 hours ago" }
      ]
    },
    {
      id: 2,
      parentName: "Mr. Wilson",
      studentName: "Jake Wilson",
      lastMessage: "Can we schedule a meeting to discuss Jake's homework habits?",
      timestamp: "1 day ago",
      unread: 2,
      messages: [
        { id: 1, sender: "parent", content: "Hi Ms. Johnson, I'm concerned about Jake's homework completion.", timestamp: "2 days ago" },
        { id: 2, sender: "teacher", content: "I've noticed he's been missing some assignments. Let's work together on this.", timestamp: "2 days ago" },
        { id: 3, sender: "parent", content: "Can we schedule a meeting to discuss Jake's homework habits?", timestamp: "1 day ago" }
      ]
    },
    {
      id: 3,
      parentName: "Mrs. Martinez",
      studentName: "Sofia Martinez",
      lastMessage: "Sofia loved the science project!",
      timestamp: "3 days ago",
      unread: 0,
      messages: [
        { id: 1, sender: "parent", content: "Sofia loved the science project!", timestamp: "3 days ago" },
        { id: 2, sender: "teacher", content: "She did an amazing job! Her volcano was very creative.", timestamp: "3 days ago" }
      ]
    }
  ]);

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/teacher" className="mr-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
              <Badge variant="secondary" className="ml-3">Teacher</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-900">{conversation.parentName}</div>
                        <div className="text-sm text-gray-500">Re: {conversation.studentName}</div>
                        <div className="text-sm text-gray-600 mt-1 truncate">
                          {conversation.lastMessage}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">{conversation.timestamp}</div>
                        {conversation.unread > 0 && (
                          <Badge className="mt-1 bg-red-500 text-white">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader>
              <CardTitle>
                {currentConversation?.parentName} - {currentConversation?.studentName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {currentConversation?.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'teacher'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <div className="text-sm">{message.content}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'teacher' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Messages;
