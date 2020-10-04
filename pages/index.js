import axios from 'axios';

const Home = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {restaurants.map(restaurant => (
        <div key={restaurant.id}>
          <li >
            <h2>{restaurant.title}</h2>
            <p>{restaurant.description}</p>
          </li>

        </div>

      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://amh-strapi-test.herokuapp.com/restaurants');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;