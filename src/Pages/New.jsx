import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8888/v1/country/1', {
          headers: {
            'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjbXNfc3VwZXJfYWRtaW4iLCJpYXQiOjE3MTE3MDIxODAsImV4cCI6MTcxMTcwNTc4MH0.qm6N5q-l6rWBu0K82WxxaHdgRBw0D6OIcecqJiOd2HszzXQ9dXjp9d6bxN0MEYtfLHXHm6pjAg6Yn-5LbUmanQ'
      }
        });
        console.log(response.data)
        setData(response.data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Country Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
