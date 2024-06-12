import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 rounded-lg">
          <Card bg='bg-green-50'>
          <h2 className="text-2xl font-bold">Create new memories</h2>
            <p className="mt-2 mb-4">
              Begin your scrapbook journey and upload photos today!
            </p>
            <Link
              to="/create"
              className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-300"
            >
              Create
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards