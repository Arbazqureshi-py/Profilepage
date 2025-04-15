import React from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden w-full p-8">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-4">
          <img
            className="h-48 w-48 object-cover rounded-full border-2 border-gray-200"
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="Profile"
          />
        </div>
        
        {/* Profile Content */}
        <div className="text-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">PROFILE</div>
          <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">Arbaz</h1>
          <p className="mt-4 text-gray-600">
            Web developer passionate about creating responsive, user-friendly applications.
            Always learning and exploring new technologies.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">My Hobbies</h3>
            <ul className="mt-3 list-disc pl-8 text-left inline-block">
              <li className="mb-1">Cricket</li>
              <li className="mb-1">Playing with Code</li>
              <li className="mb-1">Traveling</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-900"><a href={`${process.env.PUBLIC_URL}/webDevResume.pdf`} alt="Resume" target='_blank'>Resume</a></h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
