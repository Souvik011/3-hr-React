import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import CandyContext from "../Context/Candy-Context";
import axios from "axios";

const Navbar = () => {
  const CandyCtx = useContext(CandyContext);
  useEffect(() => {
    async function refresh() {
      let getRes = await axios.get(
        `https://crudcrud.com/api/9cc43f052e0e4ab7ada1c04c6dc40bbd/cart`
      );
      const getData = await getRes.data;
      if (getData.length > 0) {
        for (var i = 0; i < getData.length; i++) {
          let id = getData[i]._id;

          CandyCtx.addCandy(getData[i]);
          axios.delete(
            `https://crudcrud.com/api/9cc43f052e0e4ab7ada1c04c6dc40bbd/cart/${id}`
          );
        }
      }
    }
    refresh();
  }, []);
  const totalNumber = CandyCtx.Candy.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "black", height: "25px" }}>
        <Button>
          Cart{" "}
          <span
            style={{
              cursor: "pointer",
              float: "right",
              display: "flex",
              justifyContent: "space-around",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {totalNumber}
          </span>
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Navbar;
