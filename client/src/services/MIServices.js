const baseURL = 'http://localhost:3000/api/mi/'

export default {

  putMi(payload){
    return fetch(baseURL, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
