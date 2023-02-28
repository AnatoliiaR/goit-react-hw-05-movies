import Searchbar from 'components/Searchbar';
import React, { useState, useEffect } from 'react';
import { fetchByQuery } from '../../services/api';
import MovieList from 'components/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [items, setItem] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (search) {
      const fetchMovie = async () => {
        try {
          const data = await fetchByQuery(search, page);
          setItem(prevItems => [...prevItems, ...data.results]);
        } catch (error) {}
      };
      fetchMovie();
    }
  }, [search, page, setItem]);

  const onSearchMovie = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setItem([]);
  };

  return (
    <>
      <Searchbar onSubmit={onSearchMovie} search={search} />
      {items && <MovieList results={items} />}
    </>
  );
};

export default MoviePage;
