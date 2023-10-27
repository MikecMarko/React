import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Book} from './book'
import {Hiring} from './hiring'
import {NotHiring} from './nothiring'


class Library extends React.Component {
    static defaultProps={
      books: [
        {"title": "Tako Raqos", "author":"Jsy Khan", "Pages": 2333}
      ]
    }
    //we use state= {open:false} so we wouldnt have to use constructor
    state = {
      open: true,
      freeBookmark: true,
      hiring: true,
      data: [],
      loading:false
    }

    componentDidMount(){
      this.setState({loading: true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data,loading:false}))
    }
    componentDidUpdate(){
      console.log("The component just updated")
    }
    //function for state change (open closed)
    toggleOpenClosed=()=>{
      this.setState(prevstate =>({
        open: !prevstate.open
      }))
    }

    render() {
      console.log(this.state)
      const { books } = this.props
      return(
      <div>
              {this.state.hiring ? <Hiring/> : <NotHiring/>}
               {this.state.loading
               ? "loading"
              : <div>
                {this.state.data.map(product => {
                  return (
                    <div key={product.id}> 
                      <h3>Product of the week</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100}/>
                    </div>
                  )
                })}

                </div>}
              <h1>
                Library is {this.state.open ?  'open' : 'closed'}
              </h1>
              <button onClick={this.toggleOpenClosed}>Change</button>
             {books.map((book,i) => <Book 
               key={i}
               title={book.title}
               author={book.author} 
               pages={book.pages}
               freebookmark={this.state.freeBookmark}
                 />
             )}
            
      </div>
          )
           }
}
//if there is any other value supplied throw error

Library.propTypes={
  books: PropTypes.array
}

Book.propTypes={
  title:PropTypes.string,
  author:PropTypes.string,
  pages:PropTypes.number,
  freeBookmark:PropTypes.bool
}

export default Library