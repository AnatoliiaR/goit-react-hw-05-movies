import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '248abd3b176f582e9e747718a352534c',
  },
});

export const fetchTrending = async (page = 1) => {
  const time = 'week';
  const type = 'movie';
  const { data } = await instance.get(`/trending/${type}/${time}?page=${page}`);
  return data;
};

export const fetchById = async Id => {
  const type = 'movie';
  const { data } = await instance.get(`/${type}/${Id}`);
  return data;
};

export const fetchByQuery = async (q, page = 1) => {
  const type = 'movie';
  const { data } = await instance.get(
    `/search/${type}?page=${page}&query=${q}`
  );
  return data;
};

export const fetchCredit = async Id => {
  const type = 'movie';
  const { data } = await instance.get(`/${type}/${Id}/credits`);
  return data;
};

export const fetchReview = async Id => {
  const type = 'movie';
  const { data } = await instance.get(`/${type}/${Id}/reviews`);
  return data;
};
