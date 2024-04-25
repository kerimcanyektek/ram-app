// React
import { useContext } from 'react'

// Context
import { FavoriteContext } from '../../context/CharContext'

// Libs
import { AiFillStar } from 'react-icons/ai'

// Styles
import { FavoritesListButton } from '../../styles/components/FavoritesButton'

export function FavoritesButton() {
  // Context
  const { favoritesChar } = useContext(FavoriteContext)

  // Constants
  const totalCharsInTheFavorites = favoritesChar.length

  return (
    <FavoritesListButton href="/favorites">
      <AiFillStar />
      {totalCharsInTheFavorites > 0 && <span>{totalCharsInTheFavorites}</span>}
    </FavoritesListButton>
  )
}
