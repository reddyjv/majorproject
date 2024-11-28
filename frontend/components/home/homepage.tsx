import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Puzzle, Brain, FileSpreadsheet, ImageIcon, BarChart, Users, Award, Zap, Heart, Sparkles } from 'lucide-react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
            Empowering Early Diagnosis of Autism Spectrum Disorder
          </h1>
          <p className="text-2xl text-purple-600 mb-10 max-w-3xl mx-auto">
            Harnessing the power of advanced machine learning to make a lasting difference in children&apos;s lives.
          </p>

          <Button className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Discover Our Approach
          </Button>
        </div>
        <div className="mt-16 relative">
          <Image
            src="https://t3.ftcdn.net/jpg/05/86/19/50/240_F_586195067_j0O9wz2qVytAhim36idl1YLsejC76mg8.jpg"
            alt="Children playing together"
            width={1000}
            height={400}
            className="rounded-2xl shadow-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 rounded-2xl"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">How Our Technology Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[ 
            { icon: <FileSpreadsheet className="h-16 w-16 text-pink-400" />, title: "Data Input", description: "Upload CSV files with demographic and behavioral data, or provide facial images for analysis." },
            { icon: <Brain className="h-16 w-16 text-pink-400" />, title: "AI Analysis", description: "Our advanced machine learning models process the data, identifying key indicators of ASD." },
            { icon: <BarChart className="h-16 w-16 text-pink-400" />, title: "Comprehensive Results", description: "Receive detailed insights and visualizations to support early diagnosis and intervention planning." },
          ].map((step, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-8">
                {step.icon}
                <h3 className="mt-6 text-2xl font-semibold text-blue-600">{step.title}</h3>
                <p className="mt-4 text-center text-purple-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Why Choose ASDDetect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[ 
            { icon: <Users className="h-12 w-12 text-pink-400" />, title: "Early Detection", description: "Identify signs of ASD earlier, enabling timely intervention and support for better outcomes." },
            { icon: <BarChart className="h-12 w-12 text-pink-400" />, title: "Accurate Insights", description: "Our models combine demographic, behavioral, and image data for high-precision analysis." },
            { icon: <Brain className="h-12 w-12 text-pink-400" />, title: "Continuous Learning", description: "Our AI models are constantly updated with the latest research findings in ASD." },
            { icon: <Award className="h-12 w-12 text-pink-400" />, title: "Expert-Backed", description: "Developed in collaboration with leading ASD researchers and clinicians." },
            { icon: <ImageIcon className="h-12 w-12 text-pink-400" />, title: "User-Friendly Interface", description: "Intuitive design suitable for both healthcare professionals and families." },
            { icon: <Puzzle className="h-12 w-12 text-pink-400" />, title: "Comprehensive Support", description: "Access to resources, guidance, and a community of ASD experts and families." },
          ].map((benefit, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-2xl font-semibold text-blue-600 ml-4">{benefit.title}</h3>
                </div>
                <p className="text-purple-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[ 
            { name: "Dr. Emily Chen", role: "Pediatric Neurologist", quote: "ASDDetect has revolutionized our early screening process. The accuracy and speed of the results have significantly improved our ability to provide timely interventions." },
            { name: "Michael and Sarah Thompson", role: "Parents", quote: "Thanks to ASDDetect, we were able to identify early signs of ASD in our son. The early diagnosis allowed us to start therapy much sooner, making a world of difference." },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-purple-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-purple-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-blue-600">{testimonial.name}</p>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-pink-50 rounded-3xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[ 
            { icon: <Zap className="h-12 w-12 text-pink-400" />, title: "Real-time Analysis", description: "Get instant results as you input data, allowing for quick decision-making and intervention planning." },
            { icon: <Heart className="h-12 w-12 text-pink-400" />, title: "Personalized Insights", description: "Receive tailored recommendations based on individual profiles and specific ASD indicators." },
            { icon: <Sparkles className="h-12 w-12 text-pink-400" />, title: "Multi-modal Integration", description: "Combine various data types including behavioral assessments, genetic markers, and neuroimaging for comprehensive analysis." },
            { icon: <Users className="h-12 w-12 text-pink-400" />, title: "Collaborative Features", description: "Share results and collaborate with experts, caregivers, and other professionals in a secure environment." },
            { icon: <BarChart className="h-12 w-12 text-pink-400" />, title: "Interactive Dashboards", description: "Visualize data through intuitive dashboards that highlight key trends and insights." },
            { icon: <ImageIcon className="h-12 w-12 text-pink-400" />, title: "Evidence-based Research", description: "Backed by the latest clinical research, ensuring your decisions are informed and reliable." },
          ].map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-blue-600 ml-4">{feature.title}</h3>
                </div>
                <p className="text-purple-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
