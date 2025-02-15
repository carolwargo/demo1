import { Link } from "react-router-dom";

import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";


const PlayerPosts = () => {
  return (
    <div className="posts" id="posts">


        {/**follow me */}
        <div className="w3-padding-top-32">
            <div className="row d-flex justify-content-center align-items-center text-center">
        
  
            <div className="col-sm-12 col-md-6 col-lg-6">
            <h3 className="fw-bold text-white">FOLLOW ME ON SOCIAL MEDIA:</h3>
                  
                </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
            <Link
                              className=" mx-1 my-0"
                              style={{ fontSize: "2.7rem" }}
                            >
                         <span className="icon-hover-zoom">
    <strong>
      <BsTwitterX />
    </strong>
  </span>
                            </Link>
                            <Link
                             className=" mx-1 my-0"
                              style={{ fontSize: "2.9rem" }}
                            >
                               <span className="icon-hover-zoom">
    <strong>
    <FaSquareInstagram />
    </strong>
  </span>
                           
                            </Link>
                            <Link
                         className=" mx-1 my-0"
                              style={{ fontSize: "2.9rem" }}
                            >
                                       <span className="icon-hover-zoom">
    <strong>
    <FaSnapchatSquare />
    </strong>
  </span>
                              
                            </Link>
                          </div>
                        </div>
                      </div>
         </div>
   
  );
};

export default PlayerPosts;

