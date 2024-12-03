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
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    A10: '',
    Age_Mons: '',
    Sex: 'male',
    Jaundice: '',
    Family_mem_with_ASD: '',
  })
  const [result, setResult] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleRadioChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedImage(file)
    }
  }

  const handleSubmit = async () => {
    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData])
    }
    if (uploadedImage) {
      data.append('image', uploadedImage)
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/compute', {
        method: 'POST',
        body: data,
      })

      if (!response.ok) {
        const errorData = await response.json();
        setResult(errorData.message || "Failed to connect to the server");
        return;
      }
      

      const resultData = await response.json()
      setResult(resultData.message)
    } catch (error) {
      console.error('Error submitting data:', error)
      setResult('An error occurred while processing the data.')
    }
  }

  const scoreDetails = [
    { id: "A1", placeholder: "Social Interaction" },
    { id: "A2", placeholder: "Responding to social cues" },
    { id: "A3", placeholder: "Maintains eye contact during interaction" },
    { id: "A4", placeholder: "Engages in repetitive actions or speech" },
    { id: "A5", placeholder: "Overreaction to sensory inputs (sound, light)" },
    { id: "A6", placeholder: "Understanding others' emotions" },
    { id: "A7", placeholder: "Resistance to change in routines or environment" },
    { id: "A8", placeholder: "Ability to focus on tasks or activities" },
    { id: "A9", placeholder: "Ability to form relationships with peers" },
    { id: "A10", placeholder: "Uses gestures or expressions to communicate" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Explore ASD Detection</h1>
        {result && <div className="text-center text-lg font-semibold text-green-600 mb-4">{result}</div>}

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Upload Image</h2>
            <div className="flex flex-col items-center">
              <label htmlFor="image-upload" className="cursor-pointer">
                {uploadedImage ? (
                  <Image src={URL.createObjectURL(uploadedImage)} alt="Uploaded image" width={300} height={300} className="rounded-lg" />
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Autism Indicators (Present = 0, Absent = 1)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scoreDetails.map(({ id, placeholder }) => (
                <div key={id}>
                <Label htmlFor={id} className="text-blue-600">{id.replace("A", "Indicator  ")}</Label>
                  <Input
                    id={id}
                    type="number"
                    placeholder={placeholder}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleInputChange}
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
                <Label htmlFor="Age_Mons" className="text-blue-600">Age (months)</Label>
                <Input
                  id="Age_Mons"
                  type="number"
                  placeholder="Enter age in months"
                  value={formData.Age_Mons}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-blue-600">Sex</Label>
                <RadioGroup
                    value={formData.Sex}
                    onValueChange={(value) => handleRadioChange('Sex', value)}
                    className="flex space-x-4 mt-1"
                >
              {['male', 'female'].map((value) => (
               <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem
                value={value}
                id={value}
                checked={formData.Sex === value}
                onChange={() => handleRadioChange('Sex', value)}
                />
              <Label htmlFor={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</Label>
              </div>
              ))}
            </RadioGroup>
              </div>
              <div>
                <Label className="text-blue-600">Jaundice</Label>
                <Select value={formData.Jaundice} onValueChange={(value) => handleRadioChange('Jaundice', value)}>
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
                <Select value={formData.Family_mem_with_ASD} onValueChange={(value) => handleRadioChange('Family_mem_with_ASD', value)}>
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
          <Button
            onClick={handleSubmit}
            className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Submit for Analysis
            <Brain className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
