import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser( email: $email , password: $password) {
      token
      user {
        _id: ID
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser( username: $username, email: $email , password: $password) {
      token
      user {
        _id: ID
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook ( $input: BookData!) {
    saveBook( input: $input ) {
      user {
        _id: ID
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook ( $bookId: ID! ) {
    removeBook ( bookId: $bookId ) {
      user {
        _id: ID
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;