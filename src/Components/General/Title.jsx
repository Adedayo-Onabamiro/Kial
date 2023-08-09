import React from 'react';

export const Title = (props) => {
  const { link } = props;

  return (
    <section id='title' className="h-auto w-full bg-white bg-center relative z-10 bg-hero-pattern">
      <div className="w-10/12 mx-auto my-12 flex flex-col justify-center items-start space-y-4">
        <div className="text-center">
          <p>{link}</p>
        </div>
      </div>
    </section>
  );
};
