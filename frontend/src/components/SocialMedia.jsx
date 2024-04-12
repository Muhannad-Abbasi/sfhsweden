import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.facebook.com/profile.php?id=61553978129354' target='_blank'><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/solidarity.for.humanity/' target='_blank'><BsInstagram /></a>
    </div>
    <div>
      <a href='https://www.tiktok.com/@solidarity.for.humanity' target='_blank'><FaTiktok /></a>
    </div>
  </div>
);

export default SocialMedia;
