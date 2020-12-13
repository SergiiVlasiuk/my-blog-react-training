import React from 'react';

const HomePage = () => (
  <>
    <h1>Hello, welcome to my blog!</h1>
    <p>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt
        laboriosam eveniet dolore, veritatis ab et ratione quisquam. Corrupti
        sint minima adipisci.
      </span>
      <span>
        Iure nihil maxime quos incidunt, natus nesciunt, facilis ea eligendi,
        numquam ut alias vitae placeat dolore eaque illo harum dolorum
        consequatur. Amet?
      </span>
      <span>
        Id tempore saepe, ex qui maiores, nam quis eum voluptatum velit nihil et
        quidem. Exercitationem nemo, impedit commodi quas debitis ut voluptatum!
      </span>
    </p>
  </>
);

export default HomePage;

  /* ================= alternatives
    ======================= 1 ========================
    <div>
    <h1>Hello, welcome to my blog!</h1>
    <p>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt
        laboriosam eveniet dolore, veritatis ab et ratione quisquam. Corrupti
        sint minima adipisci.
        </span>
    </p>
    </div>

    ======================= 2 ========================
    <React.Fragment>
    <h1>Hello, welcome to my blog!</h1>
    <p>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt
        laboriosam eveniet dolore, veritatis ab et ratione quisquam. Corrupti
        sint minima adipisci.
        </span>
    </p>
    </React.Fragment>

    */
