import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <>
      <h1 className='py-3 text-warning text-center'>Our services Category</h1>
      <div className='service-container px-4 m-0' id="services">
        {
          services?.map(service => <Service key={service?.id} service={service}></Service>)
        }
      </div>
    </>
  );
};

export default Services;