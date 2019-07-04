const baseUrl = 'http://localhost:3000/api/maps/'

export default {

  getMaps(){
    return fetch(baseUrl)
    .then(res => res.json())
  }
}
