const Projects = () => {
  return (
    <div className="container">
      <div class="card">
        <h2 className="card-h2">My Projects</h2>

        <div style={{ textAlign: "center" }}>
          <h2>e-commerce / front-end : react / back-end : laravel</h2>
        </div>

        <h4>admin account : admin@gmail.com / password : 88888888</h4>
        <h4>
          manger account : products-manger@gmail.com / password : 88888888
        </h4>
      </div>

      <div className="items">
        <p>source code and more projects in</p>

        <a href="https://github.com/SalmanSakor" target="_blank">
          <div className="btn">my github</div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
