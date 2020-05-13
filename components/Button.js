import React, { Component } from 'react';
const Button =({buttonDisplayName, clickHandler}) => (
	<button onClick={clickHandler}>{buttonDisplayName}</button>
);
export default Button;