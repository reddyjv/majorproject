import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Zap, Heart, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from '../navbar/navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <section className="pt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Get in Touch</h2>
            <p className="text-lg text-blue-700 mb-6">
              We're here to answer any questions you may have about ASDDetect. Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-pink-400 mr-2" />
                <span className="text-blue-700">support@asddetect.com</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-pink-400 mr-2" />
                <span className="text-blue-700">1-800-ASD-HELP</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-pink-400 mr-2" />
                <span className="text-blue-700">123 AI Avenue, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <Card className="bg-white p-6">
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." className="w-full" rows={4} />
                </div>
                <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { question: "What makes ASDDetect different from other screening tools?", answer: "ASDDetect uses advanced AI and machine learning algorithms to analyze multiple data points, including behavioral patterns and facial expressions, providing a more comprehensive and accurate screening process." },
            { question: "Is ASDDetect a replacement for professional diagnosis?", answer: "No, ASDDetect is a screening tool designed to assist in early detection. It should be used in conjunction with professional medical evaluation for a formal diagnosis." },
            { question: "How accurate is ASDDetect?", answer: "While accuracy can vary, our latest models have shown over 90% accuracy in initial studies. However, results should always be confirmed by healthcare professionals." },
            { question: "How can I get started with ASDDetect?", answer: "You can sign up for an account on our website. Once registered, you'll be guided through the process of inputting data and receiving results." },
          ].map((faq, index) => (
            <Card key={index} className="bg-purple-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
                <p className="text-purple-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact