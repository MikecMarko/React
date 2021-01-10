import React, { Component } from 'react'
 export const Book = ({title="No title provided", author="No author provided", pages=0, freeBookmark}) => {
    return(
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>pages: {pages}</p>
        <p>Free bookmark: {freeBookmark ? 'yes!' : 'No :(' }</p>
      </section>
    )
  }