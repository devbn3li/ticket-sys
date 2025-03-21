"use client";
import React, { useState } from "react";
import Image from "next/image";
import UploadAvatar from "./UploadAvatar";

export default function Home() {
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!avatar) {
      alert("Please upload an avatar!");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", avatar);

    console.log("Submitting form...");
    console.log("Avatar File:", avatar);
  };

  return (
    <div className="min-h-screen relative font-[var(--font-inconsolata)] overflow-auto">
      {/* Background Decorations (Fixed to prevent scrolling) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/pattern-lines.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="fixed -top-20 left-8 hidden sm:block">
        <Image
          src="/assets/images/pattern-circle.svg"
          alt="Circle Decoration"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="fixed top-[65%] left-[70%] -translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <Image
          src="/assets/images/pattern-circle.svg"
          alt="Circle Decoration"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="fixed top-16 right-0 hidden md:block">
        <Image
          src="/assets/images/pattern-squiggly-line-top.svg"
          alt="Squiggly Line"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="fixed bottom-0 left-0 hidden md:block">
        <Image
          src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
          alt="Squiggly Line Bottom"
          width={600}
          height={600}
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center min-h-screen w-full relative z-10 px-6 sm:px-8 lg:px-12 pb-20 overflow-auto">
        {/* Logo */}
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={150}
          height={150}
          priority
          className="mt-6 sm:mt-10"
        />

        {/* Title */}
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl max-sm:text-3xl text-white font-bold mt-12">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-white mt-4">
            Secure your spot at next year&apos;s biggest coding conference.
          </p>
        </div>

        {/* Upload Section */}
        <form
          className="mt-8 w-full max-w-md p-6 rounded-lg shadow-lg  max-h-[75vh]"
          onSubmit={handleSubmit}
        >
          <UploadAvatar onImageSelect={setAvatar} />

          {/* Full Name */}
          <div className="mt-4">
            <label htmlFor="full-name" className="text-white text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="John Doe"
              className="mt-2 p-2 border placeholder:text-gray-400 bg-[#282f3f69] border-gray-500 rounded-md w-full"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email" className="text-white text-sm sm:text-base">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="mt-2 p-2 border placeholder:text-gray-400 bg-[#282f3f69] border-gray-500 rounded-md w-full"
              required
            />
          </div>

          {/* Username */}
          <div className="mt-4">
            <label htmlFor="username" className="text-white text-sm sm:text-base">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="John Doe"
              className="mt-2 p-2 border placeholder:text-gray-400 bg-[#282f3f69] border-gray-500 rounded-md w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-[var(--orange)] w-full text-white px-4 py-2 rounded-md text-sm sm:text-base"
          >
            Generate my Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
