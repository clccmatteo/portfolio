"use client";
import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">An error occured!</h1>
      <p className="text-center mb-8">
        The project you are looking for does not exist.
      </p>
      <div className="text-center">
        <Link
          href="/projects"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
