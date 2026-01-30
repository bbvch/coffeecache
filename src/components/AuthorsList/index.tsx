import React from 'react';
import authorsData from '../../../blog/authors.json';
import Author from '@theme/Blog/Components/Author';

export default function AuthorsList(): React.JSX.Element {
  Object.keys(authorsData).map((key) => {
    authorsData[key].url = `/authors/${key}`;

    if (authorsData[key].socials?.linkedin) {
      authorsData[key].socials.linkedin = "https://www.linkedin.com/in/" + authorsData[key].socials?.linkedin;
    }
    if (authorsData[key].socials?.github) {
      authorsData[key].socials.github = "https://github.com/" + authorsData[key].socials?.github;
    }
  });

  return (
    <div className="authors-list">
      {Object.values(authorsData).map((author) => (
        <Author as="h2" author={author} count={1} />
      ))}
    </div>
  );
}