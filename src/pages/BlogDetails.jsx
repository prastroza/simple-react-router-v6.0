import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const params = useParams();
    // console.log(params);

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>error...</p>;

    return (
        <>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
        <Link to="/blog">Volver</Link>
        </>
    );

}

export default BlogDetails;