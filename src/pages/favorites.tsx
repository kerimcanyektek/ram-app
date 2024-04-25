// Next
import Head from 'next/head'
import Image from 'next/image'

// React
import { useContext } from 'react'

// Context
import { FavoriteContext } from '../context/CharContext'

// Libs
import { MdOutlineArrowBackIosNew, MdDelete } from 'react-icons/md'

// Styles
import { FavoritesContainer, FavoritesList, FavoriteItem, FavoriteDetails, NoFavorites, GoBackButton, FavoriteRemoveButton } from '../styles/pages/Favorites'

export default function Favorites() {
  const { favoritesChar, removeFavoriteChar } = useContext(FavoriteContext);

  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <FavoritesContainer>
        <GoBackButton href="/">
          <MdOutlineArrowBackIosNew size={24} /> Back
        </GoBackButton>
        {favoritesChar.length > 0 ? (
          <FavoritesList>
            {favoritesChar.map((char) => (
              <FavoriteItem key={char.id}>
                <Image src={char.image} alt={char.name} width={120} height={120} unoptimized />
                <FavoriteDetails>
                  <h3>{char.name}</h3>
                  <FavoriteRemoveButton onClick={() => removeFavoriteChar(char.id)}>
                    <MdDelete size={24} />
                  </FavoriteRemoveButton>
                </FavoriteDetails>
              </FavoriteItem>
            ))}
          </FavoritesList>
        ) : (
          <NoFavorites>Your favorites list is empty.</NoFavorites>
        )}
      </FavoritesContainer>
    </>
  );
}
