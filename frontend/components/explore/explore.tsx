"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Brain } from 'lucide-react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function ExplorePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
     <Navbar/>
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Explore ASD Detection</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Upload Image</h2>
            <div className="flex flex-col items-center">
              <label htmlFor="image-upload" className="cursor-pointer">
                {uploadedImage ? (
                  <Image src={uploadedImage} alt="Uploaded image" width={300} height={300} className="rounded-lg" />
                ) : (
                  <div className="w-64 h-64 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center">
                    <Upload className="h-12 w-12 text-blue-300" />
                  </div>
                )}
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                {uploadedImage ? 'Change Image' : 'Upload Image'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Autism Scores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'A1', label: 'Social Interaction' },
                { id: 'A2', label: 'Communication Skills' },
                { id: 'A3', label: 'Eye Contact' },
                { id: 'A4', label: 'Repetitive Behavior' },
                { id: 'A5', label: 'Sensory Sensitivity' },
                { id: 'A6', label: 'Emotional Understanding' },
                { id: 'A7', label: 'Flexibility' },
                { id: 'A8', label: 'Focus and Attention' },
                { id: 'A9', label: 'Peer Relationships' },
                { id: 'A10', label: 'Non-verbal Communication' },
              ].map((item) => (
                <div key={item.id}>
                  <Label htmlFor={item.id} className="text-blue-600">{item.label}</Label>
                  <Input
                    id={item.id}
                    placeholder="Enter score (0-10)"
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age" className="text-blue-600">Age (months)</Label>
                <Input id="age" placeholder="Enter age in months" className="mt-1" />
              </div>
              <div>
                <Label className="text-blue-600">Sex</Label>
                <RadioGroup defaultValue="male" className="flex space-x-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-blue-600">Jaundice</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-blue-600">Family Member with ASD</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Submit for Analysis
            <Brain className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>

      <Footer/>
      </div>
    )
  }

