'use client'

import Link from 'next/link'

export default function HomePage() {
  const routes = [
    { label: 'Login', path: '/auth/login' },
    { label: 'Register', path: '/auth/register' },
    { label: 'All Todos', path: '/todos/all-todos' },
    { label: 'Todo Detail (ID: 1)', path: '/todos/1' },
    { label: 'All Blogs', path: '/blogs/all-blogs' },
    { label: 'Blog Detail (Slug: sample-slug)', path: '/blogs/sample-slug' },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">JCWD Module 2 UI Boilerplate</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Choose a page to navigate:
        </p>

        <div className="flex flex-col gap-3">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-all duration-200"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
