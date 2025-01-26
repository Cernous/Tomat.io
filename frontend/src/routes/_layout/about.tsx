import { createFileRoute, Link } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/_layout/about')({
  component: About,
})

function About() {
  return (
    <div>
      <div className="p-2">Gorden Quach </div>
      <Link to={"https://github.com/forGOATten"}>My GitHub!</Link>
    </div>
  )
}
