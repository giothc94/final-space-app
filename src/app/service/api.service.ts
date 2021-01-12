import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  getCharacters = () =>
    fetch("https://finalspaceapi.com/api/v0/character").then((response) =>
      response.json()
    );
  getCharacter = (id) =>
    fetch(`https://finalspaceapi.com/api/v0/character/${id}`).then((response) =>
      response.json()
    );
  getEpisodes = () =>
    fetch("https://finalspaceapi.com/api/v0/episode").then((response) =>
      response.json()
    );
  getEpisode = async (id) => {
    let response: Response = await fetch(
      `https://finalspaceapi.com/api/v0/episode/${id}`
    );
    let episode = await response.json();
    let fetchs: Array<Response> = episode.characters.map((c) => fetch(c));
    let responses = await Promise.all(fetchs);
    let responsesToJson = responses.map((r) => r.json());
    let characters = await Promise.all(responsesToJson);
    episode.characters = characters;
    return episode;
  };
  getLocations = () =>
    fetch("https://finalspaceapi.com/api/v0/location").then((response) =>
      response.json()
    );

  getLocation = async (id) => {
    let response: Response = await fetch(
      `https://finalspaceapi.com/api/v0/location/${id}`
    );
    let location = await response.json();
    let fetchs: Array<Response> = location.notable_residents.map((c) =>
      fetch(c)
    );
    let responses = await Promise.all(fetchs);
    let responsesToJson = responses.map((r) => r.json());
    let characters = await Promise.all(responsesToJson);
    location.notable_residents = characters;
    return location;
  };

  getQuotes = () =>
  fetch("https://finalspaceapi.com/api/v0/quote").then((response) =>
    response.json()
  );
}
