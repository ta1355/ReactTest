import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

/**헤헤헤헤헤헤헤헤헤헤헤헤 신난다 */
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;