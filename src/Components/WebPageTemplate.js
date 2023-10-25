import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export default function WebPageTemplate() {
  return (
    <div>
      <Image
        src="https://img.freepik.com/free-photo/preparing-raw-barbeque-chicken-cooking_1220-2987.jpg?w=1060&t=st=1697956861~exp=1697957461~hmac=5668950f6a3bf69f696a1d2f574b8fcf53d21a382921fbfabc8d6e7bf855f32c"
        style={{ width: "100%", height: "80%" }}
      ></Image>

      <div>
        <h5 style={{padding:"2%"}}>Morning Food</h5>
        <div style={{padding:"4%"}}>
        <table class="table" style={{padding:"2%"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Dosa</td>
              <td>
                <img 
                src="https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?w=900&t=st=1697957247~exp=1697957847~hmac=6c9ae3f970644e1929222f3447b41e34f8ea8339326dc0c457791e5a4d3a801c"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                >
                </img>
                </td>
              <td>100</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Idly</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/freshly-cooked-meal-pork-rice-generated-by-ai_188544-38783.jpg?w=1060&t=st=1697957581~exp=1697958181~hmac=1a2256e9714e733f2d87c306c58195e71438a0ef3db74a2f1326e8b1457d7bf1"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>250</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Puri</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/fresh-indian-meal-wooden-crockery-plate-generated-by-ai_188544-25866.jpg?t=st=1697957749~exp=1697961349~hmac=f8fe620af8b355079155d0449c539da759f328c752fdee28d392a235f80a54e2&w=1060"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div>
        <h5 style={{padding:"2%"}}>Night Food</h5>
        <div style={{padding:"4%", backgroundColor:"rgb(33 208 253)"}}>
        <table class="table" style={{padding:"2%"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Chicken fried rice</td>
              <td>
                <img 
                src="https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?w=900&t=st=1697957247~exp=1697957847~hmac=6c9ae3f970644e1929222f3447b41e34f8ea8339326dc0c457791e5a4d3a801c"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                >
                </img>
                </td>
              <td>100</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>biriyani</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/freshly-cooked-meal-pork-rice-generated-by-ai_188544-38783.jpg?w=1060&t=st=1697957581~exp=1697958181~hmac=1a2256e9714e733f2d87c306c58195e71438a0ef3db74a2f1326e8b1457d7bf1"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>250</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Parota</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/fresh-indian-meal-wooden-crockery-plate-generated-by-ai_188544-25866.jpg?t=st=1697957749~exp=1697961349~hmac=f8fe620af8b355079155d0449c539da759f328c752fdee28d392a235f80a54e2&w=1060"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div>
        <h5 style={{padding:"2%"}}>Night Food</h5>
        <div style={{padding:"4%"}}>
        <table class="table" style={{padding:"2%"}}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Chicken fried rice</td>
              <td>
                <img 
                src="https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?w=900&t=st=1697957247~exp=1697957847~hmac=6c9ae3f970644e1929222f3447b41e34f8ea8339326dc0c457791e5a4d3a801c"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                >
                </img>
                </td>
              <td>100</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>biriyani</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/freshly-cooked-meal-pork-rice-generated-by-ai_188544-38783.jpg?w=1060&t=st=1697957581~exp=1697958181~hmac=1a2256e9714e733f2d87c306c58195e71438a0ef3db74a2f1326e8b1457d7bf1"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>250</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Parota</td>
              <td>
              <img 
              src="https://img.freepik.com/free-photo/fresh-indian-meal-wooden-crockery-plate-generated-by-ai_188544-25866.jpg?t=st=1697957749~exp=1697961349~hmac=f8fe620af8b355079155d0449c539da759f328c752fdee28d392a235f80a54e2&w=1060"
                style={{width:"10%", height:"10%", display: "flex", alignItems: "center"}}
                />
                </td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

    </div>
  );
}
