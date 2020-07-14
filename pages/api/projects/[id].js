import {projects} from "../../../API/projects"

export default function personHandler({ query: { id } }, res) {
  const filtered = projects.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with: ${id} not found.` })
  }
}