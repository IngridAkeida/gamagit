import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #d7A152;
`

export const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: #d7A152;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Img = styled.img`
  border-radius: 1.25rem;
  box-shadow: 2px 2px 10px 7px rgba(0, 0, 0, 0.2);
  width: 14.5rem;
`;

export const ListItem = styled.li`
  border-radius: .25rem;
  margin: .5rem 0;
  background-color: #d7A152;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
`;

export const ListItemCol = styled.div`
  

`;

export const ListItemParts = styled.p`
  color: #000;
  font-weight: bold;
  padding: 0 .5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #121416;
  padding: 0.5rem;
  color: #fff;
  text-decoration: none;
  border-radius: .25rem;
`;