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

    // Simulate form submission
    console.log("Submitting form...");
    console.log("Avatar File:", avatar);

    // Example: Send formData to an API
    // fetch('/api/upload', { method: 'POST', body: formData })
  };

  return (
    <div className="min-h-screen relative font-[var(--font-inconsolata)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/pattern-lines.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Images */}
      <div className="absolute -top-20 left-8">
        <Image
          src="/assets/images/pattern-circle.svg"
          alt="Circle Decoration"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="absolute top-[65%] left-[70%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/assets/images/pattern-circle.svg"
          alt="Circle Decoration"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="absolute top-16 right-0">
        <Image
          src="/assets/images/pattern-squiggly-line-top.svg"
          alt="Squiggly Line"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
          alt="Squiggly Line Bottom"
          width={800}
          height={800}
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center h-screen w-full relative z-10 px-4">
        {/* Logo */}
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={200}
          height={200}
          priority
          className="mt-10"
        />

        {/* Title */}
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl text-white font-bold mt-12">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-white mt-4">
            Secure your spot at next year&apos;s biggest coding conference.
          </p>
        </div>

        {/* Upload Section */}
        <form className="mt-8 relative" onSubmit={handleSubmit}>
          <UploadAvatar onImageSelect={setAvatar} />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
