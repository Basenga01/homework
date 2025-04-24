import { describe, test, expect, beforeEach } from 'vitest'
import { AffairType, deleteAffair } from '../Homework2.tsx'

let initialState: AffairType[]

beforeEach(() => {
  initialState = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
    { _id: 6, name: 'porn', priority: 'low' },
  ]
})

describe('deleteAffair tests', () => {
  test('should not delete anything when id does not exist', () => {
    const newState = deleteAffair(initialState, 0)
    expect(newState).toEqual(initialState)
  })

  test('should delete first item correctly', () => {
    const newState = deleteAffair(initialState, 1)
    expect(newState.length).toBe(5)
    expect(newState.find((a) => a._id === 1)).toBeUndefined()
    expect(newState[0]._id).toBe(2)
  })

  test('should delete middle item correctly', () => {
    const newState = deleteAffair(initialState, 3)
    expect(newState.length).toBe(5)
    expect(newState.find((a) => a._id === 3)).toBeUndefined()
    expect(newState[2]._id).toBe(4)
  })

  test('should delete last item correctly', () => {
    const newState = deleteAffair(initialState, 6)
    expect(newState.length).toBe(5)
    expect(newState.find((a) => a._id === 6)).toBeUndefined()
    expect(newState[newState.length - 1]._id).toBe(5)
  })

  test('should not modify original array', () => {
    const originalArray = [...initialState]
    deleteAffair(initialState, 1)
    expect(initialState).toEqual(originalArray)
  })
})
