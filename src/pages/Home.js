import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  const url = "https://api.brawlstars.com/v1/players/%23909lu288/battlelog";
  let options = {
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjIyM2M2NDBmLWJjOGEtNGIyOC05MDQwLWI5YTk3NGJiYjg2OSIsImlhdCI6MTY0OTc3OTExNywic3ViIjoiZGV2ZWxvcGVyL2ZhYWU1MGVkLWMwODAtMDZlZC1jMGE5LTFlMDAwODQ4NjAxZSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDkuMzcuNjkuMzIiXSwidHlwZSI6ImNsaWVudCJ9XX0.0m-FjPInZnO14zBoZWTUGiNFDLB64raxexIi2OkS7bIm_CNxKn0RCG3fKDijvD0xlvmtcedGlPUW3pFnT44tFg",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  )
}

export default Home
