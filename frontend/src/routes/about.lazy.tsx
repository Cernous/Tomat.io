import { createLazyFileRoute } from '@tanstack/react-router'
import App.css

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
  <div className="p-2">Gorden Quach </div>
  <a href="https://github.com/forGOATten">My GitHub!</a>
</>
  )
}