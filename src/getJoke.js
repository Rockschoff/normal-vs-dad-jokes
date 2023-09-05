export default async function getJoke(props, setJoke) {
  setJoke("This is also a joke hahahaha");
  var ans=""
  var dadurl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
  var normieurl= "https://api.api-ninjas.com/v1/jokes?limit=1"
  var url = props.type=="dad_jokes"?dadurl : normieurl
  await fetch(url , {
    method : "GET",
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }).then((res)=>{return res.json()})
  .then((res)=>{ans=res[0].joke})
  .catch(error => console.log(error))

  setJoke(ans)

  return;
}
