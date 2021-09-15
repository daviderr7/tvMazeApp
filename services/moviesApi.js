import { BASE_URL } from "../constants";

const getAllShows = async (page, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/shows?page=${page}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const getShowByName = async (name, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/search/shows?q=${name}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getShowsByActor = async (actorId, signal) => {
  try {
    let response = await fetch(
      `${BASE_URL}/people/${actorId}/castcredits?embed=show`,
      {
        method: "GET",
        signal: signal,
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getShowById = async (showId, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/shows/${showId}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getSeasons = async (showId, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/shows/${showId}/seasons`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getEpisodes = async (seasonId, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/seasons/${seasonId}/episodes`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getEpisoById = async (episodeId, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/episodes/${episodeId}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getActorsByName = async (name, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/search/people?q=${name}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getActorById = async (actorId, signal) => {
  try {
    let response = await fetch(`${BASE_URL}/people/${actorId}`, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllShows,
  getShowByName,
  getActorsByName,
  getShowById,
  getShowsByActor,
  getActorById,
  getSeasons,
  getEpisodes,
  getEpisoById,
};
