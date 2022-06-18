const API = "http://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzRmNmM0ZTFhNTMxOGJjNTg0NTViNzUzZGI1NzI4OCIsInN1YiI6IjYyMDNkN2UyZWEzN2UwMDA5NDUxZDQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3o8kpgAqjp4LhZvBhEAE2C9F68RIr5dVggFSmMSHyMs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
