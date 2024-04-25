// Next
import Image from 'next/image'

// React
import React, { useContext } from 'react'

// Libs
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// Context
import { FavoriteContext } from '../../context/CharContext'

// Types
import { Character } from '@/@types/Api'

// Styles 
import {
  CharContent,
  AddFavoriteButton,
} from '../../styles/components/CharCard'

interface CharCardProps {
  character: Character
}

export function CharCard({ character }: CharCardProps) {
  // Context
  const { addToFavorite, removeFavoriteChar, checkIfItemAlreadyExists } =
    useContext(FavoriteContext)

  // Functions
  const handleAddOrRemoveFavorite = (char: Character) => {
    if (checkIfItemAlreadyExists(char.id) > -1) {
      removeFavoriteChar(char.id)
    } else {
      addToFavorite(char)
    }
  }

  return (
    <CharContent
      href={`/character/${character.id}`}
      key={character.id}
    >
      <Image
        loader={() => character.image}
        src={character.image}
        unoptimized
        width={300}
        height={300}
        alt={character.name}
      />
      <span>{character.name}</span>
      <div>
        <AddFavoriteButton
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            handleAddOrRemoveFavorite(character)
          }}
        >
          {checkIfItemAlreadyExists(character.id) > -1 ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </AddFavoriteButton>
      </div>
    </CharContent>
  )
}
