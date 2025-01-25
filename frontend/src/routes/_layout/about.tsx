import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/_layout/about')({
  component: About,
})

function About() {
  return (
    <div>
      <div className="p-2">Gorden Quach </div>
      <a href="https://github.com/forGOATten">My GitHub!</a>
    </div>
  )
}
