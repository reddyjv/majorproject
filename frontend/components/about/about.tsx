import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, GraduationCap } from 'lucide-react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8 text-center">About ASDDetect</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-lg text-blue-700 mb-6">
              At ASDDetect, we&apos;re committed to revolutionizing the early detection of Autism Spectrum Disorder. Our mission is to empower families and healthcare professionals with cutting-edge AI technology, enabling earlier interventions and better outcomes for children with ASD.
            </p>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">Learn More</Button>
          </div>
          <div className="relative">
            <Image
              src="https://imgs.search.brave.com/ySfAZA9bLwYuC67HHWetMXDWnkm_TW0kXTN2e4AE_d0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTY5/MDE2NjIvcGhvdG8v/Y2hpbGRyZW4tb3V0/ZG9vcnMtYmxvd2lu/Zy1idWJibGVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1F/YjZrN2l2MjhBT2hZ/cE42RDNNbmRYMGxw/OGxLRzc1Vm9qaFJ6/NTgxLWZBPQ"
              alt="Team working on ASD detection"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 rounded-lg"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Users className="h-12 w-12 text-pink-400" />, title: "Empathy", description: "We approach our work with deep understanding and compassion for families affected by ASD." },
            { icon: <Award className="h-12 w-12 text-pink-400" />, title: "Excellence", description: "We strive for the highest standards in our technology and service to make a real difference." },
            { icon: <GraduationCap className="h-12 w-12 text-pink-400" />, title: "Continuous Learning", description: "We&apos;re dedicated to ongoing research and improvement in ASD detection methods." },
          ].map((value, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">{value.title}</h3>
                <p className="text-purple-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </section>
      <Footer />
    </div>
  )
}
