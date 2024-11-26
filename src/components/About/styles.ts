import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Needed for tooltip positioning */

    img {
      width: 3.4rem;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    /* Hover: Scale and reduce opacity slightly */
    img:hover {
      transform: scale(1.2);
      opacity: 0.8;
    }

    /* Tooltip style */
    .tooltip {
      position: absolute;
      bottom: -2rem; /* Adjust this to position the tooltip */
      background-color: rgba(0, 0, 0, 0.75);
      color: #fff;
      padding: 0.3rem 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out;
      white-space: nowrap;
    }

    /* Show tooltip on hover */
    &:hover .tooltip {
      opacity: 1;
      visibility: visible;
    }
}


  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     height: auto;
     border-radius: 50%; /* Makes the image circular */
     filter: grayscale(0);
     transition: filter 0.5s; border-radius 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`
