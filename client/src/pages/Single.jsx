import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/15049798/pexels-photo-15049798.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2711718/pexels-photo-2711718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia
          fugiat doloremque quaerat quas corrupti cumque esse totam vel, maiores
          fugit ipsam modi in atque architecto obcaecati porro eum repudiandae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          molestiae reiciendis eaque quasi cupiditate! Dolorum deleniti id,
          debitis obcaecati aut, et veniam ullam amet reiciendis delectus quis
          quod soluta sed!
          <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet, natus veniam aspernatur magnam quibusdam praesentium at corporis
          neque perferendis reiciendis possimus fugiat magni quas omnis soluta.
          Necessitatibus deserunt nulla neque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi eligendi illo reprehenderit ea,
          quis asperiores esse quae commodi accusantium ad corporis nesciunt
          aliquam cumque nobis voluptates iure, sit voluptatibus odio?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          in iure dolorum! Natus quia nulla quis corrupti voluptatem expedita
          dolor eius, iure alias iste, quibusdam soluta impedit unde molestias
          eligendi.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          molestias rerum quibusdam non at, nemo qui accusantium quo eum rem
          doloribus blanditiis asperiores unde quod praesentium omnis eos?
          Laboriosam, libero? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. At provident perferendis facere error excepturi, pariatur, modi
          autem aliquam dicta totam, repellat eum vitae. Officiis consectetur,
          fugit molestiae atque dolorum placeat?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
