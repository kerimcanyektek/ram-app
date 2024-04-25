// Next
import Image from 'next/image'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

// React
import { useContext } from 'react'

// Context
import { FavoriteContext } from '../../context/CharContext'

// Libs
import axios from 'axios'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

// Types
import { Character } from '@/@types/Api'

// Const
import { API_URL } from '../../pages'

// Styles
import {
  CharacterContainer,
  HeaderContainer,
  GoBack,
  AddFavoriteButton,
  Name,
  Details,
} from './style'

interface Props {
  character: Character
}

export default function CharacterPage({ character }: Props) {
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
    <>
      <Head>
        <title>Rick and Morty - {character.name}</title>
      </Head>
      <CharacterContainer>
        <HeaderContainer>
          <GoBack href="/">
            <MdOutlineArrowBackIosNew /> Geri
          </GoBack>

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
        </HeaderContainer>
        <Image
          loader={() => character.image}
          src={character.image}
          unoptimized
          width={300}
          height={300}
          alt={character.name}
        />
        <Name>{character.name}</Name>

        {character.type && (
          <Details>
            <strong>Tipo</strong>
            <span>{character.type}</span>
          </Details>
        )}

        {character.origin.name && (
          <Details>
            <strong>Origin</strong>
            <span>{character.origin.name}</span>
          </Details>
        )}

        {character.gender && (
          <Details>
            <strong>Gender</strong>
            <span>{character.gender}</span>
          </Details>
        )}

        {character.status && (
          <Details>
            <strong>Status</strong>
            <span>{character.status}</span>
          </Details>
        )}

        {character.species && (
          <Details>
            <strong>Specie</strong>
            <span>{character.species}</span>
          </Details>
        )}
      </CharacterContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const characterId = params?.id

  const character = await axios
    .get<Character>(`${API_URL}/${characterId}`)
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      return null
    })

  if (!character) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      character,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}