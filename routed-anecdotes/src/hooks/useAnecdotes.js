import { useEffect, useState } from 'react'
import anecdoteService from '../services/anecdotes'

const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([])

  useEffect(() => {
    anecdoteService.getAll().then(setAnecdotes)
  }, [])

  const addAnecdote = async (anecdote) => {
    const savedAnecdote = await anecdoteService.createNew(anecdote)
    setAnecdotes((current) => current.concat(savedAnecdote))
  }

  const deleteAnecdote = async (id) => {
    await anecdoteService.remove(id)
    setAnecdotes((current) => current.filter((anecdote) => anecdote.id !== id))
  }

  return { anecdotes, addAnecdote, deleteAnecdote }
}

export { useAnecdotes }
