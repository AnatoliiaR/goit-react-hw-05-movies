import { fetchTrending } from '../../services/api';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { results } = await fetchTrending();
        setItems(results);
      } catch (error) {}
    };
    fetchTrend();
  }, []);

  return <MovieList results={items} />;
};

export default HomePage;
