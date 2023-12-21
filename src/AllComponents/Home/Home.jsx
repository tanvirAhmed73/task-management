import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome To "Task Management Website".
            </p>
        <Link to={'/login'}>
            <button className="btn btn-primary">Let’s Explore</button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
