import styled from 'styled-components';

export const ItemIcon = styled.div`
  background-image: url(${props => props.image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 250px;
  height: 250px;
  position: absolute;
	transition: all 500ms;
  transition-timing-function: cubic-bezier(.41,-0.94,.18,1.43);
        box-shadow: 0px 0px 0px rgba(0,0,0,0);
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: 300px;
`;

export const Button = styled.button`
    width: 0px;
    opacity: 0;
    overflow: hidden;
    display: block;
    margin:auto;
        box-shadow: 0px 0px 0px rgba(0,0,0,0);
	background-color: #305bad;

	border: 1px solid #0a0b42;
	color: #fff;
	font-family: verdana;
	height: 50px;

  	transition-timing-function: cubic-bezier(.41,-0.94,.18,1.43);
	transition: all 400ms;
	transition-delay: 500ms;
	transition-delay: ${props => props.delay + 500}ms;
`;

export const Container = styled.div`
	width: 100%;
	height: 0px;
	overflow: hidden;
	margin: auto;
	margin-top: 50px;
	transition: all 1000ms;
`;

export const Backdrop = styled.div`
	width: 100%;
	height: 0px;
	background: blue;
	transition: all 500ms;
	transition-delay: 300ms;
  position: absolute;
  background: #000;
  transition-timing-function: cubic-bezier(.41,-0.94,.18,1.43);
`;
