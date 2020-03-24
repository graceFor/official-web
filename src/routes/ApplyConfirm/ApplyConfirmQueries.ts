import { gql } from 'apollo-boost';

export const VOLUNTEER = gql`
  query volunteer($sid: String!, $password: String!) {
    volunteer(sid: $sid, password: $password) {
      id
      name
      email
      password
      phone
      sid
      grade
      college
      major
      application {
        id
        motive
        spec
        activity
        experience
        wannaMakeDesc
        wannaMakeImageUrl
      }
    }
  }
`;

export const UPDATE_VOLUNTEER = gql`
  mutation updateVolunteer(
    $id: ID!
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $sid: String!
    $grade: String!
    $college: String!
    $major: String!
  ) {
    updateVolunteer(
      id: $id
      name: $name
      email: $email
      password: $password
      phone: $phone
      sid: $sid
      grade: $grade
      college: $college
      major: $major
    ) {
      id
    }
  }
`;
