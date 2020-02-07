import React , { useState, useEffect}from 'react';
import TreeMap from '../../dataViz/treeMap';

export default TreeMapSet => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/monument-all-dist/2000')
    .then(response => response.json())
    .then(result => setData(result))
  }, [])

  return (
    <div className="treeMapSet">
      <h2>Find where you can limit your impact</h2>
      <TreeMap data={data} />
    </div>
  )
}