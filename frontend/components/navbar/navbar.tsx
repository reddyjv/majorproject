"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Puzzle, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Puzzle className="h-10 w-10 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-blue-600">ASDDetect</span>
            </div>

            <div className="flex lg:hidden">
              <Button
                onClick={toggleMobileMenu}
                className="text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-blue-50">Home</a>
              <a href="/about" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-blue-50">About Us</a>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-blue-50">Contact</a>
             <a href="explore"> <Button className="bg-blue-500 hover:bg-blue-600 text-white transition duration-300">Get Started</Button></a>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md mt-20 p-4 space-y-4">
              <a href="/" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/about" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">About Us</a>
              <a href="/contact" className="block text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">Contact</a>
             <a href="explore"> <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300">Get Started</Button></a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;