const baseUrl = 'http://localhost:3000/api/countries/'

export default {

  getCountries(){
    return fetch(baseUrl)
    .then(res => res.json())
  }
}
