// React
import { createContext, ReactNode, useEffect, useState } from 'react'

// Types
import { Character } from '@/@types/Api'

interface FavoriteContextData {
  favoritesChar: Character[]
  addToFavorite: (char: Character) => void
  checkIfItemAlreadyExists: (char: number) => number
  removeFavoriteChar: (charId: number) => void
}

interface FavoriteContextProviderProps {
  children: ReactNode
}

export const FavoriteContext = createContext({} as FavoriteContextData)

export function FavoriteContextProvider({
  children,
}: FavoriteContextProviderProps) {
  const [favoritesChar, setFavoritesChar] = useState<Character[]>([])

  function addToFavorite(character: Character) {
    const check = checkIfItemAlreadyExists(character.id)

    if (check < 0) {
      setFavoritesChar((state) => [...state, character])
      localStorage.setItem(
        'favoritesChar',
        JSON.stringify([...favoritesChar, character]),
      )
    }
  }

  function removeFavoriteChar(characterId: number) {
    setFavoritesChar((state) => {
      const updateFavorites = state.filter((char) => char.id !== characterId)
      localStorage.setItem('favoritesChar', JSON.stringify(updateFavorites))
      return updateFavorites
    })
  }

  function checkIfItemAlreadyExists(characterId: number) {
    return favoritesChar.findIndex((char) => char.id === characterId)
  }

  useEffect(() => {
    const storageFavorites = localStorage.getItem('favoritesChar')

    if (!storageFavorites) {
      return
    }

    setFavoritesChar(JSON.parse(storageFavorites))
  }, [])

  return (
    <FavoriteContext.Provider
      value={{
        favoritesChar,
        addToFavorite,
        checkIfItemAlreadyExists,
        removeFavoriteChar,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
