function Home({ bio }) {
  return (
    <div>
      <h1>Home</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{bio.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{bio.age}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{bio.email}</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>{bio.education}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
