// src/routes/home/index.js

import { h } from 'preact';
import { route } from 'preact-router';
import style from './style.css';

const Home = () => {
  return (
    <div class={style.home}>
      <h1>Welcome to PartPile Inventory Solution (PPIS)</h1>
      <p>PartPile is a sleek inventory management system tailored for computer workshops. It focuses on a user-friendly, Instagram-style interface for easy viewing and managing of computer parts inventory.</p>

<h2>Product Features</h2>
<ul>
	<li>User Authentication: Secure login with email/password via Firebase.</li>
	<li>Responsive UI: View and manage inventory seamlessly across devices, built with Preact and TailwindCSS.</li>
	<li>Interactive Inventory Management: Scroll through a grid of items and manage your inventory with a headless CMS backend (coming soon).</li>
</ul>
  
  
    </div>
  );
};

export default Home;
